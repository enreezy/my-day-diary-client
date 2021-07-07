import axios from 'axios';
import { LOGIN, CHECK_AUTH, REGISTER } from './types';

export const login = credentials => dispatch => {
    axios
        .post(`${process.env.SERVER_API}/api/auth/login`, credentials)
        .then(res =>
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        )
}

export const isAuthenticated = token => dispatch => {
    axios.get(`${process.env.SERVER_API}/api/auth/isUserAuth`,{
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
        .post(`${process.env.SERVER_API}/api/auth/register`, credentials)
        .then(res =>
            dispatch({
                type: REGISTER,
                payload: res.data
            })
        )
}
