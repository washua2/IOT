<template>
  <div class="w-[137.75rem] h-[80.9375rem] box relative overflow-hidden animate-grow-in">
    <!-- 关闭按钮 -->
    <div
      class="w-[2.5rem] h-[2.5rem] absolute top-[3.1875rem] right-[9.6875rem] z-[99999] cursor-pointer"
      @click="handleClose"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none">
        <path
          d="M23.6296 20L37.2164 6.41328C37.4615 6.17649 37.6571 5.89324 37.7916 5.58007C37.9261 5.26689 37.9969 4.93006 37.9999 4.58923C38.0029 4.24839 37.9379 3.91038 37.8089 3.59492C37.6798 3.27945 37.4892 2.99285 37.2482 2.75183C37.0071 2.51082 36.7205 2.32022 36.4051 2.19115C36.0896 2.06208 35.7516 1.99714 35.4108 2.0001C35.0699 2.00306 34.7331 2.07387 34.4199 2.2084C34.1068 2.34293 33.8235 2.53848 33.5867 2.78365L20 16.3704L6.41328 2.78365C5.92915 2.31607 5.28074 2.05733 4.6077 2.06318C3.93466 2.06903 3.29085 2.33899 2.81492 2.81492C2.33899 3.29085 2.06903 3.93466 2.06318 4.6077C2.05733 5.28074 2.31607 5.92915 2.78365 6.41328L16.3704 20L2.78365 33.5867C2.53848 33.8235 2.34293 34.1068 2.2084 34.4199C2.07387 34.7331 2.00306 35.0699 2.0001 35.4108C1.99714 35.7516 2.06208 36.0896 2.19115 36.4051C2.32022 36.7205 2.51082 37.0071 2.75183 37.2482C2.99285 37.4892 3.27945 37.6798 3.59492 37.8089C3.91038 37.9379 4.24839 38.0029 4.58923 37.9999C4.93006 37.9969 5.26689 37.9261 5.58007 37.7916C5.89324 37.6571 6.17649 37.4615 6.41328 37.2164L20 23.6296L33.5867 37.2164C34.0708 37.6839 34.7193 37.9427 35.3923 37.9368C36.0653 37.931 36.7092 37.661 37.1851 37.1851C37.661 36.7092 37.931 36.0653 37.9368 35.3923C37.9427 34.7193 37.6839 34.0708 37.2164 33.5867L23.6296 20Z"
          fill="white"
        />
      </svg>
    </div>

    <!-- 加载动画 -->
    <div
      v-if="!imgLoaded"
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 z-[2]"
    >
      <div class="loader"></div>
    </div>

    <!-- 背景图片带动画 -->
    <div class="w-full h-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-[1]">
      <img
        v-if="imgLoaded"
        :src="L1"
        class="w-full h-full inline-block fade-in"
        alt="background"
        @load="handleImageLoad"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const { AlertStore } = inject('store')
const L1 = "/public/images/KASC_overall L1 202501013 4.png"
const L4 = "/public/images/KASC_overall_L4 202501013.png"

const imgLoaded = ref(false)

const handleImageLoad = () => {
  imgLoaded.value = true
}

const handleClose = () => {
  AlertStore.methods.setfloorPlan(false)
}
</script>

<style lang="scss" scoped>
.box {
  border-radius: 1.5rem;
  border: 0.125rem solid rgba(64, 64, 64, 0.50);
  background: rgba(0, 17, 26, 0.60);
  box-shadow:
    -1.25rem 4.25rem 1.25rem 0 rgba(0, 17, 26, 0.00),
    -0.8125rem 2.6875rem 1.125rem 0 rgba(0, 17, 26, 0.01),
    -0.4375rem 1.5rem 0.9375rem 0 rgba(0, 17, 26, 0.04),
    -0.1875rem 0.6875rem 0.6875rem 0 rgba(0, 17, 26, 0.07),
    -0.0625rem 0.1875rem 0.375rem 0 rgba(0, 17, 26, 0.08);
  backdrop-filter: blur(0.3125rem);
}

/* 图片淡入动画 */
.fade-in {
  opacity: 0;
  animation: fadeInScale 1s ease forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 加载动画样式 */
.loader {
  border: 0.4rem solid rgba(255, 255, 255, 0.2);
  border-top: 0.4rem solid #ffffff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 进场动画 */
@keyframes grow-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-grow-in {
  animation: grow-in 0.8s ease-out forwards;
}
</style>
