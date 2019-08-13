import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoMatch extends Component {
   render() {
      return (
         <div>
            <h3>WTF, H0nky!</h3>
            <p>Perhaps you should <Link style={{ color: 'red' }} to="/dragon-writer">login</Link> before you try to access private shizzle, dawg.</p>
         </div>
      );
   }
}

export default NoMatch;