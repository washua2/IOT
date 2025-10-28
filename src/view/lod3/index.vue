<template>
    <div>
        <div class="max-w-[240rem] flex items-end justify-between overflow-hidden">
            <Environmental/>
            <!-- <SafetyMonitoringCenter/> -->
            <StadiumEastStand/>
            <Security/>
        </div>
    </div>
</template>
<script setup>
import Environmental from './components/Environmental.vue'
import SafetyMonitoringCenter from './components/SafetyMonitoringCenter.vue'
import Security  from './components/Security.vue';
import StadiumEastStand from './components/StadiumEastStand.vue';
import { ref, inject, onMounted, computed } from "vue"
const {  MenuStore } = inject("store");
const iotCount = computed(() => MenuStore.stateMenu.iotCount)
</script>