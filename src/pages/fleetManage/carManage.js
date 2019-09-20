/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Button, Table, Form, Input, Row, Col, Select  } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { Option } = Select;



class carManage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: [],
        pagination: {},
        loading: false,
      };
      this.columns = [
        {
            title: '车牌号',
            dataIndex: 'key',
        },
        {
            title: '车长',
            dataIndex: 'oilfgSys',
        },
        {
            title: '车型',
            dataIndex: 'ke3y',
        },
        {
            title: '关联司机数量',
            dataIndex: 'oilSy3s',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) =>{
                return (
                    <div className="iconBtnGroup">
                        <a href="javascript:;" title='派单' className="iconBtn">派单</a>
                    </div>
                )
            },
        },
      ]
	  }
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
                results: 10,
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
        <div className="mainBox carManage">
          <div className="mainCon">
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Row className="seleBybtn">
                        <Col className="btnGroup">
                            <Button className="searchBtn" type="primary" >
                                已挂靠车牌数量
                            </Button>
                        </Col>
                    </Row>
                    <Row className="seleBy">
                        <Col>
                            <Form.Item label="请输入车牌号">
                                <Input className="searchInput"
                                    placeholder=""
                                />
                            </Form.Item>
                        </Col>
                        <Col className="selectBox">
                            <Form.Item label="请选择车辆类型">
                                <Select>
                                    <Option value="1">正常</Option>
                                    <Option value="2">1</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col className="btnGroup">
                            <Button className="searchBtn" type="primary" >
                                搜索
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
          </div>	
          </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        //dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(carManage)