import React from 'react';
import { Row, Col } from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'
class CommonComments extends React.Component {
    constructor(){
        super();
        this.state={
            comments:''
        };
        componentDidMount(){
var MyFetchOptions={
    method='GET'
};
fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
				this.setState({comments: json});
			})
        };
  handleSubmit() {};

   render() {
       let {getFiledProps}=this.props.form;
       const {comments}=this.props;
       const commentList=comments.length? 
       comments.map((comment,index)=>(
        <Card key={index} title={comment.UserName} extra={<a href='#'>发布于{comment.datetime}</a>}>
        <p>{comment.Comments}</p>
        </Card>
       ))
       :
       '没有加载任何评论';

       return(
           <div className="comment">
           <Row>
               <Col span={24}>
               {commentList}
               <Form onSubmit={this.handleSubmit.bind(this)}>
               <FormItem label='您的评论'>
               <Input type='textarea' placeholder='随便写'{...getFieldProps('remark',{initialState})} />
               </FormItem>
               <Button type='primary' htmlType='submit'>提交评论</Button>
               </Form>
               </Col>
           </Row>

           </div>
       );
   };
}
}

export default CommonComments=Form.create({})(CommonComments);