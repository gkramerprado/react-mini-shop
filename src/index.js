import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from "./store/config/provider";
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

//Provider para encapsular a aplicacao toda, criando o contexto da estrutura global para os componentes filhos
ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("root")
);
