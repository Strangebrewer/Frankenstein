import React from 'react';
import styled from 'styled-components';

const ContentHeader = React.memo(props => {
   return (
      <Header>
         <h2>{props.title}</h2>
         {props.summary ? <h3>{props.summary}</h3> : null}
         <LinkContainer>
            <button>overview</button>
            <button>full text</button>
            <button>storyboard</button>
            <button>print</button>
         </LinkContainer>
      </Header>
   )
});

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
   margin-top: -5px;
   text-align: center;
   > button {
      background: transparent;
      border: none;
      border-right: 1px solid white;
      color: white;
      cursor: pointer;
      font-family: ${props => props.theme.font_opensans};
      outline: transparent;
      margin: 0;
      padding: 0 10px;
   }
   > button:last-of-type {
      border-right: none;
   }
`;