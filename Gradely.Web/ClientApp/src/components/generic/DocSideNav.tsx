import * as React from 'react';
import { connect } from 'react-redux';

const DocSideNav = () => (

    <nav className="navbar">
        <div className="container-fluid">
            <ul className="navbar-nav1">
                <li className="nav-item">
                    <a className="nav-link">Creating a Class</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Uploading your Roster</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Entering Grades</a>
                </li>
            </ul>
        </div>
    </nav>
   
);


export default connect()(DocSideNav);