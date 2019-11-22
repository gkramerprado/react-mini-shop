import React, { useReducer } from "react";
import Context from "./config";
import cartReducer, { cartStore } from "../cart";
import middleware from "./middleware";

//Componente Provider para criar a camada de estados globais, no caso a estrutura de dados do carrinho

const Store = props => {

  const [cartState, cartDispatch] = useReducer(cartReducer, cartStore);

  const trigglerDispatchs = action => {
    const dispatchs = [cartDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...cartState
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
