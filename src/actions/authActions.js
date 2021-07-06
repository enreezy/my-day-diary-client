import axios from 'axios';
import { LOGIN, CHECK_AUTH, REGISTER } from './types';

export const login = credentials => dispatch => {
    axios
        .post('http://localhost:8085/api/auth/login', credentials)
        .then(res =>
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        )
}

export const isAuthenticated = token => dispatch => {
    axios.get('http://localhost:8085/api/auth/isUserAuth',{
        headers: {
            "x-access-token": token
        }
    }).then(res => dispatch({
            type: CHECK_AUTH,
            payload: res.data
        })
    );
}

export const register = credentials => dispatch => {
    axios
        .post('http://localhost:8085/api/auth/register', credentials)
        .then(res =>
            dispatch({
                type: REGISTER,
                payload: res.data
            })
        )
}
