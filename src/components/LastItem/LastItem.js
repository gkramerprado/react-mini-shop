import React from 'react';
import { Content, Title, Info, Name, Price } from './style';
import { Img } from './style';

//Componente estatico com informacoes mocadas
function LastItem() {
    return (

        <Content>
            <Title>Ultima compra</Title>
            <Info>
                <Img src='https://corebiz.vteximg.com.br/arquivos/ids/156669-1000-715/_0056_TRUFA-LACREME-BRANCA.png' alt="img" />
                <Name>TRUFA AVELÃ 90G</Name>
                <Price>R$ 12,99</Price>
            </Info>
        </Content>
    );
}

export default LastItem;