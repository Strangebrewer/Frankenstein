import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Label, TextArea } from './FormElements';
import Spinner from '../Spinner';
import { createNewSubject } from '../../../../../redux/actions/dragon_writer/subject_actions';

const NewSubjectForm = props => {

   const [title, setTitle] = useState('');
   const [subtitle, setSubtitle] = useState('');
   const [saving, setSaving] = useState(false);

   function handleInputChange(event) {
      const { name, value } = event.target;
      if (name === 'subtitle') setSubtitle(value);
      if (name === 'title') setTitle(value);
   }

   const createSubject = async (e) => {
      e.preventDefault();
      setSaving(true);
      await props.createNewSubject({ title, subtitle, projectId: props.project_id });
      props.closeModal();
      setSaving(false);
   }

   return (
      <form style={{ margin: 'auto', justifyContent: 'center' }}>
         <h2>New Subject</h2>
         <Label>Subject Title:</Label>
         <Input
            name="title"
            value={title}
            type="text"
            maxLength="40"
            onChange={handleInputChange}
            placeholder="40-character limit"
         />
         <Label>Subject subtitle:</Label>
         <TextArea
            name="subtitle"
            value={subtitle}
            type="text"
            maxLength="140"
            onChange={handleInputChange}
            placeholder="140-character limit"
         />
         <Button disabled={saving} width="80px" onClick={e => createSubject(e)}>
            {saving ? <Spinner size="20px" margin="auto" /> : 'Submit'}
         </Button>
         <Button disabled={saving} width="80px" style={{ margin: "10px auto 0 auto" }} onClick={(e) => props.closeModal(e)}>
            {saving ? <Spinner size="20px" margin="auto" /> : 'Cancel'}
         </Button>
      </form>
   )
}

const mapDispatchToProps = {
   createNewSubject
}

export default connect(() => ({ }), mapDispatchToProps)(NewSubjectForm);