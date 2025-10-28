<template>
    <div class="box py-[0.9375rem]">
        <div class="w-full px-[1.625rem] flex items-center justify-between">
            <div>
                <div class="self-stretch justify-center text-white/90 text-[1.625rem] font-['bold'] leading-10">
                    IDT123456789</div>
                <div class="self-stretch justify-center text-white/60 text-[1.1875rem] font-['semibold'] leading-6">
                    SRC-L2-C54 Facing UT Gym</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M18.4137 15.7598L28.3404 5.83026C29.0735 5.09712 29.0735 3.90945 28.3404 3.17631C27.6072 2.44318 26.4196 2.44318 25.6864 3.17631L15.7598 13.1059L5.83026 3.17925C5.09712 2.44611 3.90945 2.44611 3.17631 3.17925C2.44318 3.91238 2.44318 5.10005 3.17631 5.83319L13.1059 15.7598L3.17925 25.6894C2.44611 26.4225 2.44611 27.6102 3.17925 28.3433C3.54581 28.7099 4.02675 28.8917 4.50475 28.8917C4.98275 28.8917 5.46369 28.7099 5.83026 28.3433L15.7598 18.4137L25.6894 28.3404C26.4225 29.0735 27.6102 29.0735 28.3433 28.3404C28.7099 27.9738 28.8917 27.4929 28.8917 27.0149C28.8917 26.5369 28.7099 26.0559 28.3433 25.6894L18.4137 15.7598Z"
                        fill="white" />
                </svg>
            </div>
        </div>
        <div class="px-[1.625rem] relative mt-[0.8125rem]">
            <div class="cctv"></div>
            <div class="w-full px-[3.25rem] absolute left-0 bottom-[1.625rem] flex items-end justify-between">
                <div class="flex items-center gap-[0.9375rem]">
                    <div className="w-[0.625rem] h-[0.625rem] bg-red-500 rounded-full" />
                    <div class="justify-start text-white text-[1.6875rem] font-['bold'] leading-9 tracking-wide">LIVE 3D
                    </div>
                </div>
                <div>
                    <div
                        class="w-[3.5625rem] h-[3.5625rem] flex items-center justify-center bg-slate-950/50 rounded-[0.75rem] outline outline-[0.0413rem] outline-offset-[-0.0413rem] outline-white/50 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8125rem" height="2rem" viewBox="0 0 29 32"
                            fill="none">
                            <path
                                d="M16.8535 2.73117L17.4554 2.24964C18.0573 1.8885 18.1777 1.1662 17.8166 0.564292C17.4554 -0.0376193 16.7331 -0.158002 16.1312 0.203145L12.5198 2.61079C12.279 2.85155 12.0382 3.2127 12.0382 3.57385C12.0382 3.93499 12.1586 4.29614 12.3994 4.53691L16.0108 8.14837C16.2516 8.38914 16.4924 8.50952 16.8535 8.50952C17.2147 8.50952 17.4554 8.38914 17.6962 8.14837C18.1777 7.66684 18.1777 6.94455 17.6962 6.46302L16.2516 5.01843C22.0299 5.98149 26.4841 10.9172 26.4841 16.9363C26.4841 23.5573 21.0669 28.9745 14.4459 28.9745C7.82485 28.9745 2.40764 23.5573 2.40764 16.9363C2.40764 12.8433 4.45414 9.11143 7.82485 6.82417C8.42676 6.46302 8.54714 5.74073 8.18599 5.13882C7.82485 4.65729 7.10255 4.41652 6.62102 4.89805C2.40764 7.54646 0 12.0006 0 16.9363C0 24.8815 6.50064 31.3821 14.4459 31.3821C22.3911 31.3821 28.8917 24.8815 28.8917 16.9363C28.8917 9.83372 23.7153 3.93499 16.8535 2.73117Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div
                        class="w-[3.5625rem] h-[3.5625rem] mt-[1.125rem] flex items-center justify-center bg-slate-950/50 rounded-t-[0.75rem] outline outline-[0.0413rem] outline-offset-[-0.0413rem] outline-white/50 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"
                            fill="none">
                            <path
                                d="M14.0263 1.31445V14.0268H1.31396V17.4938H14.0263V30.2062H17.4933V17.4938H30.2056V14.0268H17.4933V1.31445H14.0263Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div
                        class="w-[3.5625rem] h-[3.5625rem] flex items-center justify-center bg-slate-950/50 rounded-b-[0.75rem] outline outline-[0.0413rem] outline-offset-[-0.0413rem] outline-white/50 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"
                            fill="none">
                            <path d="M30.2057 13.7886H1.31396V17.2556H30.2057V13.7886Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.box {
    width: 98.6587rem;
    height: 61.1077rem;
    flex-shrink: 0;
    border-radius: 0.6566rem;
    border: 0.0411rem solid rgba(255, 255, 255, 0.50);
    background: rgba(0, 17, 26, 0.70);
}

.cctv {
    width: 95.4075rem;
    height: 53.6796rem;
    flex-shrink: 0;
    border-radius: 0;
    background: #9CA3AF;
}
</style>