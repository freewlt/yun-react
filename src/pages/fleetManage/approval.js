/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Button, Table, Form, Row, Col, } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';



class Approval extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '行吗',
                dataIndex: 'key',
            },
            {
                title: '性别',
                dataIndex: 'oilfgSys',
            },
            {
                title: '驾龄',
                dataIndex: 'ke3y',
            },
            {
                title: '电话',
                dataIndex: 'oilSy3s',
            },
            {
                title: '车牌号',
                dataIndex: 'keey',
            },
            {
                title: '车辆类型',
                dataIndex: 'oilSys',
            },
            {
                title: '行驶证号',
                dataIndex: 'kesdgey',
            },
            {
                title: '行驶证正',
                dataIndex: 'oilSyzs',
            },
            {
                title: '行驶证反',
                dataIndex: 'oilSyfs',
            },
            {
                title: '驾照号',
                dataIndex: 'oilSysz',
            },
            {
                title: '驾照正',
                dataIndex: 'oilSyscar',
            },
            {
                title: '驾照反',
                dataIndex: 'oilSysyear',
            },
            {
                title: '支付宝姓名',
                dataIndex: 'oilSsys',
            },
            {
                title: '支付宝账号',
                dataIndex: 'oilSystime',
            },
            {
                title: '微信账号',
                dataIndex: 'kesdwetgey',
            },
            {
                title: '成单数',
                dataIndex: 'kesderertegey',
            },
            {
                title: '留言',
                dataIndex: 'eeg',
            },
            {
                title: '申请时间',
                dataIndex: 'erere',
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
            <div className="mainBox approval">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBybtn">
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                 待审批挂靠车辆信息
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

export default connect(mapStateToProps, mapDispatchToProps)(Approval)