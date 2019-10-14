import React from 'react';
import styled from 'styled-components';

const Hello = () => (
   <Container id="hello">
      <h2>Hello</h2>
      <p>
         Thanks for checking out my website. I originally built it as a portfolio to help me find a web developer job. Now, it's just for personal interests and learning. And since the creative impulse usually brings with it a desire to show off, I guess showing off is what it's for, too.
      </p>
   </Container>
);

export default Hello;

const Container = styled.section`
   p {
      margin-bottom: 15px;
      line-height: 1.5;
   }
   h2 {
      font-family: 'Russo One', 'Times New Roman', Times, serif;
      font-size: 4rem;
      line-height: 1.5;
      font-weight: bold;
      color: var(--main);
      margin-top: 100px;
   }
   @media (min-width: 400px) {
      h2 {
         font-size: 6rem;
         line-height: 1.5;
      }
   }
   @media (min-width: 650px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 270px;
      h2 {
         font-size: 8rem;
         margin-top: unset;
      }
      p {
         font-size: 1.8rem;
      }
   }
`;