<template>
  <div>
    <div class="w-[37.8125rem] h-[22.25rem] relative scaleUp" @click="handlerClick">
      <div
        class="w-[37.8125rem] h-[22.25rem] left-0 top-0 absolute rounded-md shadow-[0rem_1.25rem_0.75rem_0rem_rgba(0,0,0,0.15)] border border-[#d03801]"
        style="background: radial-gradient(260.14% 141.21% at 52.54% 86.85%, #340101 0%, rgba(52, 1, 1, 0.00) 100%);
        ">
      </div>
      <div
        class="w-[3.1875rem] h-[2.125rem] px-3 left-[33.25rem] top-[1rem] absolute rounded-md flex-col justify-center items-center gap-2.5 inline-flex bg-[#D03801]">
        <div class="h-[1.75rem] text-white/90 text-[1.75rem] font-['bold'] leading-[130%] tracking-wide">1</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class=" absolute top-[3.9688rem]" width="37.8125rem" height="0.9375rem"
        viewBox="0 0 605 15" fill="none">
        <path d="M0 14.4633H370.968L383.38 1.39453L604.546 2.39453" stroke="url(#paint0_linear_8223_62314)" />
        <defs>
          <linearGradient id="paint0_linear_8223_62314" x1="-2.59384" y1="12.064" x2="507.105" y2="-58.574"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.17" />
            <stop offset="0.385167" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.13" />
          </linearGradient>
        </defs>
      </svg>
      <div class="w-full left-[1.875rem] top-[10.1875rem] absolute">
        <div
          class="w-full left-0 top-0 absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
          Location: Stadium East Stand_Lower Tier</div>
        <div
          class="left-0 top-[2.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
          Time: 18:25:15</div>
        <div
          class="left-0 top-[5.375rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
          Detected: Detected Suspected Theft</div>
        <div
          class="left-0 top-[8.0625rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
          Remark: High-security zone </div>
      </div>
      <div
        class="left-[1.625rem] top-[6.5625rem] absolute text-white/90 text-[1.75rem] font-['bold'] leading-9 tracking-wide">
        Suspicious Behaviour</div>
      <div class="left-[1.875rem] top-[1.375rem] absolute flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class=" absolute top-[0.25rem]" width="1.625rem" height="1.5625rem"
          viewBox="0 0 26 25" fill="none">
          <path
            d="M22.0525 24.1806H3.22959C0.333762 24.1806 -0.824568 22.0648 0.623345 19.4619L10.0348 2.87043C11.4827 0.282773 13.9441 0.282773 15.3921 2.87043L24.8035 19.4619C26.1066 22.2018 24.9483 24.1806 22.0525 24.1806ZM12.67 5.6103C12.286 5.6103 11.9177 5.77067 11.6462 6.05613C11.3746 6.34159 11.2221 6.72876 11.2221 7.13245L11.946 16.8742H13.3939L14.1179 7.13245C14.1179 6.72876 13.9653 6.34159 13.6938 6.05613C13.4223 5.77067 13.054 5.6103 12.67 5.6103ZM12.67 18.2442C12.286 18.2442 11.9177 18.4045 11.6462 18.69C11.3746 18.9754 11.2221 19.3626 11.2221 19.7663C11.2221 20.17 11.3746 20.5572 11.6462 20.8426C11.9177 21.1281 12.286 21.2885 12.67 21.2885C12.8634 21.3019 13.0574 21.2718 13.2389 21.2C13.4203 21.1283 13.5851 21.0166 13.7222 20.8725C13.8593 20.7284 13.9655 20.5551 14.0338 20.3644C14.102 20.1736 14.1307 19.9697 14.1179 19.7663C14.091 19.372 13.9298 19.001 13.6639 18.7214C13.398 18.4419 13.0451 18.2724 12.67 18.2442Z"
            fill="white" />
        </svg>
        <div
          class="left-[2.7363rem] top-0 absolute text-white/90 text-[1.75rem] font-['bold'] leading-9 tracking-wide">
          Alerts</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref,defineEmits} from "vue"
const emit=defineEmits(['handlerWarning'])
const clickCount=ref(0)

const handlerClick=()=>{
  clickCount.value++
  emit('handlerWarning',clickCount.value)
  handlerSwitch(clickCount.value)
  if(clickCount.value==2){
    clickCount.value=0
  }
}
const handlerSwitch=(val)=>{
  switch(val){
    case 0:
      return "Location: Innovation Lab perimeter"
    case 1:
      return "Duration: 17 minutes exceeded threshold"
    case 2:
      return "Detected: Three individuals"
    case 3:
      return "Remark: No scheduled activities"
  }
}

</script>
<style scoped>
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