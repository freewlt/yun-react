import React from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import Design from './components/login/design';


class LoginBox extends React.Component{
    state = {
        option3: {},
        series:[]
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
                series: this.state.series
            }
        )
    }

    pieInit = item =>{
        const _this =this;
        axios.get('../json/login.json').then((res) => {
            var echarData =  res.data.data;
            var convertData = function(data) {
                var res = [];
                for(var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = echarData.chinaGeoCoordMap[dataItem[0].name];
                    var toCoord = [116.4551,40.2539];
                    if(fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem[0].value
                        }, {
                            coord: toCoord,
                        }]);
                    }
                }
                return res;
            };
            [['北京市', echarData.chinaDatas]].forEach(function(item, i) {
                _this.state.series.push(
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 5, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                width: 1, //尾迹线条宽度
                                opacity: 1, //尾迹线条透明度
                                curveness: .3 //尾迹线条曲直度
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: { //涟漪特效
                            period: 4, //动画时间，值越小速度越快
                            brushType: 'stroke', //波纹绘制方式 stroke, fill
                            scale: 4 //波纹圆环最大限制，值越大波纹越大
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right', //显示位置
                                offset: [5, 0], //偏移设置
                                formatter: function(params){//圆环显示文字
                                    return params.data.name;
                                },
                                fontSize: 13
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: 'circle',
                        symbolSize: function(val) {
                            return 5+ val[2] * 5; //圆环大小
                        },
                        itemStyle: {
                            normal: {
                                show: false,
                                color: '#f00'
                            }
                        },
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[0].name,
                                value: echarData.chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                            };
                        }),
                    },
                    //被攻击点
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            period: 4,
                            brushType: 'stroke',
                            scale: 4
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                //offset:[5, 0],
                                color: '#0f0',
                                formatter: '{b}',
                                textStyle: {
                                    color: "#0f0"
                                }
                            },
                            emphasis: {
                                show: true,
                                color: "#f60"
                            }
                        },
                        symbol: 'pin',
                        symbolSize: 50,
                        data: [{
                            name: item[0],
                            value:echarData.chinaGeoCoordMap[item[0]].concat([10]),
                        }],
                    }
                );
            });
            const optionThi = this.pieOptionThi()
            _this.setState({
                'option3': optionThi,
            })
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
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
                <div className="designBox">
                    <Design/>
                </div>
            </div>
        )
    }
}

export default LoginBox;