import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MainHeader = props => {
   return (
      <Header>
         <h1><Link to="/dragon-writer">DRAGON WRITER</Link></h1>
      </Header>
   )
}

export default MainHeader;

const Header = styled.header`
   text-align: center;
   padding: 10px;
   background: ${props => props.test ? '#42f6ff15' : 'transparent'};
   h1 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 1.8rem;
      line-height: 1.2;
   }
`;