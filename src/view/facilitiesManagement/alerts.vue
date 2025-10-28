<template>
  <div>
    <div class="w-[232.5625rem] h-[29.25rem] relative">
    <div class="w-[232.375rem] h-[5.0356rem] left-0 top-0 absolute">
        <div class="left-[5.1556rem] top-0 absolute text-white text-[2.5rem] font-['semibold'] leading-[2.93rem] tracking-wide">Alerts</div>
        <div class="w-[20.6419rem] h-[0.7725rem] left-[22.7944rem] top-[4.2631rem] absolute opacity-60 blur-sm"></div>
        <div class="w-14 h-[3.125rem] left-0 top-0 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="3.625rem" height="3.25rem" viewBox="0 0 58 52" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H57V51H1L1 1Z" fill="#0D1E26"/>
            <path d="M39.5016 38H19.4418C16.3557 38 15.1212 35.725 16.6643 32.9263L26.6942 15.0867C28.2372 12.3044 30.8604 12.3044 32.4035 15.0867L42.4334 32.9263C43.8221 35.8723 42.5877 38 39.5016 38ZM29.5025 18.0327C29.0933 18.0327 28.7008 18.2052 28.4114 18.5121C28.1221 18.819 27.9595 19.2353 27.9595 19.6694L28.731 30.144H30.2741L31.0456 19.6694C31.0456 19.2353 30.883 18.819 30.5936 18.5121C30.3043 18.2052 29.9118 18.0327 29.5025 18.0327ZM29.5025 31.617C29.0933 31.617 28.7008 31.7895 28.4114 32.0964C28.1221 32.4033 27.9595 32.8196 27.9595 33.2537C27.9595 33.6877 28.1221 34.104 28.4114 34.411C28.7008 34.7179 29.0933 34.8903 29.5025 34.8903C29.7087 34.9048 29.9154 34.8724 30.1088 34.7953C30.3022 34.7181 30.4778 34.5981 30.6239 34.4431C30.77 34.2881 30.8832 34.1018 30.956 33.8967C31.0287 33.6916 31.0592 33.4724 31.0456 33.2537C31.0169 32.8297 30.8452 32.4308 30.5618 32.1302C30.2784 31.8296 29.9023 31.6474 29.5025 31.617Z" fill="white"/>
            <path d="M10.3098 1H1L1 51H10.3098" stroke="white" stroke-opacity="0.56" stroke-width="2"/>
            <path d="M47.6902 1H57L57 51H47.6902" stroke="white" stroke-opacity="0.56" stroke-width="2"/>
          </svg>
                  </div>
                  <div class=" absolute bottom-0 left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="232.375rem" height="0.25rem" viewBox="0 0 3718 4" fill="none">
            <path d="M0 2.12862H972.401L1013.02 1.03906H3718" stroke="url(#paint0_linear_8542_106479)" stroke-width="2"/>
            <defs>
              <linearGradient id="paint0_linear_8542_106479" x1="-19.9426" y1="-16.5862" x2="3901.31" y2="-551.98" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.17"/>
                <stop offset="0.385167" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0.13"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
    </div>
    <!-- urgent -->
    <div class="w-[13.6556rem] h-[2.375rem] left-[0.375rem] top-[7.3125rem] absolute">
        <div class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">Urgent (2)</div>
        <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
    </div>
    <!-- equipment -->
    <div class="w-[18.4056rem] h-[2.375rem] left-[55.3125rem] top-[7.3125rem] absolute">
        <div class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">Equipment info</div>
        <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
    </div>
    <div class="w-[50.5625rem] h-[7.8125rem] left-[0.375rem] top-[11.625rem] absolute" :class="progress==5?'alert-notification-orange1 breathing-yellow':'alert-notification-red1 breathing-red'">
        <div class="w-[50.5625rem] h-[7.8125rem] left-0 top-0 absolute">
            <div class="w-[50.5625rem] h-[7.8125rem] left-0 top-0 absolute"></div>
            <div class="w-[7.9375rem] h-8 px-2 py-1 left-[40.8125rem] top-[1.375rem] absolute rounded-sm flex-col justify-center items-center inline-flex" :class="progress==5?'bg-[#FFD600D6]':'bg-[#b43403]'">
                <div class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">{{progress==5?'Pending':'NEW'}}</div>
            </div>
            <div class="left-[6.1875rem] top-[1.4375rem] absolute text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Malfunction</div>
            <div class="left-[2.3125rem] top-[4.5rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Fire Pump Room</div>
            <div class="left-[20.5625rem] top-[4.4375rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">09/02/25 14:18</div>
            <div class="left-[35.5625rem] top-[4.625rem] absolute text-white text-2xl font-['light'] leading-[1.95rem] tracking-wide">TTR 3 mins</div>
        </div>
        <div class="w-[2.625rem] h-[2.625rem] left-[2.4375rem] top-[1.25rem] absolute">
            <div class="w-[2.625rem] h-[2.625rem] left-0 top-0 absolute  rounded-full" :class="progress==5?'bg-[#fed600]/80':'bg-[#b43403]'"></div>
            <div class="w-[1.6406rem] h-[1.6406rem] left-[0.4925rem] top-[0.4925rem] absolute">
              <img class="w-full h-full" src="@/assets/operationalMatrix/malfunction-pending.svg" alt="">
            </div>
        </div>
    </div>
    <div class="w-[50.5625rem] h-[7.8125rem] left-[0.375rem] top-[20.9375rem] absolute alert-notification-blue">
        <div class="w-[50.5625rem] h-[7.8125rem] left-0 top-0 absolute">
            <div class="left-[6.1875rem] top-[1.4375rem] absolute text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Malfunction</div>
            <div class="left-[2.3125rem] top-[4.5rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Lift Machine Room</div>
            <div class="left-[20.5625rem] top-[4.5rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">01/01/25 15:50</div>
            <div class="left-[35.5625rem] top-[4.6875rem] absolute text-white text-2xl font-['light'] leading-[1.95rem] tracking-wide">TTR 1 mins</div>
        </div>
        <div class="w-[2.625rem] h-[2.625rem] left-[2.4375rem] top-[1.25rem] absolute">
            <div class="w-[2.625rem] h-[2.625rem] left-0 top-0 absolute bg-[#12b3a9] rounded-full"></div>
            <div class="w-[1.6406rem] h-[1.6406rem] left-[0.4925rem] top-[0.4925rem] absolute">
              <img class="w-full h-full" src="@/assets/operationalMatrix/malfunction-resolved.svg" alt="">
            </div>
        </div>
        <div class="w-[7.9375rem] h-8 px-2 py-1 left-[40.8125rem] top-[1.375rem] absolute bg-[#12b3a9] rounded-sm flex-col justify-center items-center inline-flex">
            <div class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">Resolved</div>
        </div>
    </div>
    <div class="left-[61.625rem] top-[12.75rem] absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Chilled Water Pumps#11</div>
    <div class="w-[10.6875rem] h-[5.3125rem] left-[191.1875rem] top-[12.75rem] absolute">
        <div class="left-0 top-0 absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Current Load</div>
        <div class="left-0 top-[2.8125rem] absolute"><span class="text-white text-[2.5rem] font-['medium']">92 </span><span class="text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">%</span></div>
    </div>
    <div class="w-[11.1875rem] h-[5.3125rem] left-[207rem] top-[12.75rem] absolute">
        <div class="left-0 top-0 absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Supply Temp</div>
        <div class="left-0 top-[2.8125rem] absolute"><span class="text-white text-[2.5rem] font-['medium']">7.5 </span><span class="text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">℃</span></div>
    </div>
    <div class="w-[11.625rem] h-[5.3125rem] left-[222.8125rem] top-[12.75rem] absolute">
        <div class="left-0 top-0 absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Efficiency</div>
        <div class="left-0 top-[2.8125rem] absolute"><span class="text-white text-[2.5rem] font-['medium']">0.81 </span><span class="text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Kw/TR</span></div>
    </div>
    <div class="left-[55.3125rem] top-[12.6875rem] absolute text-center text-white/90 text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Name:</div>
    <div class="w-[36.375rem] h-[2.125rem] left-[55.3125rem] top-[17.0625rem] absolute">
        <div class="left-[8.625rem] top-[0.0625rem] absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Chilled Water Pumps#11</div>
        <div class="left-0 top-0 absolute text-center text-white/90 text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Location:</div>
    </div>
    <div class="left-[70.625rem] top-[21.5rem] absolute text-[#fb4601] text-[1.75rem] font-['medium'] leading-[2.0506rem] tracking-wide">Fire Pump Room</div>
    <div class="left-[55.3125rem] top-[21.4375rem] absolute text-center text-white/90 text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Operating Status:</div>
    <div class="w-[14.875rem] h-[2.0625rem] left-[55.3125rem] top-[25.8125rem] absolute">
        <div class="left-[12.8125rem] top-0 absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">on</div>
        <div class="left-0 top-0 absolute text-white/90 text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">Switch Status:</div>
    </div>
    <div class="w-[18.9681rem] h-[2.375rem] left-[96.5rem] top-[7.3125rem] absolute">
        <div class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">Impacted Areas</div>
        <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
    </div>
    <div class="w-[38.8125rem] h-[17.625rem] left-[96.375rem] top-[11.625rem] absolute">
        <div class="w-[38.8125rem] h-[3.5625rem] pl-5 pr-[4.6875rem] pt-3 pb-[0.5625rem] left-0 top-0 absolute title-line justify-start items-start gap-[19.625rem] inline-flex">
            <div class="opacity-90 text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Building</div>
            <div class="opacity-90 text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Severity</div>
        </div>
        <div class="w-[39.4375rem] h-[4.0625rem] pl-5 pr-[5.1875rem] pt-2.5 pb-[1.125rem] left-0 top-[4.5rem] absolute border-b border-white/25 justify-start items-start gap-[5.8125rem] inline-flex">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Office</div>
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Severe</div>
        </div>
        <div class="w-[39.4375rem] h-[4.0625rem] pl-5 pr-[5.25rem] pt-[0.6875rem] pb-[1.125rem] left-0 top-[13.5625rem] absolute border-b border-white/25 justify-start items-start gap-[7.9375rem] inline-flex">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Retail</div>
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Urgent</div>
        </div>
        <div class="w-[38.8125rem] h-[4.0625rem] pl-5 pr-[4.9375rem] pt-[0.4375rem] pb-[1.375rem] left-0 top-[9.0625rem] absolute border-b border-white/25 justify-start items-start gap-[6.625rem] inline-flex">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Admin</div>
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Normal</div>
        </div>
    </div>
    <div class="w-[43rem] h-[9.125rem] left-[141.5rem] top-[7.3125rem] absolute">
        <div class="w-[42.8125rem] left-[0.1875rem] top-[5rem] absolute text-white text-[1.75rem] font-['light'] capitalize leading-[2.0506rem] tracking-wide">SOP name Hazard Identification, Risk Assessment & Determining Controls</div>
        <div class="w-[41.4375rem] h-[2.375rem] left-0 top-0 absolute">
            <div class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">SOP</div>
            <div class="left-[36.875rem] top-0 absolute text-[#17e5c3] text-[2rem] font-['light'] tracking-wide">View</div>
            <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
        </div>
    </div>
    <div class="w-[41.4375rem] h-[8.8125rem] left-[141.5rem] top-[19.4375rem] absolute">
        <div class="w-80 h-[4.625rem] left-[0.1875rem] top-[4.1875rem] absolute">
            <div class="left-0 top-0 absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">WO-124989789</div>
            <div class="left-[0.0625rem] top-[2.5625rem] absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">WO Pending Verification</div>
        </div>
        <div class="w-[41.4375rem] h-[2.375rem] left-0 top-0 absolute">
            <div class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">Work Order</div>
            <div class="left-[36.875rem] top-0 absolute text-[#17e5c3] text-[2rem] font-['light'] tracking-wide">View</div>
            <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
        </div>
    </div>
    <div class="w-[22.7181rem] h-[2.375rem] left-[190.625rem] top-[7.3125rem] absolute">
        <div class="left-[3.6556rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">Chiller Performance</div>
        <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
                <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>
    </div>
    <div class="w-[38rem] h-[5.625rem] left-[191.4375rem] top-[21.75rem] absolute">
        <div class="w-[38rem] h-[5.625rem] left-0 top-0 absolute">
            <div class="left-[3.25rem] top-0 absolute text-[#fb4601] text-[1.75rem] font-['bold'] leading-[2.0506rem] tracking-wide">System Alert</div>
            <div class="left-0 top-[3.5625rem] absolute text-white text-[1.75rem] font-['light'] leading-[2.0506rem] tracking-wide">High load detected, Initiating additional chiller</div>
        </div>
        <div class="w-[2.625rem] h-[2.4375rem] absolute left-0 top-0">
          <img class="w-full h-full" src="@/assets/icon/warning.svg" alt="">
        </div>
    </div>
    <div class="absolute  left-[88.75rem] top-[-20.25rem]"  >
      <LoadingBarTemperature :count="count" class="scale-up" v-if="isLoading"/>
      <LoadingBarAnalytics :count="cuntAnalytics" class="scale-up" v-if="isLoadingAnalyticsBar"/>
      <LoadingBarTemperature2 :count="count2" class="scale-up" v-if="isLoading2"/>
    </div>
</div>
<!--  -->
<div class=" absolute left-[52.3125rem] top-[9.6875rem]">
<img class="w-[0.125rem] h-[18.875rem]" src="@/assets/operationalMatrix/line.svg" alt="">
</div>
  <!--  -->
  <div class=" absolute left-[92.9375rem] top-[9.6875rem]">
<img class="w-[0.125rem] h-[18.875rem]" src="@/assets/operationalMatrix/line.svg" alt="">
</div>
<!--  -->
<div class=" absolute left-[138.5625rem] top-[9.6875rem]">
<img class="w-[0.125rem] h-[18.875rem]" src="@/assets/operationalMatrix/line.svg" alt="">
</div>
<!--  -->
<div class=" absolute left-[186.6875rem] top-[9.6875rem]">
<img class="w-[0.125rem] h-[18.875rem]" src="@/assets/operationalMatrix/line.svg" alt="">
</div>
  </div>
</template>
<script setup>
import LoadingBarTemperature from "./components/LoadingBarTemperature.vue";
import LoadingBarTemperature2 from "./components/LoadingBarTemperature2.vue";
import LoadingBarAnalytics from "./components/LoadingBarAnalytics.vue";

import { ref, defineProps, watch ,toRefs} from "vue"

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  isLoading2: {
    type: Boolean,
    default: false
  },
  isLoadingAnalyticsBar: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  
  progressAnalytics: {
    type: Number,
    default: 0
  },
})
const count = ref(0)
const count2 = ref(0)
const cuntAnalytics=ref(0)
const interval = ref(null)
const interval2 = ref(null)
const intervalAnalytics = ref(null)
const {isLoadingAnalyticsBar,progressAnalytics}=toRefs(props)
watch(() => props.progress, (val) => {
    if(val<5){
      count.value=val
      autoLoad()
    }
    // setTimeout(()=>{
    //     count.value=5
    // },2000)
})
watch(() => props.isLoading2, (val) => {
  console.log("isLoading2",val)
  if(val){
    count2.value=1
    autoLoad2()
  }
   
    // setTimeout(()=>{
    //     count.value=5
    // },2000)
})
watch(progressAnalytics, (val) => {
  console.log("progressAnalytics==>",val)
  cuntAnalytics.value=1
  autoLoadAnalytics()
    // setTimeout(()=>{
    //     count.value=5
    // },2000)
},{ deep: true }  // 监听对象内部的深度变
)

const autoLoad = () => {
  clearInterval(interval.value); // 清除定时器
  interval.value = null
  interval.value = setInterval(() => {
    count.value += 1;
    if (count.value >= 5) {
      clearInterval(interval.value); // 清除定时器
      interval.value = null
      setTimeout(()=>{
      console.log("send Scene2_5_Checked")
        // ue4('data', { "Type": "FM", "Status": "Scene2_5_Checked" });
      },3000)
    }
  }, 400); // 每隔100毫秒更新一次，2秒完成加载
};
const autoLoad2 = () => {
  clearInterval(interval2.value); // 清除定时器
  interval2.value = null
  interval2.value = setInterval(() => {
    count2.value += 1;
    if (count2.value >= 5) {
      console.log("send Scene2_4_Checked")
      clearInterval(interval2.value); // 清除定时器
      interval2.value = null
    //   setTimeout(()=>{
    //   // ue4('data', { "Type": "FM", "Status": "Scene2_4_Checked" });
    // },3000)
    }
  }, 400); // 每隔100毫秒更新一次，2秒完成加载
};

const autoLoadAnalytics = () => {
  clearInterval(intervalAnalytics.value); // 清除定时器
  intervalAnalytics.value = null
  intervalAnalytics.value = setInterval(() => {
    cuntAnalytics.value += 1;
    if (cuntAnalytics.value >= 5) {
      clearInterval(intervalAnalytics.value); // 清除定时器
      intervalAnalytics.value = null
      setTimeout(()=>{
        ue4('data', { "Type": "FM", "Status": "Scene2_3_Checked" });
      },1000)
    }
  }, 2000); // 每隔100毫秒更新一次，2秒完成加载
};
</script>
<style scoped>
/* 定义从中心放大的动画 */
@keyframes scaleUp {
  from {
    transform: scale(0); /* 初始状态：完全缩小 */
    opacity: 0;          /* 初始状态：完全透明 */
  }
  to {
    transform: scale(1); /* 最终状态：正常大小 */
    opacity: 1;          /* 最终状态：完全显示 */
  }
}

/* 动画类 */
.scale-up {
  animation: scaleUp .2s ease-out; /* 动画持续 1.5 秒，使用 ease-out 效果 */
  transform-origin: center;         /* 从中心放大 */
}
.alert-notification-red1 {
  background: url("@/assets/alert-notification-red.png") left no-repeat;
  background-size: cover; /* 或者 contain */
  height: 8.125rem; /* 确保容器的高度足够显示背景 */
  width:50.5625rem ;
}
.alert-notification-orange1{
  background: url("@/assets/alert-notification-orange.png") left no-repeat;
  background-size: cover;
  height: 8.125rem; /* 确保容器的高度足够显示背景 */
  width:50.5625rem ;
}
.breathing-red {
  animation: breathe-red 1s ease-in-out 2;
}

@keyframes breathe-red {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.6), 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.4);
  }
  50% {
    box-shadow: 0 0 0.125rem 0 rgba(208, 56, 1, 0.5), 0 0 0.625rem 0 rgba(208, 56, 1, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.6), 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.4);
  }
}
.breathing-yellow {
  animation: breathe-yellow 1s ease-in-out 2;
}

@keyframes breathe-yellow {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.6), 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.4);
  }
  50% {
    box-shadow: 0 0 0.125rem 0 rgba(250, 202, 21, 0.5), 0 0 0.625rem 0 rgba(250, 202, 21, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.6), 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.4);
  }
}
.breathing-teal {
  width: 51rem !important;
  animation: breathe-teal 1s ease-in-out 2;
}

</style>