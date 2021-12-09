import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 200px;
height: 330px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
box-shadow: 1px 1px 1px 1px darkgray;
gap: 14px;
margin: 12px;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
padding: 5px;

  p {
    margin: 1px;
  }
`

const AdicionarAoCarrinho = styled.button`
align-self: center;
margin-top: 4px;
background-color: rgb(41, 37, 37);
border-style: none;
width: 15em;
height: 3em;
color: white;
`
const ProductsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-content: space-between;
`;

class Product extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                nome: 'Foguete 1',
                preco: 123,
                foto: 'https://picsum.photos/200/200?a=1'
            },
            {
                id: 2,
                nome: 'Foguete 2',
                preco: 200,
                foto: 'https://picsum.photos/200/200?a=2'
            },
            {
                id: 3,
                nome: 'Foguete 3',
                preco: 30,
                foto: 'https://picsum.photos/200/200?a=3'
            },
            {
                id: 4,
                nome: 'Foguete 4',
                preco: 300,
                foto: 'https://picsum.photos/200/200?a=4'
            },
            {
                id: 5,
                nome: 'Foguete 5',
                preco: 300,
                foto: 'https://picsum.photos/200/200?a=5'
            },
            {
                id: 6,
                nome: 'Foguete 6',
                preco: 300,
                foto: 'https://picsum.photos/200/200?a=6'
            },
            
        ]
    }

    render() {
        const produto = this.state.produtos.map((produto) => {
            return (
                <ProductsContainer>
                    <Container>
                        <img src={produto.foto} alt="" />
                        <Info>
                            <p>{produto.nome}</p>
                            <p>R${produto.preco},00</p>
                        </Info>
                        <AdicionarAoCarrinho>Comprar</AdicionarAoCarrinho>
                    </Container>
                </ProductsContainer>

            );
        });
        return <ProductsContainer>
            {produto}
            <p>Quantidade de Itens: {produto.length}</p>
            <select>
                <option value="crescente">Valor Crescente</option>
                <option value="decrescente">Valor Decrescente</option>
            </select>
        </ProductsContainer>

    }
}

export default Product;
