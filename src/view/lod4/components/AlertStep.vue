<template>
    <div class="w-[185.8125rem] h-[30.125rem]">
        <div class="w-[185.8125rem] h-[30.125rem] absolute right-[0]
        transition-[bottom] duration-300 ease-in-out" :class="isBottom ? 'bottom-[-31.5rem]' : 'bottom-[0]'">
            <div class="flex items-start justify-between gap-[2rem]">
                <img src="@/assets/images/lod4/1.png" class="w-full h-full" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const isBottom = ref(true)

onMounted(() => {
    setTimeout(() => {
        isBottom.value = false
    }, 100)
})
</script>