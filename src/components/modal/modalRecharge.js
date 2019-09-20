import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { connect } from 'react-redux';
import { isShow } from '../../store/actionCreators';
import './index.css'

const { Option } = Select;
class ModalRecharge extends Component {

  handleOk = e => {
    const {dispatch} = this.props;
    dispatch(isShow(false));
  };

  handleCancel = e => {
    const {dispatch} = this.props;
    dispatch(isShow(false));
  };

  render() {
    return (
        <Modal className="ModalBox modalRecharge"
          title="充值"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认支付"
          cancelText="取消支付"
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="卡号">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="充值订单号">
              <Input/>
            </Form.Item>
            <Form.Item label="充值前余额">
              <Input/>
            </Form.Item>
            <Form.Item label="充值金额">
              <Input />
            </Form.Item>
            <Form.Item label="返现金额">
              <Input />
            </Form.Item>
            <Form.Item label="充值后余额">
              <Input />
            </Form.Item>
            <Form.Item label="充值等级">
              <Input />
            </Form.Item>
            <Form.Item label="支付方式">
              <Select placeholder="现金">
                <Option value="chin14a">现金</Option>
                <Option value="usa2">按年</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        visible:state.visible
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRecharge);