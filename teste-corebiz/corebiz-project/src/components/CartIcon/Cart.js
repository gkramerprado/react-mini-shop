import React from 'react';
import { DivCart } from './style';
import { IoIosCart } from 'react-icons/io';

//Componente criado para renderizar o icone de carrinho, tanto para botoes quanto para o header
function Cart() {
    return (
        <DivCart>
            <IoIosCart />
        </DivCart>
    );
}

export default Cart;