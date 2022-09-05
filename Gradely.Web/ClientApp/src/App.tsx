import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/public/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ContactUs from './components/public/ContactUs';
import StudentRoster from './components/public/StudentRoster';
import Templates from './components/public/TemplateList';
import Users from './components/public/Users';
import Editor from './components/public/TemplateEditor';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route path='/Roster' component={StudentRoster} />
        <Route path='/Templates' component={Templates} />
        <Route path='/Users' component={Users} />
        <Route path='/TemplateEditor' component={Editor} />
    </Layout>
);
