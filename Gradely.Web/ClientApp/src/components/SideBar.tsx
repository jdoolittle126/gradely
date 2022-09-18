import * as React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';





export default class SideBar extends React.PureComponent<{isOpen: boolean, toggle: () => void}, { }> {


        public render() {
            return (
                <div className="w-50 ">
                    <Offcanvas toggle={this.props.toggle} isOpen={this.props.isOpen}>
                        <OffcanvasHeader toggle={this.props.toggle}>
                            <h3>Gradely</h3>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <div>
                                { /* these divs are for teachers */}
                                <div>
                                    { /* route to roster page */}
                                    <div>
                                        <ul className="nav nav-pills flex-column  ">

                                           <div>
                                                <li className="nav-item list-style-type circle border-bottom ">
                                                    <i className="fa fa-home">Roster</i>
                                                </li>
                                            </div>

                                            <div className="flex-row">
                                                <li className="nav-item border-bottom position-relative ">
                                                      <i className="fa fa-clipboard " ref="#"></i>
                                                </li>
                                            </div>

                                            <li className="flex-row">
                                                <a className="nav-item border-bottom">Roster
                                                    <i className=" fa-solid fa-users"></i>
                                                </a>
                                            </li>

                                        </ul>

                                    </div>

                                </div>


                            </div>
                        </OffcanvasBody>
                    </Offcanvas>
                </div>
        );
    }

    

}
