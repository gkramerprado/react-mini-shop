import React from 'react';
import Connect from '../../store/config/connect';
import { StyButton } from './style';
import { UpdateListItems } from '../../store/cart';
import toaster from '../Toast/Toast';

//Componente que realiza a operacao de adicionar ao carrinho
function Button(props) {

    const Icon = props.icon;
    let product = props.product;

    //Funcao que ira alterar a estrutura global do carrinho
    function handleListItems() {
        if (!props.buy) return;
        let allItems = props.cart.items;

        //Verifica se o ID passado ja existe no carrinho
        let existItem = allItems.filter(el => {
            return el.productId === product.productId;
        });

        //Se nao existir, entao adiciona
        if (existItem.length === 0) {
            product = {
                ...product,
                qtyItem: props.qtyItem
            };

            pushValues(allItems, product);
        } else {
            //Se existir entao incrementa a quantidade
            product.qtyItem = parseInt(existItem[0].qtyItem) + parseInt(props.qtyItem);

            //Retorna a estrutura sem o produto que devera ser inserido no carrinho
            let productFitlered = allItems.filter(el => {
                return el.productId !== product.productId;
            });

            pushValues(productFitlered, product);
        }
    }

    //Adiciona o novo produto alterado na estrutura e da um dispatch para atualizar a estrutura global
    function pushValues(arr, values) {
        arr.push(values);
        props.dispatch(UpdateListItems(arr));

        toaster('Item adicionado ao Carrinho', 'success');
    }

    return (
        <>
            <StyButton onClick={handleListItems} >{props.btnName} <Icon /> </StyButton>
        </>
    );
}

//Acessando a estrutura global
const mapStateToProps = ({ cart }, props) => {
    return {
        cart,
        ...props
    };
};

export default Connect(mapStateToProps)(Button);