import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import { Main, Products, HomeTitle } from './style';

//Componente Home responsavel por exibir os produtos consumidos da API
function Home() {
    const [products, setProducts] = useState(false);

    //Effect usado para realizar o ajax assim que o componente for montado
    useEffect(() => {
        const url = 'https://desolate-brushlands-20405.herokuapp.com/api/v1/products';
        fetch(url)
            .then(r => r.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <Main>
            <HomeTitle>Produtos em destaque</HomeTitle>
            <Products>
                {products ? products.map(p => {
                    return (
                        <Card key={p.productId} product={p} />
                    )
                }) : <Loading />}
            </Products>
        </Main>
    );
}

export default Home;