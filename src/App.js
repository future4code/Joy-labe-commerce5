import React from 'react';

// Imports Components
import Filtro from "./components/Filtro"
//----------------------------------------------------------------

// Styled-Components GlobalStyles
import GlobalStyle from "./styles/Global";
//----------------------------------------------------------------
class App extends React.Component {

  render() {

        return (

          <>

            <div>
                <Filtro />
            </div>

            <GlobalStyle />
          </>
    );
  };
};

export default App;
