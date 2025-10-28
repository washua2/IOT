<template>
  <div class="videoPage">
    <div :id="elmId" class="video-js"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps({
  elmId: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  }
})

const toastMessage = ref('')

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

onMounted(async () => {
  const container = document.getElementById(props.elmId)
  if (!container) {
    console.error('未找到容器：' + props.elmId)
    return
  }

  const width = container.clientWidth
  const height = container.clientHeight

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1100)
  camera.position.set(0, 0, 0.1)

  const geometry = new THREE.SphereGeometry(500, 64, 48)
  geometry.scale(-1, 1, 1)

  const video = document.createElement('video')
  video.playsInline = true
  video.muted = true
  video.autoplay = true
  video.crossOrigin = 'anonymous'
  video.preload="metadata"
  video.loop = true // ✅ 简单又有效：MP4 自动循环播放

  const texture = new THREE.VideoTexture(video)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.format = THREE.RGBFormat

  const material = new THREE.MeshBasicMaterial({ map: texture })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.rotateSpeed = 0.25
  controls.minPolarAngle = THREE.MathUtils.degToRad(5)
  controls.maxPolarAngle = THREE.MathUtils.degToRad(175)

  const renderLoop = () => {
    requestAnimationFrame(renderLoop)
    controls.update()
    renderer.render(scene, camera)
  }
  renderLoop()

  window.addEventListener('resize', () => {
    const w = container.clientWidth
    const h = container.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })

  async function startMp4(url) {
    video.src = url
    const p = video.play()
    if (p && typeof p.then === 'function') {
      p.catch(() => {
        showToast('MP4 autoplay 被阻止，点击页面播放')
        bindUserGesture(() => video.play())
      })
    }
  }

  async function startWhep(endpoint) {
    const pc = new RTCPeerConnection()
    pc.addTransceiver('video', { direction: 'recvonly' })

    pc.ontrack = (event) => {
      if (!video.srcObject) {
        video.srcObject = event.streams[0]
        video.play().catch(() => {
          showToast('WebRTC autoplay 被阻止，点击页面播放')
          bindUserGesture(() => video.play())
        })
      }
    }

    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)

    const waitIceComplete = () =>
      new Promise(resolve => {
        if (pc.iceGatheringState === 'complete') return resolve()
        const fn = () => {
          if (pc.iceGatheringState === 'complete') {
            pc.removeEventListener('icegatheringstatechange', fn)
            resolve()
          }
        }
        pc.addEventListener('icegatheringstatechange', fn)
      })

    await waitIceComplete()

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

  const url = props.videoUrl.trim()
  if (!url) {
    showToast('videoUrl 参数为空')
    return
  }

  try {
    if (isMp4(url)) {
      startMp4(url)
    } else {
      await startWhep(url)
    }
  } catch (err) {
    console.error(err)
    showToast('播放失败：' + String(err))
  }
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
