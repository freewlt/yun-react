import React, { Component } from 'react';
import arrowLf from '../../static/images/arrowRt.png';
import './index.css';

class Statistic extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const statisList = this.props.recordlist.map(item=>
      <div className="list" key={item.id}>
        <img className="icon" src={item.url} alt=""/>
        <div className="dataList">
          <span>{item.title1}</span>
          <img className="icon" src={arrowLf} alt=""/>
        </div>
      </div>
      )

    return (
      <div className="statistic">
       {statisList}
      </div>
    )
  }
}

export default Statistic;