import React from 'react';
import styled from 'styled-components';
import { LinkBtn } from '../../Elements/LinkBtn';
import Icon from '../../Elements/Icon';
import { IconSpinner } from '../../Elements/IconSpinner';

const TextButtons = React.memo(props => {

   return (
      props.loading
         ? <IconSpinner top="6px" right="38px" size="10px" black />
         : (
            <Buttons>
               <Icon small>
                  <i className="far fa-eye" />
               </Icon>

               <Icon small>
                  <i className="fas fa-edit" />
               </Icon>

               <Icon small>
                  <i className="fas fa-upload" />
               </Icon>

               <Icon small>
                  <i className="far fa-images" />
               </Icon>

               <Icon small delete>
                  <i className="fas fa-trash-alt" />
               </Icon>
            </Buttons>
         )
   )
});

export default TextButtons;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 4px;
  right: 8px;
`;