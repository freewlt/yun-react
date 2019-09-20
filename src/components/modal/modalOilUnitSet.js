import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { connect } from 'react-redux';
import { isShow } from '../../store/actionCreators';
import './index.css'

const { Option } = Select;
class ModalOilUnitSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'新增'
    };
  }

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
        <Modal className="ModalBox modalOilUnitSet"
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="单位名称">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="单位级别">
              <Select placeholder="1">
                <Option value="chin14a">1</Option>
              </Select>
            </Form.Item>
            <Form.Item label="主卡号">
              <Input disabled/>
            </Form.Item>
            <Form.Item label="负责人">
              <Input />
            </Form.Item>
            <Form.Item label="联系电话">
              <Input />
            </Form.Item>
            <Form.Item label="充值后余额">
              <Input />
            </Form.Item>
            <Form.Item label="单位状态">
              <Select placeholder="正常">
                <Option value="chin14a">正常</Option>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalOilUnitSet);