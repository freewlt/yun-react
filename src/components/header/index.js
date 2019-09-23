import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Badge , Menu, Dropdown, Icon } from 'antd';

import './index.css';
import Logo from './../../static/images/header/logo.png';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
        

        return (
            <div className="header">
                <div className="logoBox">
                    <img className="logo" src={Logo} title="油站管理系统" alt=''/>
                </div>
                <div className="headerRt">
                    <a href="#">
                        <Badge count={5}>
                            <span className="head-example" />消息
                        </Badge>
                    </a>
                    <div className="account">
                        <img className="accountPic" src={Logo} alt=""/>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                            Hover me <Icon type="down" />
                            </a>
                      </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
    }
  };
  const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)