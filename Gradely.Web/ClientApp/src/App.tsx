import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/public/Home';
import ContactUs from './components/ContactUs';
import Documentation from './components/public/Documentation';
import './custom.css';
import {TemplateEditor} from "./components/template-editor/TemplateEditor";
import {
    useAuth0,
    withAuthenticationRequired,
    WithAuthenticationRequiredOptions
} from "@auth0/auth0-react";
import NavMenu from "./components/NavMenu";
import {Button, Col, Container, Row} from "reactstrap";
import Footer from "./components/Footer";
import {RostersPage} from "./components/crud-pages/RostersPage";
import {UsersPage} from "./components/crud-pages/UsersPage";
import {TermSchedulePage} from "./components/crud-pages/TermSchedulePage";
import {TemplatePage} from "./components/crud-pages/TemplatePage";
import {GradeEditor} from "./components/grades/GradeEditor";
import {GradeEditorPage} from "./components/grades/GradeEditorPage";
import {CreateEditTemplate} from "./components/template/CreateEditTemplate";
import {UseTemplate} from "./components/template/UseTemplate";
import DocPage from "./components/public/Documentation";

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
                    <div className={'container page-container'}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/editor' element={<TemplateEditor />} />
                            <Route path='/users' element={<UsersPage />} />

                            <Route path='/profile' element={<GradeEditorPage />} />

                            <Route path='/contact' element={<ContactUs />} />
                            <Route path='/documentation' element={<DocPage />} />

                            <Route path='/pick' element={<UseTemplate />} />
                            <Route path='/grades' element={<GradeEditorPage />} />

                            <Route path='/documentation' element={<UsersPage />} />
                            <Route path='/roster' element={<RostersPage />} />
                            <Route path='/templates' element={<CreateEditTemplate />} />
                            <Route path='/terms' element={<TermSchedulePage />} />

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
