<template>
  <div
    class="w-[54.0625rem] h-[9.4375rem] pt-[1.75rem] pl-[3.0625rem] pb-[1.625rem] box-border rounded-xl flex items-center"
    style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.7) 0%, rgba(0, 12, 17, 0.7) 100%);">
    <!-- 左侧旋转图标 -->
    <div class="">
      <div class="w-[5.75rem] h-[5.75rem]">
       <img class="w-full h-full" src="@/assets/operationalMatrix/iSpt.png"/>
      </div>
    </div>

    <!-- 加载状态内容 -->
    <div class="ml-[2.1875rem]">
      <!-- 状态文字 -->
      <div class="text-white text-4xl font-bold font-['Roboto'] leading-[2.925rem] tracking-wide">Initializing System
        Readiness Check…</div>

      <div class="flex items-center">
        <!-- 分段加载条 -->
        <div class="progress-bar flex-[0.99] mr-[1.5625rem]">
          <div v-for="(segment, index) in segments" :key="index" class="progress-bar-segment"
            :class="{ 'filled': progress > index }"></div>
        </div>
        <!-- 进度百分比 -->
        <div>
          <span class="text-white text-4xl font-bold font-['DS-Digital'] tracking-tight">{{ Math.floor(progress /
            segments.length * 100) }} </span><span
            class="text-white text-[1.75rem] font-bold font-['Roboto'] leading-9"> %</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, toRefs, watch } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
    default: 0 // 初始需要加载的资源数量
  }
})
const progress = ref(0)
const totalSegments = 50; // 分段总数
const segments = Array.from({ length: totalSegments }, (_, i) => i); // 分段数组
const interval = ref(null)
const progressMax=ref(0)
watch(() => props.count, (val) => {
  // 重置加载进度
  
  if(val==5){
    progressMax.value=50
  }else{
    progressMax.value=8.8*(val+1)
  }
  reload()

})

const reload = () => {
  clearInterval(interval.value);
  interval.value = null

  interval.value = setInterval(() => {
    if (progress.value < progressMax.value) {
      progress.value += 1;
    } else {
      clearInterval(interval); // 加载完成后停止
      interval.value = null
    }
  }, 100); // 控制加载速度
}
onMounted(()=>{
  progressMax.value=8
  reload()
})
</script>

<style scoped>
/* 主容器样式 */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.95);
  font-family: Arial, sans-serif;
  color: white;
}

/* 加载器整体布局 */
.loading-indicator {
  display: flex;
  align-items: center;
  width: 31.25rem;
  /* 调整整体宽度 */
  gap: 0.75rem;
  /* 图标与内容的间距 */
}

/* 左侧旋转图标 */
.loading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.icon-circle {
  /* width: 1.5rem; */
  /* height: 1.5rem; */
  /* border: 0.1875rem solid #1dd4ff; */
  border-top-color: transparent;
  border-radius: 50%;
  transform-origin: center;
  animation: spin 1.2s linear infinite;
}

/* 加载内容区域 */
.loading-content {
  flex-grow: 1;
}

/* 状态描述文字 */
.loading-text {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.375rem;
  color: rgba(255, 255, 255, 0.9);
}

/* 分段加载条 */
.progress-bar {
  display: flex;
  gap: 0.25rem;
}

.progress-bar-segment {
  flex: 1;
  flex-shrink: 0;
  /* 每段等宽 */
  height: 1.125rem;
  background: rgba(53, 67, 67,.7);
  /* 默认背景色 */
  transition: background-color 0.3s ease;
  /* 平滑过渡 */
}

.progress-bar-segment.filled {
  background-color: #17e5c3;
  /* 加载后的颜色 */
}

/* 百分比显示 */
.progress-percentage {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  text-align: right;
}

/* 旋转动画 */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
