<template>
    <div class="w-[138.125rem] h-[37.5rem] ml-[-1.25rem] relative overflow-hidden">
        <img src="@/assets/images/lod3/2.png" alt="stadium-east-stand" class="w-[138.125rem] h-[37.5rem] absolute left-0
        transition-[bottom] duration-300 ease-in-out
        " :class="isBottom ? 'bottom-[-35rem]' : 'bottom-[-3.4375rem]'">
    </div>
</template>
<script setup>
import { ref ,onMounted} from 'vue';
const isBottom=ref(true)
onMounted(()=>{
    setTimeout(()=>{
        isBottom.value=false
    },100)
})
</script>