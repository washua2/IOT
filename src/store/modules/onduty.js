import { reactive, computed } from "vue";
import { BaseUrl } from "/src/config";
import { request } from "../../utils/request";

export const state = reactive({
  OnDutypocData:[],
  OndutyData:[],
});

export const methods = {
  getOnDutyPOCData: async (viewBy, zoneId, buildingId) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let end_date = tomorrow.toISOString().split('T')[0];
    let start_date = today.toISOString().split('T')[0];

    try{
    const req = await request(
      `${BaseUrl}/poc?viewBy=${viewBy}&zoneId=${zoneId}&buildingId=${buildingId}&start_date=${start_date}&end_date=${end_date}`,
      "get",{}
    );
    state.OnDutypocData = req;
  }catch(error){

  }
  },
};




export default { state, methods };
