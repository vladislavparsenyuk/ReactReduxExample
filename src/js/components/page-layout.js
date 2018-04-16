import React from 'react';


export default class extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="header">
                        {this.props.header}
                    </div>
                    <div className="content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}