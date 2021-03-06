import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NewSubjectForm from './Forms/NewSubject';
import LinkBtn from './LinkBtn';

const SidebarLeftMenu = props => {

   const linkStyle = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "left",
      whiteSpace: "nowrap",
      width: "140px"
   }

   const handleClick = id => {
      console.log('id in Sidebar handleClick:::', id);
      if (props.overview) {
         return props.toggleSubjectVisible(id);
      }
      props.switchSubjects(id);
   }

   const newSubjectModal = () => {
      props.setModal({
         body: <NewSubjectForm project_id={props.project_id} closeModal={props.closeModal} />
      })
   }

   return (
      <Container>
         <h2>
            Columns <i  onClick={newSubjectModal} className="fas fa-plus-circle" />
         </h2>
         <ul>
            {props.subjects.map(subject => {
               console.log('subject in SideBarLeftMenu:::', subject);
               return (
                  <li key={subject._id}>
                     <LinkBtn
                        underline
                        size="1.25rem"
                        lineHeight="1.5"
                        style={linkStyle}
                        onClick={() => handleClick(subject._id)}
                     >
                        {subject.title}
                     </LinkBtn>
                  </li>
               )
            })}
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
      > i {
         color: #62c2ee;
         cursor: pointer;
         font-size: 2rem;
         position: absolute;
         top: 15px;
         right: 35px;
      }
   }
   li {
      font-size: 1.5rem;
      line-height: 1.5;
      list-style: disc;
      margin-left: 25px;
   }
`;