import { reactive } from "vue";

export const state = reactive({
  alertMessage:false,
  isShowCCTVamplify:false,
  isCCTVamplifyUrl:"",
  isShowCCTVamplifyText:{},
  alertStep:"",
  systemsStep:"",
  isFloorPlan:false,
  isRoute:false,
  isVASAlertCount:0,
});

export const methods = {
 setAlertMessage:(params)=>{
  state.alertMessage = params;
 },
 setCCTVVamplify:(status,url,obj)=>{
  state.isShowCCTVamplify=status,
  state.isCCTVamplifyUrl=url
  state.isShowCCTVamplifyText=obj
 },
 setAlertStep:(params)=>{
  state.alertStep = params;
 },
 setSystemsStep:(params)=>{
  state.systemsStep = params;
 },
 setfloorPlan:(params)=>{
  state.isFloorPlan = params;
 },
 setRoute:(params)=>{
  state.isRoute = params;
 },
 setVASAlert:(params)=>{
  state.isVASAlertCount++;
 }

};


export default { state, methods }