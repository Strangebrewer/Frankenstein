import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
   <Container id="about">
      <h3>About Me</h3>
      <p>
         I completed a six-month web development bootcamp at the University of Utah in July 2018 and then spent the next 8 months building web apps, learning new things, and refining my skills before being hired by by a local digital signage company. I've been lucky enough to land a job using exactly the skills I learned in bootcamp, and then some.
      </p>
      <p>
         I'm primarily a <span>MERN</span> stack developer, but in the last three months at my new job, I've learned to use <span>Redux</span>, <span>Vue.js</span> and <span>Vuex</span> along with more in-depth parts of many other things, like Git, Linux, testing, agile, debugging, and better research habits. It's really awesome to work in a team of super smart, curious, and skilled coders with a big fat silly streak (buncha fuggin' NERDBAGS!)
      </p>
      <p>
         The rest of my skills include <span>MongoDB</span>, Mongoose, Sequelize, MySQL, Bootstrap, Materialize, <span>HTML &amp; CSS</span>, jQuery, Swagger, <span>Node</span>, and Vanilla (and <span>ES6+</span>) JavaScript.
      </p>
   </Container>
);

export default AboutMe;

const Container = styled.section`
   line-height: 1.5;
   p {
      margin-bottom: 15px;
   }
   h3 {
      font-family: 'Russo One', 'Times New Roman', Times, serif;
      font-size: 3rem;
      font-weight: bold;
      color: var(--other);
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
         font-size: 4rem;
      }
   }
`;