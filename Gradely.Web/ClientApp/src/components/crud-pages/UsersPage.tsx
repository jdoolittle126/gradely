import React, {useState} from 'react';
import {
    Button,
    Col,
    Container,
    Form, FormFeedback,
    FormGroup,
    Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Nav, NavItem, NavLink,
    Row, TabContent, TabPane
} from "reactstrap";
import CrudDisplay, {CrudAction, CrudActions} from "../crud-display/CrudDisplay";

export const UsersPage = () => {

    const [modal, setModal] = useState(true);
    const [currentSelection, setCurrentSelection] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);
    const toggle = () => {
        setModal(!modal);
        if (!modal) setCurrentTab(0);
    }

    const sampleEditAction = (id: number, onComplete: () => void) => {
        sampleData[id].email = "Edit action was called!";
        setCurrentSelection(id);
        toggle();
        onComplete();
    }

    const sampleDeleteAction = (id: number, onComplete: () => void) => {
        sampleData[id].email = "Delete action was called!";
        onComplete();
    }

    const getActions = () => {
        let edit: CrudAction = {
            action: sampleEditAction,
            name: 'Edit',
            color: 'primary'
        }

        let del: CrudAction = {
            action: sampleDeleteAction,
            name: 'Delete',
            color: 'danger'
        }

        let actions: CrudActions = {
            actions: [edit, del]
        };

        return actions;
    }

    return (
        <Container>
            <Row className={'mt-4'}>
                <CrudDisplay actions={getActions()} name="Users" columns={['First Name', 'Last Name', 'Email', 'Description']} data={sampleData} />
            </Row>

            <Modal isOpen={modal} centered={true} toggle={toggle} backdrop={"static"}>
                <ModalHeader toggle={toggle}>
                    {(currentSelection === 0) ? 'Create' : 'Update'} User
                </ModalHeader>

                <ModalBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={currentTab === 0 ? 'active' : ''}
                                onClick={function noRefCheck(){
                                    setCurrentTab(0);
                                }}
                            >Details</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={currentTab === 1 ? 'active' : ''}
                                onClick={function noRefCheck(){
                                    setCurrentTab(1);
                                }}
                            >Permissions</NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={currentTab}>
                        <TabPane tabId={0}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="userFirstName">
                                                First Name
                                            </Label>
                                            <Input
                                                invalid={false}
                                                id="userFirstName"
                                                name="firstName"
                                                placeholder="John"
                                                type="text"
                                            />
                                            <FormFeedback invalid>

                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="userLastName">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="userLastName"
                                                name="lastName"
                                                placeholder="Doe"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <FormGroup>
                                        <Label for="userEmailAddress">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="userEmailAddress"
                                            name="emailAddress"
                                            placeholder="john.doe@email.com"
                                            type="email"
                                        />
                                        <FormFeedback invalid>
                                        </FormFeedback>
                                    </FormGroup>
                                </Row>


                            </Form>
                            {currentSelection}
                        </TabPane>
                        <TabPane tabId={1}>
                            TEST
                        </TabPane>
                    </TabContent>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        {(currentSelection === 0) ? 'Create' : 'Update'}
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </Container>
    );
}

const getMockData = () => {
    let data = [];

    let firstNames = ['Jonathan', 'Jason', 'Russ'];
    let lastNames = ['Doolittle', 'Mandras', 'Souffrant'];

    for (let i =0; i < 50; i++) {

        let firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        data.push(
            {
                firstName: firstName,
                lastName: lastName,
                email: firstName + '.' + lastName + '@gmail.com',
                description: 'Item number ' + i
            });
    }

    return data;
}

let sampleData = getMockData();





export default UsersPage;
