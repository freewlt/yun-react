/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Tabs, Button, Table, Form, Input, Row, Col } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { TabPane } = Tabs;



class WaybillSettlement extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '结算单号',
                dataIndex: 'key',
            },
            {
                title: '生成时间',
                dataIndex: 'oilfgSys',
            },
            {
                title: '结算时间',
                dataIndex: 'ke3y',
            },
            {
                title: '起始地',
                dataIndex: 'oilSy3s',
            },
            {
                title: '目的地',
                dataIndex: 'kee3y',
            },
            {
                title: '车牌',
                dataIndex: 'oi3lSys',
            },
            {
                title: '承运人',
                dataIndex: 'keey',
            },
            {
                title: '承运人电话',
                dataIndex: 'oilSys',
            },
            {
                title: '应付款',
                dataIndex: 'oilSyzs',
            },
            {
                title: '手续费',
                dataIndex: 'oilSyfs',
            },
            {
                title: '平台费',
                dataIndex: 'oilSysz',
            },
            {
                title: '补贴',
                dataIndex: 'oilSyscar',
            },
            {
                title: '实付金额',
                dataIndex: 'oilSysyear',
            },
            {
                title: '运单状态',
                dataIndex: 'oilSsys',
            },
            {
                title: '操作',
                dataIndex: 'operation',
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
            <div className="mainBox waybillSettlement">
                <div className="mainCon">
                    <Tabs>
                        <TabPane tab="未结算" key="1">
                            <Form className="ant-advanced-search-form"  onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="请输入结算单号">
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
                        </TabPane>
                        <TabPane tab="已结算" key="2">
                            <Form className="ant-advanced-search-form"  onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="请输入结算单号">
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
                        </TabPane>
                    </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(WaybillSettlement)