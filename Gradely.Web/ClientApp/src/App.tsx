import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/public/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import Demo from "./components/public/Demo";
import './custom.css'
import TemplateEditor from "./components/template-editor/TemplateEditor";
import UsersPage from "./components/crud-pages/UsersPage";
import {Auth0Context, Auth0Provider} from "@auth0/auth0-react";


export default () => (
    <Auth0Provider
        domain={"dev-thbuvd3p.us.auth0.com"}
        clientId={"L6tiUgSKWD39QJhLRsTJdDEJguwAToME"}
        redirectUri={window.location.origin}>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            <Route path='/demo' component={Demo} />
            <Route path='/editor' component={TemplateEditor} />
            <Route path='/users' component={UsersPage} />
        </Layout>
    </Auth0Provider>
);
