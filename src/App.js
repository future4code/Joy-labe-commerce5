import React from 'react';
import Product from './components/Product';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
padding: 16px;
gap: 8px;
b
`;

const Filtro = styled.div`
border: solid 1px black;
`


const Carrinho = styled.div`
border: solid 1px black;
`


class App extends React.Component {
  render() {
    return (

      <AppContainer>
        <Filtro>filtros</Filtro>
        <Product />      
        <Carrinho>carrinho</Carrinho>
      </AppContainer>


    );
  }
}


export default App;
