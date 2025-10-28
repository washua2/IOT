<template>
    <div class="w-[46.625rem] h-[117.9375rem] rounded-[1rem] br8 relative transition-[left] duration-300 ease-in-out "
        :class="isLeft ? 'left-[-51.5rem]' : 'left-0'" style="background:rgba(0, 17, 26, 0.42)">
        <!-- 标头 -->
        <div class="h-[6.6875rem] px-[2rem] flex items-center justify-between">
            <div class="flex items-center gap-[1.375rem]">
                <div>
                    <img src="@/assets/lod3Icon/environmental.svg" alt="" class="w-[2.875rem] h-[2.625rem]">
                </div>
                <div class="justify-start text-white text-[2.25rem] font-['semibold'] tracking-wide">
                    Environmental </div>
            </div>

            <div class="flex items-center gap-[1.25rem]">
                <div class="justify-start text-white text-[1.75rem] font-['light'] tracking-wide">Data
                </div>
                <div class="w-[5rem] h-[2.5rem] cursor-pointer z-10 relative" @click="switchStatus = !switchStatus">
                    <div
                        class="w-[5rem] h-[2.5rem] left-0 top-0 absolute bg-[#595959B2] rounded-[5rem] cursor-pointer z-1">
                    </div>
                    <div class="w-[2rem] h-[2rem] top-[0.25rem] absolute bg-white rounded-[5rem] cursor-pointer z-10 transition-[left] ease-linear"
                        :class="switchStatus ? 'left-[2.6875rem]' : 'left-[0.3125rem]'"></div>
                </div>
                <div class="justify-start text-white text-[1.75rem] font-['light'] tracking-wide">CCTV
                </div>
            </div>
        </div>
        <div class="w-[46.625rem] h-0 outline outline-[0.125rem] outline-offset-[-0.0625rem] outline-white/10">
        </div>
        <div v-if="!switchStatus" :key="switchStatus">
            <!-- temperature -->
            <div class="pt-[2.25rem] px-[3.125rem] flex items-center gap-[3.9375rem]">
                <div>
                    <div
                        class="w-full text-center justify-start text-white/80 text-[1.75rem] font-['light'] mb-[1.4375rem]">
                        Temperature</div>
                    <div
                        class="w-[11.375rem] h-[11.375rem] flex items-center justify-center opacity-80 bg-sky-950/25 rounded-full shadow-[inset_0rem_0rem_2.625rem_0.875rem_rgba(27,126,242,0.21)] relative">
                        <div
                            class="w-[10.4138rem] h-[10.4138rem] rounded-full outline outline-[0.25rem] outline-offset-[-0.125rem] outline-blue-400 flex items-center justify-center">
                            <div class="w-[4.75rem] flex items-center justify-center flex-wrap relative">
                                <img src="@/assets/lod3Icon/temperature.svg"
                                    class="w-[3.125rem] h-[5.125rem] absolute top-[-5rem]" alt="">
                                <div class="justify-start absolute top-[-0.875rem]">
                                    <span class="text-white text-[2.25rem] font-['bold'] ">24 </span>
                                    <span class="text-white/70 text-[1.5rem] font-['medium'] "> ℃</span>
                                </div>
                            </div>
                            <div
                                class="w-[12.875rem] h-[3rem] flex items-center justify-center bg-gradient-to-l from-blue-600/0 via-blue-600/40 to-blue-600/0 border-[0.125rem] border-blue-400/0 absolute bottom-0">
                                <div class="justify-center text-white text-[1.5rem] font-['light']  leading-loose">
                                    Range:
                                    20-26℃</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="w-full text-center justify-start text-white/80 text-[1.75rem] font-['light'] mb-[1.4375rem]">
                        Air Quality</div>
                    <div
                        class="w-[11.375rem] h-[11.375rem] flex items-center justify-center opacity-80 bg-sky-950/25 rounded-full shadow-[inset_0rem_0rem_2.625rem_0.875rem_rgba(27,126,242,0.21)] relative">
                        <div
                            class="w-[10.4138rem] h-[10.4138rem] rounded-full outline outline-[0.25rem] outline-offset-[-0.125rem] outline-blue-400 flex items-center justify-center">
                            <div class="w-[4.75rem] flex items-center justify-center flex-wrap relative">
                                <img src="@/assets/lod3Icon/air.svg"
                                    class="w-[3.75rem] h-[5.125rem] absolute top-[-4.6875rem]" alt="">
                                <div class="justify-start absolute top-[-0.4375rem]">
                                    <span class="text-[#1EA262] text-[1.75rem] font-['bold'] ">Good</span>
                                </div>
                            </div>
                            <div
                                class="w-[12.875rem] h-[3rem] flex items-center justify-center bg-gradient-to-l from-blue-600/0 via-blue-600/40 to-blue-600/0 border-[0.125rem] border-blue-400/0 absolute bottom-0">
                                <div class="justify-center text-white text-[1.5rem] font-['light']  leading-loose">AOI:
                                    82
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="w-full text-center justify-start text-white/80 text-[1.75rem] font-['light'] mb-[1.4375rem]">
                        Occupancy</div>
                    <div
                        class="w-[11.375rem] h-[11.375rem] flex items-center justify-center opacity-80 bg-sky-950/25 rounded-full shadow-[inset_0rem_0rem_2.625rem_0.875rem_rgba(27,126,242,0.21)] relative">
                        <div
                            class="w-[10.4138rem] h-[10.4138rem] rounded-full outline outline-[0.25rem] outline-offset-[-0.125rem] outline-blue-400 flex items-center justify-center">
                            <div class="w-[4.75rem] flex items-center justify-center flex-wrap relative">
                                <img src="@/assets/lod3Icon/occuрanсy.svg"
                                    class="w-[3.75rem] h-[5.125rem] absolute top-[-5rem]" alt="">
                                <div class="justify-start absolute top-[-0.875rem]">
                                    <span class="text-white text-[2.25rem] font-['bold'] ">78 </span>
                                    <span class="text-white/70 text-[1.5rem] font-['medium'] "> %</span>
                                </div>
                            </div>
                            <div
                                class="w-[12.875rem] h-[3rem] flex items-center justify-center bg-gradient-to-l from-blue-600/0 via-blue-600/40 to-blue-600/0 border-[0.125rem] border-blue-400/0 absolute bottom-0">
                                <div class="justify-center text-white text-[1.5rem] font-['light']  leading-loose">
                                    1,247/1600</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Environmental Conditions -->
            <div class="px-[1.875rem] mt-[4.3125rem]">
                <div class="flex items-center gap-[1rem] mb-[1.875rem]">
                    <div
                        class="w-[1.5rem] h-[1.5rem] bg-slate-950 rounded-full border-[0.0938rem] border-stone-600 flex items-center justify-center">
                        <div
                            class="w-[0.8125rem] h-[0.8125rem] bg-orange-400 rounded-full border-[0.0938rem] border-fuchsia-50">
                        </div>
                    </div>
                    <div class="justify-start text-white text-[1.875rem] font-['medium']">Environmental Conditions</div>
                </div>
                <div id="environmentalConditions1" class="w-[41.3125rem] h-[22.5rem]"></div>
            </div>
            <div class="px-[1.5rem] mt-[2.5rem]">
                <img src="@/assets/images/lod3/1.png" class="object-contain" alt="">
            </div>
        </div>
        <div v-if="switchStatus" :key="switchStatus">
            <Cctvbox />
        </div>


    </div>
</template>
<script setup>
import Cctvbox from "./Cctvbox.vue"
import { renderChart } from "@/utils/echarts/environmentalConditions1.js"
import * as echarts from "echarts"; // 导入 echarts 库
import { ref, onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
const switchStatus = ref(false)
const isLeft = ref(true)

watch(switchStatus, async () => {
    if (!switchStatus.value) {
        await nextTick()
        renderChart('environmentalConditions1') // ✅ 延迟一点再渲染
    } else {
        const workOrderElement = document.getElementById("environmentalConditions1");
        if (workOrderElement) {
            const chartInstance = echarts.getInstanceByDom(workOrderElement);
            if (chartInstance) {
                chartInstance.dispose();
            }
        }
    }
})
onMounted(async () => {
    setTimeout(() => {
        isLeft.value = false
    }, 100)
    await nextTick()
    renderChart('environmentalConditions1')

})
onBeforeUnmount(() => {
    const workOrderElement = document.getElementById("environmentalConditions1");
    if (workOrderElement) {
        const chartInstance = echarts.getInstanceByDom(workOrderElement);
        if (chartInstance) {
            chartInstance.dispose();
        }
    }
})
</script>