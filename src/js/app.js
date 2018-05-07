import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import TopMenu from 'components/top-menu';
import Footer from 'components/footer';
import Home from 'pages/home-page';
import Page1 from 'pages/page-1';
import Page2 from 'pages/page-2';
import Page404 from 'pages/page404';

import 'style/app.less';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <React.Fragment>
                        <TopMenu />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/page-1" component={Page1} />
                            <Route path="/page-2" component={Page2} />
                            <Route component={Page404} />
                        </Switch>
                        <Footer />
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}