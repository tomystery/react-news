import React from 'react';
export default class ComponentList extends React.Component{
    render(){
        return (
            <div>
                <h2>这里是页表页面 id:{this.props.params.id}</h2>
            </div>
        );
    };
}