import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../../styles/Themes';
import { PageContainer, Main, Sidebar, Content } from '../components/Layout';
import EditorLogic from '../components/Slate/EditorLogic';
import NewTextEditor from '../components/Slate/NewTextEditor'; import {
   EditorWrapper,
   EditorStyles,
   Header,
   MetaDataForm
} from '../components/Slate/Styles';

class Editor extends Component {
   render() {
      return (
         <ThemeProvider theme={Themes.dragons}>
            <PageContainer>

               <Main>
                  <Sidebar />
                  <Content>
                     <EditorWrapper style={{ maxWidth: '1100px' }}>
                        <Header>
                           <p>Create New Text</p>
                        </Header>

                        <EditorLogic>
                           {provided => (
                              <NewTextEditor {...provided} />
                           )}
                        </EditorLogic>

                     </EditorWrapper>
                  </Content>
                  <Sidebar />
               </Main>
            </PageContainer>
         </ThemeProvider>
      )
   }
}

export default Editor;