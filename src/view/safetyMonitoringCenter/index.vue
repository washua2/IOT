<template>
    <div>
        <div class="max-w-[240rem] flex items-end justify-between overflow-hidden">
            <div class="w-[46.625rem] h-[117.9375rem] relative transition-[left] duration-300 ease-in-out "
                :class="isLeft ? 'left-[-51.5rem]' : 'left-0'">
                <img src="@/assets/images/safetyMonitoringCenter/1.png" alt="" class="w-full h-full">
                <div class="px-[1.875rem] mt-[4.3125rem] absolute top-[35.1875rem] left-[0rem]">
                    <div id="environmentalConditions2" class="w-[41.3125rem] h-[24.375rem]"></div>
                </div>
            </div>
            <div class="w-[138.125rem] h-[37.5rem] ml-[-1.25rem] relative overflow-hidden">
                <img src="@/assets/images/lod3/2.png" alt="stadium-east-stand" class="w-[138.125rem] h-[37.5rem] absolute left-0
        transition-[bottom] duration-300 ease-in-out
        " :class="isBottom ? 'bottom-[-35rem]' : 'bottom-[-3.4375rem]'">
            </div>
            <div class="w-[46.625rem] h-[117.9375rem] relative transition-[right] duration-300 ease-in-out "
                :class="isRight ? 'right-[-51.5rem]' : 'right-0'">
                <img src="@/assets/images/safetyMonitoringCenter/2.png" alt="" class="w-full h-full">
            </div>
        </div>
    </div>
</template>
<script setup>
import { renderChart } from "@/utils/echarts/environmentalConditions.js"
import { ref, onMounted } from 'vue'
const isLeft = ref(true)
const isRight = ref(true)
const isBottom = ref(true)
onMounted(() => {
    renderChart('environmentalConditions2')
    setTimeout(() => {
        isRight.value = false
    }, 100)
    setTimeout(() => {
        isLeft.value = false
    }, 100)
    setTimeout(() => {
        isBottom.value = false
    }, 100)

})
</script>