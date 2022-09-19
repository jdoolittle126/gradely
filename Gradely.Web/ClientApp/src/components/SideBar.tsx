import * as React from 'react';
import {Nav, Navbar, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap';
import {Link} from "react-router-dom";
import {SideBarLink} from "./generic/SideBarLink";


export default class SideBar extends React.PureComponent<{isOpen: boolean, toggle: () => void}, { }> {

    public render() {
        return (
            <Offcanvas toggle={this.props.toggle} isOpen={this.props.isOpen} className={'bg-light border-0 px-2'}>
                <OffcanvasHeader toggle={this.props.toggle} className={'py-0 mb-0'}>
                    <p className={'fs-2'}>Menu</p>
                </OffcanvasHeader>
                <hr/>
                <OffcanvasBody className={'px-0 pt-0'}>
                    <Nav pills vertical fill onClick={() => {
                        this.props.toggle()
                    }}>

                        <NavLink tag={Link} className="text-dark" to="/roster">
                            <SideBarLink
                                icon={'fa-solid fa-children'}
                                text={'My Roster'}
                            ></SideBarLink>
                        </NavLink>

                        <NavLink tag={Link} className="text-dark" to="/users">
                            <SideBarLink
                                icon={'fa-solid fa-users'}
                                text={'Users'}
                            ></SideBarLink>
                        </NavLink>

                        <NavLink tag={Link} className="text-dark" to="/templates">
                            <SideBarLink
                                icon={'fa-regular fa-clipboard'}
                                text={'Templates'}
                            ></SideBarLink>
                        </NavLink>

                        <NavLink tag={Link} className="text-dark" to="/terms">
                            <SideBarLink
                                icon={'fa-regular fa-calendar-days'}
                                text={'Term Calendar'}
                            ></SideBarLink>
                        </NavLink>

                    </Nav>

                </OffcanvasBody>
            </Offcanvas>
        );
    }



}
