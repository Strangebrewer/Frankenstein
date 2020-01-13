import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoMatch extends Component {
   render() {
      const style = {
         margin: '100px auto',
         textAlign: 'center'
      }
      return (
         <div>
            <p style={style}>You look lost. <Link style={{ color: 'red' }} to="/">Start over?</Link></p>
         </div>
      );
   }
}

export default NoMatch;