import React from "react";
import { connect } from 'react-redux';
import { Button, Table, Form, Row, Col, } from 'antd';
import reqwest from 'reqwest';
import ModalMarketEdit from '../../components/modal/modalMarketEdit';
import { isShow } from '../../store/actionCreators';
import './../Tbase.css';

class NoticeTemplate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [
            {
                title: '标题',
                dataIndex: 'ke3y',
            },
            {
                title: '内容',
                dataIndex: 'keebdfher3y',
            },
            {
                title: '操作',
                dataIndex: 'oilewtSy3s',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <a href="javascript:;" title='修改' className="iconBtn">修改</a>
                            <a href="javascript:;" title='删除' className="iconBtn">删除</a>
                            <a href="javascript:;" title='发送消息' className="iconBtn">发送消息</a>
                        </div>
                    )
                },
            }
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

    //弹窗显示
    showModal = () => {
      const {dispatch} = this.props;
      dispatch(isShow(true))
    };

    render() {
        return (
            <div className="mainBox noticeTemplate">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBy">
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" onClick={this.showModal}>
                                    添加信息模板
                                    <span className="addIcon"></span>
                                </Button>
                            </Col>
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                    返回
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
                    <ModalMarketEdit/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
  return {
      visible:state.visible,
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
      dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoticeTemplate);