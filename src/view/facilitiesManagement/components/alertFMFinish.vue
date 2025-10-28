<template>
    <div class="fade-out">
        <div class="w-[37.8125rem] h-[22.25rem] relative scaleUp">
            <div
                class="w-[37.8125rem] h-[22.25rem] left-0 top-0 absolute bg-black/60 rounded-md shadow-[0rem_1.25rem_0.75rem_0rem_rgba(0,0,0,0.15)] border border-white">

            </div>
            <div
                class="w-[32.6875rem] left-[2.25rem] top-[13.5rem] absolute text-center text-white/90 text-2xl font-['medium'] leading-[31.1.25rem] tracking-wide">
                The malfunction has been successfully resolved. All systems are now functioning normally.</div>
            <div
                class="left-[1.5rem] top-[1.375rem] absolute text-white/90 text-[1.75rem] font-['bold'] leading-9 tracking-wide">
                Alert Resolved</div>
            <div class="left-[16.75rem] top-[7.5rem] absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.75rem" height="3.75rem" viewBox="0 0 60 60"
                    fill="none">
                    <path
                        d="M25.6639 34.6181L20.094 29.0482C19.483 28.4371 18.7283 28.1316 17.83 28.1316C16.9317 28.1316 16.1353 28.4606 15.4407 29.1187C14.8296 29.7767 14.5241 30.5523 14.5241 31.4454C14.5241 32.3384 14.8531 33.0905 15.5112 33.7015L23.2667 41.5276C23.9462 42.1857 24.7388 42.5147 25.6447 42.5147C26.5506 42.5147 27.3561 42.1857 28.0611 41.5276L44.0658 25.4524C44.7709 24.7944 45.1234 24.0279 45.1234 23.1532C45.1234 22.2784 44.7709 21.4937 44.0658 20.7991C43.4078 20.188 42.6178 19.8942 41.6961 19.9177C40.7743 19.9412 39.9896 20.2585 39.342 20.8696L25.6639 34.6181ZM29.9745 60C25.8317 60 21.9392 59.2225 18.297 57.6674C14.6548 56.1124 11.4723 53.9734 8.74942 51.2506C6.02656 48.5277 3.88761 45.3484 2.3326 41.7127C0.777532 38.077 0 34.1878 0 30.045C0 25.8552 0.777532 21.9392 2.3326 18.297C3.88761 14.6548 6.02287 11.4828 8.73836 8.78101C11.4538 6.07915 14.6312 3.94019 18.2703 2.36411C21.9095 0.788038 25.8024 0 29.9492 0C34.1429 0 38.0636 0.786226 41.7114 2.35868C45.3591 3.93109 48.5321 6.0651 51.2304 8.7607C53.9287 11.4563 56.0649 14.6262 57.639 18.2702C59.213 21.9143 60 25.836 60 30.0353C60 34.1845 59.212 38.0799 57.6359 41.7213C56.0598 45.3627 53.9208 48.542 51.219 51.2591C48.5172 53.9763 45.3484 56.1124 41.7127 57.6674C38.077 59.2225 34.1643 60 29.9745 60Z"
                        fill="#31C48D" />
                </svg>
            </div>
            <div class="left-[0] top-[3.9375rem] absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="37.8125rem" height="0.9375rem" viewBox="0 0 605 15"
                    fill="none">
                    <path d="M0 14.4633H370.968L383.38 1.39453L604.546 2.39453"
                        stroke="url(#paint0_linear_9663_99552)" />
                    <defs>
                        <linearGradient id="paint0_linear_9663_99552" x1="-2.59384" y1="12.064" x2="507.105"
                            y2="-58.574" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.17" />
                            <stop offset="0.385167" stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0.13" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.scaleUp{
  transform-origin: bottom right; /* 设置动画的起始点为左下角 */
  animation: scaleUp .5s ease-in-out;
}
@keyframes scaleUp {
  0% {
    transform: scale(0) translate(0, 0);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}
.fade-out {
    animation: fadeOut 4s forwards; /* 3秒后淡出 */
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    80%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>