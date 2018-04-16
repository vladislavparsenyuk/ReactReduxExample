import React from 'react';
import PageLayout from 'components/page-layout';


export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageLayout
                header={
                    <h1>Page 1</h1>
                }
            />
        );
    }
}