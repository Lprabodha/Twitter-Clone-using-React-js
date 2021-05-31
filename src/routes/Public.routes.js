import React  from 'react'
import {Redirect, Route} from 'react-router-dom';

export default function PublicRoute({auth,component:Component,...rest}) {
    return (
    <Route
     {...rest} 
     render = {
        ()=> (!auth? <Component/> : <Redirect to="/home"/> )}
        /> 
    );
}
