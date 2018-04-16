import React from 'react';

import PageLayout from 'components/page-layout';
import Button from 'components/button';
import Tree from 'components/tree';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            isTreeHidden: true,
        };
    }

    toggleTree(e) {
        this.setState((prevState, props) => {
            return { isTreeHidden: !prevState.isTreeHidden };
        });
    }

    goTo404() {
        this.props.history.push('wrong-url');
    }

    render() {
        return (
            <PageLayout
                header={<h1>Home page</h1>}
                content={
                    <React.Fragment>
                        <Button color="blue" onClick={this.toggleTree.bind(this)}>
                            {this.state.isTreeHidden ? 'Show' : 'Hide'} tree
                        </Button>
                        <Button color="gray" onClick={this.goTo404.bind(this)}>
                            Go to 404 page
                        </Button>
                        {this.state.isTreeHidden ? null : <Tree />}
                    </React.Fragment>
                }
            />
        );
    }
}