import React, { useEffect, useState } from 'react'
import SignIn from '../components/SignIn';
import App from "components/App";
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/authActions"


export default function AuthenticationRoutes(){ 
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const { isAuthenticated } = bindActionCreators(actionCreators, dispatch);
    
    useEffect(() => {
        if(localStorage.getItem('token')) {
            isAuthenticated(localStorage.getItem('token').toString())
        }
    }, []);
    
    if(state.user.auth) {
        return (
            <App />
        )
    }else{
        return(
            <Switch>
               <Route exact path="/" component={SignIn } />
               <Route exact path="/diary/" component={App } />
               <Route exact path="/signin" component={SignIn} />
           </Switch>
           );
    }

    
}


