import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component {

    constructor() {
        super();//调用基类的所有的初始化方法
        this.state = {
            username: "parry",
            age: 20
        };
    }

    changeUserInfo() {
        this.setState({ age: 60 });
    };
    handleChildValueChange(event) {
        this.setState({ age: event.target.value })
    }


    render() {



        return (
            <div>
                <h1>这是body</h1>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )

    }
}