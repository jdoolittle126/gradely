import {Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, TabPane} from "reactstrap";
import React from "react";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
// @ts-ignore
import { ReactstrapInput, ReactstrapRadio } from "reactstrap-formik";
import {useProtectedApi} from "../../services/UseProtectedApi";
import {useAuth0} from "@auth0/auth0-react";

enum UserRoles {
    SUPER_ADMIN,
    ADMIN,
    TEACHER
}


const UserSchema = Yup.object().shape(
    {
        first_name: Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        last_name:  Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        email: Yup.string().email('Invalid email').required('Required!'),
        password1: Yup.string()
            .required('Password is required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must contain 8 characters, including at least 1 uppercase, lowercase, numeric, and special character"
            ),
        password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match')
    }
);

type UserFormProps = {
    currentTab: number;
    loadedId?: number;
    onSubmit?: (values: any) => void;
}

export const UserForm = (props: UserFormProps) => {

    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

    return (
        <Formik
            initialValues={{first_name: "", last_name: "", email: "", password1: "", password2: "", role: UserRoles.TEACHER}}
            validationSchema={UserSchema}
            onSubmit={async (values) => {

                if (props.loadedId === 0) {

                    const accessToken = await getAccessTokenWithPopup({ scope: 'users:create' });

                    const response = await fetch(`${window.location.origin}/api/Users`, {
                        headers: {
                            'Accept': "application/json, text/plain, */*",
                            'Content-Type': "application/json;charset=utf-8",
                            'Authorization': `Bearer ${accessToken}`
                        },
                        method: "POST",
                        body: JSON.stringify(values)
                    });

                    console.log(response);
                } else {

                    const accessToken = await getAccessTokenWithPopup({ scope: 'users:edit' });

                    const response = await fetch(`${window.location.origin}/api/Users`, {
                        headers: {
                            'Accept': "application/json, text/plain, */*",
                            'Content-Type': "application/json;charset=utf-8",
                            'Authorization': `Bearer ${accessToken}`
                        },
                        method: "POST",
                        body: JSON.stringify(values)
                    });

                }
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <TabContent activeTab={props.currentTab}>
                        <TabPane tabId={0}>
                            <Row>
                                <Col md={6}>
                                    <Field
                                        type="text"
                                        label="First Name"
                                        name="first_name"
                                        id="first_name"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Field
                                        type="text"
                                        label="Last Name"
                                        name="last_name"
                                        id="last_name"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Field
                                    type="email"
                                    label="Email"
                                    name="email"
                                    id="email"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Field
                                    type="password"
                                    label="Password"
                                    name="password1"
                                    id="password1"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Field
                                    type="password"
                                    label="Password (Repeated)"
                                    name="password2"
                                    id="password2"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <button type={'submit'} className={'btn btn-primary'}>Submit</button>
                            </Row>
                        </TabPane>
                        <TabPane tabId={1}>
                            <Row>
                                <Field
                                    name="role"
                                    component={ReactstrapRadio}
                                    value={UserRoles.TEACHER}
                                    type="radio"
                                    label="Teacher"
                                />
                            </Row>
                            <Row>
                                <Field
                                    name="role"
                                    component={ReactstrapRadio}
                                    value={UserRoles.ADMIN}
                                    type="radio"
                                    label="Admin"
                                />
                            </Row>
                        </TabPane>
                    </TabContent>
                </Form>
            )}
        </Formik>
    )
}
