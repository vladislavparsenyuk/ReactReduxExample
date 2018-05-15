import React from 'react';
import 'style/buttons.scss';

export default class Button extends React.Component {
    render() {
        const className = `button ${this.props.color} ${this.props.active ? 'active' : ''}`;
        return (
            <div onClick={this.props.onClick} className={className}>
                {this.props.children}
            </div>
        );
    }
}