import React, { useState } from 'react';
import Category from '../Category/Category';
import Cart from '../CartIcon/Cart';
import ModalCart from '../ModalCart/ModalCart';
import ModalAccount from '../ModalAccount/ModalAccount';
import { StyHeader, MainHeader, DivIcons, DivCategories, MyAccount } from './style';
import { IoIosPerson } from 'react-icons/io';

function Header() {
    const [displayModalCart, setDisplayModalCart] = useState(false);
    const [displayModalAccount, setDisplayModalAccount] = useState(false);

    //Manipula o modal do carrinho
    function handleModalCart() {
        setDisplayModalCart(!displayModalCart);

        if (displayModalAccount) setDisplayModalAccount(!displayModalAccount);
    }

    //Manipula o modal do Minha conta
    function handleModalAccount() {
        setDisplayModalAccount(!displayModalAccount);

        if (displayModalCart) setDisplayModalCart(!displayModalCart);
    }

    return (
        <MainHeader>
            <StyHeader>
                <DivCategories>
                    <Category />
                    <Category />
                    <Category />
                </DivCategories>

                <DivIcons>
                    <MyAccount onClick={handleModalAccount} >
                        <IoIosPerson />
                    </MyAccount>
                    <div onClick={handleModalCart}>
                        <Cart colorIcon="black" />
                    </div>
                    <ModalCart displayModal={displayModalCart ? 'block' : 'none'} />
                    <ModalAccount displayModal={displayModalAccount ? 'block' : 'none'} />
                </DivIcons>
            </StyHeader>
        </MainHeader>
    );
}

export default Header;