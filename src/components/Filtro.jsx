import React from "react";

// Style 
import styled from "styled-components"
// ----------------------------------------------------------------

const Divs = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding-bottom: 10px;
`
const H2 = styled.h2`

    text-align: center;
`

const Form = styled.form`

    border: 1px solid;
    width: 50%;
    margin: 10px auto;
    transition: all 0.6s;

    &:hover{
        box-shadow: 0px 0px 5px greenyellow;
        border-radius:10px ;
        transition: all 0.6s;
    }
`
// ----------------------------------------------------------------

class Filtro extends React.Component {

    render () {

        return (

            <>

                <Form action="">

                    <H2><strong>Filtros</strong></H2>

                        <Divs>
                            <label name="valor-mínimo">Valor mínimo</label>
                            <input type="number" id="valor-mínimo" />
                        </Divs>

                        <Divs>
                            <label name="valor-máximo">Valor máximo</label>
                            <input type="number" id="valor-máximo"/>
                        </Divs>

                        <Divs>
                            <label name="buscar-nome">Buscar por nome</label>
                            <input type="text" id="buscar-nome" placeholder="Produto"  />
                        </Divs>

                </Form>

            </>

        );
    };
};

export default Filtro;