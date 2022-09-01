import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/public/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import {GoogleOAuthProvider} from "@react-oauth/google";

import './custom.css'
import Demo from "./components/public/Demo";

export default () => (
    <GoogleOAuthProvider clientId="723058851181-mg5vu25h00q9n70s6trt3s01qem4taa7.apps.googleusercontent.com">
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            <Route path='/demo' component={Demo} />
        </Layout>
    </GoogleOAuthProvider>
);
