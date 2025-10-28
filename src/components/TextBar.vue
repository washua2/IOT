<template>
    <div class="max-w-[135.3125rem] min-h-[6.75rem] px-[2rem] pt-[2rem] pb-[1.8125rem] bg-black/50 flex items-center justify-center" v-show="message">
        <span id="messages" class="messages">
        </span>
    </div>
</template>
<script setup>
import { ref,inject, onMounted ,computed,defineProps,toRefs,watch} from 'vue';

// const { ScoketStore, AlertStore } = inject("store");
// const videoSrc = new URLSearchParams(location.search).get("url");
const props=defineProps({
  message:{
    type: String,
    required: false,
  },
  
})
const {message} = toRefs(props)
watch(message,(val)=>{
    console.log("val==>",val)
    const elements = document.getElementById("messages");
    elements.innerHTML=""
    typeWriter("messages",message.value,10)
})

function typeWriter(elementId, text, speed) {
    let i = 0; // 当前字符索引
    const element = document.getElementById(elementId);
    const textArray = text.split(''); // 将文本分割成字符数组
 
    function type() {
        if (i < textArray.length) {
            element.innerHTML += textArray[i]; // 逐个字符添加到元素中
            i++;
            setTimeout(type, speed); // 递归调用，等待一段时间后继续
        }
    }
 
    type(); // 开始打字效果
}
</script>
<style scoped>
.messages{
    color:#FFF;
	font-family:Roboto;
	font-size:2.5rem;
	font-style:normal;
	font-weight:600;
	line-height:150%;
	/* 46.54.8125rem*/
letter-spacing:1.0.125rem;
}
</style>