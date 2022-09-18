import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'

import React, {PropsWithChildren, ReactElement, ReactNode} from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import {Auth0Provider, Auth0ProviderOptions} from "@auth0/auth0-react";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);


const Auth0ProviderWithRedirectCallback = (props: React.PropsWithChildren<{ }>) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };
    return (
        <Auth0Provider
            onRedirectCallback={onRedirectCallback}
            domain={`${process.env.REACT_APP_AUTH_DOMAIN}`}
            clientId={`${process.env.REACT_APP_AUTH_CLIENT_ID}`}
            audience={'http://localhost:3000'}
            redirectUri={window.location.origin}>
            {props.children}
        </Auth0Provider>
    );
};

ReactDOM.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Auth0ProviderWithRedirectCallback>
                    <App />
                </Auth0ProviderWithRedirectCallback>
            </BrowserRouter>
        </Provider>
    </>,
    document.getElementById('root'));

registerServiceWorker();

