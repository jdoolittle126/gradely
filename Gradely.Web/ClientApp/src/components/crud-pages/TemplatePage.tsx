import React from 'react';
import {TemplateList} from "../template/TemplateList";
import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap";
import {TemplatePreview} from "../template/TemplatePreview";

export const TemplatePage = () => {

    return (
      <>
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
                      <TemplateList></TemplateList>
                  </CardBody>
                  <CardFooter>

                  </CardFooter>
              </Card>
          </div>



      </>
    );

}
