<template>
  <div class="opacity-[0]">
    <audio ref="audioRef" :src="audioPlayer"></audio>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import audioPlayer from "../../public/audio/success.mp3"

export default {
  name: "AudioPlayer",
  props: {
    count: {
      type: Number,
      required: true, // 父组件必须传入 count
    },
  },
  setup(props) {
    const count = ref(0); // 计数器
    const audioSrc = ref(audioPlayer); // 替换为你的音频文件路径
    const audioRef = ref(null); // 引用音频元素

    // 监听 count 的变化
    watch(() => props.count, (newCount, oldCount) => {
      if (newCount > oldCount) {
        console.log("play audio", newCount)
        playAudio();
      }
    });

    // 播放音频
    const playAudio = () => {
      if (audioRef.value) {
        audioRef.value.play();
      }
    };

    // 增加计数
    const incrementCount = () => {
      count.value++;
    };

    return {
      count,
      audioSrc,
      audioRef,
      incrementCount,
    };
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}
</style>