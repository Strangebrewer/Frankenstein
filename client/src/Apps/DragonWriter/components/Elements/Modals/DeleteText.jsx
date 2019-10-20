import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../Elements/Forms/FormElements';
import Spinner from '../../Elements/Spinner';

import { deleteText } from '../../../../../redux/actions/dragon_writer/text_actions';

const DeleteTextModal = props => {

   const [loading, setLoading] = useState(false);

   const deleteText = async () => {
      setLoading(true);
      await props.deleteText(props.text_id);

      // if I change the logic so it just alters the redux store instead of re-downloading everything from the db
      // I'll probably still have to setLoading and close the modal because it won't be re-rendering everything
      // we'll see...

      setLoading(false);
      props.closeModal();
   }

   return (
      <Fragment>
         <h3>Are you sure you want to delete this text?</h3>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <Button disabled={loading} onClick={deleteText}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Delete'}
            </Button>
            <Button disabled={loading} onClick={props.closeModal}>
               {loading ? <Spinner size="20px" margin="auto" /> : 'Cancel'}
            </Button>
         </div>
      </Fragment>
   );

}

export default connect(() => ({}), { deleteText })(DeleteTextModal);