import React, { Component } from "react"
import Labecommerce from "./data/labecommerce.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { ListContainer } from "./style";
import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";


export class App extends Component {

   state = {
      list: Labecommerce,
      busca: "",
      minPrice: "",
      maxPrice: "",
      photo: "",
      pedido: 1,
      carrinho: []
   }

   atualizarBusca = (ev) => {
      this.setState({
         busca: ev.target.value
      })
   }

   precoMinimo = (ev) => {
      this.setState({
         minPrice: ev.target.value
      })
   }

   precoMaximo = (ev) => {
      this.setState({
         maxPrice: ev.target.value
      })
   }

   pedido = (ev) => {
      this.setState({
         order: ev.target.value
      })
   }

   render() {
      return <>

         <Header />

         <Filters
            busca={this.state.busca}
            atualizarBusca={this.atualizarBusca}
            precoMinimo={this.precoMinimo}
            precoMaximo={this.precoMaximo}
            pedido={this.pedido}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            pedido={this.state.pedido}
         />

         <ListContainer>
            {this.state.list
               .filter(lista => {
                  return lista.title.toLowerCase().includes(this.state.busca.toLowerCase())
               })
               .filter(lista => {
                  return this.state.minPrice === "" || lista.price >= this.state.minPrice
               })
               .filter(lista => {
                  return this.state.maxPrice === "" || lista.price <= this.state.maxPrice
               })
               .sort((valor1, valor2) => {
                  return this.state.pedido * (valor1.price - valor2.price)

               })
               .map(lista => {
                  return <Card key={lista.id} lista={lista} />
               })}

         </ListContainer>
         <Footer />

      </>

   }
}