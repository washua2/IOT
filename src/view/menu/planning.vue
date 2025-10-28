<template>
  <div>
    <div class="w-[7rem] h-[31.875rem] flex-col justify-start items-start gap-4 inline-flex">
      <div class="relative">
        <div
          class="w-[7rem] h-[7.3125rem] px-5 py-[0.8125rem]  flex-col justify-center items-center gap-2.5 flex  cursor-pointer"
          :class="isSelectLocation ? 'active' : 'bg-[#03172b]/30 rounded-2xl'" @click="handlerArcGIS">
          <div class="w-12 h-12 relative">
            <img class="w-full h-full" src="@/assets/menu/arcgis.svg" alt="">
          </div>
          <div class="self-stretch text-center text-white text-xl font-medium font-['Roboto'] leading-normal"
            style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">ArcGIS
          </div>
        </div>
        <div
          class="h-[7.3125rem] bg-[#03172b]/30 rounded-2xl absolute right-[8rem] top-0 flex items-center justify-center cursor-pointer overflow-hidden transition-[width] duration-300 ease-in-out"
          :class="isSelectLocation ? 'w-[27.75rem]' : 'w-0'" v-show="false">
          <div class="w-[21.4375rem] h-[3.0625rem] text-center text-white text-[2rem] font-bold font-['Roboto'] leading-[150%] 
    whitespace-nowrap overflow-hidden text-ellipsis">
            Please select location
          </div>
        </div>

      </div>
      <div
        class="w-[7rem] h-[7.3125rem] px-5 py-[0.8125rem]  flex-col justify-center items-center gap-2.5 flex cursor-pointer"
        :class="isCFD ? 'active' : 'bg-[#03172b]/30 rounded-2xl'" @click="handlerCFD">
        <div class="w-12 h-12 relative">
          <img class="w-full h-full" src="@/assets/menu/cfd.svg" alt="">
        </div>
        <div class="self-stretch text-center text-white text-xl font-medium font-['Roboto'] leading-normal"
          style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">CFD</div>
      </div>
      <div class="rounded-2xl flex-col justify-end items-end gap-1 flex overflow-hidden">
        <div
          class="px-[1.1875rem] pt-[1.1462rem] pb-3 bg-[#03172b]/30 flex-col justify-end items-center gap-[0.1538rem] box-border flex">
          <div class="w-[3.25rem] h-[3.25rem] relative flex-col justify-start items-start flex">
            <img class="w-full h-full" src="@/assets/menu/zoom-in.svg" alt="">
          </div>
          <div class="text-white text-xl font-medium font-['Roboto'] leading-normal"
            style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Zoom In</div>
        </div>
        <div
          class="pl-[0.6875rem] pr-3 pt-[1.0625rem] pb-3 bg-[#03172b]/30 flex-col justify-end items-center gap-[0.1875rem] flex">
          <div class="w-14 h-14 relative flex-col justify-start items-start flex">
            <img class="w-full h-full" src="@/assets/menu/zoom-out.svg" alt="">
          </div>
          <div class="text-white text-xl font-medium font-['Roboto'] leading-normal"
            style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Zoom Out</div>
        </div>
      </div>

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
          <div class="text-white text-xl font-medium font-['Roboto'] leading-normal"
            style="text-shadow: 0px 0.125rem 0.3125rem rgba(0, 0, 0, 0.99);">Home</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, defineEmits, watch, computed } from "vue"
import { useRouter } from "vue-router"
const props = defineProps({
  type: {
    tyep: String,
    default: ""
  }
})
const router = useRouter()
const isSelectLocation = ref(false)
const isCFD = ref(false)
const handlerBack = () => {
  router.push("/")
  ue4('data', { "Type": "planning", "Status": "Home" });
}
const handlerArcGIS = () => {
  isSelectLocation.value = !isSelectLocation.value
  isCFD.value = false
  sendUE()
}
const handlerCFD = () => {
  isCFD.value = !isCFD.value
  isSelectLocation.value = false
  sendUE()
}
const sendUE = () => {
  ue4('planning', { "arcgis": isSelectLocation.value, "cfd": isCFD.value });
}

</script>
<style scoped>
.active {
  border-radius: 1rem;
  border: 0.125rem solid #7118CC;
  background: rgba(28, 5, 51, 0.66);
}
</style>