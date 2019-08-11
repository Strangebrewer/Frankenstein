import React from "react";

const AddPropsToRoute = (Component, passedProps) => {
   return (
      class Route extends React.Component {
         render() {
            let props = Object.assign({}, this.props, passedProps);
            return <Component {...props} />;
         }
      }
   );
}

export default AddPropsToRoute;