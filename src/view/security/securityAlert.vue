<template>
  <div class="w-[48rem] flex flex-col gap-[0.25rem]">
    <div class="w-[48rem] h-[6.6875rem] relative alert-tab cursor-pointer">
      <div class="w-[39.5rem] left-[2rem] top-[1.6875rem] absolute flex items-center justify-between">
        <div
          class="w-[33.5rem] left-0 top-0 absolute text-[#e5b0ff] text-[2.5rem] font-bold font-['Inter'] leading-[3.75rem]">
          Alerts</div>
        <div class="flex left-[31.875rem] top-[0.375rem] absolute gap-3">
          <div class="h-12 justify-start items-center gap-3 inline-flex">
            <div class="w-[4.5rem] px-3 bg-[#d03801] flex-col justify-center items-center gap-2.5 inline-flex">
              <div class="w-[4.5rem] text-center text-white text-[2rem] font-['semibold'] font-['Inter'] leading-[3rem]">1
              </div>
            </div>
          </div>
          <div class="w-[4.5rem] h-12 px-3 bg-white/10 flex-col justify-center items-center gap-2.5 inline-flex">
            <div
              class="w-[3.75rem] opacity-20 text-center text-white text-[2rem] font-['semibold'] font-['Inter'] leading-[3rem]">
              0</div>
          </div>
        </div>
      </div>
      <div class="w-[4.375rem] h-[6.4375rem] left-[43.5rem] top-[0.125rem] absolute">
        <div class="w-6 h-6 left-[1.5rem] top-[2.5rem] absolute  overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none">
            <path
              d="M21.6034 18.9714C20.9677 18.9713 20.3581 18.7258 19.9087 18.2891L12.015 10.6209L4.12132 18.2891C3.90019 18.5115 3.63568 18.6889 3.34323 18.8109C3.05077 18.933 2.73622 18.9972 2.41794 18.9999C2.09965 19.0026 1.784 18.9437 1.4894 18.8266C1.19481 18.7095 0.927166 18.5366 0.702096 18.318C0.477025 18.0993 0.299032 17.8393 0.178504 17.5531C0.057975 17.2669 -0.00267531 16.9603 9.05076e-05 16.6511C0.00285633 16.3419 0.0689836 16.0364 0.194613 15.7523C0.320243 15.4681 0.502861 15.2112 0.731809 14.9964L10.3202 5.6818C10.7698 5.24524 11.3794 5 12.015 5C12.6506 5 13.2602 5.24524 13.7097 5.6818L23.2982 14.9964C23.6333 15.322 23.8615 15.7369 23.954 16.1886C24.0464 16.6402 23.9989 17.1084 23.8176 17.5338C23.6362 17.9592 23.329 18.3229 22.9349 18.5788C22.5408 18.8347 22.0774 18.9713 21.6034 18.9714Z"
              fill="white" fill-opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="w-[48rem] h-[109.6876rem] pt-[2.625rem] px-[2.5rem] box-border card-panel">
      <!-- 标头 -->
      <div class="w-full h-[5.5rem] pl-6 pr-4 py-5 justify-start items-center gap-4 flex">
        <div class="text-white text-[2rem] font-bold font-['29LT Azer'] leading-[3rem]">Urgent</div>
        <div class="grow shrink basis-0 text-white/50 text-[2rem] font-bold font-['29LT Azer'] leading-[3rem]">1</div>
      </div>
      <!-- 告警 -->
      <alertItem/>
      <div
        class="h-[80.5625rem] rounded-bl-lg rounded-br-lg flex-col justify-center items-start inline-flex overflow-hidden">
        <!-- sop -->
        <div class="self-stretch h-[15.9375rem] p-6 flex-col justify-center items-start gap-6 flex">
          <div class="self-stretch h-[12.9375rem] flex-col justify-start items-start gap-3 flex">
            <div class="self-stretch justify-start items-start gap-10 inline-flex">
              <div class="grow shrink basis-0 text-white/90 text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                SOP</div>
              <div
                class="w-[7.5rem] text-right text-[#ca00ff] text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                View</div>
            </div>
            <div class="self-stretch h-[9.75rem] flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">This SOP
                outlines the steps and procedures for identifying, monitoring, and addressing loitering activities
                within or around the premises to ensure the safety and security of all individuals and property.</div>
            </div>
          </div>
        </div>
        <!-- work order -->
        <div class="self-stretch h-[11.5625rem] p-6 flex-col justify-center items-start gap-6 flex">
          <div class="self-stretch h-[8.5625rem] flex-col justify-start items-start gap-3 flex">
            <div class="self-stretch justify-start items-start gap-10 inline-flex">
              <div class="grow shrink basis-0 text-white/90 text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                Work Order</div>
              <div
                class="w-[7.5rem] text-right text-[#ca00ff] text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                View</div>
            </div>
            <div class="self-stretch h-[5.375rem] flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                WO-124989789</div>
              <div class="self-stretch text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">WO
                Pending Verification</div>
            </div>
          </div>
        </div>
        <div class="self-stretch h-px bg-white/20"></div>
        <!-- points of contact -->
        <div class="self-stretch h-[52.875rem] p-6 flex-col justify-center items-start gap-6 flex">
          <div class="self-stretch h-[49.875rem] flex-col justify-start items-start gap-3 flex">
            <div class="self-stretch justify-start items-start gap-10 inline-flex">
              <div class="grow shrink basis-0 text-white/90 text-3xl font-bold font-['29LT Azer'] leading-[2.4375rem]">
                Points of Contact</div>
            </div>
            <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-4 flex">
              <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-1 flex">
                <div class="self-stretch pb-2 border-b border-white/20 justify-start items-start gap-5 inline-flex">
                  <div class="w-52 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Team Angler
                  </div>
                  <div class="w-[13.8125rem] text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">
                    Name</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Contact
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">Ali
                  </div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      3930 8468</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex">
                        <div class="w-8 h-8 relative cursor-pointer">
                          <img class="w-full h-full" src="@/assets/icon/check.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Abdula</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      3392 0369</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Ailihaya</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      3920 0623</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Mohamad</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      4032 0623</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-4 flex">
              <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-1 flex">
                <div class="self-stretch pb-2 border-b border-white/20 justify-start items-start gap-5 inline-flex">
                  <div class="w-52 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Team Bravo
                  </div>
                  <div class="w-[13.8125rem] text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">
                    Name</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Contact
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Aminah</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      8339 3032</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex">
                        <div class="w-8 h-8 relative cursor-pointer">
                          <img class="w-full h-full" src="@/assets/icon/check.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">Abdul
                  </div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      9233 3402</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Aishah</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      8233 4922</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Hanmina</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      8233 3032</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-4 flex">
              <div class="self-stretch h-[15.0625rem] flex-col justify-start items-start gap-1 flex">
                <div class="self-stretch pb-2 border-b border-white/20 justify-start items-start gap-5 inline-flex">
                  <div class="w-52 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Team Conmando
                  </div>
                  <div class="w-[13.8125rem] text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">
                    Name</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-white/90 text-2xl font-normal font-['29LT Azer'] leading-[1.8rem]">Contact
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Johannes</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      3939 3493</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex">
                        <div class="w-8 h-8 relative cursor-pointer">
                          <img class="w-full h-full" src="@/assets/icon/check.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Faziah</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      4933 0329</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Ailshai</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      4932 4922</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch py-1 justify-start items-start gap-5 inline-flex">
                  <div
                    class="grow shrink basis-0 text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Security</div>
                  <div class="w-[11.25rem] text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                    Ahzizi</div>
                  <div class="justify-start items-start gap-5 flex">
                    <div class="w-40 text-right text-white text-3xl font-normal font-['29LT Azer'] leading-[2.4375rem]">
                      3023 0302</div>
                    <div class="pt-1 justify-start items-start gap-2.5 flex">
                      <div class="w-8 h-8 justify-center items-center flex cursor-pointer">
                        <img class="w-full h-full" src="@/assets/icon/check-not.svg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="self-stretch h-px bg-white/20"></div>
      </div>
      <div class="flex gap-[0.875rem] my-[0.75rem]">
        <div
          class="w-[13.75rem] h-[4.375rem] px-[1.4063rem] py-[0.9375rem] bg-[#ca00ff] backdrop-blur-[0.9375rem] flex-col justify-center items-center gap-[0.4688rem] inline-flex cursor-pointer">
          <div class="justify-start items-start inline-flex">
            <div class="text-center text-white text-[2rem] font-normal font-['29LT Azer'] leading-[4.375rem]">
              Investigate</div>
          </div>
        </div>
        <div
          class="w-[13.75rem] h-[4.375rem] px-[1.4063rem] py-[0.9375rem] bg-gray-500 backdrop-blur-[0.9375rem] flex-col justify-center items-center gap-[0.4688rem] inline-flex cursor-pointer">
          <div class="justify-start items-start inline-flex">
            <div class="text-center text-white text-[2rem] font-normal font-['29LT Azer'] leading-[4.375rem]">False
              Alert</div>
          </div>
        </div>
        <div
          class="w-[13.75rem] h-[4.375rem] px-[1.4063rem] py-[0.9375rem] bg-gray-500 backdrop-blur-[0.9375rem] flex-col justify-center items-center gap-[0.4688rem] inline-flex cursor-pointer">
          <div class="justify-start items-start inline-flex">
            <div class="text-center text-white text-[2rem] font-normal font-['29LT Azer'] leading-[4.375rem]">
              Acknowledge</div>
          </div>
        </div>
      </div>
      <div class="self-stretch h-px bg-white/20"></div>
    </div>
  </div>
</template>
<script setup>
import alertItem from "./components/alertItem.vue";
import {
  initDropdowns,
} from "flowbite";
import { ref, onMounted } from "vue"

onMounted(() => {
  //flowbite init
  initDropdowns()
});
</script>
<style lang="scss" scoped></style>
