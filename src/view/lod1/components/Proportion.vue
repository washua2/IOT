<template>
    <div class="w-[59.25rem] h-[31.25rem] box">
        <div class="p-[2rem]">
            <div class="justify-center text-white text-[2rem] font-medium font-['Roboto'] leading-[100%] tracking-wide">
                Proportion of Month-to-Date/Upcoming Events</div>
        </div>
        <div class="w-[59.25rem] h-0 outline outline-[0.125rem] outline-offset-[-0.0625rem] outline-white/20"></div>
        <div id="proportion" class="w-[59.25rem] h-[24.625rem]"></div>
    </div>
</template>
<script setup>
import { renderChart } from '@/utils/echarts/proportion'
import { onMounted } from 'vue'

onMounted(() => {
    renderChart('proportion')
})
</script>
<style lang="scss" scoped>
.box {
    border-radius: 1rem;
    border: 0.125rem solid rgba(64, 64, 64, 0.50);
    background: rgba(0, 17, 26, 0.42);
}
</style>