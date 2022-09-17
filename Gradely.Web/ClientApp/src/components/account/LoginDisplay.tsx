import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {
    Button, ButtonGroup,
    Col,
    Container, Form, FormFeedback, FormGroup, Input, Label,
    Modal,
    ModalBody, ModalFooter,
    ModalHeader
} from "reactstrap";
import {RegisterOrganizationForm} from "../forms/RegisterOrganizationForm";

export const LoginDisplay = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading  } = useAuth0();
    const [modal, setModal] = useState(false);
    const [registerStep, setRegisterStep] = useState(0);

    const registrationSteps = 1;

    const registerProgress = () => {
        if (registerStep !== registrationSteps) {
            setRegisterStep(registerStep + 1)
        } else {

        }
    }
    const registerReturn = () => {
        if (registerStep === 0) {
            toggle();
        } else {
            setRegisterStep(registerStep - 1)
        }
    }

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div>
            {isAuthenticated ?
                (
                    <Container className={'d-flex bg-gradely-dark align-items-center me-1 rounded-1 justify-content-between'}>

                        <Button
                            className={'btn-gradely'}
                            onClick={() => logout()}>
                            Log Out
                        </Button>

                        <img
                            className="img-fluid rounded-circle py-1"
                            width={'25%'}
                            src={isLoading ? '' : user?.picture}
                        />

                    </Container>
                ) : (
                    <div>
                        <ButtonGroup>
                            <Button
                                className={'btn-gradely'}
                                onClick={() => loginWithRedirect()}>
                                Log In
                            </Button>
                            <Button
                                className={'btn-gradely-dark'}
                                onClick={() => toggle()}>
                                Register
                            </Button>
                        </ButtonGroup>

                    </div>

                )}

            <Modal isOpen={modal} centered={true} toggle={toggle} backdrop={"static"}>
                <ModalHeader toggle={toggle}>
                    Register Your School
                </ModalHeader>

                <ModalBody>
                    <RegisterOrganizationForm currentTab={registerStep}></RegisterOrganizationForm>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={registerProgress}>
                        {registerStep === registrationSteps ? 'Finish' : 'Next'}
                    </Button>{' '}
                    <Button color="danger" onClick={registerReturn}>
                        {registerStep === 0 ? 'Cancel' : 'Back'}
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}
