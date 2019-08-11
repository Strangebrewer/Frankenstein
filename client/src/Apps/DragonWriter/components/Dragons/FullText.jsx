import React, { Component, Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Editor } from "slate-react";
import { Block, Selection, Value } from "slate";
import styled from 'styled-components';
import EditorButtons from "../Slate/EditorButtons";
import { plugins } from "../Slate/utils/Plugins";
import { renderMark, renderNode } from "../Slate/utils/Renderers";
import initialValue from "../Slate/utils/value.json";
import { getInitialText } from "../Slate/utils/initial_text.js";

const FullText = props => {

   const schema = {
      document: {
         last: { type: 'paragraph' },
         normalize: (editor, { code, node, child }) => {
            switch (code) {
               case 'last_child_type_invalid': {
                  const paragraph = Block.create('paragraph');
                  return editor.insertNodeByKey(node.key, node.nodes.size, paragraph);
               }
            }
         },
      },
      blocks: {
         image: {
            isVoid: true,
         }
      }
   }

   const { index, text } = props;
   const thisValue = text.text ? JSON.parse(text.text) : initialValue;

   return (
      <Draggable draggableId={text._id} index={index}>
         {(provided, snapshot) => (
            <Container
               {...provided.draggableProps}
               ref={provided.innerRef}
               isDragging={snapshot.isDragging}
               {...provided.dragHandleProps}
            >
               <MetaDataContainer>
                  <h3>{text.title}</h3>
                  <p>{text.subtitle}</p>
               </MetaDataContainer>

               <EditorStyles
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
               >
                  <Editor
                     key={text._id}
                     index={index}
                     readOnly
                     plugins={plugins}
                     schema={schema}
                     value={Value.fromJSON(thisValue)}
                  />
               </EditorStyles>
            </Container>
         )}
      </Draggable>
   )
}

export default FullText;

const Container = styled.div`
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   display: flex;
   min-height: 140px;
   min-width: 600px;
   outline: transparent;
   position: relative;
   transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
`;

const MetaDataContainer = styled.div`
   max-width: 240px;
   min-width: 240px;
   padding: 10px 15px 0 30px;
   text-align: right;
   h3 {
      font-size: 1.9rem;
      font-weight: bold;
      line-height: 1;
      margin: 0;
   }
   p {
      font-size: 1.3rem;
      line-height: 1;
      margin: 0;
      padding: 4px 0 6px 0;
   }
`;

const EditorStyles = styled.div`
   background: ${props => props.isDragging ? '#ffffff17' : "#000000aa"};
   border: none;
   box-shadow: none;
   color: ${props => props.theme.editorColor};
   font-family: Arial, Helvetica, sans-serif;
   padding: 0 35px 0 40px;
   position: relative;
   transition: background-color .2s ease-in-out, height .4s ease-in-out;
   width: 100%;
   p {
      font-size: 2rem;
      margin: 0;
      text-indent: 25px;
   }
   ul {
      margin-top: 0;
      padding-top: 0;
   }
`;