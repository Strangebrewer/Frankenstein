import React from 'react';
import { Link } from "react-router-dom"; // will need this in the future when the apps are within this app rather than on Heroku
import styled from 'styled-components';
import { projects } from "../utils/Projects";
import { Helpers } from "../utils/Helpers";

const Projects = () => (
   <Container id="projects">
      <h3>Projects</h3>
      <p>
         These are all fully functional, and you can create a login and use them if you'd like, but none are supported for serious use.
      </p>
      <p>
         (if you're actually interested in using one for real, let me know - it might be fun to set up.)
      </p>

      {projects
         .filter(project => project.identifier !== "starwars")
         .map((project, i) => (
            <Project key={`${project.identifier}-${i}`}>
               <h1>{project.title}</h1>
               {project.linkto.includes('http')
                  ? (
                     <a href={project.linkto} target="_blank" rel="noopener noreferrer">
                        <img src={project.background} alt="project website" />
                     </a>
                  ) : (
                     <Link to={project.linkto}>
                        <img src={project.background} alt="project website" />
                     </Link>
                  )}

               <h2>Made with {project.lineOne} {project.lineTwo}</h2>
               {Helpers.projectModals(project.identifier)}
            </Project>
         ))
      }
   </Container>
);

export default Projects;

const Container = styled.section`
   padding-top: 100px;
   h3 {
      color: var(--main);
      font-family: 'Russo One', 'Times New Roman', Times, serif;
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.5;
   }
   p {
      margin-bottom: 12px;
      line-height: 1.5;
   }
   > p:last-of-type {
      font-size: 1.1rem;
      padding: 0 30px 0 0;
      text-align: center;
   }
   @media (min-width: 650px) {
      min-height: 100vh;
      padding-top: 50px;
      margin-left: 270px;
      margin-top: unset;
      h3 {
         font-size: 5rem;
      }
      p {
         font-size: 1.8rem;
      }
      > p:last-of-type {
         font-size: 1.3rem;
         padding: 0 30px 0 0;
         text-align: center;
      }
   }
`;

const Project = styled.div`
   margin: 80px auto;
   h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--other);
   }
   h2 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: var(--main);
   }
   p, li {
      font-size: 1.2rem;
   }
   ul {
      margin: 0 0 12px 20px;
      line-height: 1.3;
   }
   a {
      color: var(--main);
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      display: block;
      text-align: center;
      margin-right: 30px;
      margin-bottom: 7px;
   }
   a:hover {
      color: var(--other);
      text-decoration: underline;
   }
   img {
      border: 2px solid var(--main);
      margin: 5px 0;
      width: 100%;
   }
   @media (min-width: 400px) {
      h1 {
         font-size: 2.2rem;
      }
      h2 {
         font-size: 1.8rem;
      }
   }
   @media (min-width: 650px) {
      p, li, a {
         font-size: 1.8rem;
      }
      h1 {
         font-size: 2.8rem;
         margin-bottom: 5px;
      }
   }
`;