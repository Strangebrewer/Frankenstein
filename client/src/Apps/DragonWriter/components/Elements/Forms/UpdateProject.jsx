import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Label, TextArea } from './FormElements';
import Spinner from '../Spinner';
import { updateProject } from '../../../../../redux/actions/dragon_writer/project_actions';

const UpdateProjectForm = props => {

   const [link, setLink] = useState(props.project.link);
   const [subtitle, setSubtitle] = useState(props.project.subtitle);
   const [title, setTitle] = useState(props.project.title);
   const [saving, setSaving] = useState(false);

   function handleInputChange(event) {
      const { name, value } = event.target;
      if (name === 'link') setLink(value);
      if (name === 'subtitle') setSubtitle(value);
      if (name === 'title') setTitle(value);
   }

   const updateProject = async (e) => {
      e.preventDefault();
      setSaving(true)
      await props.updateProject(props.project._id, { title, subtitle, link });
      props.closeModal();
   }

   return (
      <form style={{ margin: 'auto', justifyContent: 'center' }}>
         <h2>Edit Project Info</h2>
         <Label>Project Title:</Label>
         <Input
            name="title"
            value={title}
            type="text"
            maxLength="40"
            onChange={handleInputChange}
            placeholder="40-character limit"
         />
         <Label>Project subtitle:</Label>
         <TextArea
            name="subtitle"
            value={subtitle}
            type="text"
            maxLength="140"
            onChange={handleInputChange}
            placeholder="140-character limit"
         />
         <Label>Project Keyword:</Label>
         <Input
            name="link"
            value={link}
            type="text"
            maxLength="12"
            onChange={handleInputChange}
            placeholder="12-character limit"
         />
         <Button disabled={saving} width="80px" onClick={e => updateProject(e)}>
            {saving ? <Spinner size="20px" margin="auto" /> : 'Submit'}
         </Button>
         <Button disabled={saving} width="80px" style={{ margin: "10px auto 0 auto" }} onClick={(e) => props.closeModal(e)}>
            {saving ? <Spinner size="20px" margin="auto" /> : 'Cancel'}
         </Button>
      </form>
   )
}

const mapDispatchToProps = {
   updateProject
}

export default connect(() => ({ }), mapDispatchToProps)(UpdateProjectForm);