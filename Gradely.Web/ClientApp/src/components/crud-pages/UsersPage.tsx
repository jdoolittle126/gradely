import React, {useEffect, useState} from 'react';
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
import * as Yup from "yup";
import {UserForm} from "../forms/UserForm";
import {useProtectedApi} from "../../services/UseProtectedApi";
import {useAuth0} from "@auth0/auth0-react";
import fetchData from "../FetchData";

enum ModalTypes {
    CREATE_EDIT_MODAL,
    DELETE_MODAL
}

enum ModalTabs {
    TAB_DETAILS,
    TAB_PERMISSIONS
}

const CREATE_USER_ID = 0;

type UserTable = {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export const UsersPage = () => {

    // Not my best work, this is really sloppy, but
    // I just need it to work for now :)
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
    const [modal, setModal] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(CREATE_USER_ID);
    const [currentModal, setCurrentModal] = useState(ModalTypes.CREATE_EDIT_MODAL);
    const [currentTab, setCurrentTab] = useState(ModalTabs.TAB_DETAILS);
    const [currentOnComplete, setCurrentOnComplete] = useState(() => () => {});
    const [userData, setUserData] = useState<UserTable[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const accessToken = await getAccessTokenSilently({scope: 'users:view'});
            const response = await fetch(`${window.location.origin}/api/Users`, {
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Authorization': `Bearer ${accessToken}`
                },
                method: "GET"
            });

            const data = await response.json();

            let tableData = [];


            for(const item of data) {

                let meep: UserTable = {
                    firstName: item.given_name,
                    lastName: item.family_name,
                    email: item.email,
                    role: 'WIP'
                }

                tableData.push(meep);
            }

            console.log(data);
            console.log(tableData);
            setUserData(tableData);
        }

        fetchData()
            .catch(console.error);

    }, [])

    const { loading, error, data: users = [] } = useProtectedApi(
        `${window.location.origin}/api/Users`,
        {
            headers: {
                'Accept': "application/json, text/plain, */*"
            },
            method: "GET",
            scope: 'users:view',
        }
    );


    const toggle = () => {
        setModal(!modal);
        if (!modal) {
            setCurrentTab(ModalTabs.TAB_DETAILS);
        } else {
            currentOnComplete();
        }
    }

    const userCreateAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.CREATE_EDIT_MODAL);
        setCurrentSelection(CREATE_USER_ID);
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const userEditAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.CREATE_EDIT_MODAL);
        sampleData[id].email = "Edit action was called!";
        setCurrentSelection(id);
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const userDeleteAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.DELETE_MODAL);
        sampleData[id].email = "Delete action was called!";
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const getUserCreateAction = () => {
        let create: CrudAction = {
            action: userCreateAction,
            name: 'Create',
            color: 'primary'
        }
        return create;
    }

    const getActions = () => {
        let edit: CrudAction = {
            action: userEditAction,
            name: 'Edit',
            color: 'primary'
        }

        let del: CrudAction = {
            action: userDeleteAction,
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
                <CrudDisplay
                    actions={getActions()}
                    create={getUserCreateAction()}
                    name="Users"
                    columns={['First Name', 'Last Name', 'Email', 'Role']}
                    data={userData} />
            </Row>


            <Modal isOpen={modal} centered={true} toggle={toggle} backdrop={"static"}>

                {(currentModal === ModalTypes.CREATE_EDIT_MODAL) ? (
                    <>
                        <ModalHeader toggle={toggle}>
                            {(currentSelection === CREATE_USER_ID) ? 'Create' : 'Update'} User
                        </ModalHeader>

                        <ModalBody>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={currentTab === ModalTabs.TAB_DETAILS ? 'active' : ''}
                                        onClick={function noRefCheck(){
                                            setCurrentTab(ModalTabs.TAB_DETAILS);
                                        }}
                                    >Details</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className={currentTab === ModalTabs.TAB_PERMISSIONS ? 'active' : ''}
                                        onClick={function noRefCheck(){
                                            setCurrentTab(ModalTabs.TAB_PERMISSIONS);
                                        }}
                                    >Permissions</NavLink>
                                </NavItem>
                            </Nav>

                            <UserForm
                                currentTab={currentTab}
                                loadedId={currentSelection}
                            ></UserForm>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                {(currentSelection === CREATE_USER_ID) ? 'Create' : 'Update'}
                            </Button>{' '}
                            <Button color="danger" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </>

                ) : (<>

                    <ModalHeader toggle={toggle}>
                        Confirm Delete
                    </ModalHeader>

                    <ModalBody>
                        Are you sure you want to delete this user?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>
                            Delete
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </>)}

            </Modal>

        </Container>
    );
}

const getMockData = () => {
    let data = [];

    let firstNames = ['Jonathan', 'Jason', 'Russ'];
    let lastNames = ['Doolittle', 'Mandras', 'Souffrant'];

    for (let i =0; i < 1; i++) {

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
