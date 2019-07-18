import React from 'react';
import styled from 'styled-components';

const Footer = props => {
   return (
      <StyledFooter>
         
      </StyledFooter>
   )
}

export default Footer;

const StyledFooter = styled.footer`
   background: ${props => props.test ? '#4696af15' : 'transparent'};
   text-align: center;
   padding: 10px;
   height: 50px;
   p {
      font-size: 1.1rem;
   }
`;