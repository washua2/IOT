<template>
  <div class="relative select-none">
    <div class="w-28">
      <div
        class="w-28 h-[7.3125rem] relative bg-[#03172b]/30 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 pt-[1.1875rem] cursor-pointer"
        @click="handlerTrafficType">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2.125rem] h-[2.3125rem] mx-[2.4375rem]"  width="2.125rem" height="2.3125rem" viewBox="0 0 34 27" fill="none">
  <path d="M5.40502 3.25034C5.65487 2.51163 5.89222 1.92681 6.11708 1.4959C6.34195 1.06498 6.58555 0.74487 6.84789 0.535568C7.11023 0.326266 7.4038 0.190834 7.7286 0.129275C8.0534 0.0677154 8.45315 0.0246238 8.92786 0H10.9259C12.1578 0 13.0969 1.10305 12.9002 2.31921L9.19961 25.2084C9.04298 26.1772 8.2066 26.8892 7.22524 26.8892H3.19388C1.64483 26.8892 0.664176 26.3536 0.251929 25.2825C-0.160318 24.2114 -0.0666259 22.6908 0.533007 20.7209C0.732884 20.0807 0.970239 19.2743 1.24507 18.3016C1.5199 17.329 1.81347 16.2825 2.12578 15.1621C2.43809 14.0417 2.7504 12.8844 3.06271 11.6902C3.37502 10.4959 3.68108 9.35705 3.98089 8.2736C4.28071 7.19015 4.5493 6.21135 4.78665 5.33721C5.024 4.46306 5.23013 3.76744 5.40502 3.25034ZM18.1798 3.17182C18.2231 3.91591 17.6314 4.54309 16.8861 4.54309C16.145 4.54309 15.5548 3.92273 15.5917 3.18255L15.6924 1.16451C15.7239 0.532879 16.2452 0.0369358 16.8777 0.0369358C17.5063 0.0369358 18.0258 0.527131 18.0624 1.15469L18.1798 3.17182ZM18.6975 13.8809C18.7448 14.9108 17.9226 15.7715 16.8917 15.7715C15.8608 15.7715 15.0387 14.9108 15.086 13.8809L15.3435 8.27495C15.3815 7.44749 16.0634 6.79617 16.8917 6.79617C17.7201 6.79617 18.402 7.44749 18.44 8.27495L18.6975 13.8809ZM16.949 18.0246C18.0179 18.0246 18.8979 18.8651 18.9469 19.9329L19.1754 24.9082C19.2278 26.0476 18.3181 27 17.1776 27H16.5684C15.4278 27 14.5182 26.0476 14.5705 24.9082L14.7991 19.9329C14.8481 18.8651 15.7281 18.0246 16.797 18.0246H16.949ZM33.5128 21.1642C33.6877 21.7059 33.8251 22.3092 33.925 22.974C34.025 23.6388 34.025 24.2606 33.925 24.8393C33.8251 25.4179 33.594 25.9042 33.2317 26.2982C32.8694 26.6922 32.326 26.8892 31.6015 26.8892H26.4809C25.5006 26.8892 24.6648 26.1786 24.507 25.2111L20.7745 2.32189C20.576 1.10492 21.5153 0 22.7484 0H23.9187C25.1679 0 26.2173 0.270862 27.0667 0.812585C27.9162 1.35431 28.5658 2.32695 29.0156 3.73051C29.1655 4.17373 29.3528 4.8632 29.5777 5.79891L30.4022 8.97538C30.702 10.1573 31.0081 11.3885 31.3204 12.6689C31.6327 13.9494 31.9263 15.1559 32.2011 16.2886L32.9881 19.3174C33.213 20.2038 33.3879 20.8194 33.5128 21.1642Z" fill="white"/>
</svg>
        <div class="w-16 left-[1.5rem] top-[4.0625rem] absolute text-center flex items-start">
          <span class="text-white text-lg font-bold font-['Roboto'] leading-[104%]" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Road modes</span>
        </div>
        <div class="left-0 bottom-0 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6875rem" height="1.6875rem" viewBox="0 0 27 27" fill="none">
            <path d="M0 0V27H27L0 0Z" :fill="trafficType ? '#8e3ce1' : '#fff'" />
          </svg>
        </div>
      </div>
      <div
        class="w-28 h-[7.3125rem] relative bg-[#03172b]/30 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 pt-[1.1875rem] cursor-pointer"
        @click="handlerReadViewModel">
        <img class="w-[2.125rem] h-[2.3125rem] mx-[2.4375rem]" src="@/assets/menu/model.svg" />
        <div class="w-16 left-[1.5rem] top-[4.0625rem] absolute text-center flex items-start">
          <span class="text-white text-lg font-bold font-['Roboto'] leading-[104%]" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">View Modes</span>
        </div>
        <div class="left-0 bottom-0 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6875rem" height="1.6875rem" viewBox="0 0 27 27" fill="none">
            <path d="M0 0V27H27L0 0Z" :fill="readViewModel ? '#8e3ce1' : defaultColor" />
          </svg>
        </div>
      </div>

      <div
        class="w-28 h-[7.5rem] px-[1.1875rem] pt-[1.1462rem] pb-3 bg-[#03172b]/30 flex-col justify-end items-center gap-[0.8538rem] inline-flex cursor-pointer mb-[0.25rem]" @click="handleClick(4,'ZoomIn')">
        <div class="w-[3.25rem] h-[3.25rem] relative flex-col justify-start items-start flex">
          <img class="w-full h-full" src="@/assets/menu/zoom-in.svg" alt="">
        </div>
        <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Zoom In</div>
      </div>
      <div
        class="w-28 h-[7.5rem] pl-[0.6875rem] pr-3 pt-[1.0625rem] pb-3 bg-[#03172b]/30 flex-col justify-end items-center gap-[0.6875rem] inline-flex cursor-pointer" @click="handleClick(5,'ZoomOut')"> 
        <div class="w-14 h-14 relative flex-col justify-start items-start flex">
          <img class="w-full h-full" src="@/assets/menu/zoom-out.svg" alt="">
        </div>
        <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Zoom Out</div>
      </div>
      <div class="self-stretch rounded-2xl flex-col justify-end items-end gap-1 inline-flex overflow-hidden mt-4">
        <div class="flex-col justify-end items-end gap-2 flex" @click="handlerBack">
          <div
            class="h-[7.3125rem] px-7 pt-3.5 pb-3 bg-[#03172b]/30 rounded-2xl flex-col justify-center items-start gap-[0.6875rem] flex cursor-pointer">
            <div class="self-stretch h-14 px-1 pt-2 justify-center items-center inline-flex">
              <div class="w-12 h-12 relative flex-col justify-start items-start flex overflow-hidden">
                <img class="w-full h-full" src="@/assets/menu/home.svg" alt="">
              </div>
            </div>
            <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Home</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-72 px-6 pt-6 pb-4 rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[2rem] justify-end items-start gap-2 inline-flex absolute top-[22%] right-[120%] translate-y-[0%] " style="background: rgba(0, 17, 26, 0.40);"
      :class="readViewModel ? 'scaleUp' : 'scale-0'">
      <div class="p-4 rounded-2xl flex-col justify-start items-start gap-6 inline-flex cursor-pointer"
        @click="handleClick(0, 'readViewModel')">
        <div class="h-[13.5rem] flex-col justify-center items-start gap-6 flex">
          <div class="w-40 h-40 relative">
            <img class="  absolute rounded-xl transition-all ease-in-out"
              :class="count == 0 ? 'w-32 h-32 left-[1rem] top-[1rem]' : 'w-40 h-40 left-0 top-0'"
              src="@/assets/menu/Image1.png" />
            <div class="w-40 h-40 left-0 top-0 absolute opacity-1 rounded-xl transition-all ease-in-out"
              :class="count == 0 ? 'border-[0.25rem] border-[#8E3CE1]' : 'border-none'" :style="count == 0 ? '' : ''"></div>
            <div class="w-40 h-40 left-0 top-0 absolute rounded-xl"></div>
          </div>
          <div
            class="w-40 h-[2rem] text-center text-white text-[2rem] font-['semibold'] font-['Titillium Web'] leading-[2rem]">
            Satellite</div>
        </div>
      </div>
      <div class="p-4 rounded-2xl flex-col justify-start items-start gap-6 inline-flex cursor-pointer"
        @click="handleClick(1, 'readViewModel')">
        <div class="self-stretch h-[13.5rem] flex-col justify-start items-start gap-6 flex">
          <div class="w-40 h-40 relative">
            <img class="absolute rounded-xl transition-all ease-in-out"
              :class="count == 1 ? 'w-32 h-32 left-[1rem] top-[1rem]' : 'w-40 h-40 left-0 top-0'"
              src="@/assets/menu/Image2.png" />
            <div class="w-40 h-40 left-0 top-0 absolute opacity-1 rounded-2xl transition-all ease-in-out"
              :class="count == 1 ? 'border-[0.25rem] border-[#8E3CE1]' : 'border-none'" :style="count == 1 ? '' : ''">
            </div>
          </div>
          <div
            class="h-[2rem] self-stretch text-center text-white text-[2rem] font-['semibold'] font-['Titillium Web'] leading-[2rem]">
            Xray</div>
        </div>
      </div>
    </div>
    <div
      class="h-72 px-6 pt-6 pb-4 rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[2rem] justify-end items-start gap-2 inline-flex absolute top-[0%] right-[120%] translate-y-[0%] " style="background: rgba(0, 17, 26, 0.40);"
      :class="trafficType ? 'scaleUp1' : 'scale-0'">
      <div class="p-4 rounded-2xl flex-col justify-start items-start gap-6 inline-flex cursor-pointer"
        @click="handleClick(2, 'trafficType')">
        <div class="h-[13.5rem] flex-col justify-center items-start gap-6 flex">
          <div class="w-40 h-40 relative">
            <img class="  absolute rounded-xl transition-all ease-in-out"
              :class="counts == 2 ? 'w-32 h-32 left-[1rem] top-[1rem]' : 'w-40 h-40 left-0 top-0'"
              src="@/assets/menu/satellite.svg" />
            <div class="w-40 h-40 left-0 top-0 absolute opacity-1 rounded-xl transition-all ease-in-out"
              :class="counts == 2 ? 'border-[0.25rem] border-[#8E3CE1]' : 'border-none'" :style="counts == 2 ? '' : ''"></div>
            <div class="w-40 h-40 left-0 top-0 absolute rounded-xl"></div>
          </div>
          <div
            class="w-40 h-[2rem] text-center text-white text-[2rem] font-['semibold'] font-['Titillium Web'] leading-[2rem]">
            Metro</div>
        </div>
      </div>
      <div class="p-4 rounded-2xl flex-col justify-start items-start gap-6 inline-flex cursor-pointer"
        @click="handleClick(3, 'trafficType')">
        <div class="self-stretch h-[13.5rem] flex-col justify-start items-start gap-6 flex">
          <div class="w-40 h-40 relative">
            <img class="absolute rounded-xl transition-all ease-in-out"
              :class="counts == 3 ? 'w-32 h-32 left-[1rem] top-[1rem]' : 'w-40 h-40 left-0 top-0'"
              src="@/assets/menu/xray.svg" />
            <div class="w-40 h-40 left-0 top-0 absolute opacity-1 rounded-2xl transition-all ease-in-out"
              :class="counts == 3 ? 'border-[0.25rem] border-[#8E3CE1]' : 'border-none'" :style="counts == 3 ? '' : ''">
            </div>
          </div>
          <div
            class="h-[2rem] self-stretch text-center text-white text-[2rem] font-['semibold'] font-['Titillium Web'] leading-[2rem]">
            Road</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, defineEmits, watch, computed ,onMounted} from "vue"
import { useRouter } from "vue-router"
const props = defineProps({
  type: {
    tyep: String,
    default: ""
  }
})
const emit = defineEmits(['handlerClickTrafficMenu'])
const router = useRouter()
const { AlertStore } = inject("store");
//replace this with your actual data
const count = ref(0)
const counts=ref(2)
const countWhite = ref([6, 7])
const readViewModel = ref(false)
const trafficType = ref(false)
const defaultColor=ref("#FFFFFF")

const alertMessage = computed({
  get() {
    return AlertStore.state.alertMessage
  }
})
const handlerTrafficType = () => {
  defaultColor.value="#fff"
  trafficType.value = !trafficType.value
  readViewModel.value = false
}
const handlerReadViewModel = () => {
  defaultColor.value="#fff"
  readViewModel.value = !readViewModel.value
  trafficType.value = false

}

// ue.interface.jsfunc = (data) => {
//   console.log("jsfunc", data);
//   if (data.Type == "Time") {
//     sliderValue.value = data.Value
//   } else if (data.Type == "Security" && data.Data == "Scene1" && data.Value == 2) {
//     AlertStore.methods.setAlertMessage(true)
//   }
// }

const handleClick = (index, type) => {
  
  if (index == count.value||index == counts.value) {
    // alert('x2')
    // count.value = -1
    // ue4('data', { "msg": { "Type": type, "Status": "On" } });
    // return
  }
  if(index>1){
    counts.value = index
  }else{
  count.value = index
  }
  handlerSwitch(index)
  // ue4('data', { "msg": { "Type": type, "Status": "Off" } });
  trafficType.value = false
  readViewModel.value = false
}

const handlerSwitch = (index) => {
  // alert(index)
  switch (index) {
    case 0:
      ue4('data', { "Type": "Mobility", "Status": "TrafficType_Satellite" })
      console.log("1")
      break;
    case 1:
      ue4('data', { "Type": "Mobility", "Status": "TrafficType_Xray" })
      console.log("2")
      break;
    case 2:
      ue4('data', { "Type": "Mobility", "Status": "TrafficType_Metro" })
      console.log("3")
      emit('handlerClickTrafficMenu', 'readViewModel')
      break;
      case 3:
      ue4('data', { "Type": "Mobility", "Status": "TrafficType_Road" })
      console.log("4")
      emit('handlerClickTrafficMenu', 'trafficType')
      break;
      case 4:
      ue4('data', { "Type": "Zoom", "Value": "In" });
      break;
      case 5:
      // alert('SEND:' + `ue4('data', { "Type": "Zoom", "Value": "Out" });`)
      ue4('data', { "Type": "Zoom", "Value": "Out" });
      break;
   
    default:
      break;
  }
}
const handlerBack = () => {
  router.push("/")
  let typeValue = ""
  if (props.type == "Facilities") {
    typeValue = "FM"
  } else {
    typeValue = props.type

  }
  ue4('data', { "Type": "Mobility", "Status": "Home" });
}
onMounted(()=>{
  ue4('data', { "Type": "Mobility", "Status": "TrafficType_Satellite" })
})
</script>
<style lang="scss" scoped>
.scaleUp {
  transform-origin: top right;
  /* 设置动画的起始点为左下角 */
  animation: scaleUp .5s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(0) translate(0%, 0%);
  }

  100% {
    transform: scale(1) translate(0%, 0%);
  }
}

.scaleUp1 {
  transform-origin: top right;
  /* 设置动画的起始点为左下角 */
  animation: scaleUp .5s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(0) translate(0%, 0%);
  }

  100% {
    transform: scale(1) translate(0%, 0%);
  }
}

:deep(.ant-slider-track) {
  width: 0.3094rem;
  height: 21.2853rem;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 19.79%, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%) !important;
}

:deep(.ant-slider-rail) {
  width: 0.3094rem;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 19.79%, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%);
}

:deep(.ant-slider-handle) {
  width: 3.0938rem !important;
  height: 3.0938rem !important;
  flex-shrink: 0;
  box-shadow: none !important;
}

:deep(.ant-slider-handle)::after {
  width: 3.0938rem !important;
  height: 3.0938rem !important;
  flex-shrink: 0;
  box-shadow: none !important;
}

:deep(.ant-slider-handle)::before {
  width: 3.0938rem;
  height: 3.0938rem;
  flex-shrink: 0;
  inset-inline-start: 0 !important;
  inset-block-start: 0 !important;
}

:deep(.ant-slider-handle):hover::after {
  width: 3.0938rem;
  height: 3.0938rem;
  flex-shrink: 0;
  box-shadow: none !important;
  inset-inline-start: 0 !important;
  inset-block-start: 0 !important;
}

:deep(.ant-slider-handle):hover::before {
  width: 3.0938rem;
  height: 3.0938rem;
  flex-shrink: 0;
  inset-inline-start: 0 !important;
  inset-block-start: 0 !important;
}

:deep(.ant-slider-handle):focus::before {
  width: 3.0938rem;
  height: 3.0938rem;
  flex-shrink: 0;
  inset-inline-start: 0 !important;
  inset-block-start: 0 !important;
}

:deep(.ant-slider-handle):focus::after {
  width: 3.0938rem;
  height: 3.0938rem;
  flex-shrink: 0;
  inset-inline-start: 0 !important;
  inset-block-start: 0 !important;
}

:deep(.ant-slider-vertical) {
  font-family: "29LT Azer";
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  /* 70px */
  position: static;
}
</style>
<style>
.ant-tooltip-inner {
  font-size: 1.6rem !important;
  font-family: "29LT Azer";
  font-style: normal;
  font-weight: 400;
  text-align: center !important;
}
</style>