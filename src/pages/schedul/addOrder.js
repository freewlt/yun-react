import React from "react";
import { Tabs, Button, Form, Input, Row, Col, Select, DatePicker } from 'antd';
import './../Tbase.css';
const { TabPane } = Tabs;
const { Option } = Select;

class AddOrder extends React.Component {

    render() {

        return (
            <div className="mainBox addOrder">
                <div className="mainCon">
                    <Tabs>
                        <TabPane tab="发货派单" key="1">
                            <Form className="ant-advanced-search-form">
                                <Row>
                                  <Col>
                                    <Form.Item label="起始位置">
                                      <span className="ant-form-text">北京市昌平区城北街道G6辅路附近</span>
                                      <Button className="newBtn" type="primary">
                                          选择地址并获取坐标
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="发货联系人">
                                          <Input className="searchInput"
                                                placeholder=""/>
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item label="联系电话">
                                          <Input className="searchInput"
                                                placeholder=""/>
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <Form.Item label="目的地地址">
                                      <span className="ant-form-text">测试1</span>
                                      <Button className="newBtn" type="primary">
                                          选择地址并获取坐标
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="卸货联系人">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item label="联 系 电 话">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="货 主 名 称">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item label="货 物 名 称">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="货 物 吨 数">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item label="货 物 件 数">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="发 货 时 间">
                                        <DatePicker/>
                                      </Form.Item>
                                  </Col>
                                  <Col>
                                      <Form.Item label="派 单 运 费">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Item label="任 务 描 述">
                                          <Input className="searchInput"
                                                placeholder=""
                                          />
                                      </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <Form.Item label="发 布 状 态" className="publicStatus">
                                      <Button className="allCar" type="primary">
                                          所有车辆
                                      </Button>
                                      <Button className="choseCar" type="primary">
                                          选择车辆
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="selectBox">
                                    <Form.Item label="所 选 车 辆">
                                        <Select>
                                            <Option value="1">正常</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                  </Col>
                                  <Col>
                                    <Form.Item>
                                        <Button className="reselect" type="primary">
                                            重新选择
                                        </Button>
                                    </Form.Item>
                                  </Col>
                                </Row>
                                <Row className="position">
                                  <Button className="addTask" type="primary">
                                      添加新任务
                                  </Button>
                                </Row>
                            </Form>
                        </TabPane>
                        <TabPane tab="调车派单" key="2">
                            <Form className="ant-advanced-search-form">
                                <Row>
                                    <Col>
                                        <Form.Item label="起始地址">
                                            <span className="ant-form-text">北京市昌平区城北街道G6辅路附近</span>
                                            <Button className="newBtn" type="primary">
                                                选择地址并获取坐标
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发货联系人">
                                            <Input className="searchInput"
                                                   placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="联系电话">
                                            <Input className="searchInput"
                                                   placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="目的地地址">
                                            <span className="ant-form-text">测试1</span>
                                            <Button className="newBtn" type="primary">
                                                选择地址并获取坐标
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发 货 时 间">
                                            <DatePicker/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="派 单 运 费">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="任 务 描 述">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发 布 状 态" className="publicStatus">
                                            <Button className="allCar" type="primary">
                                                所有车辆
                                            </Button>
                                            <Button className="choseCar" type="primary">
                                                选择车辆
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="selectBox">
                                        <Form.Item label="所 选 车 辆">
                                            <Select>
                                                <Option value="1">正常</Option>
                                                <Option value="2">1</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Button className="reselect" type="primary">
                                                重新选择
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className="position">
                                    <Button className="addTask" type="primary">
                                        添加新任务
                                    </Button>
                                </Row>
                            </Form>
                        </TabPane>
                        <TabPane tab="按里程结算派单" key="3">
                            <Form className="ant-advanced-search-form">
                                <Row>
                                    <Col>
                                        <Form.Item label="起始地址">
                                            <span className="ant-form-text">北京市昌平区城北街道G6辅路附近</span>
                                            <Button className="newBtn" type="primary">
                                                选择地址并获取坐标
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发货联系人">
                                            <Input className="searchInput"
                                                   placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="联系电话">
                                            <Input className="searchInput"
                                                   placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="目的地地址">
                                            <span className="ant-form-text">测试1</span>
                                            <Button className="newBtn" type="primary">
                                                选择地址并获取坐标
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发 货 时 间">
                                            <DatePicker/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="派 单 运 费">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="起 步 价">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="每公里费用">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="任 务 描 述">
                                            <Input className="searchInput" placeholder=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Item label="发 布 状 态" className="publicStatus">
                                            <Button className="allCar" type="primary">
                                                所有车辆
                                            </Button>
                                            <Button className="choseCar" type="primary">
                                                选择车辆
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="selectBox">
                                        <Form.Item label="所 选 车 辆">
                                            <Select>
                                                <Option value="1">正常</Option>
                                                <Option value="2">1</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item>
                                            <Button className="reselect" type="primary">
                                                重新选择
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className="position">
                                    <Button className="addTask" type="primary">
                                        添加新任务
                                    </Button>
                                </Row>
                            </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default AddOrder;