import React from 'react';
import MenuLf from '../components/menuLf';
import Content from '../components/content';
import './index.css';
import axios from 'axios';

class Location extends React.Component {
    constructor(props){
      super(props);
      this.state={
				menuList:[],
				mapData:[]
			};
    }
   
    render() {
        return (
            <div className="containerRt">
								<MenuLf menuList={this.state.menuList}/>
								<Content/>
            </div>
        );
		}
		
		componentDidMount(){
			const _this = this;
			axios.get('./json/map_yun.json').then((res) => {
				console.log(res,'res')
				_this.setState({ mapData: res.data.mapData });
			});
			axios.get('./json/menuLf_yun.json').then((res) => {
				_this.setState({ menuList: res.data.list });
			});
		}

}
export default Location;