/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Table, Form, Row, Col, } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';



class Administrator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '账号',
                dataIndex: 'key',
            },
            {
                title: '网点名称',
                dataIndex: 'oilfgSys',
            },
            {
                title: '操作人',
                dataIndex: 'ke3y',
            },
            {
                title: '网点描述',
                dataIndex: 'oilSy3s',
            },
            {
                title: '网点地址',
                dataIndex: 'keey',
            },
            {
                title: '网点电话',
                dataIndex: 'oilSys',
            },
            {
                title: '收款实名',
                dataIndex: 'kesdgey',
            },
            {
                title: '收款账号',
                dataIndex: 'oilSyzs',
            },
            {
                title: '岗位描述',
                dataIndex: 'kedgsgey',
            },
            {
                title: '权限描述',
                dataIndex: 'owewetilSys',
            },
            {
                title: '证件账号',
                dataIndex: 'keryesdgey',
            },
            {
                title: '证件正面',
                dataIndex: 'wetwtoilSyzs',
            },
            {
                title: '证件反面',
                dataIndex: 'kexcgsdgey',
            },
            {
                title: '操作',
                dataIndex: 'oildfhdfhSyzs',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <a href="javascript:;" title='编辑' className="iconBtn editIcon"></a>
                            <a href="javascript:;" title='删除' className="iconBtn deleteIcon"></a>
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
            <div className="mainBox administrator">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBybtn">
                            <Col className="btnGroup">
                                <Button className="newBtn" type="primary" >
                                    二级管理员信息  
                                    <span className="newIcon"></span>
                                </Button>
                            </Col>
                        </Row>    
                        <Row className="seleBybtn">
                            <Col className="btnGroup">
                                <Button className="newBtn" type="primary" >
                                    <Link to="/enterpryInfo/addAdmin"> 
                                        新增管理员
                                        <span className="newIcon"></span>
                                    </Link> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Administrator)