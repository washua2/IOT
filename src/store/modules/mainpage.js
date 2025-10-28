import { reactive } from "vue";
import { BaseUrl } from "/src/config";

export const state= reactive({
   showSpecificAlerts: false,

});

export const methods={
    toggleSpecificAlerts:()=>{
        state.showSpecificAlerts = !state.showSpecificAlerts;
    },

    zoomIn:()=>{
        ue4('action', { "msg":  "ZoomIn" }); 
        console.log('SEC ZoomIn clicked');
    },
    zoomOut:()=>{
        ue4('action', { "msg":  "ZoomOut" }); 
        console.log('SEC ZoomOut clicked');
    },

   


};


export default { state, methods }