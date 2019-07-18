import React from 'react';
import styled from 'styled-components';

import texts from '../../utils/texts.json';

const StoryboardContainer = props => {

   return (
      <Container>
         {texts.map((text, index) => (
            <Panel key={index}>
               <h3>{text.title}</h3>
               {text.img && <img src={text.img} />}
               <p>{text.subtitle}</p>
            </Panel>
         ))}
      </Container>
   );

}

export default StoryboardContainer;

const Container = styled.div`
   background: transparent;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
   grid-template-rows: minmax(200px, 280px);
   height: 100%;
   width: 100%;
   button {
      justify-self: end;
   }
`;

const Panel = styled.div`
   background: rgba(255, 255, 255, 0.333);
   border-radius: 2px;
   display: flex;
   height: 260px;
   margin: 0 10px 10px 10px;
   padding: 10px;
   position: relative;
   width: 260px;
   img {
      align-self: center;
      border: 1px solid black;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
   }
   h3, p {
      color: ${props => props.theme.mainColor};
      font-family: ${props => props.theme.hTypeface};
      margin: auto;
      opacity: 0.1;
      padding: 0 35px;
      position: absolute;
      right: 0;
      left: 0;
      text-align: center;
      text-shadow: 0 0 1px ${props => props.theme.pageBG},
      0 0 2px ${props => props.theme.pageBG},
      0 0 3px ${props => props.theme.pageBG},
      0 0 4px ${props => props.theme.pageBG},
      0 0 5px ${props => props.theme.pageBG},
      0 0 10px ${props => props.theme.black},
      0 0 15px ${props => props.theme.black},
      0 0 25px ${props => props.theme.black};
      transition: opacity .2s ease-in-out;
   }
   h3 {
      cursor: grab;
      font-family: ${props => props.theme.hTypeface};
      font-size: 2.8rem;
      font-weight: bold;
      top: 10px;
   }
   h3:active {
      cursor: grabbing;
   }
   p {
      bottom: 10px;
      font-family: ${props => props.theme.typeface};
      font-size: 1.5rem;
   }
   &:hover {
      h3, p, button, .fa-arrows-alt {
         opacity: 1;
      }
      button:disabled {
         opacity: 0.6;
      }
   }
`;