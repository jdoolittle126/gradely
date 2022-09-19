import React, {useEffect, useState} from "react"
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Input, InputGroup, Row} from "reactstrap";
import {TemplateList} from "./TemplateList";
import {TemplatePreview} from "./TemplatePreview";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate, useNavigation} from "react-router-dom";

export const CreateEditTemplate = () => {

    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();
    const [selectedId, setSelectedId] = useState(0);
    const [objectData, setObjectData] = useState<any[]>([]);
    let rawData: any[] = [];

    const fetchData = async () => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${window.location.origin}/api/Template`, {
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Authorization': `Bearer ${accessToken}`
            },
            method: "GET"
        });

        const data = await response.json();
        let tableData = [];
        for(const item of data) {
            tableData.push(item);
        }
        rawData = tableData;
        setObjectData(tableData);
    }

    useEffect(() => {
        fetchData()
            .catch(console.error);
    }, [])


    return (
        <div className={'mt-4'}>
            <Card>
                <CardHeader>
                    <Row>
                        <Col xs={8}>
                            <div className={'d-flex'}>
                                <h3 className={'me-4'}>Templates</h3>
                            </div>

                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className={'container'}>
                        <div className={'row row-cols-4'}>
                            {objectData.map(value => (
                                <TemplatePreview
                                    selected={value.id === selectedId}
                                    onClick={(id) => {
                                        setSelectedId(id);
                                    }}
                                    template={value}
                                ></TemplatePreview>
                            ))}
                        </div>
                    </div>
                </CardBody>
                <CardFooter>

                    <InputGroup>

                        {selectedId !== 0 ? (
                            <Button color={'secondary'} onClick={() => {
                                let datasss = objectData.find((item) => item.id === selectedId)
                                navigate('/editor', { state: datasss });
                            }}>Update</Button>
                        ): null}

                        <Input
                        id={'imSoTired'}
                        ></Input>
                        <Button
                            color={'primary'}
                            onClick={() => {

                                const funky = async () => {
                                    const accessToken = await getAccessTokenSilently();
                                    // @ts-ignore
                                    let value = document.getElementById('imSoTired').value;

                                    const response = await fetch(`${window.location.origin}/api/Template`, {
                                        headers: {
                                            'Accept': "application/json, text/plain, */*",
                                            'Content-Type': "application/json;charset=utf-8",
                                            'Authorization': `Bearer ${accessToken}`
                                        },
                                        method: "POST",
                                        body: JSON.stringify({
                                            name: value,
                                            data: ''
                                        })
                                    });

                                    let datasss = await response.json();

                                    navigate('/editor', { state: datasss });

                                    console.log(datasss);
                                }

                                funky().then(fetchData);

                            }}>
                            <i className="fas fa-plus me-2"></i>
                            Create
                        </Button>
                    </InputGroup>


                </CardFooter>
            </Card>
        </div>
    )
}
