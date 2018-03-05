

import React from 'react';

import {Link} from 'react-router'

export default class ComponentHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            miniHearder: false
        };
    };

    switchHeader() {
        this.setState({
            miniHearder: !this.state.miniHearder
        });
console.log(1)
    };


    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333",
                color: "#FFF",
                paddingTop: (this.state.miniHearder) ? "3px":"15px",
                paddingBottom: (this.state.miniHearder) ? "3px":"15px"
            },
           
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize"
                onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
                <ul>
                    {/* 他的链接使用link的 */}
                    <li><Link to={`/`}>首页</Link></li>
                    <li><Link to={`/details`}>嵌套的详情页面</Link></li>
                    {/* /1234传递一个参数过去 该怎么接收呢 则对应的router要设置参数的名称 */}
                    <li><Link to={`/list/1234`}>列表详情页</Link></li>
                </ul>
            </header>

        )

    }
}

