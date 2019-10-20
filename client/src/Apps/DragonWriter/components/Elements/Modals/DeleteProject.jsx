import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../Elements/Forms/FormElements';
import Spinner from '../../Elements/Spinner';

import { deleteProject } from '../../../../../redux/actions/dragon_writer/project_actions';

const DeleteProjectModal = props => {

   const [loading, setLoading] = useState(false);

   const deleteProject = async () => {
      setLoading(true);
      await props.deleteProject(props.project_id);
      setLoading(false);
      props.closeModal();
   }

   return (
      <Fragment>
         <h3>Are you sure you want to delete this entire project?</h3>
         <p>(and all associated texts and topics)</p>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <Button disabled={loading} onClick={deleteProject}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Delete'}
            </Button>
            <Button disabled={loading} onClick={props.closeModal}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Cancel'}
            </Button>
         </div>
      </Fragment>
   );

}

export default connect(() => ({}), { deleteProject })(DeleteProjectModal);