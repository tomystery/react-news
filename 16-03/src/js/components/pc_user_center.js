import React from 'react';
import { Row, Col } from 'antd';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';
const TabPane = Tabs.TabPane;
import {
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Card,
	notification,
    Upload,
    Menu, 
    Icon,
    Modal
} from 'antd';


export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state={
            priviewImage:'',
            priviewVisible:false
        }
    }

    render() {

        

        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            listType: 'picture-card',
            headers: {
                "Access-Control-Allow-Origin": '*'
            },
            defaultFileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
            }],
            onPreview: (file) => {
                this.setState({
                    priviewImage: file.url,
                    priviewVisible: true,
                });
            },
        };

        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">我的收藏列表</TabPane>
                            <TabPane tab="我的评论列表" key="2">我的评论列表</TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus" />
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" className="upload-example">
                                        <img alt="example" src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
                                        <span>示例</span>
                                    </a>
                                    <Modal visible={this.state.priviewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" src={this.state.priviewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <PCFooter />
            </div>
        )
    }
}