import * as React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import ReactDOM from 'react-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default class SideBar extends React.PureComponent<{isOpen: boolean, toggle: () => void}, { }> {

    public render() {
        return (
            <Offcanvas toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <OffcanvasHeader toggle={this.props.toggle}>
                    :)
                </OffcanvasHeader>
                <OffcanvasBody>
                    <div>
                        { /* these divs are for teachers */}
                        <div>
                            { /* route to roster page */}
                            <div>
                                { /* <FontAwesomeIcon icon="fa-light fa-graduation-cap" /> */ }
                                <br></br>
                                <Link to="/Roster"> Roster </Link>
                            </div>
                            { /* route to template list page */}
                            <div>
                                { /* <FontAwesomeIcon icon="fa-thin fa-clipboard-list" /> */ }
                                <br></br>
                                <Link to="/Templates"> Templates </Link>
                            </div>
                        </div>

                        { /* these divs are for admins */}
                        <div>
                            { /* route to template editor page */}
                            <div>
                                { /* <FontAwesomeIcon icon="fa-thin fa-clipboard-list" /> */ }
                                <br></br>
                                <Link to="/TemplateEditor"> Templates </Link>
                            </div>
                            { /* route to users page */}
                            <div>
                                { /* <FontAwesomeIcon icon="fa-duotone fa-users" /> */ }
                                <br></br>
                                <Link to="/Users"> Users </Link>
                            </div>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        );
    }

}
