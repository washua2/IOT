<template>
  <div>
    <div class="w-28 h-[17.0625rem] flex-col justify-center items-start gap-9 inline-flex">
      <div
        class="w-28 h-[7.5rem] relative bg-[#583d75]/30 rounded-2xl border-2 border-[#7118cc] flex-col justify-center items-center flex cursor-pointer" v-if="type=='Security'">
        <div class="w-14 h-14 relative">
          <img class="w-full h-full" src="@/assets/menu/security.svg" alt="">
        </div>
        <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Security</div>
      </div>
      <div
        class="w-28 h-[7.5rem] relative bg-[#583d75]/30 rounded-2xl border-2 border-[#7118cc] flex-col justify-center items-center flex cursor-pointer" v-else-if="type=='Facilities'">
        <div class="w-14 h-14 relative">
          <img class="w-full h-full" src="@/assets/menu/fm.svg" alt="">
        </div>
        <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Facilities</div>
      </div>
      <div
        class="w-28 h-[7.5rem] relative bg-[#583d75]/30 rounded-2xl border-2 border-[#7118cc] flex-col justify-center items-center flex cursor-pointer" v-else-if="type=='Aviation'">
        <div class="w-14 h-14 relative">
          <img class="w-full h-full" src="@/assets/menu/aviation.svg" alt="">
        </div>
        <div class="text-white text-xl font-medium font-['Roboto'] leading-normal" style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Aviation</div>
      </div>
      <div class="self-stretch rounded-2xl flex-col justify-end items-end gap-1 inline-flex overflow-hidden">
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
  </div>

</template>
<script setup>
import { ref, inject, defineEmits, watch, computed,defineProps} from "vue"
import { useRouter } from "vue-router"
const props=defineProps({
  type:{
    tyep:String,
    default:""
  }
})
const router = useRouter()
const emit = defineEmits(['handlerClickMenu'])
//replace this with your actual data
const count = ref(2)
const countWhite = ref([6, 7])


const handleClick = (index, type) => {
  if (index == count.value && countWhite.value.indexOf(index) == -1) {
    count.value = -1
    emit('handlerClickMenu', { index: -1, type })
    // ue4('data', { "msg": { "Type": type, "Status": "On" } });
    return
  }
  count.value = index
  // ue4('data', { "msg": { "Type": type, "Status": "Off" } });
  emit('handlerClickMenu', { index, type })
}
const handlerBack=()=>{
  console.log("props.type",props.type)
  router.push("/")
  let typeValue=""
  if(props.type=="Facilities"){
    typeValue="FM"
  }else{
    typeValue=props.type
    
  }
    ue4('data',{ "Type": typeValue, "Status": "Home" });
}
</script>
<style lang="scss" scoped>
.scaleUp {
  transform-origin: bottom left;
  /* 设置动画的起始点为左下角 */
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