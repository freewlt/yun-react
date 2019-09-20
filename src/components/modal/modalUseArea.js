import React, { Component } from 'react';
import { Modal, Transfer } from 'antd';
import { connect } from 'react-redux';
import { isShow } from '../../store/actionCreators';
import './index.css'

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}
const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

class ModalOilUnitSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        targetKeys: oriTargetKeys,
        selectedKeys: [],
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

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  };


  render() {
    const { targetKeys, selectedKeys } = this.state;
    return (
        <Modal className="ModalBox modalOilUnitSet"
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
            <Transfer
            dataSource={mockData}
            titles={['不可使用油站', '可使用油站']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            render={item => item.title}/>
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