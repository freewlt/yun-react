import React from "react";
// import { connect } from 'react-redux';
import { Button, Table, Form, Input, Row, Col, DatePicker, Select } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';

const { Option } = Select;

class PaymentRecord extends React.Component {
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
            title: '会员名称',
            dataIndex: 'ke3y',
        },
        {
            title: '手机号',
            dataIndex: 'keebdfher3y',
        },
        {
            title: '应收金额',
            dataIndex: 'oilfasgSys',
        },
        {
            title: '收款人',
            dataIndex: 'keetsder3y',
        },
        {
            title: '优惠金额',
            dataIndex: 'oilewtSy3s',
        },
        {
            title: '手续费',
            dataIndex: 'ke3ewhrhtwy',
        },
        {
            title: '实收金额',
            dataIndex: 'ketisdgme3y',
        },
        {
            title: '收款时间',
            dataIndex: 'kewwewttwe3y',
        },
        {
            title: '支付方式',
            dataIndex: 'keewwetwtt3y',
        },
        {
            title: '备注',
            dataIndex: 'ktimeewte3y',
        },
        {
            title: '抬头',
            dataIndex: 'keeerwt3y',
        },
        {
            title: '税号',
            dataIndex: 'werwr',
        }
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
            <div className="mainBox paymentRecord">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBy">
                            <Col>
                                <Form.Item label="">
                                    <Input className="searchInput" placeholder="会员名称"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Input className="searchInput" placeholder="手机号"/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <DatePicker
                                    disabledDate={this.disabledStartDate}
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    value={startValue}
                                    placeholder="选择开始时间"
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
                                    placeholder="选择结束时间"
                                    onChange={this.onEndChange}
                                    open={endOpen}
                                    onOpenChange={this.handleEndOpenChange}
                                />
                            </Col>
                            <Col className="selectBox">
                                <Form.Item>
                                    <Select>
                                        <Option value="1">未开票</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col className="btnGroup">
                                <Button className="searchBtn" type="primary" >
                                    查询
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
                </div>
            </div>
        );
    }
}
export default PaymentRecord;