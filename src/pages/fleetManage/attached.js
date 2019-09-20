/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Button, Table, Form, Row, Col, } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';



class Attached extends React.Component {
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
                dataIndex: 'key',
            },
            {
                title: '车牌号',
                dataIndex: 'oilfgSys',
            },
            {
                title: '车长',
                dataIndex: 'ke3y',
            },
            {
                title: '车型',
                dataIndex: 'oilSy3s',
            },
            {
                title: '原因',
                dataIndex: 'keey',
            },
            {
                title: '司机',
                dataIndex: 'oilSys',
            },
            {
                title: '联系电话',
                dataIndex: 'kesdgey',
            },
            {
                title: '取消人',
                dataIndex: 'oilSyzs',
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
            <div className="mainBox attached">
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

export default connect(mapStateToProps, mapDispatchToProps)(Attached)