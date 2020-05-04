import React, { useState } from 'react';
import axios from 'axios';
import { StyFooter, InputGroup, ButtonForm, InputForm, News, NewsTitle, NewsMessage } from './style';
import toaster from '../Toast/Toast';

//Metodo para realizar o post dos dados(nome e email) para a API informada
export const postUser = (params) => {
    const url = `API URL`;
    return axios({
        method: 'POST',
        url: url,
        data: params
    });
}

function Footer() {
    const [userName, setUserName] = useState(false);
    const [userMail, setUserMail] = useState(false);

    //Cria o objeto com as informacoes necessarias para o post
    function postData() {
        console.log('post data');
        if (userName && userMail) {
            const objUser = {
                name: userName,
                email: userMail,
                notice: 'notice',
                phone: '1234-5678'
            };

            console.log(objUser);

            //Executa o post com o objeto e retorna o ID de resposta, ou Erro
            toaster(`E-mail ${userName} cadastrado com sucesso !`, 'success');
        } else {
            toaster("Usuário e E-mail não informados", 'error');
        }
    }

    return (
        <StyFooter>
            <News>
                <NewsTitle>Newsletter</NewsTitle>
                <NewsMessage>Receba nossas promoções e novidades, inscreva-se</NewsMessage>
            </News>
            <InputGroup>
                <InputForm type="text" placeholder="Nome" onChange={(el) => { setUserName(el.target.value) }}></InputForm>
                <InputForm type="text" placeholder="E-mail" onChange={(el) => { setUserMail(el.target.value) }}></InputForm>
            </InputGroup>
            <ButtonForm size="medium" onClick={postData}>Enviar</ButtonForm>
        </StyFooter>
    );
}

export default Footer;