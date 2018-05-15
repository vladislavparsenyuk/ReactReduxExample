import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import TopMenu from 'components/top-menu';
import Footer from 'components/footer';
import Home from 'views/home-page';
import Page1 from 'views/page-1';
import Page2 from 'views/page-2';
import Page404 from 'views/page404';

import 'style/app.scss';

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