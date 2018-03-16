import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;


 class MobileHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top',//选中的状态
            modalVisible: false,//控制模态框是否可见
            action: 'login', //控制那个的注册还是登陆
            haslogined: false,//是否已经登陆
            userNickName: '',
            userid: 0

        };
    }

    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };

    handleClick(e) {
        if (e.key = "register") {
            this.setState({ current: 'register' });
            this.setModalVisible(true);
        } else {
            {
                this.setState({ current: e.key });
            }
        }
    }

    handleSubmit(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username=" + formData.userName + "&password=" + formData.password
            + "&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ userNickName: json.NickUserName, userid: json.UserId });
            });
        message.success("请求成功！");
        this.setModalVisible(false);
    };

login(){
this.setModalVisible(true);
};



    render() {
        //用来取全局表单的
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox" />

            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)} />

        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo" />
                    <span>ReactNews</span>
                    {userShow}
                </header>

                <Modal title="用户中心" wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible} onClick={() => this.setModalVisible(false)} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('r_userName') } />
                                </FormItem>

                                <FormItem label="密码">
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password') } />
                                </FormItem>

                                <FormItem label="确认密码">
                                    <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword') } />
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

//对form进行二次的封装
export default MobileHeader=Form.create({})(MobileHeader);
