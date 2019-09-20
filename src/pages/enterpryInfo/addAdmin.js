import React from "react";
// import { connect } from 'react-redux';
import { Button, Form, Row, Col, Input, Checkbox } from 'antd';
import './../Tbase.css';


class AddAdmin extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="mainBox addAdmin" labelCol={{ span: 10 }} onSubmit={this.handleSubmit}>
        <Row>
          <Col span={6}>
            <Form.Item label="请输入账号">
              {getFieldDecorator('account', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入密码">
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入联系人姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入联系人电话">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>  
        <Row>
        <Col span={6}>
          <Form.Item label="请输入岗位描述">
            {getFieldDecorator('account', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="请输入权限描述">
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="车辆总数">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="请输入企业名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)}
          </Form.Item>
        </Col>
      </Row>
      <Row>
          <Col span={6}>
            <Form.Item label="请输入企业地址">
              {getFieldDecorator('account', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入地址坐标">
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入支付宝实名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="请输入支付宝账号">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row> 
        <Row className="checkbox">
          <Col span={24}>
            <Form.Item label="请选择可以管理的权限模块" labelCol={{ span: 3 }}>
              {getFieldDecorator('checkbox-group', {
                initialValue: ['A', 'B'],
              })(
                <Checkbox.Group>
                      <Checkbox value="A">车队管理</Checkbox>
                      <Checkbox disabled value="B">会员管理</Checkbox>
                      <Checkbox value="C">调车中心</Checkbox>
                      <Checkbox value="D">运输管理</Checkbox>
                      <Checkbox value="E">报表中心</Checkbox>
                      <Checkbox value="E">结算中心</Checkbox>
                      <Checkbox value="E">营销管理</Checkbox>
                      <Checkbox value="E">收款记录</Checkbox>
                      <Checkbox value="E">企业中心</Checkbox>	
                </Checkbox.Group>,
              )}
            </Form.Item>
          </Col>
        </Row>  
        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'coordinated' })(AddAdmin);

