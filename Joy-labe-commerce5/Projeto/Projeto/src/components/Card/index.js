import { CardContainer } from "./style";
import { Button } from "./style";

export function Card(props) {
   return <CardContainer>
      <img src={props.lista.photo} alt="" /> 
      <p>{props.lista.title}</p>
      <p>R$ {props.lista.price.toFixed(2).replace(".", ",")}</p>
      <Button>Comprar</Button>
   </CardContainer>
}
