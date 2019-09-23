import React from "react";
// import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';
import './../Tbase.css';

const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 6 },
  };

class ChangePwd extends React.Component {
    state = {
        checkNick: false,
    };

    check = () => {
        this.props.form.validateFields(err => {
          if (!err) {
            console.info('success');
          }
        });
      };
    
      handleChange = e => {
        this.setState(
          {
            checkNick: e.target.checked,
          },
          () => {
            this.props.form.validateFields(['nickname'], { force: true });
          },
        );
      };
 

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="mainBox changePwd" labelCol={{ span: 10 }} onSubmit={this.handleSubmit}>
      <Form.Item {...formItemLayout} label="请输入旧密码">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="请输入旧密码" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="请输入新密码">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: '请输入确认新密码',
              },
            ],
          })(<Input placeholder="请输入确认新密码" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="请输入确认新密码">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: '请输入确认新密码',
              },
            ],
          })(<Input placeholder="请输入确认新密码" />)}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 3 }}>
          <Button type="primary" className="searchBtn" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'ChangePwd' })(ChangePwd);
