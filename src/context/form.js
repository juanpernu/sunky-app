import { createContext } from "react";

export const FormContext = createContext({
  isOpenForm: false,
  openForm: () => null,
  closeForm: () => null,
  customCancel: (fn) => () => fn(),
});
