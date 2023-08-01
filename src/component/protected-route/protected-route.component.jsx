import React from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({children, currentUser}) => {
    if (currentUser) {
        return <Navigate to='/' />; 
    }
    return children;
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(ProtectedRoute); 
