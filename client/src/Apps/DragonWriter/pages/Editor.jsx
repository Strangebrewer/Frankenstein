import React, { Component } from 'react';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import EditorLogic from '../components/Slate/EditorLogic';
import NewTextEditor from '../components/Slate/NewTextEditor';
import { EditorWrapper, Header } from '../components/Slate/Styles';

class Editor extends Component {
   render() {
   console.log('Editor Component this.props:::', this.props);
      return (
         <Page>
            <Main>
               <Sidebar />

               <Content>
                  <EditorWrapper style={{ maxWidth: '1100px' }}>
                     <Header>
                        <p>New Text</p>
                     </Header>

                     <EditorLogic project={this.props.project}>
                        {provided => (
                           <NewTextEditor {...provided} />
                        )}
                     </EditorLogic>
                  </EditorWrapper>
               </Content>

               <Sidebar />
            </Main>
         </Page>
      )
   }
}

export default Editor;