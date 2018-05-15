import React from 'react';
import { connect } from 'react-redux';

import actions from 'actions/home-actions';
import PageLayout from 'components/page-layout';
import Button from 'components/button';
import Tree from 'components/tree';

class HomePage extends React.Component {
    toggleTree(e) {
        actions.toggleTree();
    }

    goTo404() {
        this.props.history.push('wrong-url');
    }

    render() {
        // console.log(this.props)
        return (
            <PageLayout
                header={<h1>{this.props.title}</h1>}
                content={
                    <React.Fragment>
                        <Button color="blue" onClick={this.toggleTree.bind(this)}>
                            {this.props.isTreeHidden ? 'Show' : 'Hide'} tree
                        </Button>
                        <Button color="gray" onClick={this.goTo404.bind(this)}>
                            Go to 404 page
                        </Button>
                        {this.props.isTreeHidden ? null : <Tree />}
                    </React.Fragment>
                }
            />
        );
    }
}

export default connect(state => state.homePage)(HomePage);