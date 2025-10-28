<template>
  <!-- 放大视频弹窗 -->
  <div
    class="w-[100vw] h-[100vh] fixed left-0 top-0 right-0 bottom-0 bg-black/60 flex items-center justify-center z-[999]">
    <div class="w-[170.125rem] h-[104.5rem] pl-[2.5rem] pt-[2.5rem] relative overflow-hidden bg-black bg">
      <div class="flex items-center justify-between pr-[2.5rem] mb-[2.5rem]">
        <div class="text1 flex items-center font-['light']">
          <div class="font-['semibold']">{{ isShowCCTVamplifyText?.title }}</div>
          <div class="ml-[2.625rem] font-['semibold']">{{ isShowCCTVamplifyText?.addressId }}</div>
        </div>
        <div class="cursor-pointer" @click="onClose">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" fill="none">
            <path
              d="M29.4016 3.50213L26.501 0.601562L15.0016 12.101L3.50213 0.601562L0.601562 3.50213L12.101 15.0016L0.601562 26.501L3.50213 29.4016L15.0016 17.9021L26.501 29.4016L29.4016 26.501L17.9021 15.0016L29.4016 3.50213Z"
              fill="white" />
          </svg>
        </div>
      </div>

      <div class="w-[165.1875rem] h-[94.375rem]">
        <div class="w-full flex items-center justify-between px-[3.75rem] absolute top-[10.875rem] z-[999]">
          <div
            class="w-[25.875rem] h-[5.4375rem] pl-[2.2575rem] pr-[3.18rem] pt-[1.2406rem] pb-[1.1969rem] bg-black/60 rounded-[0.8125rem] justify-start items-center inline-flex overflow-hidden">
            <div id="clockDisplay"
              class="text-white text-[2rem] font-normal font-['Roboto'] leading-[150%] tracking-wide">
            </div>
          </div>
          <div class="w-[5.4375rem] h-[5.4375rem]"></div>
        </div>
        <div class="text2 absolute bottom-[5rem] left-[6.75rem] z-[999] flex items-center gap-[1.8125rem]">
          <svg xmlns="http://www.w3.org/2000/svg" class="mb-[1rem]" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#FF5F49" />
          </svg>
          <span>LIVE 3D</span>
        </div>
        <div id="videoPage" class="w-[165.1875rem] h-[94.375rem]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, computed } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const { AlertStore } = inject("store")

const isCCTVamplifyUrl = computed(() => AlertStore.state.isCCTVamplifyUrl)
const isShowCCTVamplifyText = computed(() => AlertStore.state.isShowCCTVamplifyText)

let video = null
let renderer = null
let isPlaying = true

const cleanupPanorama = () => {
  isPlaying = false
  if (video) {
    video.pause()
    video.src = ''
    video.load()
    video = null
  }
  const container = document.getElementById('videoPage')
  if (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }
}

const onClose = () => {
  cleanupPanorama()
  AlertStore.methods.setCCTVVamplify(false, '', {})
}

function formatTime(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
}

function startRealTimeClock(elementId) {
  setInterval(() => {
    const now = new Date()
    const formattedTime = formatTime(now)
    const el = document.getElementById(elementId)
    if (el) el.textContent = formattedTime
  }, 1000)
}

onMounted(async () => {
  const container = document.getElementById("videoPage")
  const url = isCCTVamplifyUrl.value?.trim()
  if (!container || !url) return

  const width = container.clientWidth
  const height = container.clientHeight

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1100)
  camera.position.set(0, 0, 0.1)

  const geometry = new THREE.SphereGeometry(500, 64, 48)
  geometry.scale(-1, 1, 1)

  video = document.createElement('video')
  video.playsInline = true
  video.muted = true
  video.autoplay = true
  video.crossOrigin = 'anonymous'
  video.loop = true

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
    if (!isPlaying) return
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

  if (url.toLowerCase().endsWith('.mp4')) {
    video.src = url
    const p = video.play()
    if (p && typeof p.then === 'function') {
      p.catch(() => {
        window.addEventListener('click', () => video.play(), { once: true })
      })
    }
  } else {
    const pc = new RTCPeerConnection()
    pc.addTransceiver('video', { direction: 'recvonly' })
    pc.ontrack = (ev) => {
      if (!video.srcObject) {
        video.srcObject = ev.streams[0]
        video.play().catch(() => {
          window.addEventListener('click', () => video.play(), { once: true })
        })
      }
    }
    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)

    await new Promise(resolve => {
      if (pc.iceGatheringState === 'complete') return resolve()
      pc.addEventListener('icegatheringstatechange', function fn() {
        if (pc.iceGatheringState === 'complete') {
          pc.removeEventListener('icegatheringstatechange', fn)
          resolve()
        }
      })
    })

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/sdp' },
      body: pc.localDescription.sdp
    })

    if (resp.ok) {
      const answer = await resp.text()
      await pc.setRemoteDescription({ type: 'answer', sdp: answer })
    }
  }

  startRealTimeClock('clockDisplay')
})
</script>

<style scoped>
body {
  margin: 0;
}

.bg {
  border-radius: 1rem;
  border: 1px solid #283B44;
  background: rgba(0, 17, 26, 0.83);
}

img {
  max-width: 350vw !important;
}

.form,
.videoBox {
  width: 50vw;
  margin: 0 auto;
  margin-top: 39px;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text1 {
  color: #FFF;
  font-size: 2rem;
  font-weight: 400;
  line-height: 130%;
  /* 41.0.375rem*/
  letter-spacing: 0.25rem;
}
.text2{
  color:#FFF;
	font-family:Roboto;
	font-size:2.625rem;
	font-style:normal;
	font-weight:700;
	line-height:130%;
	/* 54.0.375rem*/
letter-spacing:1.1.625rem;
}

.videoPageHidden {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

#videoPage {
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 999; */
  /* background-color: rgba(0, 0, 0, 0.7); */
  transition: 0.3s;
  width: 100%;
  height: 94.375rem !important;

  opacity: 1;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hover {
  opacity: 1;
  cursor: pointer;
  transition: 0.3s;
}

.hover:hover {
  opacity: 0.4;
  transition: 0.3s;
}

.panorama-dimensions {
  width: 100% !important;
  height: 94.375rem !important;

}
.pnlm-dragfix{
  height: 94.375rem !important;
}
.panorama2-dimensions{
  height: 94.375rem !important;
}
</style>