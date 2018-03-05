import React from 'react';

export default class BodyChild extends React.Component {
    render() {
        return (
            <div>
                <div>子页面输入：<input type='text' onChange={this.props.handleChildValueChange} /></div>
                <p>{this.props.username} {this.props.userid} {this.props.id}</p>

            </div>

        )
    }
}