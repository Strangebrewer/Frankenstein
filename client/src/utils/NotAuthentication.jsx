import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
   class NotAuthentication extends Component {
      componentWillMount() {
         if (this.props.authenticated) {
            this.props.history.replace('/');
         }
      }

      componentWillUpdate(nextProps) {
         if (nextProps.authenticated) {
            this.props.history.replace('/');
         }
      }

      PropTypes = {
         router: PropTypes.object,
      }
      render() {
         console.log('NotAuth props:::', this.props);
         return (
            <ComposedComponent {...this.props} />
         );
      }
   }

   function mapStateToProps(state) {
      return { authenticated: state.auth.authenticated };
   }

   return connect(mapStateToProps)(NotAuthentication);
}