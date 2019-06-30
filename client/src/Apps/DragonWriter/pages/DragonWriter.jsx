import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const LeftSide = styled.div`
   width: 90%;
   height: 100%;
   margin: auto;
   background: #000;
   color: white;
`;

class DragonWriter extends Component {

   renderLeftSide() {
      return (
         <LeftSide>
            I am ze left sidebar!
         </LeftSide>
      )
   }

   render() {
      const { props } = this;
      return (
         <Layout
            leftSidebar={this.renderLeftSide()}
            rightSidebar={<span>I am ze right sidebar!</span>}
            titleHeader={<div>Dis here's the real deal.</div>}
         >
            <span>I am ze main main, mang!</span>
         </Layout>
      );
   }
}

export default DragonWriter;