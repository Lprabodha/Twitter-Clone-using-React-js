import React from 'react'
import {Switch,BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Home from '../page/home/Home/Home';
import Register from '../page/register/view/Register';
import useAuthProvider from '../shared/hook/useAuthProvider';
import { authState } from '../shared/state/auth_state';
import ProtectedRoute from './Protected.routes';
import PublicRoute from './Public.routes';

export default function Routes() {

    const [authState, _] = useAuthProvider();
    const {isAuth} = authState;
    return (
 
    <Router>
        <Switch>
              <Route
              path ="/"
              exact
       
        render = {()=> !isAuth? <Redirect to="/register"/>: <Redirect to="/home"/> }
        /> 
            <ProtectedRoute path="/home" component={Home} auth={isAuth}/>
            <PublicRoute path="/register" component={Register} auth={isAuth}/>
        </Switch>
    </Router>

    );
    
    
}
