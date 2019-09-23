import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import axios from 'axios';
import './index.css'

class EchartLf extends Component {
    state = {
        option: {},
        option2: {},
        option3: {},
        option4: {},
    }
    pieOptionFri = item=>{
        return (
            {
                title: {
                    text: item.text,
                    x: 30,
                    y: 5,
                    textStyle:{
                        fontWeight:'normal',
                        fontSize:14,
                        fontColor:'#1863fd'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: item.xdata
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                  top: 30,
                  left: '2%',
                  right: '2%',
                  bottom: '10%',
                  containLabel: true
                },
                series: [
                  {
                    data: item.ydata1,
                    itemStyle: {
                      normal: {
                        // @ts-ignore
                        color: '#60dbbe'
                      },
                    },
                    type: 'bar',
                  },
              ]
            }
        )
    }
    pieOptionSec = item =>{
        return(
            {
                title: {
                    text: item.text,
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    y: 6,
                    data: ['里程','时长']
                },
                color: ['#ffa052','#f15fa0'],
                grid: {
                    top: 30,
                    left: '2%',
                    right: '3%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: item.xdata
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '里程',
                        type: 'line',
                        data: item.ydata1
                    },
                    {
                        name: '时长',
                        type: 'line',
                        itemStyle: {
                          normal: {
                            // @ts-ignore
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              { offset: 0, color: '#14f7ec' },
                              { offset: 0.6, color: '#64e5c6' },
                            ]),
                          },
                        },
                        data: item.ydata2,
                    },
                ]
            }
        )
    }
    pieOptionThi = item=>{
      return (
        {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:[ '今日排班次数', '明日接班次数']
            },
            grid: {
                top: 30,
                left: '1%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : item.yTitle
                }
            ],
            series : [
                {
                    name:'今日排班次数',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {
                      normal: {
                        // @ts-ignore
                        color: '#5d91ff',
                      },
                    },
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:item.ydata1
                },
                {
                    name:'明日接班次数',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {
                      normal: {
                        // @ts-ignore
                        color: '#60dbbe',
                      },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data:item.ydata2
                }
            ]
        }
      )
    }
    pieOptionFor = item => {
        return (
            {
                title: {
                    text: item.text,
                    x: 100,
                    y: 10,
                    textStyle:{
                        fontWeight:'normal',
                        fontSize:16,
                        fontColor:'#1863fd'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                // legend: {
                //     orient:'vertical',
                //     x: 'right',
                //     y: '14%',
                //     data:item.type
                // },
                color:item.color,
                series: [
                    
                  {
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                  },
                  {
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{b|{b}：}{c}  {per|}',
                            rich: {}
                        }
                    },
                    data:item.xdata
                  }
                ]
            }
        )
    }
    pieInit = item =>{
        const _this =this;
        axios.get('../json/pie.json').then((res) => {
            const optionFir = this.pieOptionFri(res.data.data.barList)
            const optionSec = this.pieOptionSec(res.data.data.lineList)
            const optionThi = this.pieOptionThi(res.data.data.barDoubleList)
            const optionFor= this.pieOptionFor(res.data.data.pieList)
            _this.setState({
                'option': optionFir,
                'option2': optionSec,
                'option3': optionThi,
                'option4': optionFor,
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
            <div className="echartLf">
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option2} />
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option4} />
             </div>
        );
    }
}
export default EchartLf;