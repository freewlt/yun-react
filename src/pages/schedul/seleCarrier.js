import React from "react";
// import { connect } from 'react-redux';
import { Button, Table, Form, Input, Row, Col } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';

class SeleCarrier extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '序号',
                dataIndex: 'keeerey',
            },
            {
                title: '单号',
                dataIndex: 'key',
            },
            {
                title: '货主名称',
                dataIndex: 'kewae3y',
            },
            {
                title: '货物名称',
                dataIndex: 'oilcfgSys',
            },
            {
                title: '装货地',
                dataIndex: 'oilas Sy3s',
            },
            {
                title: '卸货地',
                dataIndex: 'keet ey',
            },
            {
                title: '货物吨数',
                dataIndex: 'oilSwetwetyscar',
            },
            {
                title: '派单员',
                dataIndex: 'oilSdsgewgwgwetwetyscar',
            },
            {
                title: '派单时间',
                dataIndex: 'oildgsd Sysz',
            },
            {
                title: '发货时间',
                dataIndex: 'oiewlSyfs',
            },
            {
                title: '车牌号',
                dataIndex: 'oilSysertteryear',
            },
            {
                title: '司机姓名',
                dataIndex: 'kee3y',
            },
            {
                title: '司机电话',
                dataIndex: 'oi3lSys',
            },
            {
                title: '订单状态',
                dataIndex: 'oilewtSysdgdtime',
            },
            {
                title: '描述',
                dataIndex: 'oilSeyser34ertime',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <Button className="searchBtn">撤销任务</Button>
                            <Button className="searchBtn">签收运单</Button>
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

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
        };

        return (
            <div className="mainBox seleCarrier">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBybtn">
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                    已发布任务
                                </Button>
                            </Col>
                        </Row>
                        <Row className="seleBy">
                            <Col>
                                <Form.Item label="请输入订单号">
                                    <Input className="searchInput"
                                           placeholder=""
                                    />
                                </Form.Item>
                            </Col>
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                     查询
                                    <span className="searchIcon"></span>
                                </Button>
                                <Button className="searchBtn" type="primary" >
                                     导出Excel
                                </Button>
                                <Button className="searchBtn" type="primary" >
                                     打印订单
                                </Button>
                            </Col>
                        </Row>
                        <Table rowSelection={rowSelection}
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
export default SeleCarrier;