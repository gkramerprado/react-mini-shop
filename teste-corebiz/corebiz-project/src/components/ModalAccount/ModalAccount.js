import React from 'react';
import LastItem from '../LastItem/LastItem';
import { ModalMain, Container, Header, Footer, HeaderTitle, UserMail, Logout } from './style';

//Modal do Minha conta
function Modal(props) {
    return (
        <ModalMain displayModal={props.displayModal} >
            <Container>
                <Header>
                    <HeaderTitle>Olá, Guilherme !</HeaderTitle>
                    <UserMail>guilherme.kramer98@gmail.com</UserMail>
                    <Logout>Sair</Logout>
                </Header>
                <Footer>
                    <LastItem />
                </Footer>
            </Container>
        </ModalMain>
    );
}

export default Modal;