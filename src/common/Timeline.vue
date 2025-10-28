<template>
  <div class="videoMain overflow-hidden">
    <div id="videoBox" class="w-full videoActive absolute top-0 left-0 bottom-0 right-0 h-full">
      <video controls muted autoplay @loadedmetadata="setStartTime" @click="openState = false" class="w-full videoPlay">
        <!-- <source :src="videoSrc" type="video/mp4"> -->
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- calc(100vh_-_194px_-_127px) -->

    <div class="videoFooter">
      <div class="videoDesc">{{ playBackStartDate }}-{{ playBackEndDate }}</div>
      <div class="control">
        <div class="schedule mx-[20px] s2k:mx-[26.6px] s4k:mx-[40px]" @click="openState = false">
          <!-- <div class="item" @click="preVideo">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="svgVideo cursor-pointer "
              viewBox="0 0 20 20" fill="none">
              <path
                d="M13.3162 19C12.8751 18.9999 12.4521 18.8104 12.1403 18.4732L5.487 11.2821C5.17517 10.9449 5 10.4878 5 10.011C5 9.53434 5.17517 9.07714 5.487 8.74001L12.1403 1.54884C12.2937 1.37714 12.4772 1.24018 12.6802 1.14596C12.8831 1.05174 13.1014 1.00214 13.3222 1.00007C13.5431 0.997994 13.7621 1.04348 13.9665 1.13387C14.1709 1.22427 14.3567 1.35776 14.5128 1.52656C14.669 1.69536 14.7925 1.89609 14.8761 2.11703C14.9598 2.33797 15.0019 2.5747 14.9999 2.81341C14.998 3.05212 14.9521 3.28803 14.865 3.50737C14.7778 3.7267 14.6511 3.92508 14.4922 4.09092L9.0149 10.011L14.4922 15.9312C14.7248 16.1826 14.8831 16.5029 14.9473 16.8516C15.0114 17.2003 14.9785 17.5617 14.8526 17.8901C14.7267 18.2186 14.5136 18.4993 14.2401 18.6969C13.9667 18.8944 13.6452 18.9999 13.3162 19Z"
                fill="currentColor" />
            </svg>
          </div> -->
          <div v-if="isPlay" class="item " @click="bofang">

            <svg t="1717482337592" viewBox="0 0 1024 1024" class="svgVideo cursor-pointer " version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4282" width="20" height="20">
              <path
                d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                fill="#3F83F8" p-id="4283"></path>
            </svg>
          </div>
          <div v-else class="item " @click="zanting">
            <svg xmlns="http://www.w3.org/2000/svg" class="svgVideoActive cursor-pointer " width="20" height="20"
              viewBox="0 0 20 20" fill="none">
              <path
                d="M6 0H4.66667C3.19391 0 2 1.11929 2 2.5V17.5C2 18.8807 3.19391 20 4.66667 20H6C7.47276 20 8.66667 18.8807 8.66667 17.5V2.5C8.66667 1.11929 7.47276 0 6 0Z"
                fill="currentColor" />
              <path
                d="M15.3333 0H14C12.5272 0 11.3333 1.11929 11.3333 2.5V17.5C11.3333 18.8807 12.5272 20 14 20H15.3333C16.8061 20 18 18.8807 18 17.5V2.5C18 1.11929 16.8061 0 15.3333 0Z"
                fill="currentColor" />
            </svg>
          </div>
          <!-- <div class="item" @click="nextVideo">

            <svg xmlns="http://www.w3.org/2000/svg" class="svgVideo cursor-pointer" width="20" height="20"
              viewBox="0 0 20 20" fill="none">
              <path
                d="M6.68376 19C6.35484 18.9999 6.03332 18.8944 5.75986 18.6969C5.48639 18.4993 5.27325 18.2186 5.14739 17.8901C5.02152 17.5617 4.98859 17.2003 5.05274 16.8516C5.11689 16.5029 5.27525 16.1826 5.50779 15.9312L10.9851 10.011L5.50779 4.09092C5.34893 3.92508 5.22221 3.7267 5.13504 3.50737C5.04787 3.28803 5.00198 3.05212 5.00006 2.81341C4.99814 2.5747 5.04023 2.33797 5.12386 2.11703C5.2075 1.89609 5.331 1.69536 5.48718 1.52656C5.64335 1.35776 5.82906 1.22427 6.03348 1.13387C6.23789 1.04348 6.45692 0.997994 6.67777 1.00007C6.89863 1.00214 7.11689 1.05174 7.31982 1.14596C7.52275 1.24018 7.70629 1.37714 7.85973 1.54884L14.513 8.74001C14.8248 9.07714 15 9.53434 15 10.011C15 10.4878 14.8248 10.9449 14.513 11.2821L7.85973 18.4732C7.54787 18.8104 7.12486 18.9999 6.68376 19Z"
                fill="currentColor" />
            </svg>
          </div> -->
        </div>
        <div class="multiple mx-[6rem] " @click="openState = false">
          <div @click="multipleFun(1, 1)" class="item w-[5rem] h-[2rem] text-center" :style="multipleIndex === 1 ? 'color: #3F83F8' : ''">
            <span>x1</span>
          </div>
          <div @click="multipleFun(2, 3)" class="item w-[5rem] h-[2rem] text-center" :style="multipleIndex === 2 ? 'color: #3F83F8' : ''">
            <span>x3</span>
          </div>
          <div @click="multipleFun(3, 5)" class="item w-[5rem] h-[2rem] text-center" :style="multipleIndex === 3 ? 'color: #3F83F8' : ''">
            <span>x5</span>
          </div>
        </div>
        <!-- <div class="num mx-[20px] s2k:mx-[26.6px] s4k:mx-[40px]" @click="openState = false">
          <div @click="numFun(1)" class="item" :style="numIndex === 1 ? 'color: #3F83F8' : ''">
            <span>1</span>
          </div>
          <div @click="numFun(2)" class="item" :style="numIndex === 2 ? 'color: #3F83F8' : ''">
            <span>2</span>
          </div>
          <div @click="numFun(3)" class="item" :style="numIndex === 3 ? 'color: #3F83F8' : ''">
            <span>3</span>
          </div>
        </div> -->
        <!-- <input v-model="inputSea" placeholder="Basic usage" @click="openState = false"
          class="w-[200px] h-[31px] rounded-[4px] s2k:w-[266px] s2k:h-[41.3px] s2k:rounded-[5.3px] s4k:w-[400px] s4k:h-[62px] s4k:rounded-[8px]" /> -->
        <!-- <div class="other" @click="openState = false">
          <div
            class="item  rounded-[4px_0_0_4px] ml-[5px] s2k:rounded-[5.3px_0_0_5.3px] s2k:ml-[6.67px] s4k:rounded-[8px_0_0_8px] s4k:ml-[10px]"
            @click="updateScreen">
            <svg-icon name="full2" width="15px" height="15px" class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
          <div class="item" @click="videoEnd">
            <svg-icon name="next" width="15px" height="15px" class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
          <div class="item">
            <svg-icon name="global" width="15px" height="15px" class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
          <div class="item" @click="downloadVideo(videoSrc, `${Date.now()}.mp4`)">
            <svg-icon name="download2" width="15px" height="15px"
              class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
          <div class="item" @click="toggleReveal">
            <svg-icon v-if="timelineShow" name="show" width="20px" height="20px"
              class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
            <svg-icon v-else name="hide" width="20px" height="20px"
              class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
          <div class="item" @click="updateRefresh">
            <svg-icon name="refresh" width="15px" height="15px" class="svgVideo cursor-pointer s4ksvg s2ksvg"></svg-icon>
          </div>
        </div> -->
      </div>
      <div id='timeSlider' v-show="timelineShow"></div>
    </div>
  </div>
</template>

<script setup>
// https://github.com/6sy/timeSlider
import initTimeSlider from 'video-time-slider';
import flvjs from 'flv.js';
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch, defineProps, toRefs,defineEmits,computed,inject } from 'vue';
import showIcon from "@/assets/video/show.svg"
import hideIcon from "@/assets/video/hide.svg"
const { CctvBoxStore } = inject("store");
// import settingStore from '@/store/modules/setting'
// const store = settingStore()
const props = defineProps({
  videoFlvdate: {
    type: Array,
    default: [],
  }
})
const { videoFlvdate } = toRefs(props)
const emit=defineEmits(['setChangeTime',"playVideo","pauseVideo","playSpeed"])


const isPlay = ref(false)
const duration = ref(0) // 视频总时长
const videoPlayer = ref()
const instance = ref()
const presentSeconds = ref(0) // 当前秒数
const videoList = ref([])
const videoSrc = ref('')
const timeFrame = ref([]) // 视频时间区间
const rangeIndex = ref(0) // 当前第几个视频
const timer = ref(null)
const multipleTimer = ref() // 倍数定时器
const changeTimeVal=ref("")

const playBackStartDate = computed({
    get() {
        return CctvBoxStore.state.playBackStartDate;
    }
});
const playBackEndDate = computed({
    get() {
        return CctvBoxStore.state.playBackEndDate;
    }
});
onMounted(() => {
  let cctvBox = document.getElementById("videoBox");
  if (cctvBox) {
    videoPlayer.value = cctvBox?.querySelector("video")
  }
  videoList.value = videoFlvdate.value
  videoSrc.value = videoFlvdate.value[0].src
  videoList.value.forEach((item) => {
    let startTime = parseInt(item.startTime.slice(0, 2)) * 60 * 60
    let endTime = parseInt(item.endTime.slice(0, 2)) * 60 * 60
    timeFrame.value.push([startTime, endTime])
  })
  presentSeconds.value = parseInt(videoFlvdate.value[0].startTime.slice(0, 2)) * 60 * 60
  nextTick(() => {
    videoFlvPlayer(videoFlvdate.value[0].src)
  })
})
nextTick(() => {
  let instanceList = videoFlvdate.value.map(p => `${p.startTime}-${p.endTime}-${p.eng}`) // 数据源
  duration.value = videoPlayer.value.duration;
  // 080000 起始时间
  // 020208 视频时长
  // console.log('presentSeconds',parseInt(props.videoList[0].startTime.slice(0, 2)))
  instance.value = initTimeSlider('#timeSlider', {
    curDaytimeChunkArray: instanceList,
    presentSeconds: presentSeconds.value,
    timeChunkType: {
      A: '#fff',
      B: '#1C64F2',
    },
    speed: 1,
    isInitialPlay: true,
    onClick: clickVideo
  })
  videoSet()
  let container = document.querySelector('.ts-container')
  let tsline = document.querySelector('.ts-line-present')
  let assistline = document.querySelector('.ts-assist-line')
  let line = document.querySelector('.ts-line')
  line.style.borderLeft = "#1C64F2 solid 0.16rem"
  assistline.style.borderLeft = "#1C64F2 solid 0.16rem"
  let tstime = document.querySelectorAll('.ts-axis-time')
  // click step auto
  let viewportWidth = window.innerWidth;
  line.style.display="none"
  if (viewportWidth >= 3840) {
    let tsContainer = document.querySelectorAll('.ts-axis')
    let timeChunk = document.querySelectorAll('.ts-timeChunk')
    line.style.left = timeChunk[0].offsetLeft + 20 + "px"

    tsContainer.forEach(item => {
      item.style.height = '3.75rem'
    })
    timeChunk.forEach(item => {
      item.style.height = '3.75rem'
    })
    tstime.forEach(item => {
      item.style.fontSize = '1.56rem'
      item.style.marginTop = '-0.63rem'
    })
    tsline.style.fontSize = '1.86rem'
    container.style.marginTop = '1.56rem'
  }
  videoPlayer.value.addEventListener('playing', () => {
    instance.value.speed = 1
    isPlay.value = false
  });

  videoPlayer.value.addEventListener('pause', () => {
    instance.value.speed = 0
    isPlay.value = true
  });
})
// 视频初始设置
const videoSet = (params) => {
  let tsline = document.querySelector('.ts-line-present')
  if (params) {
    tsline.innerHTML = formatTimeString(params)
  } else {
    tsline.innerHTML = formatTimeString(videoFlvdate.value[0].startTime)
  }
  // 每秒钟更新时间
  timer.value = setInterval(() => {
    const [hours, minutes, seconds] = tsline.innerText.split(':').map(str => parseInt(str));
    const newSeconds = (seconds + 1) % 60;
    const newMinutes = (newSeconds === 0) ? ((minutes + 1) % 60) : minutes;
    const newHours = (newSeconds === 0 && newMinutes === 0) ? ((hours + 1) % 24) : hours;
    const formattedTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
    tsline.innerText = formattedTime;
  }, 1000);
}
const videoFlvPlayer = (flvURL, id) => {


  // flv.js with problem
  if (flvjs.isSupported()) {
    let cctvBox = document.getElementById("videoBox");
    if (cctvBox && flvURL !== undefined) {
      const videoElementSelected = cctvBox?.querySelector("video")
      if (videoElementSelected) {
        videoElementSelected.remove();
      }
      const videoElement = document.createElement('video');

      videoElement.muted = true;
      videoElement.autoplay = true;
      videoElement.controls = false;
      videoElement.preload = 'auto';
      cctvBox.appendChild(videoElement);

      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        url: flvURL,
        hasVideo: true,

      }, {
        // stashInitialSize:128,
        // enableStashBuffer:false,
        // enableWorker:true
      });
      flvPlayer.attachMediaElement(videoElement);
      // flvPlayer.attachMediaElement(videoElementSelected);
      flvPlayer.load();
      flvPlayer.play();

      // globalFlvPlayer.value.push(flvPlayer)


      flvPlayer.on(flvjs.Events.ERROR, (errorType, errorDetail) => {
        flvPlayer.pause()
        flvPlayer.unload()
        flvPlayer.detachMediaElement()
        flvPlayer.destroy()
        // initErrorCCTV(CCTVObject, id);
      })
      flvPlayer.on(flvjs.Events.PLAYING, (a, b) => {
      })
      flvPlayer.on(flvjs.Events.LOADING_COMPLETE, () => {
      })
      flvPlayer.on(flvjs.Events.ENDED, () => {
      })

      const flvUrlElement = document.createElement('p');
      flvUrlElement.textContent = flvURL;
      flvUrlElement.style.color = 'white';
      flvUrlElement.style.marginTop = '-10rem';
      flvUrlElement.style.zIndex = '30';
      flvUrlElement.style.width = '25rem';
      flvUrlElement.style.fontSize = '1.5rem';
      // flvUrlElement.style.backgroundColor='black';
      flvUrlElement.style.workWrap = 'break-word';
      flvUrlElement.style.whiteSpace = 'normal';
      flvUrlElement.style.overflow = 'hidden';
      cctvBox.appendChild(flvUrlElement);
    }
  } else {
    console.error('FLV.js is not supported in this browser.');
  }
}
// 视频播放
const bofang = () => {
  isPlay.value = false
  videoPlayer.value.play()
  instance.value.speed = 1
  emit("playVideo",videoPlayer.value.currentTime)
  // videoFlvPlayer(videoFlvdate.value[0].src)

}
// 视频暂停
const zanting = () => {
  let cctvBox = document.getElementById("videoBox");
  const videoElementSelected = cctvBox?.querySelector("video")

  isPlay.value = true
  clearInterval(timer.value)
  videoPlayer.value.pause()
  instance.value.speed = 0
  
  console.log("videoPlayer.value.currentTime====>",videoElementSelected.currentTime)
  emit("pauseVideo",videoElementSelected.currentTime)

  // emit("setChangeTime",changeTimeVal.value)
  timer.value=null
}

const clickVideo = (one, two) => {
  clearInterval(timer.value)
  // console.log('two',two)
  let line = document.querySelector('.ts-line')
  line.style.display="block"
  
  rangeIndex.value = findRangeIndex(timeFrame.value, two);
  videoSrc.value = videoList.value[rangeIndex.value].src
  // 起始时间
  let start = parseInt(videoList.value[rangeIndex.value].startTime.slice(0, 2)) * 60 * 60
  // 结束时间
  let end = parseInt(videoList.value[rangeIndex.value].endTime.slice(0, 2)) * 60 * 60
  if (two < start) return false
  if (two > end) return false
  console.log("two - start====>",two , start)
  // 点击的秒数
  let clickSecond = two - start
  setStartTime(clickSecond);
}
const setChangeTimeVal=()=>{
  let hours=Math.floor(second/3600)
  let divisor_for_minutes=second%3600
  let minutes=Math.floor(divisor_for_minutes/60)
  let divisor_for_seconds=second%60
  let seconds=Math.floor(divisor_for_seconds)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
const setStartTime = (second) => {
  if (isNaN(second)) return;
  videoPlayer.value.currentTime = second;
  let hours=Math.floor(second/3600)
  let divisor_for_minutes=second%3600
  let minutes=Math.floor(divisor_for_minutes/60)
  let divisor_for_seconds=second%60
  let seconds=Math.floor(divisor_for_seconds)
  changeTimeVal.value= `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  emit("setChangeTime",second)

  // videoFlvPlayer(videoFlvdate.value[0].src)

}

function formatTimeString(timeString) {
  const hours = timeString.substring(0, 1) * 10 + parseInt(timeString.substring(1, 2), 10);
  const minutes = timeString.substring(2, 4);
  const seconds = timeString.substring(4, 6);
  return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}
function findRangeIndex(rangesArray, number) {
  for (let i = 0; i < rangesArray.length; i++) {
    const [start, end] = rangesArray[i];
    if (number >= start && number <= end) {
      return i;  // 返回找到的数组的下标
    }
  }
  return -1;  // 如果没有找到匹配的范围，返回-1或其他标记值
}
onBeforeUnmount(() => {
  clearInterval(timer.value)
  clearInterval(multipleTimer.value)
})
// 控件相关
// picker
const picker = reactive({
  startTime: '',
  endTime: '',
})
// num
const numIndex = ref(3)
const numFun = (index) => {
  numIndex.value = index
}
const inputSea = ref('');
const prickTime = ref('');
const openState = ref(false) // 日期面板显示
const panelChange = (value) => {
  console.log('value', value)
  let bofore = timeHandle(value[0].$d)
  let after = timeHandle(value[1].$d)
  // console.log('bofore',bofore)
  // console.log('after',after)
  if (picker.startTime && picker.endTime) {
    openState.value = false
  }
}
watch(() => picker.endTime, (newVal, oldVal) => {
  if (!newVal) return false
  if (!prickTime.value) return false
  if (!picker.startTime) return false
  openState.value = false
});
const timeHandle = (value) => {
  let time = new Date(value)
  let d = new Date(time);
  let dateValue = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  console.log('dateValue', dateValue); // 2024-5-17 11:29:55
  let currentHour = d.getHours()
  let currentMinutes = d.getMinutes()
  let currentSeconds = d.getSeconds();
  let sumSeconds = currentHour * 3600 + currentMinutes * 60 + currentSeconds
  return sumSeconds
}
const dateFun = () => {
  openState.value = !openState.value
}
const pickerOk = (value) => {
  console.log('value', value)
  if (value[1]) {
    openState.value = false
  }
}
// 下载
const downloadVideo = (url, filename) => {
  let link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// 全屏
const updateScreen = () => {
  let video = document.querySelector('video')
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { // 兼容旧版Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { // 兼容旧版Chrome和Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // 兼容旧版IE
    video.msRequestFullscreen();
  }
}
// 快进15s
const fastForward = () => {
  if (videoPlayer.value) {
    // console.log('videoPlayer.value',videoPlayer.value.currentTime)
    const currentTime = videoPlayer.value.currentTime;
    videoPlayer.value.currentTime = currentTime + 150;
    instance.value.presentSeconds += 150
    presentSeconds.value += 150
    // instance.value.setTimeLineLeft()
    // clearInterval(timer.value)
    // let start = parseInt(videoList.value[rangeIndex.value].startTime.slice(0, 2)) * 60 * 60
    // let clickSecond = presentSeconds.value - start
    // setStartTime(clickSecond);
  }
}
// 快退15s
const fastBackward = () => {
  if (videoPlayer.value) {
    let currentTime = videoPlayer.value.currentTime;
    if (currentTime - 150 >= 0) {
      videoPlayer.value.currentTime = currentTime - 150;
      instance.value.presentSeconds -= 150
      instance.value.setTimeLineLeft()
    } else {
      videoPlayer.value.currentTime = 0;
    }
  }
}
// 上个视频
const preVideo = () => {
  if (rangeIndex.value === 0) return false
  let pre = timeFrame.value[rangeIndex.value - 1]
  videoSrc.value = videoList.value[rangeIndex.value - 1].src
  clearInterval(timer.value)
  // 起始时间
  let start = parseInt(videoList.value[rangeIndex.value - 1].startTime.slice(0, 2)) * 60 * 60
  // 结束时间
  let end = parseInt(videoList.value[rangeIndex.value - 1].endTime.slice(0, 2)) * 60 * 60
  if (pre[0] < start) return false
  if (pre[0] > end) return false
  // 点击的秒数
  let clickSecond = pre[0] - start
  setStartTime(clickSecond);
  instance.value.presentSeconds = pre[0]
  instance.value.setTimeLineLeft()
  videoSet(videoList.value[rangeIndex.value - 1].startTime)
}
// 下个视频
const nextVideo = () => {
  if (rangeIndex.value === timeFrame.value.length - 1) return false
  let next = timeFrame.value[rangeIndex.value + 1]
  videoSrc.value = videoList.value[rangeIndex.value + 1].src
  clearInterval(timer.value)
  // 起始时间
  let start = parseInt(videoList.value[rangeIndex.value + 1].startTime.slice(0, 2)) * 60 * 60
  // 结束时间
  let end = parseInt(videoList.value[rangeIndex.value + 1].endTime.slice(0, 2)) * 60 * 60
  if (next[0] < start) return false
  if (next[0] > end) return false
  // 点击的秒数
  let clickSecond = next[0] - start
  setStartTime(clickSecond);
  instance.value.presentSeconds = next[0]
  instance.value.setTimeLineLeft()
  videoSet(videoList.value[rangeIndex.value + 1].startTime)
}
// 倍速播放
const multipleIndex = ref(1)
const multipleFun = (index, rate) => {
  multipleIndex.value = index 
  instance.value.speed = rate

  emit("playSpeed",rate.toString())
  // if (videoPlayer.value) {
  //   clearInterval(multipleTimer.value)
  //   let currentTime = videoPlayer.value.currentTime;
  //   videoPlayer.value.playbackRate = rate;
  //   multipleTimer.value = setInterval(() => {
  //     instance.value.presentSeconds += 0.3
  //     presentSeconds.value += 0.3
  //   },1000 / rate )
  // }
}
// 播放至视频结束
const videoEnd = () => {
  if (videoPlayer.value) {
    let video = timeFrame.value[rangeIndex.value]
    let start = parseInt(videoList.value[rangeIndex.value].startTime.slice(0, 2)) * 60 * 60
    let clickSecond = video[1] - start
    setStartTime(clickSecond);
    instance.value.presentSeconds = video[1]
    instance.value.setTimeLineLeft()
  }
}
// 时间轴显示隐藏
const timelineShow = ref(true)
const toggleReveal = () => {
  // timelineShow.value = !timelineShow.value
}
// 刷新
const updateRefresh = () => {
  // store.refsh = !store.refsh
}
</script>

<style scoped lang="scss">
.videoMain {
  position: relative !important;
  width: 100%;
  height: 100%;

  .videoFooter {
    width: 100%;
    position: absolute !important;
    bottom: 0;
    left: 0;
    background-color: #1e293b;

    .control {
      width: 100% !important;
      height: 7.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;

      .schedule,
      .other,
      .download,
      .date {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.25rem;

        .item {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 1.88rem;
          margin: 0 0.63rem;

          img {
            width: 0.94rem;
            height: 0.94rem;
            padding: 0 0.63rem;
            cursor: pointer;
          }
        }
      }

      .multiple,
      .num {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.25rem;
        margin-left: 0.31rem;
        color: #6b7280;

        .item {
          border-radius: 0.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 1.88rem;


          span {
            padding: 0 0.63rem;
            cursor: pointer;
            font-size: 1.6rem;
            font-weight: 400;
          }
        }
      }

      .num {
        .item {
          span {
            padding: 0 0.75rem;
          }
        }
      }

      input {
        width: 12.5rem;
        height: 1.94rem;
        background-color: #374151;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 400;
        padding: 0px 0.63rem;

        &::placeholder {
          color: #b8b4b4;
        }

        border:none;
        margin: 0 0.31rem;

        &:focus {
          outline: none;
        }
      }

      .picker {
        position: absolute;
        bottom: 0.31rem;
        right: 0;
        z-index: -1;
      }
    }

    .videoDesc {
      width: 100%;
      height: 24px;
      padding: 9px 0;
      background: #1C64F2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 1.3rem;
    }

    #timeSlider {
      width: 99% !important;
      height: 12.25rem !important;
      margin: 0 auto;
      background: #4B5563;
      z-index: 1;
    }
  }
}

.videoMain:hover .videoFooter {
  bottom: -2rem !important;
}

.videoFooter {
  transition: all .5s linear;
  bottom:-30rem !important;
}

:deep(.ts-axis) {
  border: solid #4B5563 1px;
  border-left: none;
  z-index: 100;
}

.ts-axis:first-child {
  border-left: solid #4B5563 1px;
}

.ts-container {
  margin-top: 20px;
}

:deep(.ts-axis-time) {
  top: -22px;
  font-size: 1.16rem;
  color: #6b7280;
}

:deep(.ts-line-present) {
  font-size: 1.86rem;
  top: 6.18rem;
  color: #fff;
}

:deep(.ts-axis-time-last) {
  font-size: 1.16rem;
  color: #6b7280;
}

video::-webkit-media-controls-enclosure {
  display: none;
}

.ant-picker {
  background-color: #fff;
  border: solid 0.06rem #D1D5DB;
  color: #fff;

  :deep(input) {
    color: #fff;
  }

  :deep(svg) {
    color: #fff;
  }
}

:deep(.ant-picker-input) {
  padding-left: 25px;

  input::placeholder {
    color: rgba(0, 0, 0, 0);
  }

  .ant-picker-suffix {
    display: none;
  }

  .ant-picker-clear {
    display: none;
  }
}

@media screen and (min-width: 2560px) {
  .s2ksvg {
    transform: scale(1.5);
  }

  .videoMain {
    .videoFooter {
      .control {
        height: 180px;

        .schedule,
        .other,
        .download,
        .date {
          font-family: Inter;
          font-weight: 700;
          border-radius: 5.3px;

          .item {

            height: 40px;
            margin: 0 13.3px;

            img {
              width: 20px;
              height: 20px;
              padding: 0 13.3px;
            }
          }
        }

        .multiple,
        .num {
          font-family: Inter;
          font-weight: 700;
          border-radius: 5.3px;
          margin-left: 6.67px;

          .item {
            border-radius: 5.3px;
            height: 40px;

            span {
              padding: 0 13.3px;
            }
          }
        }


        .picker {
          bottom: 6.67px;
        }
      }

      .videoDesc {
        height: 32px;
        padding: 12px 0;
      }

      #timeSlider {
        height:12.38rem !important;
        margin-bottom: 1.56rem;
      }
    }
  }

  :deep(.ts-line-present) {
    top: 3.44rem;
  }

  :deep(.ts-axis-60) {
    height: 30px !important;
  }

  :deep(.ts-timeChunk) {
    height: 30px;
  }

  :deep(.ts-axis-time, .ts-axis-time-last) {
    top: -32px;
  }
}

@media screen and (min-width: 3840px) {
  .s4ksvg {
    transform: scale(2.5);
    margin: 0 10px;
  }

  .s4ktimesvg {
    transform: scale(1);
  }

  .videoMain {
    .videoFooter {
      .control {
        height: 90px;

        .schedule,
        .other,
        .download,
        .date {
          border-radius: 8px;

          .item {

            height: 60px;
            margin: 0 20px;

            img {
              width: 30px;
              height: 30px;
              padding: 0 20px;
            }
          }
        }

        .multiple,
        .num {
          border-radius: 8px;
          margin-left: 10px;

          .item {
            border-radius: 8px;
            height: 60px;

            span {
              padding: 0 20px;
            }
          }
        }


        .picker {
          bottom: 10px;
        }
      }

      .videoDesc {
        height: 48px;
        padding: 18px 0;
      }

      #timeSlider {
        height: 9.63rem !important;
        margin-bottom: 2.19rem;
        :deep(.ts-line-present){
          font-size: 1.5rem !important;
        }
      }
    }
  }

  :deep(.ts-line-present) {
    top: 5.94rem;
  }

  :deep(.ts-axis-60) {
    height: 40px !important;
  }

  :deep(.ts-timeChunk) {
    height: 40px !important;
  }

  :deep(.ts-axis-time, .ts-axis-time-last) {
    top: -35px;
  }
}
</style>
