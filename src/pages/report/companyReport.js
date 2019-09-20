import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import './../Tbase.css';

class CompanyReport extends Component {
    state = {
        option: {},
        option2: {},
        option3: {},
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
                        dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
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
                    }
                ]
            }
        )
    }
    pieOptionSec = item =>{
        return(
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
                        dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
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
                    }
                ]
            }
        )
    }
    pieOptionThi = item=>{
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
                        dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
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
                    }
                ]
            }
        )
    }
    pieInit = item =>{
        const _this =this;
        axios.get('../json/pie.json').then((res) => {
            const optionFir = this.pieOptionFri(res.data.data.carReportList)
            const optionSec = this.pieOptionSec(res.data.data.carReportListSec)
            const optionThi = this.pieOptionThi(res.data.data.carReportListThi)
            _this.setState({
                'option': optionFir,
                'option2': optionSec,
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
            <div className="mainBox companyReport">
                <div className="mainCon">
                    <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
                    <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option2} />
                    <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
                </div>
            </div>
        );
    }
}

export default CompanyReport;