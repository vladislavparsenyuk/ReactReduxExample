import React from 'react';
import Button from 'components/button';

export default class extends React.Component {
    back() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="content">
                        <div style={{
                            margin: '100px 0 50px 0',
                            fontSize: 60,
                            fontWeight: 800,
                            color: '#eee',
                            textAlign: 'center',
                        }}>Page not found</div>
                        <div style={{ textAlign: 'center' }}>
                            <Button color="gray" onClick={this.back.bind(this)}>Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}