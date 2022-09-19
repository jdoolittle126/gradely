import {Col, Container, FormFeedback, FormGroup, Input, InputGroup, Label, Row, TabContent, TabPane} from "reactstrap";
import React, {useEffect, useState} from "react";
import * as Yup from 'yup';
import {Field, FieldArray, Form, Formik} from "formik";
// @ts-ignore
import { ReactstrapInput, ReactstrapRadio } from "reactstrap-formik";
import {useAuth0} from "@auth0/auth0-react";
import FormProps from "./FormProps";


const RosterSchema = Yup.object().shape(
    {
        name: Yup.string()
            .min(2, 'Value does not meet length requirements')
            .max(50, 'Value exceeds length requirements')
            .required('Required!'),
        students: Yup.array()
            .min(1, 'Must have at least one student!')
    }
);

export const RosterForm = (props: FormProps) => {

    const { getAccessTokenSilently } = useAuth0();

    const [objectData, setObjectData] = useState<any[]>([]);

    const fetchData = async () => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${window.location.origin}/api/Terms`, {
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
                'Authorization': `Bearer ${accessToken}`
            },
            cache: "force-cache",
            method: "GET"
        });
        const data = await response.json();
        let tableData = [];
        for(const item of data) {
            tableData.push(item);
        }
        setObjectData(tableData);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Formik
            initialValues={{name: "", termSchedule: JSON.stringify(objectData[0]), students: []}}
            validationSchema={RosterSchema}
            onSubmit={async (values) => {


                console.log(values);

                const accessToken = await getAccessTokenSilently();

                const response = await fetch(`${window.location.origin}/api/Rosters`, {
                    headers: {
                        'Accept': "application/json, text/plain, */*",
                        'Content-Type': "application/json;charset=utf-8",
                        'Authorization': `Bearer ${accessToken}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        name: values.name,
                        termSchedule: JSON.parse(values.termSchedule),
                        students: values.students
                    })
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
                                        label="Roster Name"
                                        name="name"
                                        id="name"
                                        component={ReactstrapInput}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="form-label">Term Schedule</p>
                                    {objectData?.map((value, index) => (
                                        <Field
                                            type="radio"
                                            label={value.name}
                                            value={JSON.stringify(value)}
                                            name="termSchedule"
                                            component={ReactstrapInput}
                                        />
                                    ))}

                                </Col>
                            </Row>
                            <Row>

                                <InputGroup>
                                    <div className={'border border-1 rounded-1 mt-4 container'}>

                                        <FieldArray
                                            name="students"
                                            render={arrayHelpers => (
                                                <div>
                                                    <div className="input-group flex-nowrap input-group-sm my-2">
                                                        <input id={'newStudentFirst'} type="text" className="form-control" placeholder="John"/>
                                                        <input id={'newStudentLast'} type="text" className="form-control" placeholder="Doe"/>
                                                        <button className="btn btn-outline-success" type="button" onClick={() => {
                                                            let first = document.getElementById('newStudentFirst');
                                                            let last = document.getElementById('newStudentLast');
                                                            // @ts-ignore
                                                            let val = {
                                                                // @ts-ignore
                                                                firstName: first.value,
                                                                // @ts-ignore
                                                                lastName: last.value
                                                            };

                                                            if(val && val !== {firstName: "", lastName: ""}) {
                                                                arrayHelpers.push(val)
                                                                // @ts-ignore
                                                                first.value = "";
                                                                // @ts-ignore
                                                                last.value = "";
                                                            }
                                                        }}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>

                                                    {values.students.map((term, index) => (
                                                        <div className={'input-group flex-nowrap input-group-sm my-2'}>
                                                            <Field name={`students.${index}.firstName`} className={'form-control'} readOnly />
                                                            <Field name={`students.${index}.lastName`} className={'form-control'} readOnly />
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
                                {errors.students && touched.students ? (
                                    <div className={'invalid-feedback d-block'}>{errors.students}</div>
                                ) : null}
                            </Row>
                        </TabPane>
                    </TabContent>
                </Form>
            )}
        </Formik>
    )
}
