import React from "react";
import Context from "./config";

//Componente elegido para "dar acesso" as globais do projeto, passando prosp globais e o dispatch para o componente que o chamar

const mapStateToPropsMock = (obj, props) => ({
  ...props
});

const Connect = mapStateToProps => Component => {
  return props => (
    <Context.Consumer>
      {({ dispatch, store }) => {
        const storeProps = mapStateToProps
          ? { ...mapStateToProps(store, props) }
          : { ...mapStateToPropsMock(store, props) };
        return <Component {...storeProps} dispatch={dispatch} />;
      }}
    </Context.Consumer>
  );
};

export default Connect;
