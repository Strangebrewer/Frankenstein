import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';

import { logout } from '../../../../redux/actions/auth_actions';

const MainHeader = props => {
   // console.log('props.user:::', props.user);
   return (
      <Header>
         <Link title="back to portfolio" to="/"><i className="fas fa-home" /></Link>
         <Link to="/dragon-writer"><h1>DRAGON WRITER</h1></Link>
         {props.user
            ? (
               <Button title="log out" onClick={props.logout}>
                  <i className="fas fa-sign-out-alt" />
               </Button>
            ) : null
         }

      </Header>
   )
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

const Header = styled.header`
   display: flex;
   justify-content: center;
   padding: 10px;
   background: ${props => props.test ? '#42f6ff15' : 'transparent'};
   h1 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 1.8rem;
      line-height: 1.2;
      color: white;
   }
   a, button, h1 {
      padding: 0 10px;
      text-shadow: 0 0 1px #000,
         0 0 2px #000,
         0 0 3px #000,
         0 0 4px #000,
         0 0 5px #000,
         0 0 6px #000,
         0 0 7px #000,
         0 0 8px #000,
         0 0 9px #000,
         0 0 10px #000;
   }
   a:hover, button:hover, a:active, a:visited {
      color: #26d4cc;
   }
`;

const Button = styled.button`
   background: transparent;
   border: none;
   color: #26d4cc;
   cursor: pointer;
   margin: 0;
   outline: transparent;
   padding: 0;
`;