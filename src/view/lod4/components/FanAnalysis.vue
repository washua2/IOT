<template>
    <div class="transition-[bottom] duration-300 ease-in-out relative" :class="isBottom ? 'bottom-[-31.5rem]' : 'bottom-[0]'">

        <div class="w-[137.5rem]  relative overflow-hidden box transition-[height] duration-300 ease-in-out z-[999]"
            :class="isScroll ? 'h-[106.75rem]' : 'h-[37.1875rem]'">
            <div>
                <div class="transition-[height] duration-300 ease-in-out"
                    :class="isScroll ? 'h-[106.75rem]' : 'h-[37.1875rem]'">
                    <div class="w-[138.0625rem] h-[6.5rem] relative border-b-[0.125rem] border-white/30">
                        <div class="w-full h-[6.5rem] flex items-center">
                            <div class="inline-flex justify-start items-center cursor-pointer"
                                v-for="(item, index) in tabList" :key="index" @click="handlerTab(index)">
                                <div class="px-[2rem] py-[2.375rem] bg-slate-500/10 flex justify-center items-center gap-2.5 overflow-hidden"
                                    :class="tabIndex == index ? 'border-b-[0.125rem] border-teal-400' : 'border-b-[0.125rem] border-transparent'">
                                    <div class="justify-center  text-[2rem]  leading-7"
                                        :class="tabIndex == index ? 'text-teal-400 ' : 'text-white'">
                                        <div :class='tabIndex == index ? "font-[bold]" : "font-[medium]"'>
                                            {{ item.title }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-6 h-6 left-[133.0625rem] top-[2.4375rem] absolute cursor-pointer transition-[rotate] duration-300 ease-in-out"
                        :class="isScroll?'rotate-[-180deg]':'rotate-0'"
                            @click="handlerTarget">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem"
                                viewBox="0 0 30 30" fill="none">
                                <path d="M2 15L15 2L28 15M2 28L15 15L28 28" stroke="white" stroke-opacity="0.7"
                                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-y-auto overflow-hidden scroll transition-[height] duration-300 ease-in-out"
                        :class="isScroll ? 'h-[100.0625rem]' : 'h-[30.6875rem] '">
                        <div v-if="tabIndex == 0">
                            <img src="@/assets/images/lod4/4.png" alt="">
                        </div>
                        <div v-else-if="tabIndex == 1">
                            <img src="@/assets/images/lod4/5.png" alt="">
                        </div>
                        <div class="relative" v-else-if="tabIndex == 2">
                            <img src="@/assets/images/lod4/6.png" alt="">
                            <div class=" absolute top-[2.375rem] left-[2.25rem] cctv bg-[#ccc]">

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted, inject, computed } from 'vue';
const isBottom = ref(true)
const tabList = ref([{
    title: 'Fan Analysis',
}, {
    title: 'Player Analysis',
}, {
    title: 'Match Analysis',
}])
const tabIndex = ref(0)
const isScroll = ref(false)
const handlerTab = (index) => {
    if (index == tabIndex.value) {
        return
    }
    tabIndex.value = index
}
const handlerTarget = () => {
    isScroll.value = !isScroll.value
}
onMounted(() => {
    setTimeout(() => {
        isBottom.value = false
    }, 100)
})
</script>
<style lang="scss" scoped>
.box {
    width: 137.5rem;
    flex-shrink: 0;
    border-radius: 1.5rem;
    border: 0.125rem solid rgba(64, 64, 64, 0.50);
    background: rgba(0, 17, 26, 0.60);
    backdrop-filter: blur(0.5625rem);
}
.cctv{
    width: 132.5rem;
height: 74.5625rem;
flex-shrink: 0;
}

/* 针对webkit内核浏览器的自定义样式 */
.scroll::-webkit-scrollbar {
    width: 0.0104rem;
    height: 0.2208rem;
}

.scroll::-webkit-scrollbar-track {
    background: #494949;
    /* 滚动条轨道的颜色 */
}

.scroll::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* 滚动条的颜色 */
    border-radius: 0.026rem;
    /* 滚动条圆角 */
}

.scroll::-webkit-scrollbar-thumb:hover {
    background: transparent;
    /* 滚动条hover颜色 */
}
</style>