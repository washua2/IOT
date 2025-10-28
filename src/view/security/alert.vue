<template>
  <div>
    <div class="w-[232.375rem] h-[29.9375rem] relative">
      <div class="w-[232.375rem] h-[5.2856rem] left-0 top-[-0.25rem] absolute">
        <div
          class="left-[5.1556rem] top-[0.25rem] absolute text-white text-[2.5rem] font-['semibold'] leading-[2.93rem] tracking-wide">
          Alerts</div>
        <div class="w-[20.6419rem] h-[0.7725rem] left-[22.7944rem] top-[4.5131rem] absolute opacity-60 blur-sm"></div>
        <div class="w-14 h-[3.125rem] left-0 top-[0.25rem] absolute">
          <img class="w-full h-full" src="@/assets/icon/warning-alert.svg" alt="">
        </div>
      </div>
      <div class="w-full h-[2.5rem] top-[2.5rem] absolute video-analytics"></div>
      <div class="w-[18.8431rem] h-[2.375rem] left-[0.375rem] top-[7.3125rem] absolute">
        <div
          class="left-[4.0306rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">
          Urgent ({{ count }})</div>
        <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.375rem] absolute">
          <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
        </div>
      </div>
      <div
        class="w-[53.5625rem] h-[19rem] pt-[1rem] pr-[1rem] mr-[1rem] overflow-y-auto overflow-x-hidden relative left-[0.375rem] top-[13.1875rem] flex flex-col gap-[1rem] scroll"
        :class="isWarning || isResolved2 ? 'pb-[1.5rem]' : ''">
        <div
          class="breathing-teal w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem] alert-notification-blue pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          v-show="isResolved2">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem] bg-[#12B3A9] rounded-full flex items-center justify-center">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/people.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide ml-[1.125rem]">
                Geofencing</div>
            </div>
            <div
              class="w-[7.9375rem] h-8 px-2 py-1 bg-[#12B3A9] rounded-sm flex-col justify-center items-center inline-flex">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                Resolved</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">RSpectator Area 5
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:31</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>
        <div
          class="breathing-teal w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem] alert-notification-blue pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          v-show="stepCount == 6 || stepCount == 5">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem] bg-[#12B3A9] rounded-full flex items-center justify-center">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/people.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-bold font-['Roboto'] leading-9 tracking-wide ml-[1.125rem]">
                Loitering</div>
            </div>
            <div
              class="w-[7.9375rem] h-8 px-2 py-1 bg-[#12B3A9] rounded-sm flex-col justify-center items-center inline-flex">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                Pending</div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Spectator Area
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:21</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>
        <!-- 2 case alert -->
        <div
          class="breathing-red w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem]  pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          :class="isWarning && stepCount == 3 ? 'alert-notification-orange' : 'alert-notification-red'"
          v-show="newAlertShow2 && !(isWarning && stepCount == 3)">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem]  rounded-full flex items-center justify-center"
                :class="isWarning && stepCount == 3 ? 'bg-[#faca15]' : 'bg-[#D03801]'">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/person.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide ml-[1.125rem]">
                Geofencing</div>
            </div>
            <div class="w-[7.9375rem] h-8 px-2 py-1  rounded-sm flex-col justify-center items-center inline-flex"
              :class="isWarning && stepCount == 3 ? 'bg-[#faca15]' : 'bg-[#b43403]'">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                {{ isWarning && stepCount == 3 ? 'Pending' : 'New' }}</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Spectator Area 5
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:31</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>
        <!-- 2 case alert -->
        <div
          class="breathing-yellow w-[50.5625rem] h-[7.8125rem] flex flex-wrap justify-between ml-[0.375rem]  pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          :class="isWarning && stepCount == 3 ? 'alert-notification-orange' : 'alert-notification-red'"
          v-show="newAlertShow2 && isWarning && stepCount == 3">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem]  rounded-full flex items-center justify-center"
                :class="isWarning && stepCount == 3 ? 'bg-[#faca15]' : 'bg-[#D03801]'">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/person.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide ml-[1.125rem]">
                Geofencing</div>
            </div>
            <div class="w-[7.9375rem] h-8 px-2 py-1  rounded-sm flex-col justify-center items-center inline-flex"
              :class="isWarning && stepCount == 3 ? 'bg-[#faca15]' : 'bg-[#b43403]'">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                {{ isWarning && stepCount == 3 ? 'Pending' : 'New' }}</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Spectator Area 5
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:31</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>
        <!--1 case alert panding  -->
        <div
          class="breathing-yellow  w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem] alert-notification-orange pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          v-show="isWarning && !(stepCount == 5 || stepCount == 6)">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem] bg-[#faca15] rounded-full flex items-center justify-center">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/person.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide ml-[1.125rem]">
                Loitering</div>
            </div>
            <div
              class="w-[7.9375rem] h-8 px-2 py-1 bg-[#faca15] rounded-sm flex-col justify-center items-center inline-flex">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                Pending</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Spectator Area
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:21</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>
        <!--1 case alert new  -->
        <div
          class="breathing-red w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem] alert-notification-red pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0"
          v-show="newAlertShow">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem] bg-[#D03801] rounded-full flex items-center justify-center">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/person.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-bold font-['Roboto'] leading-9 tracking-wide ml-[1.125rem]">
                Loitering</div>
            </div>
            <div
              class="w-[7.9375rem] h-8 px-2 py-1 bg-[#b43403] rounded-sm flex-col justify-center items-center inline-flex">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                New</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide">Innovation Lab P
            </div>
            <div
              class="text-white text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:21</div>
            <div class="text-white text-2xl font-normal font-['Roboto'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>

        <div
          class="w-[50.5625rem] h-[7.8125rem] flex flex-wrap ml-[0.375rem] alert-notification-blue pl-[2.4375rem] pr-[1.8125rem] pt-[1.05rem] pb-[0.5625rem] flex-shrink-0">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-[2.625rem] h-[2.625rem] bg-[#12B3A9] rounded-full flex items-center justify-center">
                <div class="w-[1.6406rem] h-[1.6406rem] ">
                  <img class="w-full h-full" src="@/assets/icon/people.svg" alt="">
                </div>
              </div>
              <div class="text-white text-[1.75rem] font-bold font-['Roboto'] leading-9 tracking-wide ml-[1.125rem]">
                Loitering</div>
            </div>
            <div
              class="w-[7.9375rem] h-8 px-2 py-1 bg-[#12B3A9] rounded-sm flex-col justify-center items-center inline-flex">
              <div
                class="text-center text-white text-xl font-bold font-['Inter'] uppercase leading-relaxed tracking-wide">
                Resolved</div>
            </div>
          </div>
          <div class="w-[50.5625rem] flex items-center justify-between">
            <div class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">Spectator Area
            </div>
            <div
              class="text-white text-[1.75rem] font-['light'] leading-9 tracking-wide ml-[2.25rem] mr-[2.125rem]">
              01/25/25 22:01</div>
            <div class="text-white text-2xl font-['light'] leading-[150%] tracking-wide">TTR 3 mins</div>
          </div>
        </div>

      </div>
      <div class="w-[125.125rem] h-[25.0625rem] left-[54.4375rem] top-[7.3125rem] absolute">
        <div class="w-[0.25rem] h-[19.125rem] left-0 top-[2.5rem] absolute">
          <img class="w-full h-full" src="@/assets/icon/line.svg" alt="">
        </div>

        <div>

          <div class="w-[17.3431rem] h-[2.375rem] left-[3.9375rem] top-0 absolute">
            <div
              class="left-[3.6556rem] top-0 absolute text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
              SOP</div>
            <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.4006rem] absolute">
              <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
            </div>

          </div>
        </div>

        <div class="w-[0.25rem] h-[19.125rem] right-0 top-[2.5rem] absolute">
          <img class="w-full h-full" src="@/assets/icon/line.svg" alt="">
        </div>
      </div>

      <div class="w-[120rem] h-[28.3875rem] left-[56.9825rem] top-[11.8625rem] absolute">
        <div class="flex items-center ml-[7.1875rem] mt-[1.4375rem]">
          <div
            class="w-[7.25rem] h-[7.25rem] rounded-full flex items-center justify-center transition-all ease-in-out duration-300"
            :class="stepCountValue == 0 ? 'step-finsh scale-[1.1]' : 'step-unfinsh scale-[1]'">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.6875rem" height="2.375rem" viewBox="0 0 27 38" fill="none">
              <path
                d="M15.2462 8.4258C17.4769 8.4258 19.2853 6.61744 19.2853 4.38673C19.2853 2.15601 17.4769 0.347656 15.2462 0.347656C13.0155 0.347656 11.2072 2.15601 11.2072 4.38673C11.2072 6.61744 13.0155 8.4258 15.2462 8.4258Z"
                fill="white" />
              <path
                d="M25.6546 18.5894C23.8117 18.4839 22.0179 17.8626 20.4539 16.7782C18.6955 15.5602 17.3626 13.8553 16.5904 11.8571C15.7249 9.69488 13.4413 8.50722 11.2249 9.13717C11.0234 9.19352 10.8153 9.26071 10.6015 9.33584C10.5321 9.35751 10.4635 9.38135 10.3956 9.40953C10.0105 9.55184 9.60669 9.72234 9.18552 9.91956C7.27616 10.72 5.30466 11.5226 3.28838 12.326C1.95912 12.8569 0.960005 14.0533 0.821299 15.3767C0.650085 17.0376 0.533053 18.7028 0.472369 20.3694C0.461533 20.6699 0.724495 20.9134 1.05681 20.9134H3.92844C4.26148 20.9134 4.52878 20.6692 4.54323 20.3694C4.61691 18.8538 4.75634 17.263 4.96368 15.8189C4.97235 15.7575 5.01063 15.7018 5.07349 15.6766C6.24092 15.2142 7.39897 14.7518 8.54329 14.2902C8.66899 14.2397 8.79758 14.3393 8.76579 14.4629C6.85354 21.8591 5.0193 29.3506 4.52444 36.6933C4.50277 37.0263 4.80474 37.3363 5.14573 37.3363C6.08994 37.3363 7.03342 37.3363 7.97763 37.3363C8.23553 37.3363 8.44287 37.1557 8.47466 36.905C8.94857 33.1621 9.67677 29.3795 10.4931 25.5904C10.5184 25.4726 10.6766 25.4242 10.777 25.5044C11.9618 26.4537 13.1415 27.4022 14.3032 28.35C14.3393 28.3797 14.3602 28.4215 14.3595 28.4663C14.3443 31.2563 14.3176 34.0377 14.2793 36.7988C14.2757 37.0957 14.5148 37.3363 14.8132 37.3363C15.7386 37.3363 16.6641 37.3363 17.5895 37.3363C17.8878 37.3363 18.1494 37.0957 18.1725 36.7988C18.3805 34.0153 18.5243 31.2101 18.6045 28.397C18.637 27.2946 18.1342 26.2406 17.2283 25.5058C16.409 24.8412 15.584 24.1773 14.7569 23.5127C15.1354 21.8208 15.5082 20.1288 15.8614 18.4398C15.8874 18.3156 16.0572 18.2715 16.1533 18.3647C16.7002 18.8942 17.2933 19.384 17.9283 19.8283C20.2357 21.4408 22.9173 22.3481 25.7153 22.4673C26.0613 22.4818 26.3496 22.2354 26.3445 21.9234C26.3294 20.9921 26.2968 20.0617 26.2477 19.1319C26.2326 18.8444 25.9718 18.6081 25.6553 18.5901L25.6546 18.5894Z"
                fill="white" />
            </svg>
          </div>
          <div class="w-[16.6875rem] h-[0.125rem]" :class="stepCount > 100 ? 'step-line' : 'step-unline'"></div>
          <div
            class="w-[7.25rem] h-[7.25rem] rounded-full flex items-center justify-center transition-all ease-in-out duration-300"
            :class="stepCountValue == 1 ? 'step-finsh scale-[1.1]' : 'step-unfinsh scale-[1]'">
            <div
              class="w-[2.2856rem] h-[2.2144rem] text-center text-white text-2xl font-bold font-['Roboto'] leading-[150%] tracking-wide">
              VA</div>
          </div>
          <div class="w-[17.1875rem] h-[0.125rem] " :class="stepCount > 100 ? 'step-line' : 'step-unline'"></div>
          <div
            class="w-[7.25rem] h-[7.25rem] rounded-full flex items-center justify-center transition-all ease-in-out duration-300"
            :class="stepCountValue == 2 ? 'step-finsh scale-[1.1]' : 'step-unfinsh scale-[1]'">
            <img class="w-[1.8125rem] h-[2rem]" src="@/assets/icon/speaker.svg" alt="">
          </div>
          <div class="w-[16.4875rem] h-[0.125rem]" :class="stepCount > 100 ? 'step-line' : 'step-unline'"></div>
          <div
            class="w-[7.25rem] h-[7.25rem] rounded-full flex items-center justify-center transition-all ease-in-out duration-300"
            :class="stepCountValue == 3 ? 'step-finsh scale-[1.1]' : 'step-unfinsh scale-[1]'">
            <img class="w-[1.8125rem] h-[2rem]" src="@/assets/icon/event.svg" alt="">
          </div>
          <div class="w-[17.6875rem] h-[0.125rem]" :class="stepCount > 100 ? 'step-line' : 'step-unline'"></div>
          <div
            class="w-[7.25rem] h-[7.25rem] rounded-full flex items-center justify-center transition-all ease-in-out duration-300"
            :class="stepCountValue == 5 ? 'step-finsh scale-[1.1]' : 'step-unfinsh scale-[1]'">
            <img class="w-[1.8125rem] h-[2rem]" src="@/assets/icon/correct.svg" alt="">
          </div>
        </div>
        <div class="flex items-center justify-between mt-[-0.3125rem]">
          <div class="w-[20.9375rem] flex flex-col items-center justify-start gap-[0.9375rem] cursor-pointer"
            @click="handleStep('Scene2_1','1')">
            <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Intruder detection
            </div>
            <div
              class="w-[20.9375rem] text-center text-white text-[1.375rem] font-['light'] leading-7 tracking-wide">
              An intrusion triggers a video alarm on the operator'station.</div>
          </div>
          <div class="w-[21.6875rem] flex flex-col items-center justify-start gap-[0.9375rem] cursor-pointer"
            @click="handleStep('Scene2_2','2')">
            <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Footage analysis
            </div>
            <div
              class="w-[21.6875rem] text-center text-white text-[1.375rem] font-['light'] leading-7 tracking-wide">
              The operator reviews the footage to confirm the situation.</div>
          </div>
          <div class="w-[22.125rem] flex flex-col items-center justify-start gap-[0.9375rem] cursor-pointer"
            @click="handleStep('Scene2_3','3')">
            <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Voice intervention.
            </div>
            <div
              class="w-[22.125rem] text-center text-white text-[1.375rem] font-['light'] leading-7 tracking-wide">
              The operator use voice devices to handle emergency incidents.</div>
          </div>
          <div
            class="w-[20.8125rem] flex flex-col items-center justify-start gap-[0.9375rem] pt-[1.5rem] cursor-pointer"
            @click="handleStep('Scene2_4','4')">
            <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide ">Event recorded
            </div>
            <div
              class="w-[20.8125rem] text-center text-white text-[1.375rem] font-['light'] leading-7 tracking-wide">
              The operator review the process of incidents by playing back the video recordings.</div>
          </div>
          <div
            class="w-[23.1875rem] flex flex-col items-center justify-start gap-[0.9375rem] mt-[-1.75rem] cursor-pointer"
            @click="handleStep('Scene2_5','5')">
            <div class="text-white text-[1.75rem] font-['bold'] leading-9 tracking-wide">Processing
              completed</div>
            <div
              class="w-[23.1875rem] text-center text-white text-[1.375rem] font-['light'] leading-7 tracking-wide">
              The intruder has left the site.</div>
          </div>
        </div>
      </div>
      <div class="w-[46.8125rem] h-[22.625rem] left-[184.1875rem] top-[7.3125rem] absolute">
        <div class="w-[20.5306rem] h-[2.375rem] mb-[2.5rem]">
          <div
            class="left-[3.6556rem] top-0 absolute text-white text-[2rem] font-['semibold'] tracking-wide">
            Points of Contact</div>
          <div class="w-[2.5625rem] h-[2.3125rem] left-0 top-[0.4006rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/group.svg" alt="">
          </div>
        </div>
        <div class="w-[50.125rem] h-[3.75rem] relative title-line">
          <div class="w-[15.4581rem] h-[3.75rem] left-0 top-0 absolute" :class="isText ? '' : 'alert-team'">
            <div
              class="left-[2.1306rem] top-[0.75rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
              Team Bravo</div>
          </div>
          <div class="w-[12.75rem] h-[2.8rem] left-[18.5888rem] top-[0.75rem] absolute">
            <div
              class="left-[1.5rem] top-0 absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
              Team Charlie</div>
          </div>
          <div class="w-[12.5625rem] h-[3.75rem] left-[34.2969rem] top-[0rem] absolute" :class="isText ? 'alert-team' : ''">
            <div
              class="left-[1.3306rem] top-[0.75rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
              Team Delta</div>
          </div>
        </div>
        <div class="w-[50.125rem] h-[4.25rem] relative border-b border-white/25 mt-[0.875rem]">
          <div
            class="left-[2.375rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            David</div>
          <div
            class="left-[16.25rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            Security</div>
          <div
            class="left-[29.4375rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            3930 0731</div>
          <div class="w-[1.8125rem] h-[1.6875rem] right-[2.875rem] top-[0.6875rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/phone.svg" alt="">
          </div>
        </div>
        <div class="w-[50.125rem] h-[4.25rem] relative border-b border-white/25 my-2">
          <div
            class="left-[2.375rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            Michael</div>
          <div
            class="left-[16.25rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            Security</div>
          <div
            class="left-[29.4375rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            3390 8789</div>
          <div class="w-[1.8125rem] h-[1.6875rem] right-[2.875rem] top-[0.6875rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/phone.svg" alt="">
          </div>
        </div>
        <div class="w-[50.125rem] h-[4.25rem] relative border-b border-white/25">
          <div
            class="left-[2.375rem] top-[0.4375rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            Daniel</div>
          <div
            class="left-[16.25rem] top-[0.4375rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            Security</div>
          <div
            class="left-[29.4375rem] top-[0.6875rem] absolute text-white text-[1.75rem] font-['light'] leading-9 tracking-wide">
            3829 3214</div>
          <div class="w-[1.8125rem] h-[1.6875rem] right-[2.875rem] top-[0.6875rem] absolute">
            <img class="w-full h-full" src="@/assets/icon/phone.svg" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, toRefs, watch, inject } from "vue"
const props = defineProps({
  stepCount: {
    type: Number,
    default: 0
  },
  newAlertShow: {
    type: Boolean,
    default: true
  },
  newAlertShow2: {
    type: Boolean,
    default: false
  }
})
const { AlertStore } = inject('store')
const isWarning = ref(false)
const isText = ref(false)
const { stepCount, newAlertShow, newAlertShow2 } = toRefs(props)
const count = ref(2)
const isResolved2 = ref(false)
const stepCountValue = ref(0)

watch(stepCount, (val) => {
  if (val == 3) {
    isWarning.value = true
  }
  if (val == 4) {
    isResolved2.value = true
    // isWarning.value = false
  }
  stepCountValue.value = val
  if (stepCountValue.value == 4) {
    stepCountValue.value = 3
    // isWarning.value = true
  }
})
watch(newAlertShow2, (val) => {
  if (val) {
    isText.value = true
    count.value = 3
  } else {
    if (stepCount.value < 4) {
      isText.value = false
    }
  }

})
const handlerSwitch = (val) => {
  switch (val) {
    case 'Month':
      break;
    case 'Week':
      break;
    case 'Day':
      break;
    default:
      break;
  }
}
const handleStep = (val,step) => {
  AlertStore.methods.setAlertStep(val)
  if (val == 'Scene2_5') {
    setTimeout(() => {
      AlertStore.methods.setAlertStep('Scene2_6')
    }, 500)
    setTimeout(() => {
      AlertStore.methods.setAlertStep('Finished')
    }, 1500)
  }
  ue4('scenario',{"theft_warning":step})
}
ue.interface.audioFun = (data) => {
  console.log("audioFun", data);
  // 模拟 监听步骤二 
  // stepCount.value = 2;
  // 模拟 监听步骤三
  // stepCount.value = 3;
  // isWarning.value=true
  // 模拟 监听步骤四
  // stepCount.value = 4;
  // 第二轮开始
  // stepCount.value=2
}
onMounted(() => {
  //flowbite init
  initDropdowns()
});
</script>
<style scoped>
.breathing-border {
  /* box-shadow: 0 0 0.125rem 0 rgba(70, 245, 231, 0.5);
  animation: breathe .5s infinite alternate; */
}

@keyframes breathe {
  0% {
    box-shadow: 0 0 0.125rem 0 rgba(70, 245, 231, 0.5), 0 0 0.625rem 0 rgba(70, 245, 231, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(70, 245, 231, 0.6), 0 0 0.9375rem 0.625rem rgba(70, 245, 231, 0.4);
  }
}

.breathing-red {
  animation: breathe-red 1s ease-in-out 2;
}

@keyframes breathe-red {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.6), 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.4);
  }

  50% {
    box-shadow: 0 0 0.125rem 0 rgba(208, 56, 1, 0.5), 0 0 0.625rem 0 rgba(208, 56, 1, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.6), 0 0 0.9375rem 0.625rem rgba(208, 56, 1, 0.4);
  }
}

.breathing-yellow {
  animation: breathe-yellow 1s ease-in-out 2;
}

@keyframes breathe-yellow {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.6), 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.4);
  }

  50% {
    box-shadow: 0 0 0.125rem 0 rgba(250, 202, 21, 0.5), 0 0 0.625rem 0 rgba(250, 202, 21, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.6), 0 0 0.9375rem 0.625rem rgba(250, 202, 21, 0.4);
  }
}

.breathing-teal {
  animation: breathe-teal 1s ease-in-out 2;

}

@keyframes breathe-teal {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(18, 179, 169, 0.6), 0 0 0.9375rem 0.625rem rgba(18, 179, 169, 0.4);
  }

  50% {
    box-shadow: 0 0 0.125rem 0 rgba(18, 179, 169, 0.5), 0 0 0.625rem 0 rgba(18, 179, 169, 0.3);
  }

  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(18, 179, 169, 0.6), 0 0 0.9375rem 0.625rem rgba(18, 179, 169, 0.4);
  }
}
</style>