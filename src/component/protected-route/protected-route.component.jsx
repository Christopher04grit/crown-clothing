import React from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';

const ProtectedRoute = ({children, currentUser}) => {
    if (currentUser) {
        return <Navigate to='/' />; 
    }
    return children;
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  export default connect(mapStateToProps)(ProtectedRoute); 
