import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';
import { plugins } from './utils/HotKeys';
import { renderMark, renderNode } from './utils/Renderers';
import RenderButtons from './RenderButtons';

const EditorSingleNew = props => {
   return (
      <EditorContainer>
         <RenderButtons
            inline={false}
            state={props.state}
            onClickBlock={props.onClickBlock}
            onClickLink={props.onClickLink}
            onClickMark={props.onClickMark}
            hasBlock={props.hasBlock}
            hasLinks={props.hasLinks}
            hasMark={props.hasMark}
         />
         <EditorStyles>
            <div>
               <Editor
                  autoFocus
                  plugins={plugins}
                  ref={props.thisRef}
                  value={props.state.value}
                  onChange={props.onChange}
                  onDrop={props.onDropOrPaste}
                  onPaste={props.onDropOrPaste}
                  renderMark={renderMark}
                  renderNode={renderNode}
                  schema={props.schema}
                  tabIndex={4}
               />
            </div>
         </EditorStyles>
      </EditorContainer>
   )
}

export default EditorSingleNew;

const EditorContainer = styled.div`
   width: 680px;
   height: 400px;
   margin: 50px auto;
`;

const EditorStyles = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid black;
   overflow-y: scroll;
   background: tan;
   div {
      width: 580px;
      height: 800px;
      margin: 25px auto;
      box-shadow: 4px 4px 3px #333;
      background: white;
   }
`;