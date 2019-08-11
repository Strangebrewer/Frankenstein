import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Icon from '../../Elements/Icon';

const ColumnButtons = React.memo(props => {
   
   const { project_link, subject_id, title } = props;

   return (
      <>
         <Buttons>
            <Icon>
               <span className="column-btn-plus">+</span><i className="far fa-file-alt" />
            </Icon>

            <Link to={{ pathname: `/dragon-writer/${project_link}/readmode`, state: { subject_id, title } }}>
               <i className="fas fa-expand" />
            </Link>

            <Icon>
               <i className="fas fa-edit" />
            </Icon>

            <Icon>
               <i className="far fa-images" />
            </Icon>

            <Icon>
               <i className="fas fa-upload" />
            </Icon>

            <Link to={{ pathname: `/dragon-writer/${project_link}/storyboard`, state: { subject_id, title } }}>
               <i className="fas fa-th" />
            </Link>

            <Icon>
               <i className="fas fa-print" />
            </Icon>

            <Icon>
               <i className="fas fa-book-open" />
            </Icon>

            <Icon>
               <i className="fas fa-trash-alt" />
            </Icon>
         </Buttons>

         <Icon>
            &times;
         </Icon>
      </>
   )
});

export default ColumnButtons;

const Buttons = styled.div`
   display: flex;
   justify-content: flex-end;
   position: absolute;
   top: 6px;
   right: 8px;
   width: calc(100% - 40px);
   z-index: 9;
   a {
      color: ${props => props.theme.mainColor};
      font-size: 1.5rem;
      transition: ${props => props.theme.colorTrans};
      &:hover {
          color: ${props => !props.disabled && "#26d4cc"};
      }
   }
   button {
      position: relative;
   }   
   button:first-child:hover {
      span {
         color: ${props => !props.disabled && "#26d4cc"};
      }
   }
   span {
      display: inline-block;
      font-weight: bold;
      position: absolute;
      transition: ${props => props.theme.colorTrans}, text-shadow 0.15s ease-in-out;
   }
   .column-btn-plus {
      color: lightgreen;
      font-size: 13px;
      top: -4px;
      left: -1px;
      text-shadow: 0 0 1px #000, 0 0 2px #000, 0 0 3px #000;
   }
   .column-btn-square {
      font-size: 15px;
      top: -1px;
      left: 0;
      right: 0
   }
`;