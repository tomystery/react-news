import React from 'react';
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
    };
    handleChildValueChange(event) {
        this.setState({ age: event.target.value })
    }


    render() {



        return (
            <div>
                <h1>这是body</h1>
                <p>接收到的父页面的属性：userid:{this.props.userid} username:{this.props.username}</p>

                <p>age:{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)} />
                
                {/* {...this.props} 属性父传子 子传孙 */}
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )

    }
}

//对类型做强制的约束
BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired

};

//设置一个默认的属性 当那个props没有的时候
BodyIndex.defaultProps = defaultProps;