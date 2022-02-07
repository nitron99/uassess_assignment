import React from 'react'
import {Route, Navigate} from 'react-router-dom';

// function ProtectedRoute({authy, isAuth  , component: Component, ...rest}) {
//     const logout = () => {
//         if(authy)
//         {
//            authy(true)
//         }else{
//             authy(false)
//         }
//     }
    
//     return (
//        <Route {...rest} 
//             render={(props) => {
//                 if(isAuth)
//                 {
//                     return (<Component authy={logout}/> )
//                 }else{
//                     return(
//                         <Navigate to={{pathname: '/login' , state: {from: props.location}}} />
//                     )
                    
//                 }
//             }} />
//     )
// }

const ProtectedRoute = ({ children , auth}) => {
    const authed = auth;
    
    return authed ? children : <Navigate to="/login" />;
  }

export default ProtectedRoute;
