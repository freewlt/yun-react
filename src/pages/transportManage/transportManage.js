import React from "react";
import { connect } from 'react-redux';
import { Tabs, Button, Table, Form, Input, Row, Col, DatePicker } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { TabPane } = Tabs;

class TransportManage extends React.Component {
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
            title: '运单号',
            dataIndex: 'key',
        },
        {
            title: '车牌号',
            dataIndex: 'ke3y',
        },
        {
            title: '承运人',
            dataIndex: 'keebdfher3y',
        },
        {
            title: '联系电话',
            dataIndex: 'oilfasgSys',
        },
        {
            title: '派单员',
            dataIndex: 'keetsder3y',
        },
        {
            title: '起始地',
            dataIndex: 'oilewtSy3s',
        },
        {
            title: '目的地',
            dataIndex: 'ke3ewhrhtwy',
        },
        {
            title: '接单时间',
            dataIndex: 'ketisdgme3y',
        },
        {
            title: '货主',
            dataIndex: 'kewwewttwe3y',
        },
        {
            title: '货物',
            dataIndex: 'keewwetwtt3y',
        },
        {
            title: '结束时间',
            dataIndex: 'ktimeewte3y',
        },
        {
            title: '描述',
            dataIndex: 'keeerwt3y',
        },
        {
            title: '发货人电话',
            dataIndex: 'werwr',
        },
        {
            title: '签收人',
            dataIndex: 'wwaetwt',
        },
        {
            title: '手机号',
            dataIndex: 'kewe3ewewty',
        },
        {
            title: '结算周期',
            dataIndex: 'kew3yweek',
        },
        {
            title: '短信提醒',
            dataIndex: 'kewdeerwr3y',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width:"300px",
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

        return (
            <div className="mainBox transportManage">
                <div className="mainCon">
                    <Tabs>
                        <TabPane tab="已接收" key="1">
                          <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                              <Row className="seleBy">
                                  <Col>
                                      <Form.Item label="">
                                      <Input className="searchInput" placeholder="输入运单号"/>
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item>
                                      <Input className="searchInput" placeholder="输入订单号"/>
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item>
                                      <Input className="searchInput" placeholder="输入车牌号"/>
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item>
                                      <Input className="searchInput" placeholder="输入承运人电话"/>
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
                                  <Col className="btnGroup">
                                      <Button className="searchBtn" type="primary" >
                                          搜索
                                          <span className="searchIcon"></span>
                                      </Button>
                                      <Button className="searchBtn newBtn" type="primary">
                                          导出查询结果
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
                        <TabPane tab="已到达" key="2">
                            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="">
                                            <Input className="searchInput" placeholder="输入运单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入订单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入车牌号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入承运人电话"/>
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
                                    <Col className="btnGroup">
                                        <Button className="searchBtn" type="primary" >
                                            搜索
                                            <span className="searchIcon"></span>
                                        </Button>
                                    </Col>
                                    <Col className="btnGroup">
                                        <Button className="newBtn" type="primary">
                                            导出查询结果
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
                        <TabPane tab="进行中" key="3">
                            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="">
                                            <Input className="searchInput" placeholder="输入运单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入订单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入车牌号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入承运人电话"/>
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
                                    <Col className="btnGroup">
                                        <Button className="searchBtn" type="primary" >
                                            搜索
                                            <span className="searchIcon"></span>
                                        </Button>
                                    </Col>
                                    <Col className="btnGroup">
                                        <Button className="newBtn" type="primary">
                                            导出查询结果
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
                        <TabPane tab="已完成" key="4">
                            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="">
                                            <Input className="searchInput" placeholder="输入运单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入订单号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入车牌号"/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Input className="searchInput" placeholder="输入承运人电话"/>
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
                                    <Col className="btnGroup">
                                        <Button className="searchBtn" type="primary" >
                                            搜索
                                            <span className="searchIcon"></span>
                                        </Button>
                                    </Col>
                                    <Col className="btnGroup">
                                        <Button className="newBtn" type="primary">
                                            导出查询结果
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

export default connect(mapStateToProps, mapDispatchToProps)(TransportManage)