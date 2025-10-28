<template>
  <div class="flex items-start justify-between relative">
    <!-- left -->
    <div class="w-[63.5625rem] h-[31rem] relative">
      <div class="h-[26.3125rem] left-0 top-[4.6875rem] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div class="w-[63.5625rem] justify-start items-start gap-3 inline-flex">
          <div
            class="h-[10rem] grow shrink basis-0 px-6 pt-5 pb-6 rounded-[0.25rem] flex-col justify-start items-center gap-8 inline-flex overflow-hidden" style="background:rgba(120, 0, 0, 0.30);border: 0.125rem solid rgba(255, 255, 255, 0.26)">
            <div class="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative ">
                  <img
                    class="w-full h-full left-[0.0625rem] top-[0.125rem] absolute" 
                    src="@/assets/icon/traffic-taxi.svg" />
                </div>
                <div
                  class="grow shrink basis-0 text-right text-[#fff] text-[3.125rem] font-['semibold'] font-['DS-Digital'] uppercase leading-[2.75rem] tracking-[0.2rem]"
                  >
                  3</div>
              </div>
              <div
                class="self-stretch h-16 text-[#fff] text-[2rem] font-[500] font-['Roboto'] leading-loose"
                >
                Heavy Traffic</div>
            </div>
          </div>
          <div
            class="h-[10rem] grow shrink basis-0 px-6 pt-5 pb-6 rounded-[0.25rem] flex-col justify-start items-center gap-8 inline-flex overflow-hidden" style="background:rgba(120, 0, 0, 0.30);border: 0.125rem solid rgba(255, 255, 255, 0.26)">
            <div class="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative ">
                  <img
                    class="w-full h-full left-[0.0625rem] top-[0.125rem] absolute" 
                    src="@/assets/icon/accident-taxi.svg" />
                </div>
                <div
                  class="grow shrink basis-0 text-right text-[#fff] text-[3.125rem] font-['semibold'] font-['DS-Digital'] uppercase leading-[2.75rem] tracking-[0.2rem]"
                  >
                  3</div>
              </div>
              <div
                class="self-stretch h-16 text-[#fff] text-[2rem] font-[500] font-['Roboto'] leading-loose"
                >
                Accident</div>
            </div>
          </div>
          <div
            class="h-[10rem] grow shrink basis-0 px-6 pt-5 pb-6 rounded-[0.25rem] flex-col justify-start items-center gap-8 inline-flex overflow-hidden" style="background:rgba(120, 0, 0, 0.30);border: 0.125rem solid rgba(255, 255, 255, 0.26)">
            <div class="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative ">
                  <img
                    class="w-full h-full left-[0.0625rem] top-[0.125rem] absolute" 
                    src="@/assets/icon/transpot-taxi.svg" />
                </div>
                <div
                  class="grow shrink basis-0 text-right text-[#fff] text-[3.125rem] font-['semibold'] font-['DS-Digital'] uppercase leading-[2.75rem] tracking-[0.2rem]"
                  >
                  3</div>
              </div>
              <div
                class="self-stretch h-16 text-[#fff] text-[2rem] font-[500] font-['Roboto'] leading-[1.875rem]"
                >
                Vehicle Breakdown</div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 h-[10rem] px-6 pt-5 pb-6 rounded-[0.25rem] justify-center items-start gap-8 flex overflow-hidden" style="background-color: rgba(3, 23, 43, 0.17);border: 0.125rem solid rgba(255, 255, 255, 0.26);

">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.0625rem" height="3rem" viewBox="0 0 49 48" fill="none">
  <path d="M33.6359 30.6667C34.0948 30.6667 34.4947 30.979 34.606 31.4241L36.1321 37.5282C36.2434 37.9734 36.6433 38.2857 37.1022 38.2857H41.0357C41.588 38.2857 42.0357 38.7334 42.0357 39.2857V43C42.0357 43.5523 41.588 44 41.0357 44H8.75C8.19771 44 7.75 43.5523 7.75 43V39.2857C7.75 38.7334 8.19772 38.2857 8.75 38.2857H12.6835C13.1424 38.2857 13.5424 37.9734 13.6537 37.5283L15.1797 31.4241C15.291 30.979 15.691 30.6667 16.1498 30.6667H33.6359ZM29.8264 17.3333C30.2852 17.3333 30.6852 17.6456 30.7965 18.0908L32.2013 23.7098C32.3591 24.341 31.8817 24.9524 31.2311 24.9524H18.5546C17.904 24.9524 17.4267 24.341 17.5844 23.7098L18.9892 18.0908C19.1005 17.6456 19.5005 17.3333 19.9593 17.3333H29.8264ZM26.0168 4C26.4757 4 26.8757 4.3123 26.987 4.75746L28.3917 10.3765C28.5495 11.0077 28.0722 11.619 27.4216 11.619H22.3641C21.7135 11.619 21.2362 11.0077 21.394 10.3765L22.7987 4.75746C22.91 4.3123 23.31 4 23.7689 4H26.0168Z" fill="white"/>
</svg>
                </div>
                <div
                  class="grow shrink basis-0 text-right text-white text-[3.125rem] font-bold font-[DS-Digital] uppercase leading-[2.75rem] tracking-[0.2rem]">
                  0</div>
              </div>
              <div class="self-stretch h-16 text-white/75 text-[2rem] font-medium font-['Roboto'] leading-loose">
                Obstacle</div>
            </div>
          </div>
        </div>
        <div class="w-[63.5625rem] justify-start items-start gap-3 inline-flex">
          <div
            class="grow shrink basis-0 h-[10rem] px-6 pt-5 pb-6 rounded-[0.25rem] justify-center items-start gap-8 flex overflow-hidden" style="background-color: rgba(3, 23, 43, 0.17);border: 0.125rem solid rgba(255, 255, 255, 0.26);

">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class=" left-[0] top-[-0.3rem] absolute rounded-[0.0313rem]"
                    width="3rem" height="3rem" viewBox="0 0 48 48" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.9629 43C7.61058 43 7.36876 42.6454 7.49744 42.3174L10.5186 34.6174C10.5488 34.5403 10.5598 34.4603 10.5502 34.3781C10.4486 33.5114 9.84905 28.2497 9.99973 26C10.0198 25.7005 10.1006 25.3205 10.2271 24.8841C10.2961 24.6459 10.1901 24.3898 9.96809 24.2793L4.93359 21.7737C4.68637 21.6507 4.5857 21.3505 4.70873 21.1033L5.00946 20.4991C5.01097 20.496 5.0093 20.4924 5.00602 20.4915C5.00277 20.4907 5.00109 20.4871 5.00256 20.484L8.86464 12.4748C8.94735 12.3033 9.12033 12.1936 9.31076 12.192L17.4718 12.1226C17.9638 12.0775 18.4526 12.1 18.9381 12.1903C19.4668 12.2976 19.9362 12.4802 20.3465 12.738C20.7567 12.9958 22.5897 15.194 22.8475 15.5892C23.6671 16.9736 23.785 19.8019 23.792 19.9901C23.7923 19.9971 23.7926 20.0035 23.7932 20.0104L24.4182 28.4051C24.4313 28.581 24.5361 28.737 24.6941 28.8156L32.7244 32.8121C32.9344 32.9166 33.1888 32.8611 33.3362 32.6787L35.1108 30.4816C35.3109 30.2338 35.6886 30.2338 35.8887 30.4816L45.3421 42.1858C45.6063 42.5128 45.3735 43 44.9532 43H26.0463C25.626 43 25.3932 42.5128 25.6573 42.1858L31.0839 35.4672C31.2847 35.2186 31.2039 34.8479 30.9177 34.7055L25.5342 32.0262C25.2204 31.87 24.8474 32.0768 24.8137 32.4258L23.836 42.5481C23.8113 42.8044 23.5959 43 23.3383 43H21.0734C20.778 43 20.547 42.7453 20.5758 42.4514L21.4672 33.3326C21.4869 33.1313 21.3834 32.9379 21.2049 32.8427L14.7463 29.3982C14.4107 29.2192 14.006 29.4657 14.0111 29.8461L14.0787 34.8915C14.0796 34.963 14.0652 35.0339 14.0365 35.0993L10.6959 42.7012C10.6161 42.8827 10.4365 43 10.2382 43H7.9629ZM20.6417 26.7988C20.9864 26.9704 21.3875 26.7043 21.3635 26.32L21.0948 22.0203C21.0646 21.5384 20.4366 21.3748 20.1753 21.7808L18.1444 24.9361C17.9831 25.1866 18.0753 25.5216 18.342 25.6543L20.6417 26.7988ZM10.7877 21.8947C11.0447 22.0226 11.3561 21.9085 11.4723 21.646C12.3723 19.6124 13.4552 17.4971 14.0234 16.4119C14.1991 16.0765 13.9559 15.6717 13.5773 15.6717H10.8128C10.6213 15.6717 10.4466 15.781 10.363 15.9533L8.33844 20.1227C8.21866 20.3694 8.31993 20.6665 8.56545 20.7887L10.7877 21.8947ZM22.7924 15.5L22.8475 15.5892C22.8295 15.5588 22.8111 15.529 22.7924 15.5ZM24.6194 14.2039C23.6314 14.2039 22.7884 13.8505 22.0902 13.1439C21.3921 12.4373 21.0431 11.59 21.0431 10.6019C21.0431 9.59694 21.3921 8.74537 22.0902 8.04722C22.7884 7.34907 23.6314 7 24.6194 7C25.6074 7 26.4547 7.34907 27.1614 8.04722C27.868 8.74537 28.2214 9.59694 28.2214 10.6019C28.2214 11.59 27.868 12.4373 27.1614 13.1439C26.4547 13.8505 25.6074 14.2039 24.6194 14.2039Z"
                      fill="white" />
                  </svg>
                </div>
                <div
                  class="grow shrink basis-0 text-right text-white/75 text-[3.125rem] font-bold font-[DS-Digital] uppercase leading-[2.75rem] tracking-[0.2rem]">
                  2</div>
              </div>
              <div class="self-stretch h-16 text-white/75 text-[2rem] font-medium font-['Roboto'] leading-loose">Road
                Works</div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 h-[10rem] px-6 pt-5 pb-6 rounded-[0.25rem] justify-center items-start gap-3 flex overflow-hidden" style="background-color: rgba(3, 23, 43, 0.17);border: 0.125rem solid rgba(255, 255, 255, 0.26);

">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative">
                  <div class="w-12 h-12 left-0 top-[-0.2rem] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3.0625rem" height="3rem" viewBox="0 0 49 48"
                      fill="none">
                      <mask id="mask0_8428_59479" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="49" height="48">
                        <rect x="0.25" width="48" height="48" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_8428_59479)">
                        <path
                          d="M16.75 42L6.25 31.5V16.5L16.75 6H31.75L42.25 16.5V31.5L31.75 42H16.75ZM18.1 32.25L24.25 26.1L30.4 32.25L32.5 30.15L26.35 24L32.5 17.85L30.4 15.75L24.25 21.9L18.1 15.75L16 17.85L22.15 24L16 30.15L18.1 32.25Z"
                          fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  class="grow shrink basis-0 text-right text-white text-[3.125rem] font-bold font-[DS-Digital] uppercase leading-[2.75rem] tracking-[0.2rem]">
                  0</div>
              </div>
              <div class="self-stretch h-16 text-white/75 text-[2rem] font-medium font-['Roboto'] leading-loose">Road
                Blocks</div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 h-[10rem] px-6 pt-5 pb-6 rounded-[0.25rem] justify-center items-start gap-8 flex overflow-hidden" style="background-color: rgba(3, 23, 43, 0.17);border: 0.125rem solid rgba(255, 255, 255, 0.26);

">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.0625rem" height="3rem" viewBox="0 0 49 48"
                    fill="none">
                    <path
                      d="M26.9408 44.0017V25.2413L39.8347 12.3474V18.8408H44.5352V4.31641H30.0443V9.05038H36.4783L22.2404 23.2883V44.0017H26.9408Z"
                      fill="white" />
                    <path
                      d="M4.5 16.32L9.13363 11.6864L4.5 7.10726L7.60726 4L12.2409 8.63363L16.8745 4L19.9273 7.10726L15.2936 11.7409L19.8728 16.3745L16.8745 19.4273L12.1864 14.7936L7.55275 19.4273L4.5 16.32Z"
                      fill="white" />
                  </svg>
                </div>
                <div
                  class="grow shrink basis-0 text-right text-white text-[3.125rem] font-bold font-[DS-Digital] uppercase leading-[2.75rem] tracking-[0.2rem]">
                  0</div>
              </div>
              <div
                class="self-stretch h-16 text-white/75 text-[2rem] font-medium font-['Roboto'] leading-loose">
                Diversion</div>
            </div>
          </div>
          <div
            class="h-[10rem] grow shrink basis-0 self-stretch px-6 pt-5 pb-6 rounded-[0.25rem] justify-center items-start gap-8 flex overflow-hidden" style="background-color: rgba(3, 23, 43, 0.17);border: 0.125rem solid rgba(255, 255, 255, 0.26);

">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div class="self-stretch py-1 justify-start items-center gap-10 inline-flex">
                <div class="w-12 h-12 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.0625rem" height="3rem" viewBox="0 0 49 48"
                    fill="none">
                    <path
                      d="M28.65 43.8C28.15 44.0667 27.6417 44.1083 27.125 43.925C26.6083 43.7417 26.2167 43.4 25.95 42.9L22.95 36.9C22.6833 36.4 22.6417 35.8917 22.825 35.375C23.0083 34.8583 23.35 34.4667 23.85 34.2C24.35 33.9333 24.8583 33.8917 25.375 34.075C25.8917 34.2583 26.2833 34.6 26.55 35.1L29.55 41.1C29.8167 41.6 29.8583 42.1083 29.675 42.625C29.4917 43.1417 29.15 43.5333 28.65 43.8ZM40.65 43.8C40.15 44.0667 39.6417 44.1083 39.125 43.925C38.6083 43.7417 38.2167 43.4 37.95 42.9L34.95 36.9C34.6833 36.4 34.6417 35.8917 34.825 35.375C35.0083 34.8583 35.35 34.4667 35.85 34.2C36.35 33.9333 36.8583 33.8917 37.375 34.075C37.8917 34.2583 38.2833 34.6 38.55 35.1L41.55 41.1C41.8167 41.6 41.8583 42.1083 41.675 42.625C41.4917 43.1417 41.15 43.5333 40.65 43.8ZM16.65 43.8C16.15 44.0667 15.6417 44.1083 15.125 43.925C14.6083 43.7417 14.2167 43.4 13.95 42.9L10.95 36.9C10.6833 36.4 10.6417 35.8917 10.825 35.375C11.0083 34.8583 11.35 34.4667 11.85 34.2C12.35 33.9333 12.8583 33.8917 13.375 34.075C13.8917 34.2583 14.2833 34.6 14.55 35.1L17.55 41.1C17.8167 41.6 17.8583 42.1083 17.675 42.625C17.4917 43.1417 17.15 43.5333 16.65 43.8ZM15.75 32C12.7167 32 10.125 30.925 7.975 28.775C5.825 26.625 4.75 24.0333 4.75 21C4.75 18.2333 5.66667 15.8167 7.5 13.75C9.33333 11.6833 11.6 10.4667 14.3 10.1C15.3667 8.2 16.825 6.70833 18.675 5.625C20.525 4.54167 22.55 4 24.75 4C27.75 4 30.3583 4.95833 32.575 6.875C34.7917 8.79167 36.1333 11.1833 36.6 14.05C38.9 14.25 40.8333 15.2 42.4 16.9C43.9667 18.6 44.75 20.6333 44.75 23C44.75 25.5 43.875 27.625 42.125 29.375C40.375 31.125 38.25 32 35.75 32H15.75Z"
                      fill="white" />
                  </svg>
                </div>
                <div
                  class="grow shrink basis-0 text-right text-white text-[3.125rem] font-bold font-[DS-Digital] uppercase leading-[2.75rem] tracking-[0.2rem]">
                  0</div>
              </div>
              <div class="self-stretch h-16 text-white/75 text-[2rem] font-medium font-['Roboto'] leading-loose">Weather
              </div>
            </div>
          </div>
        </div>
        <div class="w-[63.5625rem] py-[0.75rem] pl-[0.625rem] justify-start items-center gap-3 inline-flex" style="background-color: rgba(6, 8, 11, 0.20);">
          <div class="w-6 h-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="left-[0.1456rem] top-[-0.1rem] absolute rounded-[0.0313rem]"
              width="1.5rem" height="1.5625rem" viewBox="0 0 24 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.34701 22C3.99469 22 3.75287 21.6454 3.88155 21.3174L5.23517 17.8674C5.26539 17.7903 5.27611 17.7078 5.26661 17.6256C5.19944 17.0443 4.92651 14.5791 4.99878 13.5C5.00547 13.4002 5.02564 13.2826 5.05707 13.1506C5.11452 12.9094 5.01173 12.654 4.78975 12.5435L2.47882 11.3934C2.34797 11.3283 2.29469 11.1694 2.35981 11.0385L2.50365 10.7495C2.5044 10.748 2.50357 10.7462 2.50193 10.7458C2.5003 10.7453 2.49947 10.7435 2.5002 10.742L4.36369 6.87749C4.4464 6.70595 4.61938 6.5963 4.80981 6.59468L8.73482 6.5613C8.98084 6.53873 9.22523 6.55001 9.46798 6.59516C9.73232 6.64882 9.96704 6.7401 10.1722 6.869C10.3773 6.99789 11.2938 8.09702 11.4227 8.29462L11.3951 8.25C11.8242 8.91515 11.8897 10.3606 11.8948 10.4906C11.895 10.4976 11.8954 10.5035 11.8959 10.5104L12.1975 14.5607C12.2106 14.7366 12.3154 14.8926 12.4733 14.9712L16.1814 16.8166C16.3914 16.9211 16.6458 16.8656 16.7932 16.6832L17.3598 15.9816C17.5599 15.7338 17.9376 15.7338 18.1378 15.9816L22.3412 21.1858C22.6053 21.5128 22.3726 22 21.9522 22H13.5454C13.125 22 12.8923 21.5128 13.1564 21.1858L15.3452 18.4758C15.5461 18.2271 15.4652 17.8564 15.179 17.714L13.0913 16.675C12.7775 16.5188 12.4045 16.7256 12.3708 17.0746L11.9388 21.5481C11.914 21.8044 11.6986 22 11.4411 22H10.8112C10.5159 22 10.2849 21.7453 10.3136 21.4514L10.7163 17.3326C10.736 17.1313 10.6324 16.9379 10.4539 16.8427L7.74537 15.3982C7.40971 15.2192 7.00502 15.4657 7.01012 15.8461L7.03752 17.8915C7.03848 17.963 7.02409 18.0339 6.99532 18.0993L5.41254 21.7012C5.33274 21.8827 5.15314 22 4.95479 22H4.34701ZM9.93183 13.7063C10.2765 13.8779 10.6776 13.6118 10.6536 13.2275L10.5938 12.2703C10.5637 11.7884 9.93567 11.6248 9.67434 12.0308L9.22219 12.7333C9.06095 12.9838 9.15315 13.3188 9.41985 13.4515L9.93183 13.7063ZM5.15621 11.3296C5.41317 11.4575 5.72462 11.3432 5.84313 11.0818C6.17883 10.3412 6.54822 9.6023 6.81776 9.07781C6.99082 8.74107 6.74705 8.33583 6.36845 8.33583H5.56183C5.37035 8.33583 5.19569 8.44518 5.11205 8.61743L4.27628 10.3386C4.15649 10.5853 4.25777 10.8825 4.50328 11.0047L5.15621 11.3296ZM12.3086 7.60193C11.8146 7.60193 11.3931 7.42527 11.044 7.07196C10.695 6.71864 10.5204 6.29498 10.5204 5.80097C10.5204 5.29847 10.695 4.87268 11.044 4.52361C11.3931 4.17454 11.8146 4 12.3086 4C12.8026 4 13.2263 4.17454 13.5796 4.52361C13.9329 4.87268 14.1096 5.29847 14.1096 5.80097C14.1096 6.29498 13.9329 6.71864 13.5796 7.07196C13.2263 7.42527 12.8026 7.60193 12.3086 7.60193Z"
                fill="white" />
            </svg>
          </div>
          <div
            class="text-center text-white/75 text-2xl font-medium font-['Roboto'] uppercase leading-[1.8rem] tracking-wide">
            Roadworks on PIE (towards Tuas) after Toh Guan Rd Exit. Avoid Lane 1.</div>
        </div>
      </div>
      <div
        class="w-[33.6875rem] left-0 top-0 absolute text-white text-[2.5rem] font-medium font-['Roboto'] uppercase leading-[3.25rem] tracking-wide">
        Road alerts</div>
    </div>
    <!-- middle -->
    <div class="flex items-start gap-[7.4375rem] pt-[1.1331rem] mt-[2.7rem]">
      <div class="w-[24.75rem] h-[26.1794rem] relative flex flex-col items-center">
        <div id="speed1" class="w-[27.8625rem] h-[15.5rem]">
        </div>
        <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[17.2419rem] absolute">
          <div
            class="left-0 top-[0.5625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
            AVE.SPEED</div>
          <div
            class="left-[19.8125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
            90</div>
        </div>
        <div class="w-[26.8581rem] h-[26.1794rem] left-0 top-0 absolute">
          <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[22.4294rem] absolute">  
            <div
              class="left-0 top-[0.625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
              No. of Accidents</div>
            <div 
              class="left-[21.8125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
              5</div>
          </div>
        </div>
      </div>
      <div class="w-[24.75rem] h-[26.1794rem] relative flex flex-col items-center">
        <div id="speed2" class="w-[27.8625rem] h-[15.5rem]">
        </div>
        <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[17.2419rem] absolute">
          <div
            class="left-0 top-[0.5625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
            AVE.SPEED</div>
          <div
            class="left-[19.8125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
            75</div>
        </div>
        <div class="w-[26.8581rem] h-[26.1794rem] left-0 top-0 absolute">
          <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[22.4294rem] absolute">  
            <div
              class="left-0 top-[0.625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
              No. of Accidents</div>
            <div 
              class="left-[22.1125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
              3</div>
          </div>
        </div>
      </div>
      <div class="w-[24.75rem] h-[26.1794rem] relative flex flex-col items-center">
        <div id="speed3" class="w-[27.8625rem] h-[15.5rem]">
        </div>
        <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[17.2419rem] absolute">
          <div
            class="left-0 top-[0.5625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
            AVE.SPEED</div>
          <div
            class="left-[19.8125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
            63</div>
        </div>
        <div class="w-[26.8581rem] h-[26.1794rem] left-0 top-0 absolute">
          <div class="w-[23.75rem] h-[3.75rem] left-[0.375rem] top-[22.4294rem] absolute">  
            <div
              class="left-0 top-[0.625rem] absolute text-center text-white text-[2rem] font-medium font-['Roboto'] capitalize leading-[2.6rem] tracking-wide">
              No. of Accidents</div>
            <div 
              class="left-[22.2125rem] top-0 absolute text-center text-white text-6xl font-bold font-['DS-Digital'] tracking-widest">
              0</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="w-[63.875rem] h-[29.5625rem] relative">
      <div
        class="w-[63.875rem] h-[24.875rem] pt-3 pb-9 left-0 top-[4.6875rem] absolute flex-col justify-start items-start gap-7 inline-flex">
        <div
          class="self-stretch h-[3.875rem] opacity-80 flex-col justify-start items-start gap-[0.8125rem] inline-flex">
          <div class="w-[46.875rem] h-12 relative">
            <div
              class="left-0 top-[0.1875rem] absolute text-white text-[2rem] font-medium font-['Roboto'] leading-[2.6rem] tracking-wide">
              ID</div>
            <div
              class="left-[10rem] top-[0.1875rem] absolute text-white text-[2rem] font-medium font-['Roboto'] leading-[2.6rem] tracking-wide">
              DISTRICT</div>
            <div
              class="left-[27.5rem] top-[0.1875rem] absolute text-white text-[2rem] font-medium font-['Roboto'] leading-[2.6rem] tracking-wide">
              FAILTURE TYPE</div>
            <div class="left-[46.5625rem] top-0 absolute"></div>
          </div>
          <div class="w-[55.8125rem] h-px opacity-40 bg-white"></div>
        </div>
        <div class="w-[63.875rem] h-[16.25rem] flex-col justify-center items-start gap-8 inline-flex mt-[1.25rem]">
          <div class="w-[63.875rem] h-[2.9375rem] relative justify-start items-start flex">
            <div class="pr-[0.8125rem] justify-start items-center inline-flex mr-[5.5rem]">
              <div class="text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide">101</div>
            </div>
            <div
              class="w-[14.1875rem] text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide mr-[3rem]">
              AI-Olaya</div>
            <div class="text-white text-4xl font-medium font-['Roboto'] capitalize leading-[2.925rem] tracking-wide">
              Multiple vehicle collision</div>
          </div>
          <div class="w-[63.875rem] h-[2.9375rem] relative justify-start items-start flex">
            <div class="pr-[0.8125rem] justify-start items-center inline-flex mr-[5.5rem]">
              <div class="text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide">102</div>
            </div>
            <div class="text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide mr-[5rem]">
              AI-Murabba</div>
            <div class="text-white text-4xl font-medium font-['Roboto'] capitalize leading-[2.925rem] tracking-wide">
              Road obstruction</div>
          </div>
          <div class="w-[63.875rem] h-[2.9375rem] relative justify-start items-start flex">
            <div class="w-[4.8125rem] justify-start items-center gap-6 inline-flex mr-[5.5rem]">
              <div class="text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide">1-3</div>
            </div>
            <div
              class="w-[14.1875rem] text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide mr-[3rem]">
              AI-Masif</div>
            <div class="text-white text-4xl font-medium font-['Roboto'] capitalize leading-[2.925rem] tracking-wide">
              Traffic signal failure</div>
          </div>
          <div class="w-[63.875rem] h-[2.9375rem] relative justify-start items-start flex">
            <div class="pr-[0.8125rem] justify-start items-center inline-flex mr-[5.5rem]">
              <div class="text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide">104</div>
            </div>
            <div
              class="w-[14.1875rem] text-white/90 text-4xl font-medium font-['Roboto'] leading-[2.925rem] tracking-wide mr-[3rem]">
              Diriyah</div>
            <div class="text-white text-4xl font-medium font-['Roboto'] capitalize leading-[2.925rem] tracking-wide">
              Multiple vehicle collision</div>
          </div>
        </div>
      </div>
      <div
        class="w-[33.6875rem] left-0 top-0 absolute text-white text-[2.5rem] font-medium font-['Roboto'] uppercase leading-[3.25rem] tracking-wide">
        Available Parking</div>
    </div>
    <div class="w-[0.125rem] h-[22.6875rem] absolute left-[69.25rem] top-[4.75rem]">
      <img class="w-full h-full" src="@/assets/operationalMatrix/line.svg" alt="">
    </div>
    <div class="w-[0.125rem] h-[22.6875rem] absolute right-[70.25rem] top-[4.75rem]">
      <img class="w-full h-full" src="@/assets/operationalMatrix/line.svg" alt="">
    </div>
  </div>
</template>
<script setup>
import { renderChart } from "@/utils/echarts/speed.js"
import * as echarts from "echarts"; // 导入 echarts 库
import { ref, onMounted,onBeforeUnmount } from "vue"

onMounted(() => {
  //flowbite init
  renderChart("speed1",79,"Al-OLAYA")
  renderChart("speed2",69,"Al-MURABBA")
  renderChart("speed3",60,"HITTIN")

});
onBeforeUnmount(() => {
    const workOrderElement1 = document.getElementById("speed1");
    const workOrderElement2 = document.getElementById("speed2");
    const workOrderElement3 = document.getElementById("speed3");

    if (workOrderElement1) {
        const chartInstance = echarts.getInstanceByDom(workOrderElement1);
        if (chartInstance) {
            chartInstance.dispose();
        }
    }
    if (workOrderElement2) {
        const chartInstance = echarts.getInstanceByDom(workOrderElement2);
        if (chartInstance) {
            chartInstance.dispose();
        }
    }
    if (workOrderElement3) {
        const chartInstance = echarts.getInstanceByDom(workOrderElement3);
        if (chartInstance) {
            chartInstance.dispose();
        }
    }
});
</script>
<style scoped></style>