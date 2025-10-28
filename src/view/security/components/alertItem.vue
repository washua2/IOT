<template>
  <div>

  <div
        class="w-full h-40 px-5 py-4  border-l-4  justify-start items-center gap-6 inline-flex" :class="status=='new'?'border-[#d03801] bg-[#d03801]/50':'bg-[#faca15]/20 border-[#eeab00]'" v-for="(item,index) in alertItenList" :key="index">
        <div class="grow shrink basis-0 h-32 justify-start items-start gap-5 flex">
          <div class="h-16 pt-1 justify-start items-start gap-2.5 flex">
            <div class="pt-1 justify-start items-start gap-2.5 flex">
              <div class="w-14 h-14 relative">
                <div class="w-14 h-14 left-0 top-0 absolute bg-[#d03801] rounded-full flex items-center justify-center" :class="status=='new'?'bg-[#d03801]':' bg-[#faca15]'">
                  <img class="w-[1.3553rem] h-[1.9375rem]" :src="item.icon" alt="">
                </div>
                <div
                  class="w-[2.1875rem] h-[2.1875rem] pl-[0.4375rem] pr-[0.395rem] py-0.5 left-[0.6563rem] top-[0.6563rem] absolute justify-center items-center inline-flex">
                  <div class="w-[1.355rem] h-[1.9375rem] relative">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
            <div class="self-stretch justify-start items-center gap-10 inline-flex">
              <div class="grow shrink basis-0 text-white/90 text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                {{ item.title }}</div>
              <div class="px-2 py-1  flex-col justify-center items-center inline-flex" :class="status=='new'?'bg-[#b43403]':' bg-[#eeab00]'">
                <div
                  class="text-center text-white text-xl font-bold font-['29LT Azer'] uppercase leading-relaxed tracking-wide">
                  {{ item.status }}</div>
              </div>
            </div>
            <div class="self-stretch h-9 text-white/90 text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
              {{ item.description }}
            </div>
            <div class="self-stretch justify-start items-center gap-6 inline-flex">
              <div class="grow shrink basis-0 h-[2.3125rem] justify-start items-center gap-4 flex">
                <div class="px-2 py-1 bg-[#101825]/30 rounded justify-start items-center gap-1 flex">
                  <div class="text-center text-white/50 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">TTR
                    {{ item.ttr }}
                    mins</div>
                </div>
                <div
                  class="h-[1.8125rem] grow basis-0 text-white/50 text-2xl font-normal font-['29LT Azer'] leading-[1.8125rem]">
                  {{ item.date }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-end items-center gap-3 flex">
          <div class="w-4 h-4  opacity-40  overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" fill="none">
              <g opacity="0.4">
                <path
                  d="M7.98034 3.33332C8.40465 3.33341 8.81155 3.49702 9.11154 3.78817L15.5115 9.99767C15.6644 10.1409 15.7862 10.3122 15.8701 10.5016C15.954 10.691 15.9981 10.8947 15.9999 11.1008C16.0018 11.3069 15.9613 11.5113 15.8809 11.7021C15.8004 11.8929 15.6816 12.0662 15.5314 12.212C15.3811 12.3577 15.2025 12.473 15.0059 12.5511C14.8092 12.6291 14.5985 12.6684 14.3861 12.6666C14.1737 12.6648 13.9637 12.622 13.7685 12.5406C13.5733 12.4593 13.3967 12.341 13.2491 12.1927L7.98034 7.08076L2.71154 12.1927C2.40978 12.4755 2.00561 12.632 1.5861 12.6284C1.16658 12.6249 0.765284 12.4616 0.468631 12.1738C0.171977 11.886 0.00370598 11.4966 6.00815e-05 11.0896C-0.00358582 10.6826 0.157686 10.2905 0.449139 9.99767L6.84914 3.78817C7.14913 3.49702 7.55603 3.33341 7.98034 3.33332Z"
                  fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
  </div>
    
</template>
<script setup>
import {ref} from "vue"
import PERSON from "@/assets/icon/person.svg"
const alertItenList = ref([{
  id: 1,
  title: "Loitering",
  description: "Southern Courtyard",
  icon: PERSON,
  status: "new",
  ttr:"1",
  date: "01/25/25 14:02"
},
{
  id: 2,
  title: "Loitering",
  description: "Southern Courtyard",
  icon: PERSON,
  status: "Pending",
  ttr:"1",
  date: "01/25/25 14:02"
}])
</script>