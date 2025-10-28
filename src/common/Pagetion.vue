<template>
    <div class="w-full flex justify-center font-inter" style="font-family: inter !important;">
            <ul class="w-full inline-flex items-center">
                <!-- Prev -->
                <li @click="goToPage(currentPage - 1)"
                    class="w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
                    <img src="@/assets/icon/chevron-left.svg" alt="prev" class="w-[1.25rem] h-[1.25rem]" />
                </li>

                <!-- Page Numbers -->
                <div class="w-[4.375rem]" v-for="(page, index) in visiblePages" :key="index">
                    <!-- Ellipsis -->
                    <li v-if="page === '...'"
                        class="w-[3.5rem] h-[3.5rem] text-[1.75rem] font-['bold'] text-white flex justify-center items-center select-none">
                        ...</li>

                    <!-- First or Last Page (with border) -->
                    <li v-else-if="page === 1 || page === totalPages" @click="goToPage(page)"
                        class="w-[3.5rem] h-[3.5rem] text-[1.75rem] font-['Roboto'] br text-white flex justify-center items-center cursor-pointer">
                        {{ page }}
                    </li>

                    <!-- Current Page (highRobotoed) -->
                    <li v-else-if="page === currentPage"
                        class="w-[3.5rem] h-[3.5rem] bg-[#007AFF] rounded-[0.375rem] text-[1.75rem] font-['Roboto'] text-white flex justify-center items-center">
                        {{ page }}
                    </li>

                    <!-- Normal Page (no border) -->
                    <li v-else @click="goToPage(page)"
                        class="w-[3.5rem] h-[3.5rem] text-[1.75rem] font-['Roboto'] text-white flex justify-center items-center cursor-pointer">
                        {{ page }}
                    </li>
                </div>

                <!-- Next -->
                <li @click="goToPage(currentPage + 1)"
                    class="w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
                    <img src="@/assets/icon/chevron-right.svg" alt="next" class="w-[1.25rem] h-[1.25rem]" />
                </li>

                <!-- Page Jump Input -->
                <span class=" text-white text-[1.75rem] font-['Roboto']">Page</span>
                <input type="text" v-model.number="inputPage"
                    class="mx-[1.5rem] w-[5rem] h-[3.5rem] text-center ipt text-white text-[1.75rem]" />
                <button @click="goToPage(inputPage)"
                    class="px-3 py-1 text-[1.75rem] font-['Roboto'] bg-transparent text-white br rounded hover:bg-white hover:text-black">
                    Go
                </button>
            </ul>
    </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps, toRefs } from "vue"

const props = defineProps({
    totalPages: {
        type: Number,
        default: 32
    }
})
const emit = defineEmits(["currentToPage"])
const { totalPages } = toRefs(props)

const currentPage = ref(15) // 默认在第15页，模拟你截图的状态
const inputPage = ref(15)
const maxVisiblePages = 5

const visiblePages = computed(() => {
    const pages = []

    if (totalPages.value <= maxVisiblePages) {
        for (let i = 1; i <= totalPages.value; i++) pages.push(i)
    } else {
        if (currentPage.value <= 3) {
            for (let i = 1; i <= 3; i++) pages.push(i)
            pages.push("...")
            pages.push(totalPages.value)
        } else if (currentPage.value >= totalPages.value - 2) {
            pages.push(1)
            pages.push("...")
            for (let i = totalPages.value - 2; i <= totalPages.value; i++) pages.push(i)
        } else {
            pages.push(1)
            pages.push("...")
            pages.push(currentPage.value - 1, currentPage.value, currentPage.value + 1)
            pages.push("...")
            pages.push(totalPages.value)
        }
    }

    return pages
})

const goToPage = (page) => {
    if (typeof page === "number" && page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        inputPage.value = page
        emit("currentToPage", page)
    }
}
</script>
<style lang="scss" scoped>
.ipt {
    border-radius: 0.5rem;
    border: 0.125rem solid rgba(255, 255, 255, 0.50);
    background: rgba(0, 17, 26, 0.62);
    font-size: 1.75rem !important;
    font-family: 'Roboto' !important;
}
.br{
    border-radius: 0.375rem;
border: 0.0625rem solid rgba(255, 255, 255, 0.50);

/* shadow/sm */
box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05);
}
</style>
