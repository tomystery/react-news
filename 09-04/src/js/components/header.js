// 页面的头部，公用这个组件

import React from 'react';
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
                "padding-top": (this.state.miniHearder) ? "3px":"15px",
                paddingBottom: (this.state.miniHearder) ? "3px":"15px"
            },
            //还可以自定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize"
                onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>

        )

    }
}

