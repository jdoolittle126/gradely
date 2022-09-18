import React, {useState} from "react"
import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap";
import {TemplateList} from "./TemplateList";
import {TemplatePreview} from "./TemplatePreview";

export const PickTemplate = () => {

    const mock = [{id: 1, name: "Template 1"}, {id: 2, name: "Template 2"}, {id: 3, name: "Template 3"}];

    const [selectedId, setSelectedId] = useState(0);

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
                            {mock.map(value => (
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

                </CardFooter>
            </Card>
        </div>
    )
}
