<template>
  <div class="w-[240rem] absolute bottom-0 left-0 overflow-hidden">

  <div id="marquee3k" class="marquee3k" data-speed="1" data-direction="left" data-pausable="true">
    <div
      class="w-[364.875rem] h-28 py-[2.1875rem] bg-black/25 border-t border-white/40 justify-start items-center flex">
      <div class="flex items-end">

      <div class="mr-[2.625rem]" v-for="(item,index) in marqueeList" :key="index">
        <span class="text-white/80 text-[2rem] font-bold font-['Roboto'] leading-[2.6rem] tracking-wide">{{ item.title }}</span>
        <span class="text-white/80 text-[2rem] font-medium font-['Roboto'] leading-10 tracking-wide mx-[1.5rem]">{{ item.sar }}</span>
        <span class="text-[#23cd93]/80 text-[2rem] font-medium font-['Roboto'] leading-10 tracking-wide">
        </span>
        <span
          class="text-[2rem] font-medium font-['Roboto'] leading-[2.6rem] tracking-wide" :style="{color:item.color}">{{ item.num }}</span>
      </div>
    </div>
    </div>
  </div>
</div>

</template>
<script setup>
import {ref, onMounted ,nextTick} from "vue";
import Marquee3k from "marquee3000";

const marqueeList=ref([{
  title:"Saudi Aramco",
  sar:"28.15 SAR",
  num:"-0.0123",
  color:"#e2975a"
},{
  title:"Al Rajhi Bank",
  sar:"92.3 SAR",
  num:"-0.0128",
  color:"#e2975a"
},{
  title:"Saudi Telecom Company",
  sar:"40.70 SAR",
  num:"=0",
  color:"#e2975a"
},{
  title:"Riyad Bank",
  sar:"28.50 SAR",
  num:"+0.0142",
  color:"#23CD94"
},{
  title:"Saudi Basic Industries Corporation",
  sar:"67.8 SAR",
  num:"-0.0145",
  color:"#e2975a"
},{
  title:"National Commercial Ban",
  sar:"33.15 SAR",
  num:"-0.0163",
  color:"#e2975a"
},{
  title:"Jeddah Bank",
  sar:"17.94 SAR",
  num:"+0.0079",
  color:"#23CD94"
},{
  title:"Saudi Investment Bank",
  sar:"14.80 SAR",
  num:"+0.0193",
  color:"#23CD94"
},{
  title:"Saudi French Bank",
  sar:"33.00 SAR",
  num:"+0.0076",
  color:"#23CD94"
},])


onMounted(() => {
  // 初始化 Marquee3k
  nextTick(() => {
    Marquee3k.init();
  });
});
</script>
<style scoped></style>
