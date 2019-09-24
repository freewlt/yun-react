import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {withRouter} from "react-router-dom";

import './desing.css';
 

class Design extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '', //账号
          pwd: '', // 密码
          pwdConfirm: '', // 确认密码
          type: 'worker', // 用户类型 默认求职者
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // history.push('/router')
          console.log(this.props.history,'props')
          this.props.history.push('/main')
         
        }
      });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
        return (
          <div className="loginBox">
            <Form onSubmit={this.handleSubmit} className="loginForm">
            <h3 className="title">登录</h3>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的账号!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入您的账号"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item className="forgetRemeber">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码？
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        );
    }
}
export default withRouter(Form.create({ name: 'normal_login' })(Design));