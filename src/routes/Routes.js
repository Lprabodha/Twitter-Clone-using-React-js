import React from 'react'
import {Switch,BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Home from '../page/home/view/Home';
import Authentication from '../page/register/view/Authentication';
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
       
        render = {()=> !isAuth? <Redirect to="/authentication"/>: <Redirect to="/home"/> }
        /> 
            <ProtectedRoute path="/home" component={Home} auth={isAuth}/>
            <PublicRoute path="/authentication" component={Authentication} auth={isAuth}/>
        </Switch>
    </Router>

    );
    
    
}
