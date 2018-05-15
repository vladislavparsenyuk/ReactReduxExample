import React from 'react';
import 'style/input.scss';

export default class Input extends React.Component {
    render() {
        return (
            <input
                type="text"
                className={'input ' + this.props.className}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
            />
        );
    }
}