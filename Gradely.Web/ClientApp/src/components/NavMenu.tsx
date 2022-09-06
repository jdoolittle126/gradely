import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SideBar from './SideBar'; 

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean, sideBar: boolean }> {

    public state = {
        isOpen: false,
        sideBar: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm   pb-1" light>
                    <Container>
                        <Button onClick={this.toggleSideBar} className="m-1">Gradely</Button>
                        <NavbarBrand tag={Link} to="/">Gradely</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Features</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Weather Forcast</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/documentation">Documentation</   NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="txt-button" to="/demo">Demo</NavLink>
                                </NavItem>  

                                <NavItem>
                                    <NavLink tag={Link} className="txt-button" to="/contactUs">Contact Us</NavLink>
                                </NavItem>
                                
                            </ul>
                        </Collapse>
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
