import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
   <Container>
      <h3>About Me</h3>
      <p>
         I completed a six-month web development bootcamp at the University of Utah in July 2018. Along the way, I discovered that I really enjoy coding. After graduation, I spent 8 months building web apps, learning new things, and refining my skills before finally being picked up as a junior dev at a local company. If you're not a dev and don't care to read about my tech stack, you might want to scroll down where you can try out some of the apps I've built--this part will still be here when you get back.
         </p>
      <p>
         I'm primarily a <span className="skill-text">MERN</span> stack developer, but I have a  few other tricks up my sleeve as well. I can work with <span className="skill-text">relational databases</span> (<span className="skill-text">Firebase</span>, too), <span className="skill-text">Bootstrap</span> or <span className="skill-text">Materialize</span> (I prefer  plain <span className="skill-text">CSS</span>), <span className="skill-text">jQuery</span> if you're  using it, <span className="skill-text">React</span> if you're not (or just JS if you prefer), <span className="skill-text">REST APIs</span> &amp; <span className="skill-text">JSON</span>, all organized  in an MVC architecture. And as mentioned above, I've recently learned a lot about SVG.
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
   .skill-text {
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