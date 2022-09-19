import React, {useEffect, useState} from "react"
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Input, InputGroup, Row} from "reactstrap";
import {TemplatePreview} from "./TemplatePreview";
import {useAuth0} from "@auth0/auth0-react";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

export const UseTemplate = () => {
    const {state} = useLocation();
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


                    {selectedId !== 0 ? (
                        <>
                        <Button color={'secondary'} onClick={() => {
                            console.log(state);
                            let datasss = objectData.find((item) => item.id === selectedId)
                            navigate('/grades', { state: {roster: state, template: datasss} });
                        }}>Use Template</Button>
                        </>
                    ): null}


                </CardFooter>
            </Card>
        </div>
    )
}
