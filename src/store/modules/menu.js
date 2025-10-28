import { reactive } from "vue";

export const stateMenu = reactive({
    iotCount: -2,
});

export const methodsMenu = {
  setIotCount(val) {
    stateMenu.iotCount = val;
  }

};


export default { stateMenu, methodsMenu }