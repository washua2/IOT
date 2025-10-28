<template>
    <div class="w-[6.25rem] overflow-hidden">
        <div class="relative transition-[right] duration-300 ease-in-out "
            :class="isRight ? 'right-[-54rem]' : 'right-0'">
            <div class="w-[6.25rem] h-[6.25rem] flex items-center justify-center relative bg-slate-950/50 rounded-[1rem] outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer" @click="handleBack">
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/back.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] flex items-center justify-center relative rounded-t-[1rem] outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer mt-[1.5rem]"
                :class="count == 0 ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" @click="targetCount(0)"
                v-if="iotCount !== -1 && iotCount < 5">
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/road.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] flex items-center justify-center relative outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer"
                :class="count == 1 ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" @click="targetCount(1)"
                v-if="iotCount !== -1 && iotCount < 5">
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/alert.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] flex items-center justify-center relative outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer"
                :class="count == 2 ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" @click="targetCount(2)"
                v-if="iotCount !== -1 && iotCount < 5">
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/warning.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] rounded-b-[1rem] flex items-center justify-center relative outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer"
                :class="floorCount == 3 ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" @click="targetCount(3)"
                v-if="iotCount !== -1 && iotCount < 5">
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/book.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] rounded-t-[1rem] flex items-center justify-center relative outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer mt-[1.5rem]"
                :class="count == 4 ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" v-if="iotCount !== -1 && iotCount < 5"
                @click="targetCount(4)"
                >
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/video.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
            <div class="w-[6.25rem] h-[6.25rem] rounded-b-[1rem] flex items-center justify-center relative  outline outline-[0.0625rem]
             outline-offset-[-0.0625rem] outline-white/50 cursor-pointer" 
             :class="isRoute ? 'bg-[#3399FFB2]' : 'bg-slate-950/50'" v-if="iotCount !== -1 && iotCount < 5"
            @click="targetCount(5)"
             >
                <div class="w-[3rem] h-[3rem]">
                    <img src="@/assets/iotMenu/tv.svg" alt="iot" class="w-full h-full">
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted, inject, computed, watch } from 'vue'
const { MenuStore, AlertStore } = inject('store')
import { useStreams } from '@/store/modules/usestreams'
const { mode, setMode } = useStreams()
const count = ref(-2)
const floorCount = ref(-1)
const isRight = ref(true)
const menuList = ref([{
    title: "heatmap"//heatmap
}, {
    title: "theft_warning"
}, {
    title: "equipment_failure"
}, {
    title: "cad"
}, {
    title: "route"//demo_mode  //brawl_alert
}, {
    title: "realtime_mode"
},])
const isFloorPlan = computed(() => AlertStore.state.isFloorPlan)
const iotCount = computed(() => MenuStore.stateMenu.iotCount)
const isRouteFlag = computed(() => AlertStore.state.isRoute)
const isHeatmap=ref(false)
const isRoute=ref(false)
watch(isFloorPlan, (val) => {
    if (!val) {
        floorCount.value = -1
    }
})
watch(isRouteFlag, (val) => {
    isRoute.value = val
})

const targetCount = (val) => {
    // if(count.value==val)return
    count.value = val
    if (val == 3) {
        floorCount.value = 3
        AlertStore.methods.setfloorPlan(true)
        ue4('side_panel_button', {"click_button":"cad","show":true})
        return
    }
    if(val==0){
        toggleMode()
        isHeatmap.value=!isHeatmap.value
        ue4('side_panel_button', {"click_button":"heatmap","show":isHeatmap.value})
        MenuStore.methodsMenu.setIotCount(0)
        return
    }
    ue4('side_panel_button', { "click_button": menuList.value[val].title })
    console.log("send===>ue",menuList.value[val].title)
    if(val==5){
        // ue4('side_panel_button',{"click_button":"route"})
        // isRoute.value=!isRoute.value
        return
    }
    isRoute.value=false
    MenuStore.methodsMenu.setIotCount(val)
}
const handleBack = () => {
    console.log('back',iotCount.value)
    if (iotCount.value ==-1) {
        console.log(3)
        count.value = -2
        MenuStore.methodsMenu.setIotCount(-2)
        ue4('side_panel_button', { "click_button": "back" })
    }
     if (iotCount.value > -1 && iotCount.value < 3) {
        console.log(1)
        count.value = -1
        MenuStore.methodsMenu.setIotCount(-1)
        ue4('side_panel_button', { "click_button": "back" })
    }
    if (iotCount.value > 2) {
        console.log(2)
        count.value = 1
        MenuStore.methodsMenu.setIotCount(1)
        ue4('side_panel_button', { "click_button": "back" })
    }
}
const toggleMode=()=>{
  setMode(mode.value === 'webrtc' ? 'local' : 'webrtc')
}
onMounted(() => {
    count.value = iotCount.value
    setTimeout(() => {
        isRight.value = false
    }, 300)
})
</script>