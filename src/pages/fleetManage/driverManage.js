/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Tabs, Button, Table, Form, Input, Row, Col, Select  } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { TabPane } = Tabs;
const { Option } = Select;



class driverManage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: [],
        pagination: {},
        loading: false,
      };
      this.columns = [
        {
            title: '司机',
            dataIndex: 'key',
        },
        {
            title: '联系电话',
            dataIndex: 'oilfgSys',
        },
        {
            title: '车牌号',
            dataIndex: 'ke3y',
        },
        {
            title: '车长',
            dataIndex: 'oilSy3s',
        },
        {
            title: '车型',
            dataIndex: 'kee3y',
        },
        {
            title: '审核人',
            dataIndex: 'oi3lSys',
        },
        {
            title: '推广人',
            dataIndex: 'keey',
        },
        {
            title: '行驶证号',
            dataIndex: 'oilSys',
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
            title: '成单数（总数/本公司数）',
            dataIndex: 'oilSysz',
        },
        {
            title: '车辆品牌',
            dataIndex: 'oilSyscar',
        },
        {
            title: '生产年月',
            dataIndex: 'oilSysyear',
        },
        {
            title: '设备号',
            dataIndex: 'oilSsys',
        },
        {
            title: '添加时间',
            dataIndex: 'oilSystime',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width:'300px',
            render: (text, record) =>{
                return (
                    <div className="iconBtnGroup">
                        <Button className="searchBtn">修改</Button>
                        <Button className="searchBtn">取消挂靠</Button>
                        <Button className="searchBtn">数据分析</Button>
                        <Button className="searchBtn">转账</Button>
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
        <div className="mainBox driverManage">
              <div className="mainCon">
                  <Tabs>
                    <TabPane tab="全部司机" key="1">
                        <Form className="ant-advanced-search-form"  onSubmit={this.handleSearch}>
                            <Row className="seleBy">
                                <Col>
                                    <Form.Item label="请输入司机">
                                    <Input className="searchInput"
                                        placeholder=""
                                    />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label="请输入车牌">
                                    <Input className="searchInput"
                                        placeholder=""
                                    />
                                    </Form.Item>
                                </Col>
                                <Col className="selectBox">
                                    <Form.Item label="请选择缴费">
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
                                    <Button className="searchBtn newBtn" type="primary">
                                        新增
                                        <span className="newIcon"></span>
                                    </Button>
                                    <Button className="searchBtn newBtn" type="primary">
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
                    </TabPane>
                    <TabPane tab="本部门司机" key="2">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row className="seleBy">
                                <Col>
                                    <Form.Item label="请输入司机">
                                        <Input className="searchInput"
                                               placeholder=""
                                        />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label="请输入车牌">
                                        <Input className="searchInput"
                                               placeholder=""
                                        />
                                    </Form.Item>
                                </Col>
                                <Col className="selectBox">
                                    <Form.Item label="请选择缴费">
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
                                        新增
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

export default connect(mapStateToProps, mapDispatchToProps)(driverManage)