import React from 'react';
import axios from 'axios';
import Design from './components/login/design';

//引入echarts主模块
import echarts from 'echarts/lib/echarts';
import Bmap from 'echarts/extension/bmap/bmap';
import 'echarts/map/js/china';
//引入地图和柱状图
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.css'


var series=[];
const style={
    width:'80%',
    height:'100%',
};
class LoginBox extends React.Component{
    state = {
        option3: {},
    }

    pieOptionThi = item=>{
        return (
            {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(166, 200, 76, 0.82)',
                    borderColor: '#FFFFCC',
                    showDelay: 0,
                    hideDelay: 0,
                    enterable: true,
                    transitionDuration: 0,
                    extraCssText: 'z-index:100',
                    formatter: function(params, ticket, callback) {
                        //根据业务自己拓展要显示的内容
                        var res = "";
                        var name = params.name;
                        var value = params.value[params.seriesIndex + 1];
                        res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                        return res;
                    }
                },
                backgroundColor:"#013954",
                visualMap: { //图例值控制
                    min: 0,
                    max: 1,
                    calculable: true,
                    show: true,
                    color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    zoom: 1.2,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true, //是否允许缩放
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 69, 89, .5)', //地图背景色
                            borderColor: '#516a89', //省市边界线00fcff 516a89
                            borderWidth: 1
                        },
                        emphasis: {
                            color: 'rgba(37, 43, 61, .5)' //悬浮背景
                        }
                    }
                },
                series: series,
            }
        )
    }

    pieInit = item =>{
        axios.get('../json/login.json').then((res) => {
            var myChart = echarts.init(document.getElementById('main'));
            var echarData =  res.data.data;

            var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = echarData.geoCoordMap[dataItem[0].name];
                    var toCoord = echarData.geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord
                        }, {
                            coord: toCoord
                        }]);
                    }
                }
                return res;
            };

            var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
            var series = [];
            [ ['新乡', echarData.BJData],
                ['九江', echarData.SHData],
                ['新疆', echarData.GZData]].forEach(function (item, i) {
                series.push({
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 1,
                        //coordinateSystem: 'bmap',
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.7,
                            color: '#fff',
                            // shadowBlur: 10,
                            symbolSize: 3
                        },
                        lineStyle: {
                            normal: {
                                color: color[i],
                                width: 0,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'lines',
                        zlevel: 2,
                        coordinateSystem: 'bmap',
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            symbol: planePath,
                            symbolSize: 15
                        },
                        lineStyle: {
                            normal: {
                                color: color[i],
                                width: 1,
                                opacity: 0.4,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0] + ' Top10',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        symbolSize: function (val) {
                            return val[2] / 8;
                        },
                        itemStyle: {
                            normal: {
                                color: color[i]
                            }
                        },
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: echarData.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                            };
                        })
                    });
            });

            var option = {
                backgroundColor: '#080a20',
                title : {
                },
                tooltip : {
                    trigger: 'item'
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#132937',
                            borderColor: '#0692a4'
                        },
                        emphasis: {
                            areaColor: '#0b1c2d'
                        }
                    }
                },
                bmap: {
                    center: [107,34],
                },
                series: series
            };
            myChart.setOption(option);

        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount(){
        this.pieInit()
    }

    render() {
        return (
            <div className="login">
                <div id="main" style={style}></div>
                <div className="designBox">
                    <Design/>
                </div>
                <p className="copyRight">@易生活版权所有2015-2019</p>
            </div>
        )
    }
}

export default LoginBox;