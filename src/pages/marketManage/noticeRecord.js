import React from "react";
// import { connect } from 'react-redux';
import { Button, Table, Form, Row, Col, DatePicker, Select } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { Option } = Select;

class NoticeRecord extends React.Component {
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
                title: '收信人',
                dataIndex: 'key',
            },
            {
                title: '标题',
                dataIndex: 'ke3y',
            },
            {
                title: '内容',
                dataIndex: 'keebdfher3y',
            },
            {
                title: '经办人',
                dataIndex: 'oilfasgSys',
            },
            {
                title: '短信（是否）',
                dataIndex: 'keetsder3y',
            },
            {
                title: '时间',
                dataIndex: 'oilewtSy3s',
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
            <div className="mainBox noticeRecord">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Row className="seleBy">
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
                                        <Option value="1">会员</Option>
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
export default NoticeRecord;