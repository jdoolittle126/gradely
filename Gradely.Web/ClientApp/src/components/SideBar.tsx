import * as React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

export default class SideBar extends React.PureComponent<{isOpen: boolean, toggle: () => void}, { }> {

    public render() {
        return (
            <Offcanvas toggle={this.props.toggle} isOpen={this.props.isOpen}>
                <OffcanvasHeader toggle={this.props.toggle}>
                    :)
                </OffcanvasHeader>
                <OffcanvasBody>


                </OffcanvasBody>
            </Offcanvas>
        );
    }

}
