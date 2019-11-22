import React from 'react';
import { StyPrice, Currency, ValPrice } from './style';

//Componente para estilizar os valores exibidos(nao todos)
function Price(props) {
    const priceFormatted = props.price.toFixed(2).replace('.', ',');
    return (
        <>
            <StyPrice><Currency>R$</Currency> <ValPrice>{priceFormatted}</ValPrice></StyPrice>
        </>
    );
}

export default Price;