import React from 'react';
import ReactDOM from 'react-dom';
export default class BodyIndex extends React.Component {
    render() {
var userName='kij';
var boolInput=false;

// 1.空格 第一种是unicode转码 第二种是dangerouslySetInnerHTML
        var html ="IMOOC \u0020 \u0020 \u0020 \u0020 \u0020 \u0020 \u0020  LESSON";
        return (
            <div>
                <h1>这是body</h1>
                <p>{userName==''? '用户还没有登陆':'用户名：'+userName}</p>
                <p><input type='button' value='默认按钮' disabled={boolInput}/></p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html:html}}></p>
            </div>
        )

    }
}