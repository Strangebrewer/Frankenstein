import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../../../styles/Themes';

export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   width: 100vw;
   color: #fff;
   background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
     linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
     url('/static/assets/images/background-two.jpg');
   background-repeat: repeat;
   background-attachment: fixed;
   font-family: ${props => props.theme.font_opensans};
`;

const Page = props => {
   return (
      <ThemeProvider theme={Themes.dragons}>
         <PageContainer>
            {props.children}
         </PageContainer>
      </ThemeProvider>
   )
}

export default Page;