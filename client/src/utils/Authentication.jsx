import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent, passedProps) {
   class Authentication extends Component {

      componentWillMount() {
         const { required } = passedProps;
         const { authenticated } = this.props;
         if (required && !authenticated) this.props.history.push('/dragon-writer');
         if (!required && authenticated) this.props.history.push('/');
      }

      componentWillUpdate(nextProps) {
         const { required } = passedProps;
         const { authenticated } = nextProps;
         if (required && !authenticated) this.props.history.push('/dragon-writer');
         if (!required && authenticated) this.props.history.push('/');
      }

      render() {
         console.log('this.props.authenticated:::', this.props.authenticated);
         return <WrappedComponent {...this.props} {...passedProps} />;
      }
   }

   function mapStateToProps(state) {
      return { authenticated: state.auth.authenticated };
   }

   return connect(mapStateToProps)(Authentication);
}