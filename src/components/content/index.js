import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';
// import SearchCriteria from '../../components/searchCriteria'
// import '../../pages/index.css'


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
          <Route path="/yun/main/index" exact component={Main}></Route>
          <Route path="/yun/location/index" exact component={Location}></Route>
          <Route path="/yun/fleetManage/driverManage" exact component={DriverManage}></Route>
          <Route path="/yun/fleetManage/carManage" exact component={CarManage}></Route>
          <Route path="/yun/fleetManage/approval" exact component={Approval}></Route>
          <Route path="/yun/fleetManage/attached" exact component={Attached}></Route>
          <Route path="/yun/memberManage/index" exact component={MemberManage}></Route>
          <Route path="/yun/schedul/orderManage" exact component={OrderManage}></Route>
          <Route path="/yun/schedul/addOrder" exact component={AddOrder}></Route>
          <Route path="/yun/schedul/seleCarrier" exact component={SeleCarrier}></Route>
          <Route path="/yun/schedul/carQuery" exact component={CarQuery}></Route>
          <Route path="/yun/transportManage/transportManage" exact component={TransportManage}></Route>
          <Route path="/yun/transportManage/travelManage" exact component={TravelManage}></Route>
          <Route path="/yun/marketManage/noticeMarket" exact component={NoticeMarket}></Route>
          <Route path="/yun/marketManage/noticeRecord" exact component={NoticeRecord}></Route>
          <Route path="/yun/marketManage/noticeTemplate" exact component={NoticeTemplate}></Route>
          <Route path="/yun/report/ordeReport" exact component={OrdeReport}></Route>
          <Route path="/yun/report/caReport" exact component={CaReport}></Route>
          <Route path="/yun/report/departmentReport" exact component={DepartmentReport}></Route>
          <Route path="/yun/report/companyReport" exact component={CompanyReport}></Route>
          <Route path="/yun/settlement/orderSettlement" exact component={OrderSettlement}></Route>
          <Route path="/yun/settlement/waybillSettlement" exact component={WaybillSettlement}></Route>
          <Route path="/yun/paymentRecord/paymentRecord" exact component={PaymentRecord}></Route>
          <Route path="/yun/enterpryInfo/enterpryInfo" exact component={EnterpryInfo}></Route>
          <Route path="/yun/enterpryInfo/administrator" exact component={Administrator}></Route>
          <Route path="/yun/enterpryInfo/changePwd" exact component={ChangePwd}></Route>
          <Route path="/yun/enterpryInfo/systemInfo" exact component={SystemInfo}></Route>
          <Route path="/yun/enterpryInfo/addAdmin" exact component={AddAdmin}></Route>


          <Route component={Home}></Route>
       
      </div>
    );
  }
}

export default Content
