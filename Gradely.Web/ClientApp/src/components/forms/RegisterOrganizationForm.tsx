import {Button, Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, TabPane} from "reactstrap";
import React from "react";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
// @ts-ignore
import { ReactstrapInput } from "reactstrap-formik";


const RegisterOrganizationSchema = Yup.object().shape(
    {
        // Org
        organization_name: Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        organization_address1: Yup.string(),
        organization_address2: Yup.string(),
        organization_city: Yup.string(),
        organization_state: Yup.string(),
        organization_zipcode: Yup.string(),
        organization_phone: Yup.string(),

        // User
        first_name: Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        last_name:  Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        email: Yup.string().email('Invalid email').required('Required!'),
        password1: Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must contain 8 characters, including at least 1 uppercase, lowercase, numeric, and special character"
        ),
        password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match')
    }
);

type RegisterOrganizationFormProps = {
    currentTab: number
}

export const RegisterOrganizationForm = (props: RegisterOrganizationFormProps) => {
    return (
        <Formik
            initialValues={{organization_name: "", organization_address1: "", organization_address2: "",
                organization_city: "", organization_state: "", organization_zipcode: "", organization_phone: "",
                first_name: "", last_name: "", email: "", password1: "", password2: ""}}
            validationSchema={RegisterOrganizationSchema}
            onSubmit={(values, { setSubmitting }) => {
                fetch(`${window.location.origin}/api/Organizations`, {
                    headers: {
                        'Accept': "application/json, text/plain, */*",
                        'Content-Type': "application/json;charset=utf-8"
                    },
                    method: "POST",
                    body: JSON.stringify(values)
                }).then(result => {
                    setSubmitting(false);
                    console.log(result);
                    // TODO
                })
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <TabContent activeTab={props.currentTab}>
                        <TabPane tabId={0}>
                            <Row>
                                <Field
                                    type="text"
                                    label="Organization Name"
                                    name="organization_name"
                                    id="organization_name"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Field
                                    type="text"
                                    label="Address Line 1"
                                    name="organization_address1"
                                    id="organization_address1"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Field
                                    type="text"
                                    label="Address Line 2"
                                    name="organization_address2"
                                    id="organization_address2"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Field
                                    type="text"
                                    label="City"
                                    name="organization_city"
                                    id="organization_city"
                                    component={ReactstrapInput}
                                />
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Field
                                        type="text"
                                        label="State"
                                        name="organization_state"
                                        id="organization_state"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Field
                                        type="text"
                                        label="Zipcode"
                                        name="organization_zipcode"
                                        id="organization_zipcode"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Field
                                    type="text"
                                    label="Phone"
                                    name="organization_phone"
                                    id="organization_phone"
                                    component={ReactstrapInput}
                                />
                            </Row>
                        </TabPane>
                        <TabPane tabId={1}>
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
                    </TabContent>
                </Form>
                )}
        </Formik>
    )
}
