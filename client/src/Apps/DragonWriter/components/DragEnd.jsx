import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { saveProjectOrder } from '../../../redux/actions/dragon_writer/project_actions';
import { saveSubjectOrder } from '../../../redux/actions/dragon_writer/subject_actions';

class DragEnd extends PureComponent {
   state = {};

   onDragEnd = result => {
      console.log('Drag end!');
      console.log('result:::', result);
      
      const { destination, source, draggableId, type } = result;
      if (!destination) return;
      
      if (destination.droppableId === source.droppableId
         && destination.index === source.index) {
         return;
      }
      
      if (type === 'project') {
         const new_project_order = Array.from(this.props.projects.project_order);
         new_project_order.splice(source.index, 1);
         new_project_order.splice(destination.index, 0, draggableId);
         this.props.saveProjectOrder(new_project_order);
         return;
      }

      if (type === 'subject') {
         const project = this.props.projects[source.droppableId];
         const new_subject_order = Array.from(project.subject_order);
         new_subject_order.splice(source.index, 1);
         new_subject_order.splice(destination.index, 0, draggableId);
         this.props.saveSubjectOrder(project._id, new_subject_order);
         return;
      }
   }

   render() {
      console.log('DRAG END RENDERING!');
      return (
         <DragDropContext onDragEnd={this.onDragEnd}>
            {this.props.children({
               // executeDragEndStateChanges: '',
               // executeDragEndToggles: '',
               // state: this.state
            })}
         </DragDropContext>
      )
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      subjects: state.subjects
   }
}

function mapDispatchToProps(dispatch) {
   return {
      saveProjectOrder: order => {
         dispatch(saveProjectOrder(order));
      },
      saveSubjectOrder: (project_id, order) => {
         dispatch(saveSubjectOrder(project_id, order));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragEnd);