import * as React from 'react';
import {NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap';
import {Link} from "react-router-dom";

export default class SideBar extends React.PureComponent<{isOpen: boolean, toggle: () => void}, { }> {

    public render() {
        return (
            <Offcanvas toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <OffcanvasHeader toggle={this.props.toggle}>
                    :)
                </OffcanvasHeader>
                <OffcanvasBody>
                    <NavLink tag={Link} className="text-dark" to="/users">Users</NavLink>
                </OffcanvasBody>
            </Offcanvas>
        );
    }

}
