// 页面的头部，公用这个组件

import React from 'react';
export default class ComponentHeader extends React.Component {




    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333",
                color: "#FFF",
                "padding-top": "15px",
                paddingBottom: "15px"
            },
            //还可以自定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
            </header>

        )

    }
}

