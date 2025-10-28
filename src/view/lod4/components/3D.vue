<template>
    <div class="w-full h-full fixed top-0 left-0 bottom-0 right-0 z-[99999] bg-black/30 flex items-center justify-center">
    <div class="box overflow-hidden">
        <div class="w-full pt-[1.25rem] px-[2.1875rem] flex items-center justify-between">
            <div>
                <div class="self-stretch justify-center text-white/90 text-[2.1875rem] font-['bold']">
                    IDT123456789</div>
                <div class="self-stretch justify-center text-white/60 text-[1.625rem] font-['semibold']">
                    SRC-L2-C54 Facing UT Gym</div>
            </div>
            <div class=" cursor-pointer" @click="handlerClose">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.625rem" height="2.625rem" viewBox="0 0 32 32"
                    fill="none">
                    <path
                        d="M18.4137 15.7598L28.3404 5.83026C29.0735 5.09712 29.0735 3.90945 28.3404 3.17631C27.6072 2.44318 26.4196 2.44318 25.6864 3.17631L15.7598 13.1059L5.83026 3.17925C5.09712 2.44611 3.90945 2.44611 3.17631 3.17925C2.44318 3.91238 2.44318 5.10005 3.17631 5.83319L13.1059 15.7598L3.17925 25.6894C2.44611 26.4225 2.44611 27.6102 3.17925 28.3433C3.54581 28.7099 4.02675 28.8917 4.50475 28.8917C4.98275 28.8917 5.46369 28.7099 5.83026 28.3433L15.7598 18.4137L25.6894 28.3404C26.4225 29.0735 27.6102 29.0735 28.3433 28.3404C28.7099 27.9738 28.8917 27.4929 28.8917 27.0149C28.8917 26.5369 28.7099 26.0559 28.3433 25.6894L18.4137 15.7598Z"
                        fill="white" />
                </svg>
            </div>
        </div>
        <div class="w-full flex items-center justify-center relative mt-[0.8125rem]">
            <div class="cctv">

            </div>
        </div>
    </div>
    </div>

</template>
<script setup>
import { onMounted, ref ,defineEmits,inject} from 'vue'
const { AlertStore } = inject("store");
const emit = defineEmits(['handlerClose'])
const handlerClose=()=>{
    emit('handlerClose')
    AlertStore.methods.setRoute(false)
    ue4('side_panel_button',{"click_button":"route"})

}
</script>
<style lang="scss" scoped>
.box {
    width: 132.7931rem;
    height: 82.25rem;
    flex-shrink: 0;
    border-radius: 0.6753rem;
    border: 0.0563rem solid rgba(64, 64, 64, 0.50);
    background: rgba(0, 17, 26, 0.60);
    backdrop-filter: blur(0.25rem);
}

.cctv {
    width: 128.4171rem;
    height: 72.2519rem;
    flex-shrink: 0;
    border-radius: 0;
    background: #9CA3AF;
}
</style>