import React from 'react';
import Connect from '../../store/config/connect';
import { UpdateListItems } from '../../store/cart';
import { StyItemCart, Icon, InfoItem, Img, ImgItem, DescItem, NameItem, NumsItem, ValItem, QtyItem } from './style';
import { IoIosCloseCircleOutline, IoIosAdd, IoIosRemove } from 'react-icons/io';

function ItemCart(props) {

    function getItem(id) {
        let objItem = props.cart.items.filter(el => {
            return parseInt(el.productId) === parseInt(id);
        });

        return objItem[0];
    }

    //Funcao para alterar a quantidade do item no carrinho
    function setItemQty(id, operation) {
        const objItem = getItem(id);

        if (parseInt(objItem.qtyItem) - 1 <= 0 && operation === 'minus') return;

        //De acordo com a operacao, soma ou subtrai 1 quantidade do item
        switch (operation) {
            case 'plus':
                objItem.qtyItem = parseInt(objItem.qtyItem) + 1;
                break;
            case 'minus':
                objItem.qtyItem = parseInt(objItem.qtyItem) - 1;
                break;
            default:
                console.error("unknown operation");
                break;
        }

        //Retorna a estrutura sem o objeto alterado
        let listFiltered = props.cart.items.filter(el => {
            return parseInt(el.productId) !== parseInt(id);
        });

        //Cria uma nova estrutura agora com o objeto atualizado, passando os items que ja existiam mais o item alterado
        const newObj = [
            ...listFiltered,
            objItem
        ];

        props.dispatch(UpdateListItems(newObj));
    }

    //Funcao para remover o item, apenas retorna para a estrutura global a mesma estrutura porem sem o item deletado
    function handleDeleteItem(id) {
        let listFiltered = props.cart.items.filter(el => {
            return parseInt(el.productId) !== parseInt(id);
        });

        props.dispatch(UpdateListItems(listFiltered));
    }

    return (
        <StyItemCart>

            <Icon>
                <IoIosCloseCircleOutline onClick={() => handleDeleteItem(props.productId)} />
            </Icon>

            <InfoItem>
                <ImgItem>
                    <Img src={props.imageUrl} alt="img" />
                </ImgItem>
                <DescItem>
                    <NameItem>
                        {props.productName}
                    </NameItem>
                    <NumsItem>
                        <QtyItem>
                            <Icon>
                                <IoIosRemove onClick={() => { setItemQty(props.productId, 'minus') }} />
                            </Icon>
                            {props.qtyItem}
                            <Icon>
                                <IoIosAdd onClick={() => { setItemQty(props.productId, 'plus') }} />
                            </Icon>

                        </QtyItem>
                        <ValItem>R$ {props.price.toFixed(2)}</ValItem>
                    </NumsItem>
                </DescItem>
            </InfoItem>
        </StyItemCart>
    );
}

const mapStateToProps = ({ cart }, props) => {
    return {
        cart,
        ...props
    };
};

export default Connect(mapStateToProps)(ItemCart);