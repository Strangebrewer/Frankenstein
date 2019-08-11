import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ContentHeader = React.memo(props => {

   const { overview, project_link, subject_id, summary, title } = props;
   return (
      <Header>
         <h2>{title}</h2>
         {summary ? <h3>{summary}</h3> : null}
         {!overview && (
            <LinkContainer>
               <button><Link to={`/dragon-writer/${project_link}`}>overview</Link></button>
               <button><Link to={{ pathname: `/dragon-writer/${project_link}/readmode`, state: { subject_id, title } }}>full text</Link></button>
               <button><Link to={{ pathname: `/dragon-writer/${project_link}/storyboard`, state: { subject_id, title } }}>storyboard</Link></button>
               <button><Link to={{ pathname: `/dragon-writer/${project_link}/print`, state: { subject_id, title } }}>print</Link></button>
            </LinkContainer>
         )}
      </Header>
   )
});

export default ContentHeader;

const Header = styled.header`
   font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
   font-size: 3rem;
   min-height: 75px;
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