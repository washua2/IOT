<template>
    <div class="w-[49.625rem] h-[51rem] rounded-[1rem] overflow-hidden relative scaleUp">
        <img src="@/assets/images/safetyMonitoringCenter/alertPlayback.png" class="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[1]" alt="">
        <div class="w-[44.0625rem] h-[23rem] rounded-[1rem] absolute top-[6.0625rem] left-[2.8125rem] z-[2]">
            <VideoSmall class="w-full h-full" :elmId="'video2112'" :videoUrl="test1"/>
          </div>
    </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
// import {ALERT_PALYBACK} from "/public/constants/url"
import { useStreams } from '@/store/modules/usestreams'
const { mode, setMode,ALERT_PALYBACK } = useStreams()
let test1 = ALERT_PALYBACK.url

</script>
<style lang="scss" scoped>
.scaleUp{
  transform-origin: bottom right; /* 设置动画的起始点为左下角 */
  animation: scaleUp .5s ease-in-out;
}
@keyframes scaleUp {
  0% {
    transform: scale(0) translate(0, 0);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}
</style>