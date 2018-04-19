import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions/page2-actions';
import PageLayout from 'components/page-layout';
import Button from 'components/button';

class Page2 extends React.Component {
    componentDidMount() {
        if (!this.props.isFached) {
            this.reload();
        }
    }

    reload() {
        actions.dataFetchStart();

        setTimeout(() => {
            fetch(this.props.dataUrl)
                .then(res => res.json())
                .then(data => {
                    actions.dataFetchSuccess(data);
                });
        }, 1000);
    }

    render() {
        var { title, isFached, loading, data } = this.props;

        return (
            <PageLayout
                header={
                    <h1>{title}</h1>
                }
                content={
                    <div>
                        {
                            isFached && !loading
                                ? <p>{JSON.stringify(data)}</p>
                                : <p>Loading...</p>
                        }
                        <Button color="gray" onClick={this.reload.bind(this)}>Reload</Button>
                    </div>
                }
            />
        );
    }
}

export default connect(state => state.page2)(Page2);