import { FiltersContainer } from "../../style";

export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.busca}
         onChange={props.atualizarBusca}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.precoMinimo}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.precoMaximo}
      />

      <select
         name="order"
         value={props.order}
         onChange={props.pedido}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>

   </FiltersContainer>

}