import React, { Component } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   main {
      flex: 1 0 auto;
   }
   footer {
      flex-shrink: 0;
      background: purple;
      height: 100px;
   }
`;

class Landing extends Component {
   render() {
      return (
         <PageContainer>
            <main>
               <h1>Loot at this shitzel!</h1>
            </main>
            <footer>
               Here's some shit@
            </footer>
         </PageContainer>
      );
   }
}

export default Landing;