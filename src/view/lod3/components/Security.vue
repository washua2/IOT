<template>
    <div class="w-[46.625rem] h-[117.9375rem] rounded-[0.5rem] relative transition-[right] duration-300 ease-in-out"
        :class="isRight ? 'right-[-51.5rem]' : 'right-0'">
        <img src="@/assets/images/lod3/3.png" class="object-contain" alt="">
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const isRight = ref(true)
onMounted(() => {
    setTimeout(() => {
        isRight.value = false
    }, 100)
})
</script>