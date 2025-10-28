import { reactive, computed } from "vue";
import { BaseUrl } from "/src/config";
import { request } from "../../utils/request";

export const stateUE = reactive({
  OnDutypocData:[],
  ueSelectedBuilding:'',
  ueSelectedZone:'',
  ueSelectedCampus:'',
  atGlobal:false,
  atCampus:false,
  atZone:false,
  inBuilding:false,
  atDefault:false,
  lod : -1,
  previousLod : -1,
});

export const methodsUE = {
  getOnDutyPOCData: async () => {
  try{
    const req = await request(
      `${BaseUrl}/poc`,
      "get",{}
    );
    stateUE.OnDutypocData = req;
  }catch(error){}
  },
  
  UEToWebCampus:(campus)=>{
    campus = campus.toLowerCase();
    if(campus!=='global'){
    stateUE.ueSelectedCampus=campus;
    stateUE.atCampus=true;
    stateUE.atZone=false;
    stateUE.inBuilding=false;
    stateUE.atGlobal=false;

  }else{
    stateUE.atGlobal=true;
    stateUE.atCampus=false;
    stateUE.atZone=false;
    stateUE.inBuilding=false;
  }
  },
  UESETBuilding:(inBuilding)=>{
    stateUE.inBuilding=inBuilding
  },

  UEToWebBuilding:(building)=>{
    stateUE.ueSelectedBuilding=building;
    stateUE.atDefault=false;
    stateUE.atZone=false;
    stateUE.inBuilding=true;
    stateUE.atCampus=false;
    stateUE.atGlobal=false;
  },
  UEToWebZone:(zone)=>{
    zone = zone.toLowerCase();
    const numbercPart=zone.replace(/\D/g,'')
    const lastDigit = numbercPart.charAt(numbercPart.length-1)
      stateUE.ueSelectedZone=lastDigit;
      stateUE.atZone=true;
      stateUE.inBuilding=false;
      stateUE.atDefault=false;
      stateUE.atCampus=false;
      stateUE.atGlobal=false;
  },
  leaveCurrentpage:(page)=>{
    // stateUE.atDefault=!stateUE.atDefault;
    // stateUE.atZone=!stateUE.atZone;
    // stateUE.inBuilding=!stateUE.inBuilding;
    // stateUE.atCampus=!stateUE.atCampus;
    // stateUE.atGlobal=!stateUE.atGlobal;
    stateUE.atDefault=false;
    stateUE.atZone=false;
    stateUE.inBuilding=false;
    stateUE.atDefault=false;
    stateUE.atCampus=false;
    stateUE.atGlobal=false;

  },
  OnUpdateLod: (data) => {
    if(typeof(data) === "string"){
      data = JSON.parse(data);
    }

    stateUE.previousLod  = stateUE.lod;
    stateUE.lod = data.lod; 
  }
};

export default { stateUE, methodsUE };