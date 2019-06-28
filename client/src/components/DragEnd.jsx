import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class DragEnd extends Component {
   state = {};

   onDragEnd = result => {
      console.log('Drag end!');
      console.log('result:::', result);
   }

   render() {
      return (
         <DragDropContext onDragEnd={this.onDragEnd}>
            {this.props.children({
               executeDragEndStateChanges: '',
               executeDragEndToggles: '',
               state: this.state
            })}
         </DragDropContext>
      )
   }
}

export default DragEnd;