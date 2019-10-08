import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
   <Container id="about">
      <h3>About Me</h3>
      {/* <h3>Epilogue</h3> */}
      {/* <p>Dear Visitor,</p> */}
      <p>
         As a developer, I like puzzling my way through a bugfix or planning out how to build something new. The discovery process is my favorite part, I think. I'm curious about everything. The list of things I'd like to learn gets longer all the time.
      </p>
      <p>
         I completed a six-month web development bootcamp at the University of Utah in July 2018 and then spent the next 8 months building web apps and building up my skills before being hired by by a local digital signage company. I've been lucky enough to land a job using exactly the skills I learned in bootcamp, and then some.
      </p>
      <p>
         I'm primarily a MERN stack developer, but in the last three months at my new job, I've learned to use <span>Redux</span>, <span>Vue</span> and <span>Vuex</span> along with more in-depth parts of many other things, like Git, Linux, testing, agile, debugging, and better research habits. It's great to work in a team of smart, curious, and skilled coders. (Buncha NERDBAGS!)
      </p>
      <p>
         The rest of my experience includes <span>MongoDB</span>, Mongoose, Sequelize, <span>MySQL</span>, Materialize, <span>HTML</span> &amp; <span>CSS</span>, Bootstrap, jQuery, <span>React</span>, Swagger, <span>Node</span>, and <span>JavaScript</span>(ES6+) .
      </p>
      <p>
         Thanks for reading!
      </p>
   </Container>
);

export default AboutMe;

const Container = styled.section`
   p {
      line-height: 1.5;
      margin-bottom: 15px;
      /* font-size: 1.8rem; */
   }
   h3 {
      color: var(--other);
      font-family: 'Russo One', 'Times New Roman', Times, serif;
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 20px;
   }
   span {
      color: var(--main);
      font-weight: bold;
   }
   @media (min-width: 650px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 270px;
      h3 {
         font-size: 5rem;
      }
      p {
         font-size: 1.8rem;
      }
   }
`;