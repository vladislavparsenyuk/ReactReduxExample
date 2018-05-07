import React from 'react';
import { NavLink } from 'react-router-dom';

import 'style/top-menu.css';

export default class TopMenu extends React.Component {
    render() {
        return (
            <div id="top-menu">
                <div className="container">
                    <NavLink to="/" className="top-menu-item" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/page-1" className="top-menu-item" activeClassName="active">Page 1</NavLink>
                    <NavLink to="/page-2" className="top-menu-item" activeClassName="active">Page 2</NavLink>
                </div>
            </div>
        );
    }
}