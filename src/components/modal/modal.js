import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { isShow } from '../../store/actionCreators';
import './index.css'

class ModalBox extends Component {

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
        <Modal className="ModalBox"
          title="新建"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="人员编号">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="人员姓名">
              <Input/>
            </Form.Item>
            <Form.Item label="手机号码">
              <Input/>
            </Form.Item>
            <Form.Item label="人员密码">
              <Input />
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);