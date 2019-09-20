/**
 * Created by Administrator on 2019/9/17.
 */
import React, { Component } from 'react';
import { Modal, Form, Input, Table, Row, Col, Button } from 'antd';

import { connect } from 'react-redux';
import reqwest from 'reqwest';
import { isShow } from '../../store/actionCreators';
import './index.css'

class ModalMarket extends Component {
    constructor(props){
        super(props);
        this.state={
          data: [],
          pagination: {},
          loading: false,
        };
        this.columns = [
          {
              title: '联系人',
              dataIndex: 'keeerwt3y',
          },
          {
              title: '联系电话',
              dataIndex: 'werwr',
          },
          {
              title: '公司名称',
              dataIndex: 'wwaetwt',
          },
          {
              title: '操作',
              dataIndex: 'operation',
          },
        ]
      }

    handleOk = e => {
        const {dispatch} = this.props;
        dispatch(isShow(false));
    };

    handleCancel = e => {
        const {dispatch} = this.props;
        dispatch(isShow(false));
    };
    componentDidMount() {
        this.fetch();
      }
  
      handleTableChange = (pagination, filters, sorter) => {
          const pager = { ...this.state.pagination };
          pager.current = pagination.current;
          this.setState({
              pagination: pager,
          });
          this.fetch({
              results: pagination.pageSize,
              page: pagination.current,
              sortField: sorter.field,
              sortOrder: sorter.order,
              ...filters,
          });
      };
  
      fetch = (params = {}) => {
          this.setState({ loading: true });
          reqwest({
              url: 'https://randomuser.me/api',
              method: 'get',
              data: {
                  results: 5,
                  ...params,
              },
              type: 'json',
          }).then(data => {
              const pagination = { ...this.state.pagination };
              pagination.total = 200;
              this.setState({
                  loading: false,
                  data: data.results,
                  pagination,
              });
          });
      };

    render() {
        return (
            <Modal className="ModalBox modalMarket"
                   title="会员信息列表"
                   visible={this.props.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
                   okText="确认"
                   cancelText="取消">
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Row className="seleBy">
                        <Col>
                            <Form.Item label="">
                            <Input className="searchInput" placeholder="会员名称"/>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item>
                            <Input className="searchInput" placeholder="联系人电话"/>
                            </Form.Item>
                        </Col>
                        <Col className="btnGroup">
                            <Button className="searchBtn" type="primary" >
                                查询
                                <span className="searchIcon"></span>
                            </Button>
                        </Col>
                    </Row>
                    <Table
                        columns={this.columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalMarket);