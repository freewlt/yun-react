import React from "react";
//import { connect } from 'react-redux';
import { Button, Table, Form, Input, Row, Col, Select  } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { Option } = Select;

class CarQuery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '车牌',
                dataIndex: 'keeerey',
            },
            {
                title: '车长',
                dataIndex: 'key',
            },
            {
                title: '车型',
                dataIndex: 'kewae3y',
            },
            {
                title: '司机姓名',
                dataIndex: 'oilcfgSys',
            },
            {
                title: '司机电话',
                dataIndex: 'oilas Sy3s',
            },
            {
                title: '车辆图片',
                dataIndex: 'keet ey',
            },
            {
                title: '发车方向',
                dataIndex: 'oilSwetwetyscar',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <a href="javascript:;" title='定位' className="iconBtn">定位</a>
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
            <div className="mainBox carQuery">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBy">
                            <Col className="selectBox selectAddre">
                                <Form.Item label="出发地">
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col className="selectBox selectAddre">
                                <Form.Item>
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col className="selectBox selectAddre">
                                <Form.Item label="目的地">
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col className="selectBox selectAddre">
                                <Form.Item>
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
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
                            <Col className="selectBox">
                                <Form.Item label="请选择车辆长度">
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="车牌号">
                                    <Input className="searchInput" placeholder="请输入车牌号"/>
                                </Form.Item>
                            </Col>
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                    查询
                                    <span className="searchIcon"></span>
                                </Button>
                                <Button className="searchBtn" type="primary" >
                                    查看所有车辆
                                </Button>
                            </Col>
                        </Row>
                        <Row className="seleBybtn">
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                    车辆查询结果
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
export default CarQuery;