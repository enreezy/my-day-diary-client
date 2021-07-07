import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import WordCloud from '../WordCloud';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/authActions"
import { useHistory, useLocation, Redirect, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function SignIn(){
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const { login } = bindActionCreators(actionCreators, dispatch);
  const location = useLocation();

  useEffect(() => {
    if(state.user.token) {
        localStorage.setItem("token", state.user.token);
        localStorage.setItem("id", state.user.result.id);
        localStorage.setItem("name", state.user.result.name);
    }
  },[state])

  const onFinish = values => {
    const credentials = {
        username: values.username,
        password: values.password
    }

    login(credentials);
  };

  if(state.user.auth){
    return <Redirect to="/" />
  }

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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
    <ToastContainer />
    </>
  );
};
