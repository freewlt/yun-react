import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import './index.css'

class AdvancedSearchForm extends Component {

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row>
          <Col>
            <Form.Item label="班次号">
              <Input className="searchInput"
                placeholder="班次号"
              />
            </Form.Item>
          </Col>
          <Col>
            <Button className="searchBtn" type="primary" htmlType="submit">
              搜索
              <span className="searchIcon"></span>
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default  Form.create({ name: 'coordinated' })(AdvancedSearchForm);