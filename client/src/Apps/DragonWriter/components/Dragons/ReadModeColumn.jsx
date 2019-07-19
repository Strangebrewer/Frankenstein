import React from 'react';
import styled from 'styled-components';
import FullText from './FullText';

import texts from '../../utils/texts.json';

const ReadModeColumn = props => {

   return (
      <Column>
         <TextList>
            {texts.map((text, index) => (
               <FullText
                  key={index}
                  text={text}
                  index={index}
               />
            ))}
         </TextList>
      </Column>
   );

}

export default ReadModeColumn;

const Column = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 30px;
   /* width: 100%; */
   min-height: 100vh;
   /* max-width: 1500px */
`;

const TextList = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   position: relative;
`;