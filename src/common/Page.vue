<template>
    <div class="w-full flex justify-center font-inter" style="font-family: inter !important;">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-[1.5rem]">
                <li @click="goToPage(currentPage - 1)" class="w-[5.75rem] h-[3.8125rem] grow shrink basis-0 self-stretch px-[1.5rem] py-[1rem] bg-black/0 border border-white flex-col justify-center items-center inline-flex">
                    <a href="javascript:;" :style="{ '--tw-bg-opacity': bgOpacity }">
                        <img src="@/assets/icon/chevron-left.svg" alt="previous" class="w-[0.9375rem] h-[0.9375rem]" />
                    </a>
                </li>
                <div v-for="page in visiblePages" :key="page">
                    <li class="w-[5.75rem] h-[3.8125rem] grow shrink basis-0 self-stretch px-[1.5rem] py-[1rem] bg-black/0 border border-white flex-col justify-center items-center inline-flex">
                        <a href="javascript:;" @click="goToPage(page)" :class="{
                            'text-white': currentPage === page,
                            'bg-transparent': currentPage === page,
                        }" :style="{ '--tw-bg-opacity': bgOpacity }"
                        class="h-[1.875rem] text-center text-white text-[1.375rem] font-['semibold']  leading-[160%]">
                            {{ page }}
                        </a>
                    </li>
                </div>
                <li @click="goToPage(currentPage + 1)" class="w-[5.75rem] h-[3.8125rem] grow shrink basis-0 self-stretch px-[1.5rem] py-[1rem] bg-black/0 border border-white flex-col justify-center items-center inline-flex">
                    <a href="javascript:;" :style="{ '--tw-bg-opacity': bgOpacity }">
                        <img src="@/assets/icon/chevron-right.svg" alt="next" class="w-[0.9375rem] h-[0.9375rem]" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { ref, computed, defineProps, toRefs,defineEmits } from "vue"
const props = defineProps({
    searchCCTVs: {
        type: String,
        default: ""
    },
    totalPages:{
        type:Number,
        default:1
    }
})
const emit = defineEmits(["currentToPage"])
const { searchCCTVs,totalPages} = toRefs(props)
const currentPage = ref(1);
const itemsPerPage = ref(16);

/**
 * 背景透明度调节功能
 */
const bgOpacity = ref(95);
const maxVisiblePages = 5; // Adjust as needed

// const totalPages = computed(() => {
//     return 10
// });


const visiblePages = computed(() => {
    const pages = [];

    if (totalPages.value <= maxVisiblePages) {
        for (let i = 1; i <= totalPages.value; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage.value === 1) {
      for (let i = 1; i <= maxVisiblePages - 2; i++) {
        pages.push(i);
      }
      if (maxVisiblePages < totalPages.value) {
        pages.push("...");
      }
      pages.push(totalPages.value);
    } else if (currentPage.value <= totalPages.value - 3) {
      if (currentPage.value > 3) {
        pages.push(1);
        // if (maxVisiblePages < totalPages.value) {
        //   pages.push("...");
        // }
      }
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i);
      }
      if (maxVisiblePages < totalPages.value) {
        pages.push("...");
      }
      pages.push(totalPages.value);
    } else if (
      currentPage.value > totalPages.value - 3 &&
      currentPage.value < totalPages.value
    ) {
      // if (currentPage.value > 3) {
      //   pages.push(1);
      //   if (maxVisiblePages < totalPages.value) {
      //     pages.push("...");
      //   }
      // }
      for (let i = currentPage.value - 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else if (currentPage.value === totalPages.value) {
      // pages.push(1);
      // if (maxVisiblePages < totalPages.value) {
      //   pages.push("...");
      // }
      for (
        let i = totalPages.value - maxVisiblePages + 3;
        i <= totalPages.value;
        i++
      ) {
        pages.push(i);
      }
    }
    }
    return pages;
});
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit("currentToPage",page)
    }
}
</script>