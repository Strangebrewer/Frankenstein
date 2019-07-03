import React from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import { plugins } from './utils/HotKeys';
import { renderMark, renderNode } from './utils/Renderers';
import InitialValue from './utils/value.json'

const TextEditor = props => {
   return (
      <>
         <Editor
            plugins={plugins}
            // ref={props.thisRef}
            value={Value.fromJSON(InitialValue)}
            // onChange={props.onChange}
            // onDrop={props.onDropOrPaste}
            // onPaste={props.onDropOrPaste}
            renderMark={renderMark}
            renderNode={renderNode}
         // schema={props.schema}
         />
      </>
   )
}

export default TextEditor;