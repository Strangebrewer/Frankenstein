import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';
import { plugins } from './utils/HotKeys';
import { renderMark, renderNode } from './utils/Renderers';
import EditorButtons from './EditorButtons';

const NewTextEditor = props => {

   const [saveType, setSaveType] = useState('create');

   const save = () => {
      if (saveType === 'create') {
         props.createText();
         setSaveType('update');
      } else {
         props.updateText();
      }
   }

   const saveAndClose = () => {
      if (saveType === 'create') {
         props.createText();
         setSaveType('update');
      } else {
         props.updateText();
      }
   }

   const close = () => {
      // passed in logic to close the editor and return to whatever page.
   }

   return (
      <EditorContainer>
         <EditorButtons
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
                     style={{ height: '100%', width: '100%' }} // this makes the clickable space fill the container
                  />
               </div>
            </div>
         </EditorStyles>

         <SaveButtons>
            <button onClick={save}>Save</button>
            <button onClick={saveAndClose}>Save &amp; Close</button>
            <button onClick={close}>Cancel</button>
         </SaveButtons>
      </EditorContainer>
   )
}

export default NewTextEditor;

const EditorContainer = styled.div`
   width: 680px;
   height: 400px;
   margin: 50px;
`;

const EditorStyles = styled.div`
   width: 100%;
   height: 100%;
   border: 1px solid black;
   overflow-y: scroll;
   background: tan;
   > div {
      width: 580px;
      height: 800px;
      margin: 25px auto;
      box-shadow: 6px 6px 3px #333;
      background: white;
      display: flex;
      > div {
         width: calc(100% - 150px);
         height: calc(100% - 150px);
         margin: auto;
      }
   }
`;

const SaveButtons = styled.div`
   margin: 5px 0;
   button {
      border-radius: 5px;
      background: lightgreen;
      border: 1px solid green;
      padding: 4px 10px;
      margin-right: 5px;
   }
`;