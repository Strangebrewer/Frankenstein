import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Icon from '../../Elements/Icon';
import { IconSpinner } from '../../Elements/IconSpinner';

const ProjectButtons = React.memo(props => {
   return (
      props.loading
         ? <IconSpinner top="6px" right="38px" size="10px" black />
         : (
            <Buttons>
               <Icon>
                  <i className="fab fa-accessible-icon" />
               </Icon>

               <Icon>
                  <i className="fab fa-500px" />
               </Icon>

               <Icon>
                  <i className="far fa-alarm-clock" />
               </Icon>

               <Icon>
                  <i className="fas fa-alicorn" />
               </Icon>
            </Buttons>
         )
   )
});

export default ProjectButtons;

const Buttons = styled.div`
   display: flex;
   justify-content: space-between;
   position: absolute;
   top: 4px;
   right: 8px;
`;