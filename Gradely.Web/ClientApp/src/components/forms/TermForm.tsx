import {Col, Container, FormFeedback, FormGroup, Input, InputGroup, Label, Row, TabContent, TabPane} from "reactstrap";
import React, {useState} from "react";
import * as Yup from 'yup';
import {Field, FieldArray, Form, Formik} from "formik";
// @ts-ignore
import { ReactstrapInput, ReactstrapRadio } from "reactstrap-formik";
import {useAuth0} from "@auth0/auth0-react";
import FormProps from "./FormProps";


const TermSchema = Yup.object().shape(
    {
        name: Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        terms: Yup.array()
            .min(1, 'Must have at least one term in this schedule!')
    }
);

export const TermForm = (props: FormProps) => {

    const { getAccessTokenSilently } = useAuth0();

    return (
        <Formik
            initialValues={{name: "", terms: []}}
            validationSchema={TermSchema}
            onSubmit={async (values) => {

                console.log(values);

                const accessToken = await getAccessTokenSilently();

                let termObject = {
                    name: values.name,
                    terms: values.terms.map((value) => {
                        return {
                            name: value
                        }
                    })
                }

                const response = await fetch(`${window.location.origin}/api/Terms`, {
                    headers: {
                        'Accept': "application/json, text/plain, */*",
                        'Content-Type': "application/json;charset=utf-8",
                        'Authorization': `Bearer ${accessToken}`
                    },
                    method: "POST",
                    body: JSON.stringify(termObject)
                });

                console.log(response);

                if (props.onSubmit) {
                    props.onSubmit();
                }
            }}
        >
            {({ errors, touched, values }) => (
                <Form id={props.formName}>
                    <TabContent activeTab={props.currentTab}>
                        <TabPane tabId={0}>
                            <Row>
                                <Col>
                                    <Field
                                        type="text"
                                        label="Term Name"
                                        name="name"
                                        id="name"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                            </Row>
                            <Row>

                                <InputGroup>
                                    <div className={'border border-1 rounded-1 mt-4 container'}>

                                        <FieldArray
                                            name="terms"
                                            render={arrayHelpers => (
                                                <div>
                                                    <div className="input-group flex-nowrap input-group-sm my-2">
                                                        <input id={'newTermName'} type="text" className="form-control" placeholder="Term Section Name"/>
                                                        <button className="btn btn-outline-success" type="button" onClick={() => {
                                                            // @ts-ignore
                                                            let element = document.getElementById('newTermName');
                                                            // @ts-ignore
                                                            let val = element.value;

                                                            if(val && val !== "") {
                                                                arrayHelpers.push(val)
                                                                // @ts-ignore
                                                                element.value = "";
                                                            }
                                                        }}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>

                                                    {values.terms.map((term, index) => (
                                                        <div className={'input-group flex-nowrap input-group-sm my-2'}>
                                                            <Field name={`terms.${index}`} className={'form-control'} readOnly />
                                                            <button className="btn btn-outline-danger" onClick={() => {
                                                                arrayHelpers.remove(index);
                                                            }}>
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        />
                                    </div>
                                </InputGroup>
                                {errors.terms && touched.terms ? (
                                    <div className={'invalid-feedback d-block'}>{errors.terms}</div>
                                ) : null}
                            </Row>
                        </TabPane>
                    </TabContent>
                </Form>
            )}
        </Formik>
    )
}
