import * as React from 'react';
import {Fetcher, Route, Routes} from 'react-router-dom';
import Home from './components/public/Home';

import './custom.css'
import TemplateEditor from "./components/template-editor/TemplateEditor";
import UsersPage from "./components/crud-pages/UsersPage";
import {
    useAuth0,
    withAuthenticationRequired,
    WithAuthenticationRequiredOptions
} from "@auth0/auth0-react";
import NavMenu from "./components/NavMenu";
import {Button, Col, Container, Row} from "reactstrap";
import Footer from "./components/Footer";

const ProtectedRoute = (props: {
    component: React.ComponentType<object>;
    args?:  WithAuthenticationRequiredOptions;
}) => {
    const Component = withAuthenticationRequired(props.component, props.args);
    return <Component />;
};

export default () => {

    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div id={'app'} className={'bg-gradely-light align-items-center d-flex justify-content-center'}>
                <div className="text-center text-light">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p className={'mt-2 fs-2 text'}>Taking too long?</p>
                    <a className={'btn btn-gradely-dark text-light'} href={window.location.origin}>
                        Try signing back in!
                    </a>
                </div>
            </div>
        );
    }


    return (
        <div
            id={'app'}
            className={'d-flex flex-column justify-content-center'}>
            <Row >
                <NavMenu />
            </Row>
            <Row className={'flex-grow-1'}>
                <Col>
                    <div className={'container'}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/editor' element={<TemplateEditor />} />
                            <Route path='/users' element={<UsersPage />} />

                            <Route path='/profile' element={<UsersPage />} />
                            <Route path='/documentation' element={<UsersPage />} />
                            <Route path='/roster' element={<UsersPage />} />
                            <Route path='/templates' element={<UsersPage />} />
                            <Route path='/terms' element={<UsersPage />} />
                            
                            {//<Route path='/users' element={<ProtectedRoute component={UsersPage} />} />
                            }
                        </Routes>
                    </div>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </div>
    );
}
