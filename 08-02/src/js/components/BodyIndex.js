import React from 'react';
import ReactDOM from 'react-dom';
export default class BodyIndex extends React.Component {

constructor(){
    super();//调用基类的所有的初始化方法
    this.state={
        username:"parry",
        age:20
    };
}


    render() {

setTimeout(()=>{
    //更改state的时候
    this.setState({ username: "IMOOC", age: 30});
    // 4s之后改变了值 但是页面没有刷新，只更改了要更改的部分，
    // 打开console->rensering->pantFlashing

},4000);

        return (
            <div>
                <h1>这是body</h1>
                <p>{this.state.username}{this.state.age}{this.props.username}</p>
            </div>
        )

    }
}