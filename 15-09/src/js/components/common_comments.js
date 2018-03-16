import React from 'react';
import {
  Row,
  Col,
  Card
} from 'antd';
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
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router'
class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
  };
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({
        comments: json
      });
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
      this.componentDidMount();
    })
  };

  addUserCollection(){
var myFetchOptions={
  method:'GET'
};
fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+yhis.props.uniquekey,myFetchOptions)
.then(response=>response.json())
.then(json=>{
  //收藏成功以后进行的提醒
})  
}


  render() {
    let {
      getFieldProps
    } = this.props.form;
    const {
      comments
    } = this.state;
    const commentList = comments.length ?
      comments.map((comment, index) => (<Card key={index} title={comment.UserName} extra={<a href='#' > 发布于 {comment.datetime} </a>}> <p> {comment.Comments} </p > </Card>)) : '没有加载任何评论';


    return (<div className="comment" >
      <Row>
        <Col span={24} > {commentList}

          <Form onSubmit={this.handleSubmit.bind(this)} >
            <FormItem label='您的评论' >
              <Input type='textarea' placeholder='随便写' {...getFieldProps('remark', { initialValue: '' })} />
            </FormItem > <Button type='primary' htmlType='submit'> 提交评论 </Button>
            <Button type='primary' htmlType='submit' onClick={this.addUserCollection().bind(this)}> 点击收藏 </Button>
          </Form > </Col> </Row >
    </div>

    );
  };
}


export default CommonComments = Form.create({})(CommonComments);
