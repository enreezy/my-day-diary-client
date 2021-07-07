import axios from 'axios';
import { GET_DIARIES, ADD_DIARY, UPDATE_DIARY, DELETE_DIARY, DIARIES_LOADING } from './types';

export const getDiaries = (id) => dispatch => {
    dispatch(setDiariesLoading());
    axios.get(`${process.env.SERVER_API}/api/diaries/${id}`)
        .then(res => dispatch({
            type: GET_DIARIES,
            payload: res.data
        })
    );
};

export const addDiary = diary => dispatch => {
    axios
        .post(`${process.env.SERVER_API}/api/diaries/`, diary)
        .then(res =>
            dispatch({
                type: ADD_DIARY,
                payload: res.data
            })
        )
}

export const updateDiary = (id, diary) => dispatch => {
    axios
        .put(`${process.env.SERVER_API}/api/diaries/${id}`, diary)
        .then(res => dispatch({
            type: UPDATE_DIARY,
            payload: res.data
        })
    )
}

export const deleteDiary = id => dispatch => {
    axios.delete(`${process.env.SERVER_API}/api/diaries/${id}`).then(res =>
        dispatch({
            type: DELETE_DIARY,
            payload: id
        })
    )
}


export const setDiariesLoading = () => {
    return {
        type: DIARIES_LOADING
    }
}