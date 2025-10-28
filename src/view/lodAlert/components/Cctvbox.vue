<template>
  <div>
    <div class="w-[44.625rem] h-[81.75rem] relative ">
      
      <div name="VVBIBONBGVIBN" v-if="switchStatus">
        <div class="relative animate-slideX w-[44.625rem] h-[81.75rem]">
          <div
        class="w-[44.625rem] h-[81.75rem] left-0 top-0 absolute rounded-lg border-2 border-white/20  overflow-hidden">
        <div class="w-[40.9375rem] h-[4.875rem] left-[1.875rem] top-[8.25rem] absolute">
          <div class="w-[40.9375rem] h-[4.875rem] left-0 top-0 absolute rounded border-[0.0625rem] border-white"
            style="background: linear-gradient(350deg, rgba(3, 23, 43, 0.30) -8.4%, rgba(0, 32, 62, 0.30) 106.15%);">
          </div>
          <input placeholder="Search Camera ID"
            class="w-[35rem] left-[4.875rem] top-[1.4125rem] absolute text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide border-none bg-transparent outline-none"
            style="box-shadow: none;" />
          <div class="w-[1.875rem] h-[1.875rem] left-[1.5rem] top-[1.5625rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/search.svg" alt="">
          </div>
        </div>
        <div class="left-[1.875rem] top-[2.5rem] absolute">
          <div
            class="left-[4.875rem] top-[0.3125rem] absolute text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
            CCTV</div>
          <div class="w-14 h-[3.125rem] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            <img class="w-full h-full" src="@/assets/icon/camera.svg" alt="">
          </div>
        </div>

        <div class="w-[17rem] h-10 left-[25.75rem] top-[2.8125rem] absolute select-none">
          <div class="w-20 h-10 left-[5.875rem] top-0 absolute cursor-pointer z-10">
            <div class="w-20 h-10 left-0 top-0 absolute bg-[#7118cc]/50 rounded-[5rem] cursor-pointer z-1"></div>
            <div
              class="w-8 h-8 top-[0.25rem] absolute bg-white rounded-[5rem] cursor-pointer z-10 transition-[left] ease-linear"
              :class="switchStatus ? 'left-[0.3125rem]' : 'left-[2.6875rem]'"></div>
          </div>
          <div class="w-[17rem] h-[2.1875rem] left-0 top-[0.125rem] absolute">
            <div class="left-0 top-0 absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">Team
            </div>
            <div
              class="left-[12.375rem] top-[0.125rem] absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">
              CCTV</div>
          </div>
        </div>
      </div>
          <team />
        </div>
      </div>
      <div name="TXCVBNMGWNJIVB" v-else-if="!isCCTVUpdate">
        <div class="relative animate-slideX w-[44.625rem] h-[81.75rem]">
          <div
        class="w-[44.625rem] h-[81.75rem] left-0 top-0 absolute rounded-lg border-2 border-white/20  overflow-hidden">
        <div class="w-[40.9375rem] h-[4.875rem] left-[1.875rem] top-[8.25rem] absolute">
          <div class="w-[40.9375rem] h-[4.875rem] left-0 top-0 absolute rounded border-[0.0625rem] border-white"
            style="background: linear-gradient(350deg, rgba(3, 23, 43, 0.30) -8.4%, rgba(0, 32, 62, 0.30) 106.15%);">
          </div>
          <input placeholder="Search Camera ID"
            class="w-[35rem] left-[4.875rem] top-[1.4125rem] absolute text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide border-none bg-transparent outline-none"
            style="box-shadow: none;" />
          <div class="w-[1.875rem] h-[1.875rem] left-[1.5rem] top-[1.5625rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/search.svg" alt="">
          </div>
        </div>
        <div class="left-[1.875rem] top-[2.5rem] absolute">
          <div
            class="left-[4.875rem] top-[0.3125rem] absolute text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
            CCTV</div>
          <div class="w-14 h-[3.125rem] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            <img class="w-full h-full" src="@/assets/icon/camera.svg" alt="">
          </div>
        </div>

        <div class="w-[17rem] h-10 left-[25.75rem] top-[2.8125rem] absolute select-none">
          <div class="w-20 h-10 left-[5.875rem] top-0 absolute cursor-pointer z-10">
            <div class="w-20 h-10 left-0 top-0 absolute bg-[#7118cc]/50 rounded-[5rem] cursor-pointer z-1"></div>
            <div
              class="w-8 h-8 top-[0.25rem] absolute bg-white rounded-[5rem] cursor-pointer z-10 transition-[left] ease-linear"
              :class="switchStatus ? 'left-[0.3125rem]' : 'left-[2.6875rem]'"></div>
          </div>
          <div class="w-[17rem] h-[2.1875rem] left-0 top-[0.125rem] absolute">
            <div class="left-0 top-0 absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">Team
            </div>
            <div
              class="left-[12.375rem] top-[0.125rem] absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">
              CCTV</div>
          </div>
        </div>
      </div>
          <cctv />
        </div>
      </div>
      <div name="CVABANOFVBIB" v-else-if="isCCTVUpdate">
        <div class="relative animate-slideX w-[44.625rem] h-[81.75rem]">
          <div
        class="w-[44.625rem] h-[81.75rem] left-0 top-0 absolute rounded-lg border-2 border-white/20  overflow-hidden">
        <div class="w-[40.9375rem] h-[4.875rem] left-[1.875rem] top-[8.25rem] absolute">
          <div class="w-[40.9375rem] h-[4.875rem] left-0 top-0 absolute rounded border-[0.0625rem] border-white"
            style="background: linear-gradient(350deg, rgba(3, 23, 43, 0.30) -8.4%, rgba(0, 32, 62, 0.30) 106.15%);">
          </div>
          <input placeholder="Search Camera ID"
            class="w-[35rem] left-[4.875rem] top-[1.4125rem] absolute text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide border-none bg-transparent outline-none"
            style="box-shadow: none;" />
          <div class="w-[1.875rem] h-[1.875rem] left-[1.5rem] top-[1.5625rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/search.svg" alt="">
          </div>
        </div>
        <div class="left-[1.875rem] top-[2.5rem] absolute">
          <div
            class="left-[4.875rem] top-[0.3125rem] absolute text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
            CCTV</div>
          <div class="w-14 h-[3.125rem] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            <img class="w-full h-full" src="@/assets/icon/camera.svg" alt="">
          </div>
        </div>

        <div class="w-[17rem] h-10 left-[25.75rem] top-[2.8125rem] absolute select-none">
          <div class="w-20 h-10 left-[5.875rem] top-0 absolute cursor-pointer z-10">
            <div class="w-20 h-10 left-0 top-0 absolute bg-[#7118cc]/50 rounded-[5rem] cursor-pointer z-1"></div>
            <div
              class="w-8 h-8 top-[0.25rem] absolute bg-white rounded-[5rem] cursor-pointer z-10 transition-[left] ease-linear"
              :class="switchStatus ? 'left-[0.3125rem]' : 'left-[2.6875rem]'"></div>
          </div>
          <div class="w-[17rem] h-[2.1875rem] left-0 top-[0.125rem] absolute">
            <div class="left-0 top-0 absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">Team
            </div>
            <div
              class="left-[12.375rem] top-[0.125rem] absolute text-white text-[1.75rem] font-normal font-['Roboto'] tracking-wide">
              CCTV</div>
          </div>
        </div>
      </div>
          <cctvUpdate />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import team from "./components/team.vue"
import cctv from "./components/cctv.vue"
import cctvUpdate from "./components/cctvUpdate.vue"

import { ref, onMounted, defineProps, toRefs, watch } from "vue"

const props = defineProps({
  showCCTVDetail: {
    type: Boolean,
    default: true
  },
  stepCount: {
    type: Number,
    default: 0
  },
  newAlertShow2: {
    type: Boolean,
    default: false
  }
})
const title = ref("Cameras")
let timeout = null;
let firstClick = true; // 标志变量，表示是否是第一次点击
const isCCTVUpdate = ref(false)

// 状态管理
const switchStatus = ref(true)

watch(() => props.showCCTVDetail, (val) => {
  switchStatus.value = !val
  if (switchStatus.value) {
    isCCTVUpdate.value = false
  }

})
// 更新数据 
watch(() => props.newAlertShow2, (val) => {
  if (val && props.stepCount == 0) {
    isCCTVUpdate.value = true
  }
})

const handlerSwitch = () => {
  if (firstClick) {
    // 第一次点击，直接执行
    switchStatus.value = !switchStatus.value;
    title.value = switchStatus.value ? "Alerted CCTV" : "Cameras";
    firstClick = false; // 标记第一次点击已完成
  } else if (!timeout) {
    // 后续点击需要节流
    timeout = setTimeout(() => {
      switchStatus.value = !switchStatus.value;
      title.value = switchStatus.value ? "Alerted CCTV" : "Cameras";
      timeout = null; // 清除定时器，允许下一次执行
    }, 100); // 节流时间为 1 秒
  }
};



</script>
<style lang="scss" scoped></style>
