import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { saveProjectOrder } from '../../../redux/actions/dragon_writer/project_actions';
import { saveSubjectOrder } from '../../../redux/actions/dragon_writer/subject_actions';
import { saveOneTextOrder, saveTwoTextOrders } from '../../../redux/actions/dragon_writer/text_actions';
import { addToCalcDisplay } from '../../../redux/actions/misc_actions';

class DragEnd extends PureComponent {
   state = {};

   onDragStart = (stuff, things) => {
      console.log('stuff:::', stuff);
      console.log('things:::', things);
   }

   onDragEnd = result => {
      const { destination, source, draggableId, type } = result;

      if (!destination) return;

      if (destination.droppableId === source.droppableId
         && destination.index === source.index) {
         return;
      }

      switch (type) {
         case 'project':
            const new_project_order = Array.from(this.props.projects.project_order);
            new_project_order.splice(source.index, 1);
            new_project_order.splice(destination.index, 0, draggableId);
            this.props.saveProjectOrder(new_project_order);
            return;

         case 'subject':
            const project = this.props.projects[source.droppableId];
            const new_subject_order = Array.from(project.subject_order);
            new_subject_order.splice(source.index, 1);
            new_subject_order.splice(destination.index, 0, draggableId);
            this.props.saveSubjectOrder(project._id, new_subject_order);
            return;

         case 'calc':
            this.props.addToCalcDisplay(draggableId);
            return;

         default:
            const start = this.props.subjects[source.droppableId];
            const finish = this.props.subjects[destination.droppableId];

            if (start === finish) {
               const text_order = Array.from(start.text_order);
               text_order.splice(source.index, 1);
               text_order.splice(destination.index, 0, draggableId);
               this.props.saveOneTextOrder(start._id, text_order);
               return;
            }

            const start_text_order = Array.from(start.text_order);
            start_text_order.splice(source.index, 1);

            const finish_text_order = Array.from(finish.text_order);
            finish_text_order.splice(destination.index, 0, draggableId);

            const update_object = {
               text_id: draggableId,
               start_text_order,
               finish_text_order,
               start_id: start._id,
               finish_id: finish._id
            }

            this.props.saveTwoTextOrders(update_object);
      }
   }

   render() {
      return (
         <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
            {/* {this.props.children({
               executeDragEndStateChanges: '',
               executeDragEndToggles: '',
               state: this.state
            })} */}
            {this.props.children}
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
      saveProjectOrder: project_order => {
         dispatch(saveProjectOrder(project_order));
      },
      saveSubjectOrder: (project_id, subject_order) => {
         dispatch(saveSubjectOrder(project_id, subject_order));
      },
      saveOneTextOrder: (subject_id, text_order) => {
         dispatch(saveOneTextOrder(subject_id, text_order));
      },
      saveTwoTextOrders: update => {
         dispatch(saveTwoTextOrders(update));
      },
      addToCalcDisplay: button => {
         dispatch(addToCalcDisplay(button));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragEnd);