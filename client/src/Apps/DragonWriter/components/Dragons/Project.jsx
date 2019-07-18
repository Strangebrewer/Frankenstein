import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Project = props => {
   return (
      <Container>
         <Buttons>
            <button><i className="fab fa-accessible-icon" /></button>
            <button><i className="fab fa-500px" /></button>
            <button><i className="far fa-alarm-clock" /></button>
            <button><i className="fas fa-alicorn" /></button>
         </Buttons>

         <Link to={`/dragon-writer/${props.project.url}`}>
            <h2>{props.project.title}</h2>
            <p>{props.project.subtitle}</p>
         </Link>
      </Container>
   );
}

export default Project;

const Container = styled.div`
   background: ${props => props.isDragging
      ? "rgba(22, 136, 130, 0.587)"
      : "rgba(22, 136, 130, 0.437)"};
   border-radius: 5px;
   box-shadow: ${props => (
      props.isDragging
         ? `0 0 15px rgb(38, 212, 204),
            0 0 10px rgb(38, 212, 204),
            0 0 5px rgb(38, 212, 204),
            0 0 2px rgb(38, 212, 204),
            inset 0 0 10px 0 rgb(38, 212, 204)`
         : '4px 4px 4px rgb(0,0,0)'
   )};
   border-left: 1px solid rgb(255, 255, 255, 0.283);
   border-top: 1px solid rgb(255, 255, 255, 0.533);
   line-height: 1.2;
   margin: 0 auto 10px auto;
   padding: 20px 15px;
   position: relative;
   transition: background-color 0.1s ease-in-out;
   &:hover {
      background: rgba(22, 136, 130, 0.587);
   }
   h2 {
      color: #fff;
      font-family: ${props => props.theme.font_playfair};
      font-size: 3.5rem;
      text-shadow: 2px 2px 3px rgb(0,0,0);
      width: 450px;
   }
   p {
      color: #fff;
      font-size: 1.8rem;
      padding-top: 5px;
      text-indent: 25px;
      text-shadow: 2px 2px 3px rgb(0,0,0);
   }
`;

const Buttons = styled.div`
   position: absolute;
   top: 8px;
   right: 8px;
   button {
      padding: 0 4px 4px 4px;
      background: transparent;
      outline: transparent;
      border: none;
      color: #fff;
   }
`;