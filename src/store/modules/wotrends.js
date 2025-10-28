import { reactive } from "vue";
import { BaseUrl } from "/src/config";
import { request } from "../../utils/request";

export const stateWOTrends = reactive({
  //guest 1 & OPS

});

export const methodsWOTrends = {
  getWOBreakdownVendor: async () => {
    try {
      const req = await request(
        ``,
        "get", {}
      );
    } catch (error) { }
  },

};


export default { stateWOTrends, methodsWOTrends }