import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Nav, NavItem, NavLink,
    Row
} from "reactstrap";
import CrudDisplay, {CrudAction, CrudActions} from "./CrudDisplay";
import {useAuth0, withAuth0} from "@auth0/auth0-react";
import FormProps from "../forms/FormProps";

enum ModalTypes {
    CREATE_EDIT_MODAL,
    DELETE_MODAL
}

const CREATE_ID = -1;


interface ScopeDefinition {
    viewScope: string;
    deleteScope: string;
}

interface CrudPageProps {
    scopes: ScopeDefinition;
    objectName: string;
    objectNamePlural?: string;
    resource: string;
    form: React.FC<FormProps>;
    tabs: string[];
    columns: string[];
    additionalActions?: CrudAction[];
    identityBinder?: (callback: (id: number) => any) => void;
    dataMapper?: (item: any) => any;
    noActions?: boolean;
}

export const CrudPage = (props: CrudPageProps) => {

    const { getAccessTokenSilently } = useAuth0();
    const [modal, setModal] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(CREATE_ID);
    const [currentModal, setCurrentModal] = useState(ModalTypes.CREATE_EDIT_MODAL);
    const [currentTab, setCurrentTab] = useState(0);
    const [currentOnComplete, setCurrentOnComplete] = useState(() => () => {});
    const [objectData, setObjectData] = useState<any[]>([]);

    let rawData: any[] = [];

    const CrudForm: React.FC<FormProps> = props.form;
    const objectPlural = props.objectNamePlural ?? `${props.objectName}s`;
    const formId = `form${props.objectName}`;

    const fetchData = async () => {
        const accessToken = await getAccessTokenSilently({scope: props.scopes.viewScope});
        const response = await fetch(`${window.location.origin}/api/${props.resource}`, {
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
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
        console.log(tableData);
        if (props.dataMapper) {
            // @ts-ignore
            tableData = tableData.map(value => props.dataMapper(value))
        }
        console.log(tableData);
        setObjectData(tableData);
    }

    const getObjectById = (id: number) => {
        return rawData[id];
    }

    useEffect(() => {
        if (props.identityBinder) {
            props.identityBinder(getObjectById);
        }
        fetchData()
            .catch(console.error);
    }, [])

    const toggleWithUpdate = () => {
        // TODO Loading notification
        fetchData().then(toggle);
    }

    const toggle = () => {
        setModal(!modal);
        if (!modal) {
            setCurrentTab(0);
        } else {
            currentOnComplete();
        }
    }

    const createAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.CREATE_EDIT_MODAL);
        setCurrentSelection(CREATE_ID);
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const editAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.CREATE_EDIT_MODAL);
        setCurrentSelection(id);
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const deleteAction = (id: number, onComplete: () => void) => {
        setCurrentModal(ModalTypes.DELETE_MODAL);
        setCurrentOnComplete(() => onComplete)
        toggle();
    }

    const getCreateAction = () => {
        let create: CrudAction = {
            action: createAction,
            name: 'Create',
            color: 'primary'
        }
        return create;
    }

    const getActions = () => {
        let edit: CrudAction = {
            action: editAction,
            name: 'Edit',
            color: 'primary'
        }

        let del: CrudAction = {
            action: deleteAction,
            name: 'Delete',
            color: 'danger'
        }

        let actions: CrudActions = {
            actions: (props.noActions) ? [] : (props.additionalActions) ? [...props.additionalActions, edit, del] : [edit, del]
        };

        return actions;
    }

    return (
        <Container>
            <Row className={'mt-4'}>
                <CrudDisplay
                    actions={getActions()}
                    create={getCreateAction()}
                    name={objectPlural}
                    columns={props.columns}
                    data={objectData} />
            </Row>


            <Modal isOpen={modal} centered={true} toggle={toggle} backdrop={"static"}>

                {(currentModal === ModalTypes.CREATE_EDIT_MODAL) ? (
                    <>
                        <ModalHeader toggle={toggle}>
                            {(currentSelection === CREATE_ID) ? 'Create' : 'Update'} {props.objectName}
                        </ModalHeader>

                        <ModalBody>

                            { (props.tabs.length > 0) ? (
                                <Nav tabs>
                                {props.tabs.map((value, index) =>
                                    <NavItem key={`${value}${index}`}>
                                        <NavLink
                                            className={currentTab === index ? 'active' : ''}
                                            onClick={function noRefCheck(){
                                                setCurrentTab(index);
                                            }}
                                        >{value}</NavLink>
                                    </NavItem>
                                )}
                            </Nav>) : (<></>)}

                            <CrudForm
                                currentTab={currentTab}
                                loadedId={currentSelection}
                                formName={formId}
                                onSubmit={toggleWithUpdate}
                            ></CrudForm>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" form={formId} type={'submit'}>
                                {(currentSelection === CREATE_ID) ? 'Create' : 'Update'}
                            </Button>
                            {' '}
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
                        Are you sure you want to delete this {props.objectName.toLowerCase()}?
                    </ModalBody>

                    <ModalFooter>
                        {/* TODO */}
                        <Button color="danger" onClick={toggle}>
                            Delete
                        </Button>
                        {' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </>)}
            </Modal>
        </Container>
    );
}
