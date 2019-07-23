import React from 'react';
import styled from 'styled-components';

const ContentHeader = props => {
   return (
      <Header>
         <h2>Narfing for Biscuits!</h2>
         <h3>Thoughts &amp; Ideas</h3>
         <LinkContainer>
            <button>overview</button>
            <button>full text view</button>
            <button>print view</button>
         </LinkContainer>
      </Header>
   )
}

export default ContentHeader;

const Header = styled.header`
   font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
   font-size: 3rem;
   min-height: 65px;
   line-height: 1.2;
   background: ${props => props.test ? '#4666ff15' : 'transparent'};
   text-align: center;
   h3 {
      font-size: 1.6rem;
      padding-top: 5px;
   }
`;

const LinkContainer = styled.div`
   padding-bottom: 15px;
   text-align: center;
   > button {
      background: transparent;
      border: none;
      border-right: 1px solid white;
      color: white;
      cursor: pointer;
      font-family: ${props => props.theme.font_opensans};
      outline: transparent;
   }
   > button:last-of-type {
      border-right: none;
   }
`;