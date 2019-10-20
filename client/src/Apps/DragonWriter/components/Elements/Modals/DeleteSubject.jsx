import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../Elements/Forms/FormElements';
import Spinner from '../../Elements/Spinner';

import { deleteSubject } from '../../../../../redux/actions/dragon_writer/subject_actions';

const DeleteSubjectModal = props => {

   const [loading, setLoading] = useState(false);

   const deleteSubject = async () => {
      setLoading(true);
      await props.deleteSubject(props.subject_id);
   }

   return (
      <Fragment>
         <h3>Are you sure you want to delete this column?</h3>
         <p>(and all associated texts)</p>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <Button disabled={loading} onClick={deleteSubject}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Delete'}
            </Button>
            <Button disabled={loading} onClick={props.closeModal}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Cancel'}
            </Button>
         </div>
      </Fragment>
   );

}

export default connect(() => ({}), { deleteSubject })(DeleteSubjectModal);