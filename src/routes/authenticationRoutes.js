import React, { useEffect, useState } from 'react'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import App from "components/App";
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/authActions"
import ProtectedRoutes from "./protectedRoutes";

export default function AuthenticationRoutes(){ 
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const { isAuthenticated } = bindActionCreators(actionCreators, dispatch);
    const [authentecited, setAuthenticated] = useState(false);
    
    useEffect(() => {
        if(localStorage.getItem('token')) {
            isAuthenticated(localStorage.getItem('token').toString())
        }
    }, []);

    
    return(
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <ProtectedRoutes path="/" component={App} isAuth={state.user.auth} />
        </Switch>
    );



    
}


