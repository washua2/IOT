<template>
    <div class="w-[240rem] h-[31.25rem] relative overflow-hidden">
        <div class=" absolute left-[2.6875rem]
        transition-[bottom] duration-300 ease-in-out" :class="isBottom ? 'bottom-[-31.5rem]' : 'bottom-[0]'">
            <div class="flex items-start justify-between gap-[2rem]">
                <Proportion />
                <KeyStadiumOperationsMetrics1 v-if="iotCount==-1"/>
                <KeyStadiumOperationsMetrics2 v-else-if="iotCount==-2"/>
                <AnnualTotalSpectators />
            </div>
        </div>
    </div>
</template>
<script setup>
import Proportion from './components/Proportion.vue'
import KeyStadiumOperationsMetrics1 from './components/KeyStadiumOperationsMetrics1.vue';
import KeyStadiumOperationsMetrics2 from './components/KeyStadiumOperationsMetrics2.vue';

import AnnualTotalSpectators from './components/AnnualTotalSpectators.vue';
import { ref, onMounted,inject,computed} from 'vue';
const {MenuStore} = inject('store')
const isBottom = ref(true)

const iotCount = computed(() => MenuStore.stateMenu.iotCount)
onMounted(() => {
    setTimeout(() => {
        isBottom.value = false
    }, 100)
})
</script>