import React, { useState, useRef, useEffect } from 'react';
import { Button, Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/"
import { SaveOutlined } from '@ant-design/icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

export default function DiaryForm() {
    const state = useSelector(state => state.diary);
    const dispatch = useDispatch()
    const { addDiary, updateDiary } = bindActionCreators(actionCreators, dispatch);
    const location = useLocation();
    const [currentText, setCurrentText] = useState(location.state ? location.state.data.text : '');
    const [viewFlag, setViewFlag] = useState(location.state ? true : false);
    const history = useHistory();


    function handleChange(event) {
        setCurrentText(event.target.value);
    }

    function handleSaveDiary(text){
        const diary = {
            userId: localStorage.getItem('id').toString(),
            author: localStorage.getItem('name').toString(),
            text: text,
            sentiment: "happy"
        }

        addDiary(diary);
        history.push({
            pathname: "/diaries",
            state: { created: true }
        });
    }

    function handleUpdateDiary(data) {
        const diary = {
            author: data.author,
            text: currentText,
            sentiment: "happy"
        }

        updateDiary(data.id, diary);
        toast.success("✔️ Diary updated!")
    }

    if(viewFlag) {
        return (
            <>
                <Input.TextArea
                    style={{ height: "90%", width: "100%" }}
                    onChange={handleChange}
                    autoFocus
                    value={currentText}
                />
                <Button type="primary" onClick={() => handleUpdateDiary(location.state.data)} className="diary-form-floatRight" icon={<SaveOutlined />}>Update</Button>
                <ToastContainer />
            </>
        )
    }else{
        return (
            <>
                <Input.TextArea
                    style={{ height: "90%", width: "100%" }}
                    onChange={handleChange}
                    autoFocus
                    value={currentText}
                />
                <Button type="primary" onClick={() => handleSaveDiary(currentText)} className="diary-form-floatRight" icon={<SaveOutlined />}>Save</Button>
                <ToastContainer />
            </>
        )
    }
}