import React from 'react'
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ children , auth}) => {
    const authed = auth;
    
    return authed ? children : <Navigate to="/login" />;
  }

export default ProtectedRoute;
