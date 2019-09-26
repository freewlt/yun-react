import React, {Component}  from 'react';
import Statistic from './statistic';
import EchartLf from './echartLf';
import EchartRt from './echartRt';
import axios from 'axios';
import './index.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordlist:[],
        }
    }

    pieInit = item =>{
        const _this =this;
        axios.get('../../json/lineTable_yun.json').then((res) => {
            _this.setState({
                'recordlist':res.data.data.recordList
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
        <div className="main">
            <Statistic recordlist={this.state.recordlist} />
            <div className="echartBox">
              <EchartLf/>
              <EchartRt/>
            </div>
        </div>
      )
    }
}

export default Main;

