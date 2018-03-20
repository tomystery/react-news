import React from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
const TabPane = Tabs.TabPane;


export default class PCUserCenter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">我的收藏列表</TabPane>
                            <TabPane tab="我的评论列表" key="2">我的评论列表</TabPane>
                            <TabPane tab="头像设置" key="3">头像设置</TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <PCFooter />
            </div>
        )
    }
}