<template>
    <div class="relative">
        <div class="max-w-[240rem] flex items-end justify-between overflow-hidden">
           <Cctvbox @handlerVirtual="handlerVirtual"/>
           <AlertStep/>
        </div>
        <div class="absolute top-0 left-[48.75rem] " v-if="isShow3D">
            <Video3D @handlerClose="handlerClose"/>
        </div>
    </div>
</template>
<script setup>
import Cctvbox from './components/Cctvbox.vue'
import AlertStep from './components/AlertStep.vue'
import AlertCCTV from './components/AlertCCTVPlayBack.vue'
import Video3D from './components/3D.vue'


import { ref, inject, onMounted, computed } from "vue"
const {  MenuStore } = inject("store");
const isShow3D=ref(false)
const iotCount = computed(() => MenuStore.stateMenu.iotCount)
const handlerVirtual = (status) => {
    isShow3D.value = status
}
const handlerClose = () => {
    isShow3D.value = false
}
</script>