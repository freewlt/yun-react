import React, { Component } from "react";
import { Map, Marker, InfoWindow } from 'react-amap';
import './../../pages/Tbase.css'
 
class WebMap3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            value: 1,
            position: {
              longitude: 120,
              latitude: 39.911984
            },
            offset: [0, 0],
            size: {
              width: 200,
              height: 140,
            },
          }
        this.windowEvents = {
            created: (iw) => {console.log(iw)},
            open: () => {console.log('InfoWindow opened')},
            close: () => {console.log('InfoWindow closed')},
            change: () => {console.log('InfoWindow prop changed')},
        }
        this.data = props;
        //地图事件
        this.amapEvents = {
            created: (mapInstance) => {
                 //eslint-disable-next-line  
                var marker = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                     //eslint-disable-next-line  
                    position: new AMap.LngLat(116.39, 39.9),
                    title: '北京!!'
                });
                 
                mapInstance.add(marker);
            }
        };
        //点位事件
        this.markerEvents = {
            click: (markerInstance) => {
                this.Position = [markerInstance.lnglat.lng,markerInstance.lnglat.lat];
                this.setState({
                    isShow: true,
                });
            }
        };
        
    }
 
    render() {
        const html = `<div><h4>高德软件有限公司</h4>
            <p>电话 : 010-84107000   邮编 : 100102,地址 : 北京市望京阜通东大街方恒国际中心A座16</p>
            <p>Button: ${this.state.value}</p>
        </div>`;
        let {city, mapCenter,  mapZoom, mapKey, status, plugins} = this.props.mapData;
        return (
            <div className="locationMap">
                <Map amapkey={mapKey} city={city} zoom={mapZoom} center={mapCenter} status={status} plugins={plugins} events={this.amapEvents}>
                    <InfoWindow
                    position={this.state.position}
                    visible={this.state.visible}
                    isCustom={false}
                    content={html}
                    size={this.state.size}
                    offset={this.state.offset}
                    events={this.windowEvents}/>
                    {this.data.mapData.mapMaker.map((comment,index) => (
                        <Marker position={comment.lnglat} events={this.markerEvents} key={index}>
                        </Marker>
                    ))}
                </Map>
            </div>
        );
    }
 
}
 
export default WebMap3;