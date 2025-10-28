<template>
  <div class="videoPage">
    <div :id="elmId" class="video-js"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps({
  elmId: { type: String, required: true },
  videoUrl: { type: String, required: true },
  active:  { type: Boolean, default: true }, // ✅ 新增：由父组件控制是否活动
})

const toastMessage = ref('')

let renderer, scene, camera, controls
let geometry, material, mesh
let video, texture
let animationId = null

// WebRTC/WHEP 相关句柄
let pc = null
let remoteStream = null

function showToast(msg) {
  toastMessage.value = msg
  const el = document.getElementById('toast')
  if (el) {
    el.style.display = 'block'
    clearTimeout(window.__toastTimer)
    window.__toastTimer = setTimeout(() => (el.style.display = 'none'), 2000)
  }
}

function isMp4(url) {
  return url.toLowerCase().endsWith('.mp4')
}

function bindUserGesture(callback) {
  const handler = () => {
    callback?.()
    window.removeEventListener('click', handler)
    window.removeEventListener('touchstart', handler)
  }
  window.addEventListener('click', handler, { once: true })
  window.addEventListener('touchstart', handler, { once: true })
}

function startRenderLoop() {
  if (animationId != null) return
  const loop = () => {
    animationId = requestAnimationFrame(loop)
    controls?.update()
    renderer?.render(scene, camera)
  }
  loop()
}
function stopRenderLoop() {
  if (animationId != null) cancelAnimationFrame(animationId)
  animationId = null
}

async function initThree(container) {
  const width = container.clientWidth
  const height = container.clientHeight

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1100)
  camera.position.set(0, 0, 0.1)

  geometry = new THREE.SphereGeometry(500, 64, 48)
  geometry.scale(-1, 1, 1)

  video = document.createElement('video')
  video.playsInline = true
  video.muted = true
  video.autoplay = true
  video.crossOrigin = 'anonymous'
  video.preload = 'metadata'
  video.loop = isMp4(props.videoUrl) // 只有 MP4 才循环，WebRTC 不需要

  texture = new THREE.VideoTexture(video)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.format = THREE.RGBFormat

  material = new THREE.MeshBasicMaterial({ map: texture })
  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.rotateSpeed = 0.25
  controls.minPolarAngle = THREE.MathUtils.degToRad(5)
  controls.maxPolarAngle = THREE.MathUtils.degToRad(175)

  window.addEventListener('resize', onResize)
}

function onResize() {
  if (!renderer || !camera) return
  const container = renderer.domElement.parentElement
  if (!container) return
  const w = container.clientWidth || 640
  const h = container.clientHeight || 360
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

/* ----------------- 媒体初始化 ------------------ */
async function startMp4(url) {
  video.src = url
  const p = video.play()
  if (p?.catch) {
    p.catch(() => {
      showToast('MP4 autoplay 被阻止，点击页面播放')
      bindUserGesture(() => video.play())
    })
  }
}

async function startWhep(endpoint) {
  pc = new RTCPeerConnection()
  pc.addTransceiver('video', { direction: 'recvonly' })

  pc.ontrack = (event) => {
    if (!video.srcObject) {
      remoteStream = event.streams[0]
      video.srcObject = remoteStream
      video.play().catch(() => {
        showToast('WebRTC autoplay 被阻止，点击页面播放')
        bindUserGesture(() => video.play())
      })
    }
  }

  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)

  // 等 ICE 收集完成
  await new Promise((resolve) => {
    if (pc.iceGatheringState === 'complete') return resolve()
    const fn = () => {
      if (pc.iceGatheringState === 'complete') {
        pc.removeEventListener('icegatheringstatechange', fn)
        resolve()
      }
    }
    pc.addEventListener('icegatheringstatechange', fn)
  })

  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/sdp' },
    body: pc.localDescription.sdp
  })
  if (!resp.ok) {
    const errorText = await resp.text().catch(() => '')
    throw new Error(`WHEP 请求失败: ${resp.status} ${errorText}`)
  }
  const answer = await resp.text()
  await pc.setRemoteDescription({ type: 'answer', sdp: answer })
  showToast('WebRTC 播放成功')
}

/* ----------------- 活跃性控制（关键） ------------------ */
function pauseHeavyWork() {
  // 1) 停渲染
  stopRenderLoop()

  // 2) 停解码/拉流
  if (video) {
    // 对 MP4：暂停即可（保留缓冲）
    try { video.pause() } catch {}
  }
  if (remoteStream) {
    // 对 WebRTC：禁用 track（不关闭，保留会话，恢复更快）
    remoteStream.getTracks().forEach(t => (t.enabled = false))
  }
}

async function resumeHeavyWork() {
  // 1) 恢复渲染
  startRenderLoop()

  // 2) 恢复解码/拉流
  if (remoteStream) {
    remoteStream.getTracks().forEach(t => (t.enabled = true))
  }
  if (video) {
    try { await video.play() } catch {}
  }
}

/* ----------------- 生命周期 ------------------ */
onMounted(async () => {
  const container = document.getElementById(props.elmId)
  if (!container) {
    console.error('未找到容器：' + props.elmId)
    return
  }
  await initThree(container)

  try {
    const url = props.videoUrl?.trim()
    if (!url) {
      showToast('videoUrl 参数为空')
      return
    }
    if (isMp4(url)) {
      await startMp4(url)
    } else {
      await startWhep(url)
    }
  } catch (e) {
    console.error(e)
    showToast('播放失败：' + String(e))
  }

  // 根据初始 active 决定是否启动重活
  if (props.active) {
    startRenderLoop()
  } else {
    pauseHeavyWork()
  }
})

watch(() => props.active, (on) => {
  if (on) resumeHeavyWork()
  else    pauseHeavyWork()
})

onBeforeUnmount(() => {
  // 停渲染
  stopRenderLoop()
  window.removeEventListener('resize', onResize)

  // 释放 Three 资源
  try {
    mesh && scene?.remove(mesh)
    geometry?.dispose?.()
    material?.dispose?.()
    texture?.dispose?.()
    renderer?.dispose?.()
  } catch {}
  mesh = geometry = material = texture = null
  controls = null
  scene = camera = null

  // 释放媒体
  if (video) {
    try { video.pause() } catch {}
    video.srcObject = null
    video.removeAttribute('src')
    video.load?.()
    video = null
  }
  if (remoteStream) {
    // 只有在真正卸载时才 stop
    remoteStream.getTracks().forEach(t => t.stop())
    remoteStream = null
  }
  if (pc) {
    try { pc.close() } catch {}
    pc = null
  }

  // 移除 canvas
  if (renderer?.domElement?.parentElement) {
    renderer.domElement.parentElement.removeChild(renderer.domElement)
  }
  renderer = null
})
</script>

<style scoped>
.videoPage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-js {
  width: 100% !important;
  height: 100% !important;
  position: relative;
  display: block;
}
canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
#toast {
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.375rem 0.625rem;
  border-radius: 0.5rem;
  font: 0.75rem/1.2 -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
  display: none;
  z-index: 9999;
}
</style>
