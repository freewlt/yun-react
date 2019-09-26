import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import './../Tbase.css';

class OrdeReport extends Component {
    state = {
        option: {},
    }
    pieOptionFri = item=>{
        return (
            {
                title: {
                    text: item.text,
                    x: 30,
                    y: 5,
                    textStyle:{
                        fontWeight:'bold',
                        fontSize:18,
                        fontColor:'#1863fd'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: item.xdata
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        // dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                yAxis: {
                    type: 'value'
                },
                legend: {
                    y : 30,
                    data:item.lengend
                },
                grid: {
                  top: 100,
                  left: '2%',
                  right: '2%',
                  bottom: '10%',
                  containLabel: true
                },
                color:item.color,
                series: [
                  {
                    name:item.lengend[0],
                    data: item.ydata1,
                    type: 'bar',
                  },
                  {
                    name:item.lengend[1],
                    data: item.ydata2,
                    type: 'bar',
                  },
                  {
                    name:item.lengend[2],
                    data: item.ydata3,
                    type: 'bar',
                  },
                  {
                    name:item.lengend[3],
                    data: item.ydata4,
                    type: 'bar',
                  },
              ]
            }
        )
    }
    pieInit = item =>{
        const _this =this;
        axios.get('../../json/pie.json').then((res) => {
            const optionFir = this.pieOptionFri(res.data.data.orderReportList)
            _this.setState({
                'option': optionFir,
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
            <div className="mainBox ordeReport">
                <div className="mainCon">
                  <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
                </div>
            </div>
        );
    }
}
export default OrdeReport;