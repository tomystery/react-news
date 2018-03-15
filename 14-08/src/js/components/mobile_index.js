import React from "react";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import { Tabs } from "antd";
import MobileList from "./mobile_list";
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Tabs defaultActiveKey="1" >
          <TabPane tab="社会" key="1">
            <MobileList type="shehui" count={20} />
          </TabPane>
          <TabPane tab="国内" key="2">
            <MobileList type="guonei" count={20} />
          </TabPane>

          <TabPane tab="娱乐" key="3">
            <MobileList type="yule" count={20} />
          </TabPane>
          <TabPane tab="科技" key="4">
            <MobileList type="keji" count={20} />
          </TabPane>
          <TabPane tab="时尚" key="5">
            <MobileList type="shishang" count={20} />
          </TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}
