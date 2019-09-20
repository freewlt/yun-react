import React from 'react';
import  Header from './components/header';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MenuLf from './components/menuLf';
import Content from './components/content';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList:[],
        }
    };

  

    render() {
        
        return (
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <div className="containerRt">
                        <MenuLf menuList={this.state.menuList}/>
                        <Content/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

    componentDidMount(){
        const _this = this;
        axios.get('../json/menuLf_yun.json').then((res) => {
            _this.setState({ menuList: res.data.list })
        });
    }

    
}


const mapStateToProps = (state)=>{
    return {
      currentLocale:state.currentLocale,
    }
  };
  const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)