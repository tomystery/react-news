import React from 'react';
import ReactDOM from 'react-dom'; //需要用的时候才需要引入
import BodyChild from './bodyChild';

const defaultProps = {
    username: '这是一个默认的用户名'
};


export default class BodyIndex extends React.Component {

    constructor() {
        super();//调用基类的所有的初始化方法
        this.state = {
            username: "",
            age: 20
        };
    }

    changeUserInfo() {
        this.setState({ age: 60 });

        //第一种方式
       /*  var mySubmitBotton=document.getElementById('submitButton');
        console.log(mySubmitBotton);
        ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red'; */

        //第二种：refs
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';

    };
    handleChildValueChange(event) {
        this.setState({ age: event.target.value })
    }


    render() {



        return (
            <div>
                <h1>这是页面的主体内容</h1>
                <p>接收到的父页面的属性：userid:{this.props.userid} username:{this.props.username}</p>

                <p>age:{this.state.age}</p>
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)} />
                
                
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )

    }
}


BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired

};


BodyIndex.defaultProps = defaultProps;