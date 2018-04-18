import React from 'react';
import { connect } from 'react-redux';

import actions from 'actions/page1-actions';

import PageLayout from 'components/page-layout';
import Button from 'components/button';
import Input from 'components/input';

class Page1 extends React.Component {
    changeValue(e) {
        actions.changeValue(e.target.value);
    }

    toggleShuffle() {
        this.props.isShuffled
            ? actions.unShuffle()
            : actions.shuffle();
    }

    render() {
        const { title, isShuffled, value, valueShuffled } = this.props;

        return (
            <PageLayout
                header={<h1>{title}</h1>}
                content={
                    <React.Fragment>
                        <Input
                            value={value}
                            placeholder="Some word"
                            onChange={this.changeValue.bind(this)}
                        />
                        <Button color="green" active={isShuffled} onClick={this.toggleShuffle.bind(this)}>
                            Shuffle
                        </Button>
                        <p>{isShuffled ? valueShuffled : value}</p>
                    </React.Fragment>
                }
            />
        );
    }
}

export default connect(state => state.page1)(Page1);