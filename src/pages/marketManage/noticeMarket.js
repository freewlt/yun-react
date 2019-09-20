import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Form, Input, Row, Col, Radio, Checkbox } from 'antd';
import ModalMarket from '../../components/modal/modalMarket';
import { isShow } from '../../store/actionCreators';
import './../Tbase.css';

class NoticeMarket extends React.Component {
    
    //弹窗显示
    showModal = () => {
        const {dispatch} = this.props;
        dispatch(isShow(true))
    };

    render() {
        return (
            <div className="mainBox noticeMarket">
               <div className="mainCon">
                    <Form className="ant-advanced-search-form">
                        <Row>
                            <Col>
                                <Form.Item label="通知标题">
                                    <Input className="searchInput"
                                        placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item>
                                    <Button className="choseCar" type="primary">
                                    <Link to="/marketManage/noticeTemplate"> 
                                        选择模板  
                                        <span className="newIcon"></span>
                                    </Link> 
                                    </Button>
                                    
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item label="通知内容">
                                    <Input className="searchInput" placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item label="客户类型">
                                  <Radio.Group>
                                    <Radio value="a">会员通知 </Radio>
                                    <Radio value="b">司机通知</Radio>
                                  </Radio.Group>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item label="选择客户">
                                    <Button className="choseCar" type="primary" onClick={this.showModal}>
                                        选择
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item label="已选信息">
                                    <Checkbox.Group>
                                        <Checkbox value="wew">短信通知</Checkbox>
                                    </Checkbox.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className="position">
                            <Button className="addTask" type="primary">
                                提交
                            </Button>
                        </Row>
                    </Form>
                    <ModalMarket/>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NoticeMarket);