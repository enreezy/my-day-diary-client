import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import WordCloud from '../WordCloud';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/authActions"
import { useHistory, Redirect, Link } from 'react-router-dom';

export default function SignIn(){
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const { register } = bindActionCreators(actionCreators, dispatch);
  const history = useHistory();

  useEffect(() => {
    if(state.user.token) {
        localStorage.setItem("token", state.user.token);
    }
  },[state])

  const onFinish = values => {
    const credentials = {
        username: values.username,
        name: values.name,
        password: values.password
    }

    register(credentials);
    history.push("/");
  };

  return (
    <>
    <WordCloud />
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
   

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          register
        </Button>
        <Link to="/signin">Go Back</Link>
      </Form.Item>
    </Form>
    </>
  );
};
