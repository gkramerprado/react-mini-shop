import { createContext } from "react";
import { cartStore } from "../cart";

export const initialState = {
  store: {
    ...cartStore
  },
  dispatch: () => { }
};

const Context = createContext(initialState);

export default Context;
