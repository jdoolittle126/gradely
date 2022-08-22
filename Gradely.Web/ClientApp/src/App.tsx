import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/public/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import Demo from "./components/public/Demo";

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/demo' component={Demo} />
    </Layout>
);
