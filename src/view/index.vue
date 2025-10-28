<template>
  <div class="w-full min-h-[100vh]">
    <div class="h-full relative z-10  ">
      <div class="min-h-[100vh] bottom-mask ">
        <div class="px-[2.5rem] pt-[2.875rem]">
          <!-- 顶部模块 -->
          <div>
            <Navbar />
          </div>
          <!-- 菜单模块 -->
          <div class=" absolute top-[14.625rem] z-[999]"
            :class="iotCount == -1 || iotCount > 2 ? 'right-[3.75rem]' : 'right-[51.0625rem]'" v-if="iotCount != -2">
            <IotMenu />
          </div>
          <div class="mt-[1.875rem]">
            <!-- lod3模块 -->
            <div class=" absolute bottom-[2.5rem] left-0" v-if="iotCount == -1||iotCount == -2">
              <Lod1 />
            </div>
            <div v-else-if="iotCount == 1">
              <Lod3 :key="iotCount" />
            </div>
            <div v-else-if="iotCount == 2">
              <SafetyMonitoringCenter />
            </div>
             <div v-else-if="iotCount == 0">
              <Lod4 />
            </div>
            <div v-else-if="iotCount == 4">
              <Lod4Alert />
            </div>
          </div>

        </div>
        <div v-if="iotCount == 8">
          <indexIot />
        </div>
        <div v-if="iotCount == 9">
          <indexIotFM />
        </div>
      </div>
    </div>
    <div class="w-[55.375rem] min-h-[100vh] fixed top-0 left-0 z-1 left-mask" v-if="iotCount !== -1&&iotCount !== -2"></div>
    <div class="w-[55.375rem] min-h-[100vh] fixed top-0 right-0 z-1 right-mask" v-if="iotCount < 3 && (iotCount !== -1&&iotCount !== -2)"></div>
    <div class="w-full h-[19.875rem] fixed top-0 right-0 left-0 z-1 top-mask"></div>

    <!-- <img class="w-full h-full fixed top-0 left-0 right-0 bottom-0 z-[0]" src="@/assets/images/bg-1.png" alt=""> -->
    <div class=" absolute top-[14.4375rem] right-[51.125rem] z-[999]" v-if="isFloorPlan">
        <FloorPlan/>
    </div>
    <VideoPlayer v-if="isShowCCTVamplify" />
    <div v-show="false">
      <AlarmStream/>
    </div>
 
  </div>
</template>
<script setup>
import Navbar from "./navbar/index.vue"
import IotMenu from "./menu/iotMenu.vue"
import Lod3 from "./lod3/index.vue"
import Lod1 from "./lod1/index.vue"
import Lod4 from "./lod4/index.vue"
import Lod4Alert from "./lod4/indexAlert.vue"
import SafetyMonitoringCenter from "./safetyMonitoringCenter/index.vue"
import indexIot from "./indexIot.vue"
import indexIotFM from "./indexIotFM.vue"
import VideoPlayer from "@/components/VideoPlayer.vue"
import FloorPlan from "@/components/FloorPlan.vue"
import AlarmStream from "@/components/AlarmStream.vue"




import { ref, inject, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
const { ScoketStore, AlertStore, MenuStore } = inject("store");

const iotCount = computed(() => MenuStore.stateMenu.iotCount)
const isFloorPlan = computed(() => AlertStore.state.isFloorPlan)
// 
const isShowCCTVamplify = computed({
  get() {
    return AlertStore.state.isShowCCTVamplify
  }
})

ue.interface.TriggerAlert = (data) => {
  console.log("TriggerAlert===>",data)
  // // TriggerAlert {"alert":"equipment_warning"}
  if(data.alert == "theft_warning"){
      MenuStore.methodsMenu.setIotCount(8)
  }else if(data.alert == "equipment_warning"){
      MenuStore.methodsMenu.setIotCount(9)
  }
   
}
ue.interface.go_to_building = (data) => {
  console.log("go_to_building===>",data)
  if(data.lod==1){
    MenuStore.methodsMenu.setIotCount(-2)
  }
  if(data.lod==2){
    MenuStore.methodsMenu.setIotCount(1)
  }
}

</script>
<style scoped>
.animated-box {
  position: relative;
  /* 必须设置定位，以便操作 bottom 属性 */
  bottom: -30rem;
  /* 初始位置 */
  left: 0;
  /* 居中 */
  animation: slide-up 500ms ease-in-out forwards;
  /* 应用动画 */
}

@keyframes slide-up {
  0% {
    bottom: -30rem;
    /* 起始位置 */
  }

  100% {
    bottom: 2.0625rem;
    /* 结束位置 */
  }
}
</style>