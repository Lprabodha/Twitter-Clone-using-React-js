import React from 'react'
import {Switch,BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Home from '../page/Home';
import Register from '../page/register/view/Register';
import ProtectedRoute from './Protected.routes';
import PublicRoute from './Public.routes';

export default function Routes(auth) {
    return (
 
    <Router>
        <Switch>
              <Route
              path ="/"
              exact
       
        render = {()=> (!auth? <Redirect to="/register"/>: <Redirect to="/home"/> )}
        /> 
            <ProtectedRoute path="/home" component={Home}/>
            <PublicRoute path="/register" component={Register}/>
        </Switch>
    </Router>

    );
    
    
}
