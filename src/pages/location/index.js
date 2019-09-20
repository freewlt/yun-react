/**
 * Created by Administrator on 2019/9/12.
 */
import React from "react";
import { connect } from 'react-redux';
import { Tabs, Button, Pagination  } from 'antd';
import axios from 'axios';
import Map from "../../components/location/map";
import './../Tbase.css';
const { TabPane } = Tabs;

let mapData = {
    city: "北京",
    mapCenter:[116.418261, 39.921984],  //城市定位，经纬度定位只能选择1个
    mapZoom: 10, //地图缩放
    mapKey: '5723567a2615ad62c14b5cd3bb958066 ',   //你的高德key
    status: { //是否支持放大拖拽
        zoomEnable: true,
        dragEnable: true,
    },
    mapMaker :[  //marker标记点(list)
        {lnglat:[116.401728,39.911984],text:'egeg大哥哥'},
        {lnglat:[116.436691,39.921984],text:'要显示的内容2'}
    ],
    plugins:['ToolBar']
};

let carList = [
	{id:1,title:'冀F359FQ'},
	{id:11,title:'冀F09W45'},
	{id:15,title:'冀F12W45'},
	{id:17,title:'冀F359FQ'},
]

class LocaMap extends React.Component {
    constructor(props){
        super(props);
        this.state={
			mapData:mapData,
			launch:'启动'
		};
	}
	
	//是否启动刷新
	launchClick = e =>{
		if(this.state.launch === '启动'){
			this.setState({
				launch:'停止'
			})
		}
		if(this.state.launch === '停止'){
			this.setState({
				launch:'启动'
			})
		}
	}

	//是否全部激活
	activateClick = e =>{
		alert('指令已发送')
	}

    render() {	

		//车牌号列表
		const carListBtn = carList.map(item=>{
			return (
				<Button className="searchBtn" key={item.id}>
					{item.title}
				</Button>
			)
		})
		
        return (
			<div className="mainBox PositionMonitor">
				<div className="mainCon">
					<Tabs>
						<TabPane tab="车辆位置信息" key="1">
							<div className="title">
								<div className="detail">
									15秒定时刷新
									<Button className="launch
									" type="primary" onClick={this.launchClick.bind(this)}>
										{this.state.launch}
									</Button>
									总车辆：3台,在线车辆：0台，离线车辆：3台
								</div>
								<Button className="searchBtn" type="primary" onClick={this.activateClick.bind(this)}>
									全部激活
								</Button>
							</div>
						</TabPane>
					</Tabs>
					<div className="mapDeatil">
						<Map title="map" mapData={this.state.mapData}/>
						<div className="carBtnGroup">
							{carListBtn}
							<Pagination className="pageDetail" showQuickJumper defaultCurrent={2} total={20} />
						</div>
					</div>
				</div>		

            </div>
        );
    }

    componentDidMount(){
        //const _this = this;
        axios.get('./json/map_yun.json').then((res) => {
            //_this.setState({ mapData: res.data.mapData });
        });
    }


}

const mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        //dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaMap)