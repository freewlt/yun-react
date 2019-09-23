import React from "react";
// import { connect } from 'react-redux';
import { Tabs, Button, Table, Form, Input, Row, Col, DatePicker } from 'antd';
import reqwest from 'reqwest';
import './../Tbase.css';
const { TabPane } = Tabs;

class TravelManage extends React.Component {
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
                title: '承运人电话',
                dataIndex: 'keebdfher3y',
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
                title: '开始时间',
                dataIndex: 'ketisdgme3y',
            },
            {
                title: '货主名称',
                dataIndex: 'kewwewttwe3y',
            },
            {
                title: '货物名称',
                dataIndex: 'keewwetwtt3y',
            },
            {
                title: '吨数',
                dataIndex: 'ktimeewte3y',
            },
            {
                title: '单价',
                dataIndex: 'keeerwt3y',
            },
            {
                title: '成本',
                dataIndex: 'oilfwewasgSys',
            },
            {
                title: '运费',
                dataIndex: 'oilwerwerfasgSys',
            },
            {
                title: '订单描述',
                dataIndex: 'oilfasgSwewtys',
            },
            {
                title: '发货人',
                dataIndex: 'wetwtzxv',
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
                title: '签收人手机号',
                dataIndex: 'kewe3ewewty',
            },
            {
                title: '签收码',
                dataIndex: 'kew3yweek',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width:'400',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            {/*<a href="javascript:;" title='修改' className="iconBtn editIcon"></a>*/}
                            {/*<a href="javascript:;" title='取消挂靠' className="iconBtn deleteIcon"></a>*/}
                            {/*<a href="javascript:;" title='数据分析' className="iconBtn">数据分析</a>*/}
                            {/*<a href="javascript:;" title='转账' className="iconBtn">转账</a>*/}
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
            <div className="mainBox travelManage">
                <div className="mainCon">
                    <Tabs>
                        <TabPane tab="进行中" key="1">
                            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="">
                                            <Input className="searchInput" placeholder="输入运单号"/>
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
                                            查询
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
                        <TabPane tab="已完成" key="2">
                            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                                <Row className="seleBy">
                                    <Col>
                                        <Form.Item label="">
                                            <Input className="searchInput" placeholder="输入运单号"/>
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
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default TravelManage;