import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';
import SearchCriteria from '../../components/searchCriteria'
import '../../pages/index.css'


//位置监控
import Main from '../../pages/main/index';
import Location from '../../pages/location/index';
import DriverManage from '../../pages/fleetManage/driverManage';
import CarManage from '../../pages/fleetManage/carManage';
import Approval from '../../pages/fleetManage/approval';
import Attached from '../../pages/fleetManage/attached';
import MemberManage from '../../pages/memberManage/index';
import OrderManage from '../../pages/schedul/orderManage';
import AddOrder from '../../pages/schedul/addOrder';
import SeleCarrier from '../../pages/schedul/seleCarrier';
import CarQuery from '../../pages/schedul/carQuery';
import TransportManage from '../../pages/transportManage/transportManage';
import TravelManage from '../../pages/transportManage/travelManage';
import NoticeMarket from '../../pages/marketManage/noticeMarket';
import NoticeRecord from '../../pages/marketManage/noticeRecord';
import NoticeTemplate from '../../pages/marketManage/noticeTemplate';
import OrdeReport from '../../pages/report/ordeReport';
import CaReport from '../../pages/report/caReport';
import DepartmentReport from '../../pages/report/departmentReport';
import CompanyReport from '../../pages/report/companyReport';
import OrderSettlement from '../../pages/settlement/orderSettlement';
import WaybillSettlement from '../../pages/settlement/waybillSettlement';
import PaymentRecord from '../../pages/paymentRecord/paymentRecord';
import EnterpryInfo from '../../pages/enterpryInfo/enterpryInfo';
import Administrator from '../../pages/enterpryInfo/administrator';
import ChangePwd from '../../pages/enterpryInfo/changePwd';
import SystemInfo from '../../pages/enterpryInfo/systemInfo';
import AddAdmin from '../../pages/enterpryInfo/addAdmin';
import Home from '../../pages/home.js';

import './index.css';


class Content extends Component {
  render() {

    return (
      <div className="content">
        <Breadcrumb/>
          <Route path="/main/index" exact component={Main}></Route>
          <Route path="/location/index" exact component={Location}></Route>
          <Route path="/fleetManage/driverManage" exact component={DriverManage}></Route>
          <Route path="/fleetManage/carManage" exact component={CarManage}></Route>
          <Route path="/fleetManage/approval" exact component={Approval}></Route>
          <Route path="/fleetManage/attached" exact component={Attached}></Route>
          <Route path="/memberManage/index" exact component={MemberManage}></Route>
          <Route path="/schedul/orderManage" exact component={OrderManage}></Route>
          <Route path="/schedul/addOrder" exact component={AddOrder}></Route>
          <Route path="/schedul/seleCarrier" exact component={SeleCarrier}></Route>
          <Route path="/schedul/carQuery" exact component={CarQuery}></Route>
          <Route path="/transportManage/transportManage" exact component={TransportManage}></Route>
          <Route path="/transportManage/travelManage" exact component={TravelManage}></Route>
          <Route path="/marketManage/noticeMarket" exact component={NoticeMarket}></Route>
          <Route path="/marketManage/noticeRecord" exact component={NoticeRecord}></Route>
          <Route path="/marketManage/noticeTemplate" exact component={NoticeTemplate}></Route>
          <Route path="/report/ordeReport" exact component={OrdeReport}></Route>
          <Route path="/report/caReport" exact component={CaReport}></Route>
          <Route path="/report/departmentReport" exact component={DepartmentReport}></Route>
          <Route path="/report/companyReport" exact component={CompanyReport}></Route>
          <Route path="/settlement/orderSettlement" exact component={OrderSettlement}></Route>
          <Route path="/settlement/waybillSettlement" exact component={WaybillSettlement}></Route>
          <Route path="/paymentRecord/paymentRecord" exact component={PaymentRecord}></Route>
          <Route path="/enterpryInfo/enterpryInfo" exact component={EnterpryInfo}></Route>
          <Route path="/enterpryInfo/administrator" exact component={Administrator}></Route>
          <Route path="/enterpryInfo/changePwd" exact component={ChangePwd}></Route>
          <Route path="/enterpryInfo/systemInfo" exact component={SystemInfo}></Route>
          <Route path="/enterpryInfo/addAdmin" exact component={AddAdmin}></Route>


          <Route component={Home}></Route>
       
      </div>
    );
  }
}

export default Content
