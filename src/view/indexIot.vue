<template>
  <div class=" relative z-10">
    <div >

      <!-- <textDom/> -->
      <div class="w-[240rem] h-[135rem] pl-[3.5625rem] pr-[3.75rem] box-border  overflow-hidden relative"  style="height: calc(100vh - 14.5rem)"
        :class="{ 'bottom-mask': (typeValue == 'Security' || typeValue == 'Facilities' || typeValue == 'Aviation'), 'bottom-mask-traffic': typeValue == 'Mobility' }">
        <div class="flex items-start justify-between relative z-10">
          <div class="w-full">
            <div class="flex items-center gap-[1.4375rem] relative transition-[left] duration-300 ease-in-out "
              :class="isLeft ? 'left-[-51.5rem]' : 'left-0'">
              <div v-if="typeValue == 'Security'">
                <div class="relative animate-slideX">
                  <cctvbox :showCCTVDetail="showCCTVDetail" :newAlertShow2="newAlertShow2" :stepCount="stepCount" />
                </div>
              </div>
              <div v-else-if="typeValue == 'Facilities'">
                <div class="relative animate-slideX">
                  <operationalMatrix :alertWarningType3="alertWarningType3" :progress="progress" />
                </div>
              </div>
              <!-- <div v-else-if="typeValue == 'Aviation'">
                <div class="relative animate-slideX">
                  <currentWeather />
                </div>
              </div> -->

            </div>
          </div>
          <!-- <div class="w-[7rem] flex relative transition-[right] duration-300 ease-in-out"
            :class="isRight ? 'right-[-52rem]' : 'right-0'">
            <Menu :type="typeValue" @handlerClickMenu="handlerClickMenu"
              v-if="typeValue == 'Security' || typeValue == 'Facilities' || typeValue == 'Aviation'" />
            <Traffic :type="typeValue" v-if="typeValue == 'Mobility'"
              @handlerClickTrafficMenu="handlerClickTrafficMenu" />
            <planning v-if="typeValue == 'Planning'" />
          </div> -->
        </div>
        <div class="w-full mt-[3.375rem] absolute z-40 transition-[bottom] ease-in-out duration-300"
          :class="isBottom ? 'bottom-[-30rem]' : 'bottom-[0rem]'">
          <div class="mb-[1.5rem]">
            <div v-if="!alertToggle && typeValue == 'Security'">
              <div class="relative  animate-slide-up">
                <videoAnalytics />
              </div>
            </div>
            <div v-else-if="alertToggle && typeValue == 'Security'">
              <div class="relative  animate-slide-up ">
                <alert :newAlertShow="newAlertShow" :newAlertShow2="newAlertShow2" :stepCount="stepCount" />
              </div>
            </div>


          </div>
          <div class="mb-[1.5rem]">
            <div v-if="isFmInspect && typeValue == 'Facilities'">
              <div class="relative  animate-slide-up ">
                <criticalSystems :finishedCount="finishedCount" :alertWarningType3="alertWarningType3"
                  :isLoadingSystem="isLoadingSystem" :isFmInspect="isFmInspect" />
              </div>
            </div>
            <div v-else-if="typeValue == 'Facilities'">
              <div class="relative  animate-slide-up ">
                <alerts :isLoading="isLoadingAlertsBar" :isLoading2="isLoading2" :progress="progress"
                  :progressAnalytics="progressAnalytics" :isLoadingAnalyticsBar="isLoadingAnalyticsBar" />
              </div>
            </div>
          </div>
          <div v-if="trafficToggle && typeValue == 'Mobility'">
            <div class="relative  animate-slide-up ">
              <roadAlerts />
            </div>
          </div>
          <div v-else-if="typeValue == 'Mobility'">
            <div class="relative  animate-slide-up ">
              <tagging />
            </div>
          </div>

          <!-- <Marque v-if="typeValue == 'Overview'" /> -->
          <!-- <div v-if="typeValue == 'Aviation'">
            <div class="relative  animate-slide-up ">
              <criticalSystemsAviation />
            </div>
          </div> -->
        </div>
        <div class="absolute right-[4.1875rem] bottom-[34rem] z-30">
          <alertWarning @handlerWarning="handlerWarning" v-if="alertWarningType" />
          <teamCCTV v-if="teamCCTVType" />
          <teamCCTV2 v-if="teamCCTVType2" />
          <alertFinish v-if="isAlertFinish" />
        </div>
        <div class="absolute right-[4.1875rem] bottom-[34rem] z-30">
          <alertWarning3 @handlerWarning="handlerWarning" v-if="alertWarningType3" />
          <alertFMFinish v-if="isAlertFMFinish" />
          <alertPlayback v-if="isAlertPlayback"/>
        </div>
        <div class="absolute right-[22.1875rem] bottom-[34rem] z-30" v-if="alertWarningType2">
          <alertWarning2 @handlerWarning="handlerWarning" />
        </div>
           <div class="absolute right-[4.1875rem] bottom-[34rem] z-30" v-if="isCctvAlert">
          <cctvAlert/>
        </div>
      </div>
    </div>
  </div>
  <!-- <img class="w-full h-full fixed top-0 left-0 right-0 bottom-0 z-[0]" src="@/assets/images/bg2.png" alt=""> -->
  <!-- 视频弹窗 v-if="isShowCCTVamplify"-->
  <!-- TextBar -->
  <!-- <div class="absolute left-[50%] " :class="typeValue == 'Security' ? 'bottom-[36.5rem]' : 'bottom-[32.5rem]'"
    :style="{ 'max-width': messageWidth ,'transform': 'translateX(-50%)'}">
    <TextBar :message="message" />
  </div> -->
</template>
<script setup>
// security
import cctvbox from "./security/cctvbox.vue"
import videoAnalytics from "./security/videoAnalytics.vue"
import securityAlert from "./security/securityAlert.vue"
import alertWarning from "./security/alertWarning.vue"
import alertWarning2 from "./security/alertWarning2.vue"
import alertPlayback from "./security/alertPlayback.vue"


import alert from "./security/alert.vue"
import teamCCTV from "./security/teamCCTV.vue"
import teamCCTV2 from "./security/teamCCTV2.vue"
import alertFinish from "./security/components/alertFinish.vue"

import tagging from "./overView/tagging.vue"
import roadAlerts from "./overView/roadAlerts.vue"

// facilitiesManagement
import operationalMatrix from "./facilitiesManagement/operationalMatrix.vue"
import criticalSystems from "./facilitiesManagement/criticalSystems.vue"
import alerts from "./facilitiesManagement/alerts.vue"
import alertWarning3 from "./facilitiesManagement/components/alertWarning3"
import alertFMFinish from "./facilitiesManagement/components/alertFMFinish"
import cctvAlert from "./facilitiesManagement/components/cctvAlert.vue"


// aviation
// import currentWeather from "./aviation/currentWeather"
// import criticalSystemsAviation from "./aviation/criticalSystemsAviation"

import Menu from "./menu/index.vue"
import overviewMenu from "./menu/overviewMenu.vue"
import Traffic from "./menu/traffic.vue"
import planning from "./menu/planning.vue"

import Marque from "@/components/Marque"
import TextBar from "@/components/TextBar.vue"


import { ref, inject, onMounted, computed,watch } from "vue"
import { useRoute } from "vue-router"
import { data } from "autoprefixer"
const route = useRoute()
const { ScoketStore, AlertStore } = inject("store");

const isLeft = ref(true)
const isRight = ref(true)
const isBottom = ref(true)
const typeValue = ref("Security")
const selectValue = ref(['Security', 'Facilities', 'Sustainability', 'Overview', 'Mobility', 'Aviation', 'Planning'])
const stepValue = ref(-1)
const count = ref(2)
const stepCount = ref(1)
// 点击告警信息切换状态
const alertToggle = ref(true)
// 自动显示告警信息
const alertWarningType = ref(false)
const alertWarningType2 = ref(false)
const isAlertFinish = ref(false)
const isAlertPlayback = ref(false)
// 显示teamCCTV
const teamCCTVType = ref(false)
const teamCCTVType2 = ref(false)
const isCctvAlert=ref(false)

// show new alert
const newAlertShow = ref(false)
const newAlertShow2 = ref(false)
const alertWarningType3 = ref(false)
// show cctv detail
const showCCTVDetail = ref(false)

// FM显示检查模式
const isFmInspect = ref(false)
const isLoadingAlertsBar = ref(false)
const isLoadingAnalyticsBar = ref(false)
const isLoadingSystem = ref(false)
const isLoading2 = ref(false)
const isAlertFMFinish = ref(false)
const progress = ref(0)
const progressAnalytics = ref(0)
const finishedCount = ref(0)
// 地铁切换
const trafficToggle = ref(false)
// overview Marque
const marqueStatus = ref(false)

const message = ref("")
const messageWidth = ref("135.3125rem")

const alertStep=computed(()=>AlertStore.state.alertStep)
const systemsStep=computed(()=>AlertStore.state.systemsStep)


watch(()=>alertStep.value,(newVal,oldVal)=>{
  let data={Type:'Security',Status:alertStep.value}
  console.log('data',data)
    initStepSecurity(data)
})
watch(()=>systemsStep.value,(newVal,oldVal)=>{
  let data={Type:'FM',Status:systemsStep.value}
  console.log('data',data)
    initFmStep(data)
})

const handleLeftClick = () => {
  isLeft.value = !isLeft.value
}

const handleRightClick = () => {
  isRight.value = !isRight.value
}

const handlerClickMenu = ({ index, type }) => {
  count.value = index
  if (selectValue.value.indexOf(type) < 0) return;
  // isLeft.value=true
  // isRight.value=true
  // setTimeout(()=>{
  typeValue.value = type
  isLeft.value = false
  isRight.value = false
  isBottom.value = false
  // },300)
  if (index == -1) {
    isLeft.value = true
    isRight.value = true
    isBottom.value = true
  }
}
const handlerClickTrafficMenu = (val) => {
  trafficToggle.value = val == 'trafficType' ? true : false
  console.log(val, trafficToggle.value)
}
const init = () => {
  ScoketStore.methods.initSocket()
}

//点击告警信息
const handlerWarning = (val) => {
  console.log(val)
  if (val == 1) {
    // 第一次点击  加入步骤一音频
    // alertToggle.value = true
    // isBottom.value = true
    // setTimeout(() => {
    //   isBottom.value = false
    // }, 300)
  }
}

const initStepSecurity = (data) => {
  //  return false;
  //  window.alert(data.Status)

  // ----------------------Security--------------------------------
  // 检查数据类型是否为 "Security"，且状态是否为 "Scene1_1"
  if (data.Type == 'Security' && data.Status == 'Scene1_1') {
    // 如果满足条件，重置步骤计数器为 0
    stepCount.value = 0
    // 启用警告类型的标志，表示存在警告
    alertWarningType.value = true
    messageWidth.value = "120rem"
    message.value = "Powered by intelligent automation, security threats are instantly mapped in the digital twin, activating surrounding cameras while providing operators with comprehensive alerts and response guidance."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene1_2"
  if (data.Type == 'Security' && data.Status == 'Scene1_2') {
    // 如果满足条件，重置步骤计数器为 0
    stepCount.value = 0
    // 禁用 CCTV 相关的团队设置，可能表示 CCTV 的设置不再有效
    teamCCTVType.value = false
    // 显示新警报
    newAlertShow.value = true
    // 切换警报显示的开关
    alertToggle.value = true
    // 显示 CCTV 详细信息
    showCCTVDetail.value = true
    message.value = ""
    messageWidth.value = "135.3125rem"

  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene1_3"
  if (data.Type == 'Security' && data.Status == 'Scene1_3') {
    // 如果满足条件，将步骤计数器设为 1
    stepCount.value = 1
    // 隐藏警告类型，表示没有警告需要显示
    alertWarningType.value = false
    messageWidth.value = "120rem"
    message.value = "Integrated SOP framework provides operators with step-by-step response protocols, from initial detection through verification, intervention, and incident documentation, ensuring standardized handling of security events."

  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene1_4"
  if (data.Type == 'Security' && data.Status == 'Scene1_4') {
    // 如果满足条件，将步骤计数器设为 2
    messageWidth.value = "120rem"
    stepCount.value = 2
    message.value = "Enhanced by live personnel tracking, operators gain comprehensive visibility of security teams across the digital environment, ensuring optimal patrol distribution and tactical response capabilities."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene1_5"
  if (data.Type == 'Security' && data.Status == 'Scene1_5') {
    // 如果满足条件，启用 CCTV 设置，表示需要显示或使用 CCTV
    teamCCTVType.value = true
    // 隐藏新警报的显示
    newAlertShow.value = false
    // 将步骤计数器设为 3
    stepCount.value = 3
    messageWidth.value = "135.3125rem"
    message.value = "Operators maintain comprehensive awareness by integrating CCTV feeds with body-worn camera visuals, enabling direct communication with guards for coordinated response."
  }


  // two 
  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_1"
  if (data.Type == 'Security' && data.Status == 'Scene2_1') {
     showCCTVDetail.value = true
    // 如果满足条件，将步骤计数器设置为 0
    stepCount.value = 0
    // 启用警告类型 2，表示场景 2 中有警告
    alertWarningType2.value = true
    teamCCTVType2.value = true
    // 显示新的警报 2
    newAlertShow2.value = true
    messageWidth.value = "100rem"
    message.value = "System simultaneously tracks multiple security events across the site, providing real-time alerts and ground situation visibility for effective threat management."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_2"
  if (data.Type == 'Security' && data.Status == 'Scene2_2') {
     showCCTVDetail.value = true
     // 启用 CCTV 设置，表示场景 2 中需要显示 CCTV
    teamCCTVType2.value = true
    // 如果满足条件，将步骤计数器设置为 1
    stepCount.value = 1
    // 禁用 CCTV 设置，表示场景 2 中不显示 CCTV
    teamCCTVType.value = false
    // 隐藏警告类型 2
    alertWarningType2.value = false
    messageWidth.value = "115.3125rem"
    message.value = "Leveraging contextual intelligence, the system automatically activates incident-specific SOPs and relevant camera feeds, providing operators with location-based protocols and targeted visual coverage for precise response coordination."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_3"
  if (data.Type == 'Security' && data.Status == 'Scene2_3') {
     showCCTVDetail.value = true
    // 如果满足条件，将步骤计数器设置为 2
    stepCount.value = 2
    messageWidth.value = "120rem"
    message.value = "MISK City's security excellence is powered by seamless integration of AI analytics, facial recognition, and IoT sensors - creating a unified ecosystem that transforms security data into actionable intelligence."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_4"
  if (data.Type == 'Security' && data.Status == 'Scene2_4') {
     showCCTVDetail.value = true
     // 显示teamCCTV
    teamCCTVType2.value = false
     isAlertPlayback.value = true
    // 如果满足条件，将步骤计数器设置为 3
    stepCount.value = 3
    
    message.value = ""
    
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_5"
  if (data.Type == 'Security' && data.Status == 'Scene2_5') {
     showCCTVDetail.value = true
    // 如果满足条件，将步骤计数器设置为 4
    stepCount.value = 4
    // 隐藏新的警报 2
    newAlertShow2.value = false
    messageWidth.value = "135.3125rem"
    message.value = "This intelligent convergence of technologies demonstrates MISK City's commitment to pioneering smart security solutions, setting new standards for modern urban safety and operational excellence."
  }

  // 检查数据类型是否为 "Security"，且状态是否为 "Scene2_6"
  if (data.Type == 'Security' && data.Status == 'Scene2_6') {
    isAlertPlayback.value = false
     showCCTVDetail.value = true
    // 如果满足条件，将步骤计数器设置为 5
    stepCount.value = 5
    message.value = ""
  }

  if (data.Type == 'Security' && data.Status == 'Finished') {
     showCCTVDetail.value = true
    stepCount.value = 6
    // 点击告警信息切换状态
    alertToggle.value = false
    // 自动显示告警信息
    alertWarningType.value = false
    alertWarningType2.value = false
    showCCTVDetail.value = false
    
    // show new alert
    // newAlertShow.value = true
    newAlertShow2.value = false
    isAlertFinish.value = true
  }
  // ----------------------Security--------------------------------
}

const initFmStep = (data) => {
  if (data.Type == 'FM' && data.Status == 'Start') {
    finishedCount.value = 0
    typeValue.value = "Facilities"
    isFmInspect.value = true
    // message.value = "Misk City unifies building management systems, IoT sensors, and smart facilities data, providing operators with real-time visibility of equipment performance and operational efficiency across the city."
  }
  if (data.Type == 'FM' && data.Status == 'Scene1_1') {
    isFmInspect.value = true
    typeValue.value = "Facilities"
    isLoadingSystem.value = false
    setTimeout(() => {
      isLoadingSystem.value = true
      message.value = "Through intelligent automation, MISK City performs comprehensive daily system diagnostics, ensuring critical infrastructure reliability and preventing potential disruptions before they impact city operations."
    }, 300)
  }
  if (data.Type == 'FM' && data.Status == 'Scene2_1') {
    typeValue.value = "Facilities"
    isLoadingSystem.value = false
    alertWarningType3.value = false
    setTimeout(() => {
    alertWarningType3.value = true
    },300)
    message.value = "Equipment status and alerts are instantly mapped in the digital twin environment, providing operators with intuitive 3D visualization of affected systems and their locations for efficient response coordination."
  }
  if (data.Type == 'FM' && data.Status == 'Scene2_2') {
    typeValue.value = "Facilities"
    message.value = "Through comprehensive system integration, operators can instantly visualize downstream dependencies and affected service areas, enabling rapid impact assessment and targeted mitigation strategies"
  }
  if (data.Type == 'FM' && data.Status == 'Scene2_3') {
    typeValue.value = "Facilities"
    alertWarningType3.value = false
    isFmInspect.value = false
    setTimeout(() => {
      // 
      isCctvAlert.value=true
      isLoadingAnalyticsBar.value = true
      progressAnalytics.value = 1
      message.value = "Powered by comprehensive data integration, MISK City's systems perform intelligent self-diagnostics, automatically analyzing performance patterns and identifying potential issues before they escalate."
    }, 100)

  }
  if (data.Type == 'FM' && data.Status == 'Scene2_4') {
    typeValue.value = "Facilities"
    isLoadingAnalyticsBar.value = false
    isLoading2.value = true
    message.value = ""
  }
  if (data.Type == 'FM' && data.Status == 'Scene2_5') {
    typeValue.value = "Facilities"
    isLoading2.value = false
    // 显示温度设备加载状况
    isLoadingAlertsBar.value = true
      isCctvAlert.value=false
    setTimeout(() => {
      progress.value = 1
      message.value = "Leveraging real-time data from IoT sensors and CCTV analytics, the system intelligently activates backup resources based on actual usage patterns and load demands, ensuring optimal service delivery."

    }, 100)
  }
  if (data.Type == 'FM' && data.Status == 'Finished') {
    typeValue.value = "Facilities"
    isLoadingAlertsBar.value = false
    progress.value = 5
    setTimeout(() => {
      isFmInspect.value = true
      finishedCount.value = 5
      isAlertFMFinish.value = true
      message.value = "Through these advanced self-healing capabilities, MISK City ensures minimal service disruptions and continuous operations, providing residents and occupants with a seamlessly reliable urban environment they can always count on."

    }, 2000)
  }
}




// init()
onMounted(() => {
  message.value = ""

  // // 如果路由的查询参数中存在 "value" 字段，设置 typeValue 为该值
  // if (route.query.value) {
  //   if (route.query.value == 'Facilities') {
  //     typeValue.value = ""
  //   } else {
  //     typeValue.value = route.query.value
  //   }
  //   if (typeValue.value == "Security") {
  //     message.value = "Equipped with AI-powered video analytics and intelligent detection systems, MISK City's command center delivers comprehensive security coverage through real-time monitoring and automated alerts."
  //   }
  // }

  // 定义菜单函数，处理菜单操作并更新 typeValue
  // ue.interface.menuFun = (data) => {
  //   console.log("menuFun", data);  // 打印数据，用于调试

  //   // 将传入的数据中的 "Value" 字段赋值给 typeValue
  //   typeValue.value = data.Value

  //   // 跳转到主页，当前行被注释掉
  //   // router.push("/home")
  // }
  // 定义步骤函数，处理不同类型的数据并初始化相应的步骤
  // ue.interface.stepFun = (data) => {
  //   console.log("stepFun", data);  // 打印数据，用于调试

  //   // 将传入的数据中的 "Type" 字段赋值给 typeValue
  //   if (data.Type == 'Facilities') {
  //     typeValue.value = ""
  //   } else {
  //     typeValue.value = data.Type
  //   }

  //   // 根据类型执行不同的初始化函数
  //   if (data.Type == "Security") {
  //     initStepSecurity(data)  // 调用 Security 类型的初始化函数
  //   } else if (data.Type == "FM") {
  //     initFmStep(data)  // 调用 FM 类型的初始化函数
  //   }
  // }
  // initFmStep({ Type:"FM",Status:"Start" })  // 调用 FM 类型的初始化函数
      initStepSecurity({ Type:"Security",Status:"Scene2_1" })  // 调用 FM 类型的初始化函数
// 
  // 使用 setTimeout 延迟执行的函数，设置某些状态的值
  setTimeout(() => {
    // 将三个变量设置为 false，可能是控制页面某些元素的显示状态
    isLeft.value = false
    isRight.value = false
    isBottom.value = false
  }, 300)  // 300 毫秒后执行

})
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