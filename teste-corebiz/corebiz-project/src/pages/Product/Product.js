import React, { useState, useEffect } from 'react';
import Button from '../../components/BuyButton/Button';
import Cart from '../../components/CartIcon/Cart';
import Loading from '../../components/Loading/Loading';
import Price from '../../components/Price/Price';
import { InputNumber } from 'antd';
import { CardImage, StyProduct, ContainerFields, DivButton } from './style';

//Componente que renderiza a tela de produto, individualmente
//Recebe como propriedado o ID de um produto e realiza um ajax para a API retornar as informacoes do produto passando o ID recebido
function Product(props) {
    const [product, setProduct] = useState(false);
    const [qtyItem, setQtyItem] = useState(1);

    //Effect para realizar o ajax que retornara as informacoes do produto
    useEffect(() => {
        let { match: { params } } = props;
        let url = `https://desolate-brushlands-20405.herokuapp.com/api/v1/product/${params.id}`;

        fetch(url)
            .then((r) => r.json())
            .then((json) => setProduct(json[0]));
    }, [props]);

    return (
        (product ?
            <StyProduct>
                <div>
                    <CardImage src={product.imageUrl} alt="img"></CardImage>
                </div>
                <div>
                    <h3>{product.productName}</h3>
                    <Price price={product.price} />
                    <ContainerFields>
                        <InputNumber min={1} max={15} defaultValue={qtyItem} onChange={el => { setQtyItem(el) }} />
                        <DivButton>
                            <Button btnName="Comprar" buy={true} icon={Cart} product={product} qtyItem={qtyItem} />
                        </DivButton>
                    </ContainerFields>
                </div>
            </StyProduct>
            :
            <Loading />
        )
    );
}

export default Product;