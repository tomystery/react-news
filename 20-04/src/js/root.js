import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,BrowserRouter} from 'react-router-dom';
import {Button} from 'antd/lib/button'; //单个详细指定是那个

import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';//响应式的
import PCUserCenter from './components/pc_user_center';

import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import MobileUserCenter from './components/mobile_user_center';
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
               
                <BrowserRouter>
                    <Route path="/" component={PCIndex}></Route>
                    <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    <Route path='/usercenter' component={PCUserCenter}></Route>
                </BrowserRouter>
                    
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={hashHistory}>
                    <Route path="/" component={MobileIndex}></Route>
                    <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                    <Route path='/usercenter' component={MobileUserCenter}></Route>
                </Router>
                </MediaQuery>
                 
            </div>
           
        );
    }; 
}

ReactDOM.render(<Root />, document.getElementById('mainContainer'));