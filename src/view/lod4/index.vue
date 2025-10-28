<template>
    <div class="relative">
         <div class="max-w-[240rem] flex items-end justify-between overflow-hidden">
            <AlAhliSaudiFCFanSection />
            <FanAnalysis/>
            <KawasakiFrontaleFanSection />
         </div>
    </div>
</template>
<script setup>
import AlAhliSaudiFCFanSection from "./components/AlAhliSaudiFCFanSection.vue"
import FanAnalysis from "./components/FanAnalysis.vue"
import KawasakiFrontaleFanSection from "./components/KawasakiFrontaleFanSection.vue"

import { ref, inject, onMounted, computed } from "vue"

</script>