import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Select } from 'antd';
import { chooseMenu, chooseLfMenu, chooseLfSubMenu, chooseLanguage } from '../../store/actionCreators';
import intl from 'react-intl-universal';

import './index.css';
import Logo from './../../static/images/header/logo.png';
// import iconEchart from './../../static/images/header/iconEchart.png';
// import iconMoney from './../../static/images/header/iconMoney.png';
// import iconOilCard from './../../static/images/header/iconOilCard.png';
// import iconTable from './../../static/images/header/iconTable.png';
// import iconSys from './../../static/images/header/iconSys.png';
import cashier from './../../static/images/header/cashier.png';
import iconMin from './../../static/images/header/min.png';
import iconMax from './../../static/images/header/max.png';
import iconClose from './../../static/images/header/close.png';
const { Option } = Select;
// const navList = [
//     {id:1,title:'经营状况',pic:iconEchart,path:'/busCircumstance'},
//     {id:51,title:'收银业务',pic:iconMoney,path:'/cashier'},
//     {id:21,title:'油卡业务',pic:iconOilCard,path:'/oilCard'},
//     {id:45,title:'查询报表',pic:iconTable,path:'/yun'},
//     {id:16,title:'系统配置',pic:iconSys,path:'/system'},
// ]

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
        }
    }
    
    handleClick = (e) => {
        const {dispatch} = this.props;
        dispatch(chooseMenu(e.title))
        dispatch(chooseLfMenu(''))
        dispatch(chooseLfSubMenu(''))
        this.setState({
            current: e.id,
        });
    };

    changeLanguage(lang) {
        const {dispatch} = this.props;
        //  dispatch(chooseLanguage(lang))
        // this.setState({currentLocale: 'en_US'});
        if(lang==='zh-CN'){
            dispatch(chooseLanguage('en_US'))
            console.log(this.props.currentLocale)
        }
         if(lang==='en_US'){
            dispatch(chooseLanguage('zh-CN'))
            this.setState({currentLocale: 'zh-CN'});
            console.log(this.props.currentLocale)
        }
    };

    componentDidMount(){
        this.changeLanguage()
    }

    render(){
        
        // const navLists = navList.map((item) =>
        //     <Link className={ item.id === this.state.current ? 'active menuNav' :'menuNav' } to={item.path} key={item.id} onClick={this.handleClick.bind(this,item)}>
        //         <img className="pic" src={item.pic} alt=""/>
        //         <span className="title">{item.title} </span>
        //     </Link>
        // );

        return (
            <div className="header">
                <div className="logoBox">
                    <img className="logo" src={Logo} title="油站管理系统" alt=''/>
                </div>
                <div className="menuBox">
                   { 
                       //{navLists}
                    }
                </div>
                <div className="handleBox">
                     <div className="handleDetail">
                        {
                        // <marquee className="handleDeCon">
                        //     <div className="detail">
                        //         <img className="iconPic" src={cashier} title="收银员" alt=""/>
                        //         <span className="title">收银员：</span>
                        //         <span className="title">0070*10-赵奕欢</span>
                        //     </div>
                        //     <div className="detail">
                        //         <span className="title">班次号：</span>
                        //         <span className="title">0070*10081245</span>
                        //     </div>
                        //     <div className="detail">
                        //         <span className="title">班次：</span>
                        //         <span className="title">中班-已上班</span>
                        //     </div>
                        // </marquee>
                        }
                        <div className="detail handle">
                            <img className="iconPic" src={iconMin} title="最小号" alt=""/>
                            <img className="iconPic" src={iconMax} title="最大化" alt=""/>
                            <img className="iconPic close" src={iconClose} title="关闭" alt=""/>
                        </div>
                     </div>
                    <div className="handleBtnBox">
                        <Button className="handleBtn" type="primary" shape="round">
                            上班
                            {intl.get('duty')}
                            <span className="duty"></span>
                        </Button>
                        <Select className="selectLanguage" placeholder="中文"
                                onChange={this.changeLanguage.bind(this)}>
                            <Option value="zh-CN">中文</Option>
                            <Option value="en-US">English</Option>
                        </Select>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
      list: state.number,
      curId:state.current,
      currentLocale:state.currentLocale,
    }
  };
  const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)