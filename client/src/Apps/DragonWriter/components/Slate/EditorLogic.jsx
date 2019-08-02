import { Component } from 'react';
import { connect } from 'react-redux';
import { Block, Selection, Value } from "slate";
import { getEventRange, getEventTransfer } from "slate-react";
import imageExtensions from 'image-extensions';
import isUrl from "is-url";
import initialValue from "./utils/value.json";
import { saveNewText } from '../../../../redux/actions/dragon_writer/text_actions';

const DEFAULT_NODE = 'paragraph';

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

class EditorLogic extends Component {
   state = {
      _id: this.props._id || '',
      value: Value.fromJSON(this.props.text ? this.props.text : initialValue),
      title: this.props.title || '',
      subtitle: this.props.subtitle || '',
      subjects: this.props.project.subjects.map((subject_id, index) => this.props.subjects[subject_id]),
      subject: this.props.subject || ''
   };

   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   onChange = ({ value }) => {
      this.setState({ value });
   };

   ref = editor => { this.editor = editor };

   isImage = url => !!imageExtensions.some(ext => url.includes(`.${ext}`));

   insertImage = (editor, src, target) => {
      if (target) editor.select(target);
      editor.insertBlock({
         type: 'image',
         data: { src }
      });
   };

   wrapLink = (editor, href) => {
      editor.wrapInline({
         type: 'link',
         data: { href }
      });
      editor.moveToEnd();
   }

   unwrapLink = editor => {
      editor.unwrapInline('link');
   }

   hasLinks = () => {
      const { value } = this.state;
      return value.inlines.some(inline => inline.type === 'link');
   }

   onClickLink = event => {
      event.preventDefault();
      const { editor } = this;
      const { value } = editor;
      const hasLinks = this.hasLinks();

      if (hasLinks) {
         editor.command(this.unwrapLink)
      } else if (value.selection.isExpanded) {
         const href = window.prompt('Enter the URL of the link:');
         if (href === null) return;

         const text = window.prompt('Enter the text for hte link:');
         if (text === null) return;

         editor
            .insertText(text)
            .moveFocusBackward(text.length)
            .command(this.wrapLink, href)
      }
   }

   onDropOrPaste = (event, editor, next) => {
      const target = getEventRange(event, editor);
      if (!target && event.type === 'drop') return next();

      const transfer = getEventTransfer(event);
      const { type, text, files } = transfer;

      if (type === 'files') {
         for (const file of files) {
            const reader = new FileReader();
            const [mime] = file.type.split('/');
            if (mime !== 'image') continue;

            reader.addEventListener('load', () => {
               editor.command(this.insertImage, reader.result, target);
            });

            reader.readAsDataURL(file);
         }
         return;
      }

      if (type === 'text' || type === 'html') {
         if (!isUrl(text) && !this.isImage(text)) return next();
         if (this.isImage(text) || text.includes('.mp4')) {
            editor.command(this.insertImage, text, target);
            return;
         }
         if (isUrl(text)) {
            if (this.hasLinks())
               editor.command(this.unwrapLink);
            editor.command(this.wrapLink, text)
         }
         return;
      }

      next();
   }

   hasMark = type => {
      const { value } = this.state;
      return value.activeMarks.some(mark => mark.type === type);
   };

   onClickMark = (type) => {
      this.editor.toggleMark(type);
   };

   hasBlock = type => {
      const { value } = this.state;
      return value.blocks.some(node => node.type === type);
   };

   onClickBlock = (type) => {
      const { editor } = this;
      const { value } = editor;
      const { document } = value;

      // Handle everything but list buttons.
      if (type !== 'bulleted-list' && type !== 'numbered-list') {
         const isActive = this.hasBlock(type);
         const isList = this.hasBlock('list-item');
         const hasImage = this.hasBlock('image-left') || this.hasBlock('image-right');

         if (isList)
            editor
               .setBlocks(isActive ? DEFAULT_NODE : type)
               .unwrapBlock('bulleted-list')
               .unwrapBlock('numbered-list');

         else if (hasImage)
            editor.setBlocks(isActive ? DEFAULT_NODE : type);

         else if (type === 'image-left' || type === 'image-right') {
            let location;
            if (type === 'image-left') location = 'left';
            if (type === 'image-right') location = 'right';
            const src = window.prompt('Enter the URL of the image:');
            editor
               .wrapBlock(isActive ? DEFAULT_NODE : { type, data: { src, location } })
            // .unwrapBlock(DEFAULT_NODE)
         }

         else {
            editor.setBlocks(isActive ? DEFAULT_NODE : type);
         }

      } else {
         // Handle the extra wrapping required for list buttons.
         const isList = this.hasBlock('list-item');
         const isType = value.blocks.some(block => {
            return !!document.getClosest(
               block.key, parent => parent.type === type
            );
         });

         if (isList && isType)
            editor
               .setBlocks(DEFAULT_NODE)
               .unwrapBlock('bulleted-list')
               .unwrapBlock('numbered-list');
         else if (isList)
            editor
               .unwrapBlock(
                  type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
               )
               .wrapBlock(type);
         else
            editor.setBlocks('list-item').wrapBlock(type);
      }
   };

   updateText = async () => {
      const text_object = {
         _id: this.state._id,
         subject_id: this.state.subject,
         title: this.state.title,
         subtitle: this.state.subtitle,
         text: JSON.stringify(this.state.value.toJSON())
      }
      console.log('update text object:::', text_object);
   };

   createText = async () => {
      const text_object = {
         projectId: this.props.project._id,
         subjectId: this.state.subject,
         title: this.state.title,
         subtitle: this.state.subtitle,
         text: JSON.stringify(this.state.value.toJSON())
      }
      console.log('this.props.project:::', this.props.project);
      console.log('create text object:::', text_object);
      // call redux action, have it return the new text, and then setState with the _id of the new text
      // it shouldn't rerender anything by doing that, so everything should still be in the fields and editor
      // thus, you can keep on typing and saving for as long as you want
      const text = await this.props.saveNewText(text_object);
      console.log('text:::', text);
      this.setState({ _id: text._id });
   };

   render() {
      return (
         this.props.children({
            createText: this.createText,
            handleInputChange: this.handleInputChange,
            hasBlock: this.hasBlock,
            hasLinks: this.hasLinks,
            hasMark: this.hasMark,
            onChange: this.onChange,
            onClickBlock: this.onClickBlock,
            onClickLink: this.onClickLink,
            onClickMark: this.onClickMark,
            onDropOrPaste: this.onDropOrPaste,
            thisRef: this.ref,
            schema: schema,
            state: this.state,
            updateText: this.updateText,
         })
      )
   };
}

function mapStateToProps(state) {
   return {
      subjects: state.subjects
   }
}

const mapDispatchToProps = {
   saveNewText
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorLogic);