import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LinkBtn from './LinkBtn';

const SidebarLeftMenu = props => {

   const linkStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "left",
      whiteSpace: "nowrap",
      width: "140px"
   }

   return (
      <Container>
         <h2>
            Columns <Link to={`/dragon-writer/${props.project_link}/editor`}><i className="fas fa-plus-circle" /></Link>
         </h2>
         <ul>
            {props.subjects.map(subject => (
               <li key={subject._id}>
                  <LinkBtn
                     underline
                     size="1.25rem"
                     lineHeight="1.5"
                     style={linkStyle}
                  >
                     {subject.title}
                  </LinkBtn>
               </li>
            ))}
         </ul>
      </Container>
   );

}

export default SidebarLeftMenu;

const Container = styled.div`
   height: 100%;
   padding: 10px 10px 0 20px;
   position: relative;
   h2 {
      font-size: 2.4rem;
      font-family: ${props => props.theme.font_playfair};
      margin-bottom: 10px;
      > a {
         color: #62c2ee ;
         cursor: pointer;
         font-size: 2rem;
         position: absolute;
         top: 5px;
         right: 30px;
      }
   }
   li {
      font-size: 1.5rem;
      line-height: 1.5;
      list-style: disc;
      margin-left: 25px;
   }
`;