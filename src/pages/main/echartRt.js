import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import './index.css'

class EchartRt extends Component {
    state = {
        option3: {},
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
                    data:[ '利润', '收入', '支出']
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
                        name:'利润',
                        type:'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        itemStyle: {
                            normal: {
                                // @ts-ignore
                                color:'#fa9a53',
                            },
                        },
                        data:item.ydata3
                    },
                    {
                        name:'收入',
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
                                show: true
                            }
                        },
                        data:item.ydata1
                    },
                    {
                        name:'支出',
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

    pieInit = item =>{
        const _this =this;
        axios.get('../json/pie.json').then((res) => {
            const optionThi = this.pieOptionThi(res.data.data.barZFList)
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
            <div className="echartRt">
                <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
            </div>
        );
    }
}
export default EchartRt;