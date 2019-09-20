import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { chooseLfMenu,chooseLfSubMenu } from '../../store/actionCreators';
import './index.css';

const { SubMenu } = Menu;

class MenuLf extends Component {
  constructor(props){
    super(props);
    this.state={
      curId:'',
    }
  }

  //二级面包屑
  handleClick = (item) => {
    console.log(item.name,'item2')
    const { dispatch } = this.props;
    dispatch(chooseLfMenu(item.name))
    this.setState({
      curId: item.id,
    });
  };

  //三级面包屑
  handle(item){
    console.log(item.name,'item3')
    const { dispatch } = this.props;
    dispatch(chooseLfSubMenu(item.name));
  }
  
  render() {
    return (
      <div className="contentLf">
        <Menu className="menuBox"
          mode="inline" theme="dark"> 
          {
            this.props.menuList.map((item) =>{
                //  const curId = this.props.location.pathname.split('/')[2];
                if(item.children){
                  return <SubMenu key={item.id} onClick={this.handleClick.bind(this,item)}
                  title={
                    <span>
                      <img className="iconPic" src={ this.state.curId === item.id ? item.mediumBg: item.medium} alt=""/>
                      <span className="title">{item.name}</span>
                    </span>
                  }>
                {
                  item.children.map((item) => (  
                   <Menu.Item key={item.id}  onClick={this.handle.bind(this,item)}> <Link to ={item.url}> {item.name}</Link></Menu.Item> 
                  )) 
                }
                </SubMenu>
                }else{
                  return <Menu.Item key={item.id} onClick={this.handleClick.bind(this,item)}> 
                      <Link to={item.url}> 
                        <img className={`iconPic`} src={ this.state.curId === item.id ? item.mediumBg: item.medium} alt=""/>
                        <span className="title">{item.name}</span>
                      </Link>
                    </Menu.Item>
                }
            })
          } 
        </Menu>
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
    dispatch 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLf)
