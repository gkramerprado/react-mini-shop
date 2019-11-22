import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

//Componente de rotas para mapear as telas da aplicacao
//Header, Footer e Toast serao fixos na telas, sendo sempre renderizados independente da rota atual
function Routes() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Header />
            <div className="main-frame">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exatc path="/product/:id" component={Product}></Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;