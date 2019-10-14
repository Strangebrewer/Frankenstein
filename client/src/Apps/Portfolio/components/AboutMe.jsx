import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
   <Container id="about">
      <h3>About Me</h3>
      <p>
         As a developer, I like puzzling my way through a bugfix or planning out how to build something new. The discovery process is my favorite part, I think. I'm curious about everything. The list of things I'd like to learn gets longer all the time.
      </p>
      <p>
         I completed a six-month web development bootcamp at the University of Utah in July 2018 and then spent the next 8 months building web apps and building up my skills before being hired by by a local digital signage company.
      </p>
      <p>
         In the last several months at my job I've learned to use <span>Redux</span>, <span>Vue</span>, <span>Vuex</span> and <span>Docker</span>, along with more in-depth parts of many other things, like Git, Linux, testing, agile, debugging, and better research habits. It's great to work in a team of smart, curious, and skilled coders. (Buncha NERDBAGS!)
      </p>
      <p>
         The rest of my repertoire includes <span>React</span>, <span>Node</span>, <span>Express</span> ,<span>MongoDB</span>, Mongoose, <span>MySQL</span>, Sequelize, Materialize, <span>HTML</span> &amp; <span>CSS</span>, Bootstrap, jQuery, Swagger, and <span>JavaScript</span>(ES6+) .
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