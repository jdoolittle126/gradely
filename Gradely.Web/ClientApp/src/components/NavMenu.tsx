import * as React from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Nav,
    TabContent,
    TabPane,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    FormFeedback, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SideBar from './SideBar';
import {CredentialResponse, GoogleLogin, googleLogout} from "@react-oauth/google";
import {LoginDisplay} from "./account/LoginDisplay";

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean, sideBar: boolean, isLoggedIn: CredentialResponse | null }> {

    public state: { isOpen: boolean, sideBar: boolean, isLoggedIn: CredentialResponse | null } = {
        isOpen: false,
        sideBar: false,
        isLoggedIn: null
    };

    public getProfileSection = () => {
        if (this.state.isLoggedIn != null) {
            return (
                <div>
                    <Button>
                        Sign Out
                    </Button>
                </div>);
        } else {
            return (
                <div>
                    <LoginDisplay></LoginDisplay>
                </div>

            );
        }
    }

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm pb-1 px-0 mx-0" light>
                    <Container fluid className="py-1 px-0 mx-0 row nopad">
                            <NavbarToggler onClick={this.toggle} className="mr-2"/>
                            <div className="col-2 bg-gradely-light rounded-end d-flex align-items-center ">
                                <i role="button" onClick={this.toggleSideBar} className="fa-solid fa-bars fa-2xl"></i>
                            </div>
                            <NavbarBrand tag={Link} to="/" className="col-2">
                                <img className="img-fluid" src="/banner.svg"/>
                            </NavbarBrand>
                            <div className="col-6 bg-gradely-light rounded-start">
                                <Collapse className="d-sm-inline-flex flex-sm-row p-lg-3" isOpen={this.state.isOpen} navbar>
                                    <ul className="navbar-nav flex-grow">
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/">Features</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/documentation">Documentation</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/contact">Contact Us</NavLink>
                                        </NavItem>
                                    </ul>
                                </Collapse>
                            </div>
                            <div className="col bg-gradely-light d-flex align-items-center flex-row-reverse">
                                {this.getProfileSection()}
                            </div>
                    </Container>
                </Navbar>

                <SideBar isOpen={this.state.sideBar} toggle={this.toggleSideBar} />

            </header>
        );
    }

    private toggleSideBar = () => {
        this.setState({
            sideBar: !this.state.sideBar
        });
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
