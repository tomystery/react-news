import React from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
const TabPane = Tabs.TabPane;


export default class PCUserCenter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MobileHeader />
                <Row>  
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">我的收藏列表</TabPane>
                            <TabPane tab="我的评论列表" key="2">我的评论列表</TabPane>
                            <TabPane tab="头像设置" key="3">头像设置</TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter  />
            </div>
        )
    }
}