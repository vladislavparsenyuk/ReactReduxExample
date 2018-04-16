import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div style={{
                        margin: '100px 0',
                        fontSize: 60,
                        fontWeight: 800,
                        color: '#eee',
                        textAlign: 'center',
                    }}>Page not found</div>    
                </div>
            </div>
        );
    }
}