import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/public/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ContactUs from './components/ContactUs';
import Demo from "./components/public/Demo";
import Documentation from './components/public/Documentation';
import './custom.css';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/demo' component={Demo} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/documentation' component={Documentation} />
       
        
    </Layout>
);
