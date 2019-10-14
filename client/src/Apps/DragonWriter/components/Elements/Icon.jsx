import React, { Fragment } from "react";
import styled from 'styled-components';

const Button = styled.button`
   background: transparent;
   border: none;
   color: ${props => props.theme.mainColor};
   cursor: pointer;
   font-size: ${props => props.small ? '1.2rem' : '1.5rem'};
   outline: transparent;
   padding: 0 3px 5px 3px;
   transition: ${props => props.theme.colorTrans}, text-shadow 0.15s ease-in-out;
   vertical-align: middle;
   &:hover {
      color: ${props => (
      props.delete
         ? props.theme.deleteLinkHover
         : props.text ? "#fff" : "#26d4cc"
   )};
   }
   &:disabled {
      cursor: default;
      opacity: ${props => (
      props.storyboard
         ? 0.1
         : 0.6
   )};
   }
   &:disabled:hover {
      color: inherit;
   }
`;

const Icon = ({ children, ...rest }) => {
   return <Button {...rest}>{children}</Button>
}

export default Icon;