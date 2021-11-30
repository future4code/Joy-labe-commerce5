import React from 'react'
import styled from 'styled-components';

class FiltroValor extends React.Component {
    verificarPreco = (preco) => {
        const preco = this.state.tarefas.map((valor) => {
            if (preco > valor.preco) {
                return "Valor Crescente"
            } else {
                return "Valor Descrevente"
            }
        })

    }
    render() {
        const listaFiltrada = this.state.precos.filter(valor => {
            switch (this.state.preco) {
                case 'Valor Crescente':
                    return !valor.preco
                case 'Valor Descrevente':
                    return valor.preco
                default:
                    break
            }
        });

        return <ProductsContainer>
            {produto}
            <p>Quantidade de Itens: {produto.length}</p>
            <select>
                <option value="crescente">Valor Crescente</option>
                <option value="decrescente">Valor Decrescente</option>
            </select>
            {listaFiltrada}
        </ProductsContainer>

    }
    
}

export default FiltroValor;
