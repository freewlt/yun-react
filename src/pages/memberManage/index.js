/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Button, Table, Form, Input, Row, Col, Select  } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { Option } = Select;



class MemberManage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: [],
        pagination: {},
        loading: false,
      };
      this.columns = [
        {
            title: '公司名称',
            dataIndex: 'key',
        },
        {
            title: '当前部门',
            dataIndex: 'oilfgSys',
        },
        {
            title: '公司地址',
            dataIndex: 'ke3y',
        },
        {
            title: '联系人',
            dataIndex: 'oilSy3s',
        },
        {
            title: '联系电话',
            dataIndex: 'kee3y',
        },
        {
            title: '证件号',
            dataIndex: 'oi3lSys',
        },
        {
            title: '证件正面',
            dataIndex: 'keey',
        },
        {
            title: '证件背面',
            dataIndex: 'oilSys',
        },
        {
            title: '用户名',
            dataIndex: 'oilSyzs',
        },
        {
            title: '发货次数',
            dataIndex: 'oilSyfs',
        },
        {
            title: '完成次数',
            dataIndex: 'oilSysz',
        },
        {
            title: '添加时间',
            dataIndex: 'oilSyscar',
        },
        {
            title: '推广人',
            dataIndex: 'oilSysyear',
        },
        {
            title: '付费次数',
            dataIndex: 'oilSsys',
        },
        {
            title: '付费金额',
            dataIndex: 'oilSystime',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) =>{
                return (
                    <div className="iconBtnGroup">
                        <a href="javascript:;" title='修改' className="iconBtn editIcon"></a>
                        <a href="javascript:;" title='取消挂靠' className="iconBtn deleteIcon"></a>
                        <a href="javascript:;" title='数据分析' className="iconBtn">数据分析</a>
                        <a href="javascript:;" title='转账' className="iconBtn">转账</a>
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
        <div className="mainBox memberManage">
          <div className="mainCon">
              <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBy">
                            <Col>
                                <Form.Item label="请输入公司">
                                <Input className="searchInput"
                                    placeholder=""
                                />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="请输入联系">
                                <Input className="searchInput"
                                    placeholder=""
                                />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="请输入联系">
                                  <Input className="searchInput"
                                        placeholder=""
                                    />
                                </Form.Item>
                            </Col>
                            <Col className="selectBox">
                                <Form.Item label="时间排序">
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
                                <Button className="newBtn" type="primary">
                                    添加会员
                                    <span className="newIcon"></span>
                                </Button>
                                <Button className="newBtn" type="primary">
                                    网点调拨
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

const mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        //dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberManage)