import React from 'react';
import ReactDOM from 'react-dom'; 
import BodyChild from './bodyChild';

import ReactMixin from 'react-mixin'; //要把包也导入进来
import MixinLog  from './mixins';
import { Input } from 'antd';

const defaultProps = {
    username: '这是一个默认的用户名'
};


export default class BodyIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            age: 20
        };
    }

    changeUserInfo(age) {
        this.setState({ age: age });

      
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';

        MixinLog.log() //打印出来
       

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
                
            
                <Input placeholder="Basic usage" />
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )

    }
}


BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired

};


BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.prototype, MixinLog);


