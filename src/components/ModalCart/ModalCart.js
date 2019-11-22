import React, { useState, useEffect } from 'react';
import Connect from '../../store/config/connect';
import ItemCart from '../ItemCart/ItemCart';
import Button from '../BuyButton/Button';
import Cart from '../CartIcon/Cart';
import { ModalMain, Container, Header, Body, Footer, EmptyMessage, Icon, ClearCart } from './style';
import { IoMdSad, IoIosCloseCircleOutline } from 'react-icons/io';

//Modal do carrinho
function Modal(props) {

    const [listItems, setListItems] = useState([]);
    const [totalValueCart, setTotalValueCart] = useState(0);

    //Crio um effect para monitorar o stado da estrutura global, assim a lista sempre estara atualizada ao adicionar um item ou remover
    useEffect(() => {
        setListItems(props.cart.items);

        let arrValues = [];

        //Retorna a somatoria do valor de cada itens para um array
        props.cart.items.map(el => arrValues.push(parseFloat(el.price) * parseInt(el.qtyItem)));

        //Soma todos os valores totais de cada item
        var sum = arrValues.reduce(function (prevVal, elem) {
            return prevVal + elem;
        }, 0);

        setTotalValueCart(sum);

    }, [props.cart.items]);

    return (
        <ModalMain displayModal={props.displayModal} >
            <Container>
                <Header>
                    Meu Carrinho {listItems.length} Itens
                </Header>
                <Body>
                    {listItems.length === 0
                        ? (<EmptyMessage>Seu carrinho esta vazio... <IoMdSad /> </EmptyMessage>)
                        : (
                            <>
                                {listItems.map(el => (
                                    <ItemCart key={el.productId} {...el}>{el.productName} / {el.qtyItem}</ItemCart>
                                ))}
                            </>
                        )
                    }

                </Body>
                <Footer>
                    <span>Total: R$ {totalValueCart.toFixed(2)}</span>
                    <Button btnName="Comprar" icon={Cart} buy={false} />
                    <ClearCart>
                        <Icon><IoIosCloseCircleOutline /></Icon>
                        Limpar Carrinho
                    </ClearCart>
                </Footer>
            </Container>
        </ModalMain>
    );
}

//Acessando a estrutura global
const mapStateToProps = ({ cart }, props) => {
    return {
        cart,
        ...props
    };
};

export default Connect(mapStateToProps)(Modal);