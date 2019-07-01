import React from 'react';
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from 'styled-components';

const Resume = props => (
   <Container>
      <h2>the DIGITAL</h2>
      <h2>&nbsp;RESUME of</h2>
      <div>
         <h1>KEITH</h1>
         <h1>&nbsp;ALLMON</h1>
      </div>
      <p>
         Web developer, amateur artist, DIY dabbler, and occasional advocate of the Oxford comma
      </p>
      <div className="menu">
         <h3>menu:</h3>
         <ul>
            <li><AnchorLink href="#hello">Hello</AnchorLink></li>
            <li><AnchorLink href="#projects">Projects</AnchorLink></li>
            <li><AnchorLink href="#about">About Me</AnchorLink></li>
            {props.loggedIn
               ? (
                  <>
                     <li><Link to="/" role="button">Home</Link></li>
                     <li><Link to="/admin" role="button">Admin</Link></li>
                     <li><button onClick={props.logout}>logout</button></li>
                  </>
               ) : null}
         </ul>
      </div>
      <div className="contacts">
         <p>You can email me at <span>BKAShambhala@gmail.com</span></p>
         <p>or find me on</p>
         <p>
            <a
               href="https://github.com/Strangebrewer"
               target="_blank"
               rel="noopener noreferrer"
            >GitHub</a>
            &nbsp;&amp;&nbsp;
             <a
               href="https://www.linkedin.com/in/keith-allmon/"
               target="_blank"
               rel="noopener noreferrer"
            >LinkedIn</a>
         </p>
      </div>
   </Container>
);

export default Resume;

const Container = styled.section`
   font-family: 'Lato', Arial, Helvetica, sans-serif;
   margin: auto;
   padding-left: 30px;
   padding-right: 30px;
   text-align: center;
   width: 100%;
   h2 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      color: var(--other);
      font-weight: bold;
      padding-top: 20px;
      display: inline-block;
   }
   h2:last-of-type {
      margin-bottom: 10px;
   }
   h1 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      color: var(--main);
      font-weight: bold;
      font-size: 3.5rem;
      display: inline-block;
   }
   h1:last-of-type {
      margin-bottom: 15px;
   }
   > p {
      margin-bottom: 10px;
   }
   h3 {
      font-weight: bold;
   }
   ul {
      margin-bottom: 15px;
   }
   li {
      line-height: 2.5rem;
   }
   .menu a:hover {
      color: var(--main);
      text-decoration: underline;
   }
   .contacts p:first-of-type {
      margin-bottom: 15px;
   }
   .contacts a {
      color: var(--main);
      text-decoration: none;
      font-weight: bold;
   }
   .contacts a:hover {
      text-decoration: underline;
      color: var(--other);
   }
   .contacts p span {
      color: var(--other);
      font-weight: bold;
   }
   @media (min-width: 400px) {
      h2 {
         font-size: 2.2rem;
      }
      h1 {
         font-size: 4rem;
      }
   }
   @media (min-width: 650px) {
      width: 270px;
      height: 100%;
      position: fixed;
      top: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      padding-left: 30px;
      padding-right: 20px;
      h1 {
         display: block;
      }
      h2 {
         display: block;
         padding-top: unset;
      }
      .menu li {
         line-height: 2.2rem;
      }
   }
`;