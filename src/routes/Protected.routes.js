import React  from 'react'
import {Redirect, Route} from 'react-router-dom';

export default function ProtectedRoute({auth,component:Component,...rest}) {
  return (
    <Route
     {...rest} 
     render = {
        ()=> (auth? <Component/> : <Redirect to="/authentication"/> )}
        /> 
    );
    
}
