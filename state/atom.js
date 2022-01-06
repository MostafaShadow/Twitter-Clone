import { atom } from "recoil";
// key :  unique ID (with respect to other atoms/selectors)
// Default : default value ( initial value)
export const modalState = atom({
  key: "modalState",
  default: "",
});


export const postState = atom({
  key: "postState",
  default: "",
});
