import { reactive } from "vue";
import { request } from "../../utils/request";

export const state= reactive({
  temperatureData:[],
  humidityData:[],
  windSpeedData:[],
  rainfallData:[],
  showSideNavPanel: false,
});

export const methods={
  getTemperature: async () => {
  try{
    const req=await request(`https://api.data.gov.sg/v1/environment/air-temperature`, "get",{});
    let Data = req;
    state.temperatureData = Data.items[0].readings[1].value
  }catch(error){}
  },
  getHumidity: async () => {
  try{
    const req=await request(`https://api.data.gov.sg/v1/environment/relative-humidity`, "get",{});
    let Data = req;
    state.humidityData = Data.items[0].readings[1].value
  }catch(error){}
  },
  getWindSpeed: async () => {
  try{
    const req=await request(`https://api.data.gov.sg/v1/environment/wind-speed`, "get",{});
    let Data = req;
    state.windSpeedData = Data.items[0].readings[1].value
  }catch(error){

  }
  },
  getRainfall: async () => {
  try{
    const req=await request(`https://api.data.gov.sg/v1/environment/rainfall`, "get",{});
    let Data = req;
    state.rainfallData = Data.items[0].readings[12].value
  }catch(error){

  }
  },
  toggleSidePanel: () => {
    state.showSideNavPanel=!state.showSideNavPanel;
  },

};


export default { state, methods }