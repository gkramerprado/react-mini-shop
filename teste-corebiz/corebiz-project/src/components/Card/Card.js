import React from 'react';
import Price from '../Price/Price';
import Cart from '../CartIcon/Cart';
import Button from '../BuyButton/Button';
import { MainCard, CardImage, Ellipsis, CardContent } from './style';
import { Link } from 'react-router-dom';

//Renderiza os Card em que serao exibidos os produtos na Home
function Card(props) {
    const product = props.product;

    return (
        <>
            <MainCard>
                <Link to={`/product/${product.productId}`}>
                    <CardImage src={product.imageUrl} />
                </Link>
                <CardContent>
                    <Ellipsis>{product.productName}</Ellipsis>
                    <Price price={product.price} />
                </CardContent>
                <Button btnName="Comprar" buy={true} icon={Cart} product={product} qtyItem={1} />
            </MainCard>
        </>
    );
}

export default Card;