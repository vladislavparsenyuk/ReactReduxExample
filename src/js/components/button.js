import React from 'react';
import 'css/buttons.css';

export default class Button extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={'button ' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}