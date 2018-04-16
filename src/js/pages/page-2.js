import React from 'react';
import PageLayout from 'components/page-layout';


export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageLayout
                header={
                    <h1>Page 2</h1>
                }
            />
        );
    }
}