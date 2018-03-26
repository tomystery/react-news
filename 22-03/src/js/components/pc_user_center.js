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
        this.state = {
            userComment: '',
            userCollection: '',
            priviewImage: '',
            priviewVisible: false
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({ userCollection: json });
        });
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({ userComment: json });
        });
    }

    render() {
        const { userCollection, userComment } = this.state;



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

        const userCollectionList = userCollection.length ? userCollection.map((uc, index) => (
            <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                <p>{uc.Title}</p>
            </Card>
        )) : <p>未加载到任何数据</p>

        const userCommentList = userComment.length ? userComment.map((comment, index) => (
            <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                <p>{comment.Comments}</p>
            </Card>
        )) : <p>您还未发表过任何评论</p>

        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>{userCollectionList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>{userCollectionList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
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