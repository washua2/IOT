<template>
  <div class="w-[48rem] flex flex-col gap-[0.25rem]">
    <div
      class="w-[48rem] h-[9.1875rem] card-tab pt-[4rem] pb-[2.5625rem] pl-[2.8125rem] pr-[2.875rem] flex items-center justify-between">
      <div class="h-[2.625rem] text-primary text-[2.625rem] font-bold font-['29LT Azer'] uppercase leading-[100%]">video
        analytics
      </div>
    </div>
    <div class="w-[48rem] h-[107.4375rem] pt-[2.625rem] px-[2.5rem] box-border card-panel">
      <!-- 标头 -->
      <div class="flex items-center justify-between">
        <div
          class="text-center text-[#e5b0ff] text-[2.125rem] font-bold font-['29LT Azer'] uppercase leading-[2.55rem] tracking-widest">
          Crowd Density</div>
        <div class="flex items-center">
          <button id="dropdownDatabase" data-dropdown-toggle="dropdown"
            class="w-[15.0119rem] h-[3.7269rem] pl-[1.035rem] pr-[0.8281rem] border border-[#e5b0ff] backdrop-blur-[1.035rem] flex-col justify-center items-center gap-[4.9175rem] inline-flex">
            <div class="self-stretch justify-between items-center inline-flex" id="dropdownDatabase"
              data-dropdown-toggle="dropdown-opsyswokpis">
              <div class="justify-start items-center gap-[0.6212rem] flex">
                <div class="text-right text-white text-[1.3125rem] font-bold font-['29LT Azer'] leading-[250%]">{{
                  dataByDate }}</div>
              </div>
              <div class="w-[1.6563rem] h-[1.6563rem] relative  overflow-hidden">
                <img src="@/assets/icon/chevron-down.svg" class="w-full h-full" alt="" />
              </div>
            </div>
          </button>
          <div id="dropdown-opsyswokpis"
            class="z-10 hidden w-[15.0119rem] pl-[1.035rem] pr-[0.8281rem] border border-[#e5b0ff] backdrop-blur-[1.035rem]">
            <ul class="py-2 text-[1.75rem] text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" @click="selectDateOptions('Yearly')"
                  class="block px-4 py-2 hover:bg-[#e5b0ff] text-white">Yearly</a>
              </li>
              <li>
                <a href="#" @click="selectDateOptions('Monthly')"
                  class="block px-4 py-2 hover:bg-[#e5b0ff] text-white">Monthly</a>
              </li>
              <li>
                <a href="#" @click="selectDateOptions('Weekly')"
                  class="block px-4 py-2 hover:bg-[#e5b0ff] text-white">Weekly</a>
              </li>
              <li>
                <a href="#" @click="selectDateOptions('Daily')"
                  class="block px-4 py-2 hover:bg-[#e5b0ff] text-white">Daily</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 图表 -->
      <div
        class="w-[43rem] h-[11.8125rem] p-5 mt-[2.5rem] bg-[#260030]/20 rounded-2xl backdrop-blur-[1.25rem] flex-col justify-between items-start inline-flex">
        <div class="self-stretch h-[2.6875rem] flex-col justify-start items-start flex">
          <div class="w-[24.6875rem] text-white text-[2.125rem] font-normal font-['29LT Azer'] leading-[2.6563rem]">
            Total Crowd</div>
        </div>
        <div class="self-stretch justify-start items-start gap-5 inline-flex pb-[1.25rem]">
          <div class="w-[28.3125rem] flex-col justify-center items-start gap-1 inline-flex">
            <div class="self-stretch h-[4.3125rem] flex-col justify-start items-start gap-2.5 flex">
              <div class="w-[23.375rem] justify-start items-end gap-2.5 inline-flex">
                <div class="justify-start items-end flex">
                  <div class="text-white text-[4.375rem] font-normal font-['29LT Azer'] leading-[4.375rem]">19,611</div>
                </div>
              </div>
            </div>
            <div class="justify-start items-center gap-[0.2125rem] inline-flex">
              <div class="justify-start items-center gap-[0.2125rem] flex">
                <div class="w-[1.2731rem] h-[1.2731rem] relative  overflow-hidden"><img class="w-full h-full"
                    src="@/assets/icon/arrow-up.svg" alt=""></div>
                <div class="text-[#0e9f6e] text-[1.625rem] font-normal font-['29LT Azer'] leading-[200%]">10%</div>
              </div>
              <div class="text-white text-[1.625rem] font-normal font-['29LT Azer'] leading-[100%]">vs Yesterday</div>
            </div>
          </div>
          <div class="w-[13.25rem] h-[5.5rem] flex-col justify-start items-start inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.5625rem" height="5.875rem" viewBox="0 0 217 94"
              fill="none">
              <path
                d="M3.41406 91C12.7373 88.1486 19.9994 69.1968 31.1237 66.2742C37.0529 64.7164 41.8028 68.302 47.1023 73.0128C52.3611 78.4872 50.9599 81.8939 62.8786 85.5256C73.8007 85.0873 75.6916 53.5206 85.3295 54.7621C94.9675 56.0036 98.8184 15.6006 108.994 18.8435C119.107 18.8435 121.273 12.5453 130.838 28.4358C140.403 44.3264 149.575 6.44546 161.582 3.20248C173.589 -0.0404928 176.109 36.7715 181.808 35.4743C187.506 34.1771 192.7 60.843 197.584 64.4102C202.468 67.9775 203.79 54.2436 214.169 54.2436"
                stroke="#E6B0FF" stroke-width="5.34791" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

      </div>
      <!-- 图表 -->
      <div class="w-[43rem] h-[28.5rem] my-[2.5rem]" id="videoAnylytics">

      </div>
      <!-- 数据 -->
      <div class="w-full mb-[2.5rem]">
        <div
          class="w-full h-[3.75rem] p-3 border-b-[0.0625rem] border-white/75 justify-start items-start gap-5 inline-flex">
          <div class="w-[15.625rem] h-9 opacity-80 justify-start items-center gap-2 flex">
            <div class="text-white text-[1.75rem] font-bold font-['29LT Azer'] leading-9">Location</div>
          </div>
          <div class="w-[11.25rem] h-9 opacity-80 justify-start items-center gap-2 flex">
            <div class="text-white text-[1.75rem] font-bold font-['29LT Azer'] leading-9">Crowd</div>
          </div>
          <div class="w-[5.3125rem] h-9 opacity-80 justify-start items-center gap-2 flex">
            <div class="text-white text-[1.75rem] font-bold font-['29LT Azer'] leading-9">IDS</div>
          </div>
          <div class="h-9 opacity-80 justify-start items-center gap-2 flex">
            <div class="text-white text-[1.75rem] font-bold font-['29LT Azer'] leading-9">Fire</div>
          </div>
        </div>
        <div class="mt-[0.3125rem]">

          <div class="h-[4.25rem] p-3 justify-start items-start gap-5 inline-flex " v-for="(item, index) in echartData"
            :key="index">
            <div class="w-[15.625rem] h-9 opacity-80 justify-start items-center gap-2 flex">
              <div class="grow shrink basis-0 text-white text-[1.75rem] font-normal font-['29LT Azer'] leading-9">
              {{ item.location }}
              </div>
            </div>
            <div class="w-[11.25rem] h-9 opacity-80 justify-start items-center gap-2 flex">
              <div class="text-white text-[1.75rem] font-normal font-['29LT Azer'] leading-9">{{ item.Crowd }}</div>
            </div>
            <div class="w-[5.3125rem] h-11 opacity-80 justify-start items-center gap-2 flex">
              <div class="flex-col justify-start items-start inline-flex">
                <div class="p-[0.3125rem] flex-col justify-start items-start gap-2.5 flex">
                  <div class="w-[2.125rem] h-[2.125rem] relative">
                    <img class="w-full h-full" src="@/assets/icon/tick.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="h-11 opacity-80 justify-start items-center gap-2 flex">
              <div class="flex-col justify-start items-start inline-flex">
                <div class="p-[0.3125rem] flex-col justify-start items-start gap-2.5 flex">
                  <div class="w-[2.125rem] h-[2.125rem] relative">
                    <img class="w-full h-full" src="@/assets/icon/tick.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="w-[43rem] h-8 justify-between items-center inline-flex">
        <div
          class="text-center text-[#e5b0ff] text-[2.125rem] font-bold font-['29LT Azer'] uppercase leading-[2.55rem] tracking-widest">
          Thermal Overview</div>
      </div>
      <div class="w-[43rem] h-[0rem] border-t-[0.0625rem] border-[#e5b0ff] mt-[1rem] mb-[2.5rem]"></div>
      <div class="w-full flex gap-[1.875rem]">
        <div
          class="w-[13.0625rem] h-[11.4375rem] p-5 bg-[#270031]/60 backdrop-blur-[1.25rem] flex-col justify-start items-start gap-[1.875rem] inline-flex"
          v-for="(item, index) in thermalOverviewData" :key="index">
          <div class="self-stretch h-[2.6875rem] flex-col justify-start items-start flex">
            <div
              class="w-[13.3125rem] text-gray-300 text-[2.125rem] font-normal font-['29LT Azer'] leading-[2.6563rem]">
              {{ item.title }}</div>
          </div>
          <div class="self-stretch h-[4.375rem] flex-col justify-start items-start gap-2.5 flex">
            <div class="self-stretch justify-between items-end inline-flex">
              <div
                class="grow shrink basis-0 text-white text-[4.375rem] font-normal font-['29LT Azer'] leading-[4.375rem]">
                {{ item.data }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  initDropdowns,
} from "flowbite";
import { renderChart } from "@/utils/echarts/videoAnylytics.js"
import { ref, onMounted } from "vue"
const dataByDate = ref('Month')
const echartData = ref([
  {
    location: "Northern Courtyard",
    Crowd: "5,464",
    IDS: true,
    Fire: true
  }, {
    location: "Southern Courtyard",
    Crowd: "2,059",
    IDS: true,
    Fire: true
  }, {
    location: "Western Courtyard",
    Crowd: "8,494",
    IDS: true,
    Fire: true
  }, {
    location: "Eastern Courtyard",
    Crowd: "3,594",
    IDS: true,
    Fire: true
  }
])
const thermalOverviewData=ref([{
  title:"Humidity",
  data:"45%"
},{
  title:"Heat Index",
  data:"43°c"
},{
  title:"UV Index",
  data:"High"
}])

onMounted(() => {
  //flowbite init
  initDropdowns()
  renderChart("videoAnylytics")
});
</script>
<style lang="scss" scoped></style>
