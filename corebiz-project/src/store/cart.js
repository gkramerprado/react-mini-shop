//Declaracao das "funcoes globais"
//Sera utilizada a funcao UPDATE para atualizar minha estrutura de dados, servindo tanto para adicionar um item ao carrinho quanto para remover
/*
  A pasta store foi baseda em conteudo da internet e adaptada para funcionar como o projeto necessita
  Muitas funcoes sao funcoes prontas de outros projetos externos
*/

export const cartStore = {
  cart: {
    hasProduct: false,
    valTotal: 0,
    items: []
  }
};

export const UPDATE = "UPDATE";

const cartReducer = (state = cartStore, action) => {
  switch (action.type) {
    case UPDATE:
      //Retorna para a variavel global minha estrutura de dados, substituindo a atual
      return {
        cart: {
          ...state.cart,
          items: action.payload
        }
      };
    default:
      return state;
  }
};

export const UpdateListItems = items => {
  const itemsSorted = items.sort((a, b) => {
    return parseInt(a.productId) - parseInt(b.productId);
  });

  return {
    type: UPDATE,
    payload: itemsSorted
  };
};

export default cartReducer;
