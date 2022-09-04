import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Col, Container, Row} from "reactstrap";

export const LoginDisplay = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading  } = useAuth0();

    return (
        <div>
            {isAuthenticated ?
                (
                    <Container className={'d-flex bg-secondary align-items-center me-1 rounded-1'}>
                        <Button color={'light'} onClick={() => logout()}>Log Out</Button>
                        <img className="img-fluid rounded-circle py-1" width={'25%'} src={isLoading ? '' : user?.picture}/>
                    </Container>
                ) : (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                )}
        </div>
    );
}
