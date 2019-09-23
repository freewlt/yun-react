import React from "react";
import { connect } from 'react-redux';
import { DatePicker, Button, Table, Form, Input, Row, Col, Select  } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { Option } = Select;

class OrderManage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [],
            pagination: {},
            loading: false,
            startValue: null,
            endValue: null,
            endOpen: false,
        };
        this.columns = [
            {
                title: '订单号',
                dataIndex: 'key',
            },
            {
                title: '货物名称',
                dataIndex: 'oilcfgSys',
            },
            {
                title: '货主名称',
                dataIndex: 'kewae3y',
            },
            {
                title: '装货地',
                dataIndex: 'oilas Sy3s',
            },
            {
                title: '联系人',
                dataIndex: 'kee3y',
            },
            {
                title: '联系电话',
                dataIndex: 'oi3lSys',
            },
            {
                title: '卸货地',
                dataIndex: 'keet ey',
            },
            {
                title: '卸货联系人',
                dataIndex: 'oilewtSys',
            },
            {
                title: '卸货电话',
                dataIndex: 'oilSysg zs',
            },
            {
                title: '发货时间',
                dataIndex: 'oiewlSyfs',
            },
            {
                title: '发布时间',
                dataIndex: 'oildgsd Sysz',
            },
            {
                title: '货物吨数',
                dataIndex: 'oilSwetwetyscar',
            },
            {
                title: '货物（人数/件数）',
                dataIndex: 'oilwetweSysyear',
            },
            {
                title: '用车场景',
                dataIndex: 'oilewtwSsys',
            },
            {
                title: '车辆类型',
                dataIndex: 'oilSwetweystime',
            },
            {
                title: '用车类型',
                dataIndex: 'oilSysertteryear',
            },
            {
                title: '约里程',
                dataIndex: 'oilwerererSsys',
            },
            {
                title: '支付方式',
                dataIndex: 'oilSyetstime',
            },
            {
                title: '支付状态',
                dataIndex: 'oilewtSysdgdtime',
            },
            {
                title: '运费',
                dataIndex: 'oilSewrystieerme',
            },
            {
                title: '结算周期',
                dataIndex: 'erer',
            },
            {
                title: '预约/加急状态',
                dataIndex: 'oilSyweegtrerstime',
            },
            {
                title: '备注',
                dataIndex: 'oilSeyser34ertime',
            },
            {
                title: '特殊需求',
                dataIndex: 'oireerlSystierme',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width:'300',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <Button className="searchBtn">派单</Button>
                            <Button className="searchBtn">撤单</Button>
                            <Button className="searchBtn">打印</Button>
                            <Button className="searchBtn">明细</Button>
                            <Button className="searchBtn">修改</Button>
                        </div>
                    )
                },
            },
        ]
    }

    disabledStartDate = startValue => {
      const { endValue } = this.state;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    };
  
    disabledEndDate = endValue => {
      const { startValue } = this.state;
      if (!endValue || !startValue) {
        return false;
      }
      return endValue.valueOf() <= startValue.valueOf();
    };
  
    onChange = (field, value) => {
      this.setState({
        [field]: value,
      });
    };
  
    onStartChange = value => {
      this.onChange('startValue', value);
    };
  
    onEndChange = value => {
      this.onChange('endValue', value);
    };
  
    handleStartOpenChange = open => {
      if (!open) {
        this.setState({ endOpen: true });
      }
    };
  
    handleEndOpenChange = open => {
      this.setState({ endOpen: open });
    };

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

        const { startValue, endValue, endOpen } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
        };

        return (
            <div className="mainBox orderManage">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form"  onSubmit={this.handleSearch}>
                        <Row className="seleBy">
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="订单号" />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="货物名称"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="货主名称"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="收货人"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="收货人电话"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="收货地址"/>
                                </Form.Item>
                            </Col>
                            <Col>
                              <DatePicker
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                              />
                            </Col>
                            <Col>
                              <DatePicker
                              disabledDate={this.disabledEndDate}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              value={endValue}
                              placeholder="End"
                              onChange={this.onEndChange}
                              open={endOpen}
                              onOpenChange={this.handleEndOpenChange}
                            />
                            </Col>
                            <Col className="selectBox">
                                <Form.Item>
                                    <Select>
                                        <Option value="1">正常</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col className="btnGroup">
                              <Button className="searchBtn newBtn" type="primary">
                                  新增订单
                                  <span className="newIcon"></span>
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  地图模式
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  批量派单
                              </Button>
                              <Button className="searchBtn newBtn" type="primary">
                                  附近派单
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  网点调拨
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  导出excel
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  打印订单
                              </Button>
                              <Button className="searchBtn" type="primary" >
                                  搜索
                                  <span className="searchIcon"></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage);