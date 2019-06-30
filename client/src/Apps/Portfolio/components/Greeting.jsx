import React from 'react';
import styled from 'styled-components';

const Greeting = () => (
   <Container id="about" className="about-me-wrap">
      <h2>Hello</h2>
      <p>
         Thanks for checking out my website. I originally built it as a portfolio to help me land a web developer job. Now, it's just for fun and learning. And, since the creative impulse usually brings with it a desire to show off, I guess that's what it's for also.
      </p>
   </Container>
);

export default Greeting;

const Container = styled.section`
   line-height: 1.5;
   p {
      margin-bottom: 15px;
   }
   h2 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      font-family: 'Russo One', 'Times New Roman', Times, serif;
      font-size: 3rem;
      font-weight: bold;
      color: var(--main);
   }
   @media (min-width: 650px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 270px;
      h2 {
         font-size: 6rem;
      }
   }
`;