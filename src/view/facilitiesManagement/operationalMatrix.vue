<template>
  <div class="w-[44.6563rem] relative pl-[0.8988rem]">
    <!-- 标题 -->
    <div class="w-[44.6563rem] h-[4.5081rem] relative">
      <div
        class="left-[5.3125rem] top-[0.125rem] absolute text-white text-[2.5rem] font-['semibold'] font-['medium'] tracking-wide">
        Operational Matrix</div>
      <div class="w-14 h-[3.125rem] left-0 top-0 absolute">
        <img class="w-[3.5rem] h-[3.125rem] top-[0.5681rem] absolute"
          src="@/assets/icon/operational-matrix.svg" />
      </div>
      <div class="left-[0] top-[2.6381rem] absolute">
        <svg xmlns="http://www.w3.org/2000/svg" width="44.6875rem" height="2.5rem" viewBox="0 0 715 40" fill="none">
          <path d="M0 38.1286H452.401L493.022 1.03906H714.5" stroke="url(#paint0_linear_8483_91503)" stroke-width="2" />
          <defs>
            <linearGradient id="paint0_linear_8483_91503" x1="-19.9442" y1="19.4017" x2="927.701" y2="6.40504"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.17" />
              <stop offset="0.385167" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.13" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
    <!--Indoor Environmental Quality  -->
    <div class="w-[43.665rem] h-[20.8125rem] relative mt-[3rem]">
      <div class="w-[31.25rem] h-[2.375rem] left-0 top-0 absolute">
        <div class="left-[3.625rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">
          Indoor Environmental Quality</div>
        <div class="w-[1.8125rem] h-[1.5306rem] left-0 top-[0.3381rem] absolute">
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-0 top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[1.3269rem] top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[0.6806rem] top-[1.045rem] absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
        </div>
      </div>
      <div class="w-[43.665rem] h-[7.3125rem] left-0 top-[4.875rem] absolute">
        <div class="w-[21.165rem] h-[7.3125rem] left-0 top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[18.0625rem] pr-[1.665rem] pt-[3.2375rem] pb-[1.125rem] left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" :style="text=='26.5'?'background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);':'background: linear-gradient(180deg, rgba(120, 0, 0, 0.21) 0%, rgba(180, 52, 3, 0.40) 100%);'">
          <img src="@/assets/operationalMatrix/temperature.svg" alt="" v-if="text=='26.5'">
          <img src="@/assets/operationalMatrix/temperature2.svg" alt="" v-else>
          </div>
          <div class="w-[9.6875rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Temperature</div>
            <div class="w-[6.6975rem] left-0 top-[2.5625rem] absolute" :class="text=='26.5'?'text-white':'text-[#FC4601]'"><span
                class="text-[2.5rem] font-['medium']">{{ text }} </span><span
                class="text-3xl font-normal font-['medium']"> </span><span
                class="text-2xl font-normal font-['medium']">℃</span></div>
          </div>
        </div>
        <div class="w-[21.165rem] h-[7.3125rem] left-[22.5rem] top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.8125rem] pr-[1.665rem] pt-[3.4375rem] pb-4 left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/humidity.svg" alt="">
          </div>
          <div class="w-[6.875rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Humidity</div>
            <div class="left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">36 </span><span
                class="text-white text-2xl font-normal font-['medium']">%</span></div>
          </div>
        </div>
      </div>
      <div class="w-[43.665rem] h-[7.3125rem] left-0 top-[14.5rem] absolute">
        <div class="w-[21.165rem] h-[7.3125rem] left-0 top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.1875rem] pr-[1.54rem] pt-[3.8125rem] pb-5 left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/co2.svg" alt="">
          </div>
          <div class="w-[8.25rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              CO2 level</div>
            <div class="left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">400 </span><span
                class="text-white text-2xl font-normal font-['medium']">PPM</span></div>
          </div>
        </div>
        <div class="w-[21.165rem] h-[7.3125rem] left-[22.5rem] top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.5rem] pr-[1.54rem] pt-[3.825rem] pb-[1.0625rem] left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/air-quality.svg" alt="">
          </div>
          <div class="w-[8.5625rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Air Quality</div>
            <div class="left-0 top-[2.5625rem] absolute text-white text-[2.5rem] font-['medium']">50</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Occupancy -->
    <div class="w-[43.665rem] h-[12.1875rem] relative mt-[4rem]">
      <div class="w-[14.0625rem] h-[2.375rem] left-0 top-0 absolute">
        <div class="left-[3.625rem] top-0 absolute text-white text-[2rem] font-['semibold'] font-['medium'] tracking-wide">
          Occupancy</div>
        <div class="w-[1.8125rem] h-[1.5306rem] left-0 top-[0.3381rem] absolute">
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-0 top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[1.3269rem] top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[0.6806rem] top-[1.045rem] absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
        </div>
      </div>
      <div class="w-[43.665rem] h-[7.3125rem] left-0 top-[4.875rem] absolute">
        <div class="w-[21.165rem] h-[7.3125rem] left-0 top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.5rem] pr-[1.7275rem] pt-[4.075rem] pb-[1.375rem] left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/space.svg" alt="">
          </div>
          <div class="w-[17.0125rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div
              class="w-[17.0125rem] left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Space utilization rate</div>
            <div class="w-[6.6975rem] left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">86 </span><span
                class="text-white text-3xl font-normal font-['medium']"> </span><span
                class="text-white text-2xl font-['light']">%</span></div>
          </div>
        </div>
        <div class="w-[21.165rem] h-[7.3125rem] left-[22.5rem] top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.3125rem] pr-[1.665rem] pt-[4.125rem] pb-[1.3125rem] left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/vacancy-rate.svg" alt="">
          </div>
          <div class="w-[10.5rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Vacancy rate</div>
            <div class="left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">18 </span><span
                class="text-white text-3xl font-normal font-['medium']"> </span><span
                class="text-white text-2xl font-['light']">%</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Energy Management -->
    <div class="w-[43.54rem] h-[11.75rem] relative mt-[4rem]">
      <div class="w-[23rem] h-[2.375rem] left-0 top-0 absolute">
        <div class="left-[3.5rem] top-0 absolute text-white text-[2rem] font-['semibold'] font-['medium'] tracking-wide">
          Energy Management</div>
        <div class="w-[1.8125rem] h-[1.5306rem] left-0 top-[0.4006rem] absolute">
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-0 top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[1.3269rem] top-0 absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
          <div
            class="w-[0.4856rem] h-[0.4856rem] left-[0.6806rem] top-[1.045rem] absolute bg-white shadow-[0rem_0rem_0.3125rem_0.0625rem_rgba(255,255,255,0.36)]">
          </div>
        </div>
      </div>
      <div class="w-[43.54rem] h-[7.3125rem] left-0 top-[4.4375rem] absolute">
        <div class="w-[21.165rem] h-[7.3125rem] left-0 top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.8125rem] pr-[1.79rem] pt-[4.025rem] pb-4 left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/real-time.svg" alt="">
          </div>
          <div class="w-[17.0125rem] h-[5.0625rem] left-[1.7725rem] top-[1.125rem] absolute">
            <div
              class="w-[17.0125rem] left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Real-time Power Use</div>
            <div class="left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">1,425 </span><span
                class="text-white text-2xl font-['light']">Kwh</span></div>
          </div>
        </div>
        <div class="w-[21.165rem] h-[7.3125rem] left-[22.375rem] top-0 absolute">
          <div
            class="w-[21.165rem] h-[8.3125rem] pl-[17.6025rem] pr-[2.0625rem] pt-[3.5875rem] pb-[1.125rem] left-0 top-0 absolute rounded-xl shadow-[0rem_0rem_0.25rem_0rem_rgba(13,30,34,1.00)] justify-end items-center inline-flex" style="background: linear-gradient(180deg, rgba(0, 12, 17, 0.40) 0%, rgba(0, 12, 17, 0.40) 100%);">
            <img src="@/assets/operationalMatrix/carbon-emissions-total.svg" alt="">
          </div>
          <div class="w-[18.1875rem] h-[5.0625rem] left-[1.5225rem] top-[1.125rem] absolute">
            <div class="left-0 top-0 absolute text-white/80 text-[1.625rem] font-['light'] tracking-wide">
              Carbon Emissions Total</div>
            <div class="left-0 top-[2.5625rem] absolute"><span
                class="text-white text-[2.5rem] font-['medium']">34.528 </span><span
                class="text-white text-3xl font-normal font-['medium']"> </span><span
                class="text-white text-2xl font-['light']">kg/co2</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Peak demand period -->
    <div class="w-[44.375rem] h-[16.875rem] relative mt-[2.375rem]">
      <div class="left-[0.0625rem] top-0 absolute text-white text-[2rem] font-['semibold'] font-['medium'] tracking-wide">
        Peak demand period</div>
      <div id="peak" class="w-[44.375rem] h-[12.125rem] left-0 top-[4.75rem] absolute">
       
      </div>
    </div>
  </div>
</template>
<script setup>
  import * as echarts from "echarts"; // 导入 echarts 库
  import { renderChart } from "@/utils/echarts/peakDemandPeriod.js"
  import { ref, onMounted ,watch,defineProps,onBeforeUnmount} from "vue"

const props = defineProps({
  alertWarningType3: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
})
  const count=ref(0)
  const text=ref("26.5")
  watch(()=>props.alertWarningType3,(val)=>{
    text.value="38.5"
  })
  watch(()=>props.progress,(val)=>{
    if(val==5){
      setTimeout(()=>{
        text.value="26.5"
      },1000)
    }
  })
  onMounted(() => {
    renderChart("peak")
  });
  onBeforeUnmount(() => {
    const workOrderElement = document.getElementById("peak");
    if (workOrderElement) {
      const chartInstance = echarts.getInstanceByDom(workOrderElement);
      if (chartInstance) {
        chartInstance.dispose();
      }
    }
  });
</script>