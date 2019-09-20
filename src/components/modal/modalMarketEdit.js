/**
 * Created by Administrator on 2019/9/17.
 */
import React, { Component } from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';

import { connect } from 'react-redux';
import { isShow } from '../../store/actionCreators';
import './index.css'

class ModalMarketEdit extends Component {
    constructor(props){
        super(props);
        this.state={
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
            <Modal className="ModalBox modalMarketEdit"
                   title="编辑信息模板"
                   visible={this.props.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
                   okText="确认"
                   cancelText="取消">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row>
                            <Col>
                                <Form.Item label="标题">
                                    <Input className="searchInput" placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item label="内容">
                                    <Input className="searchInput" placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalMarketEdit);