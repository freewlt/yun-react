import React,{ Component } from 'react';
import { Form, } from 'antd';


class AdvancedSearchForm extends Component {

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        
      </Form>
    );
  }
}

export default  Form.create({ name: 'coordinated' })(AdvancedSearchForm);