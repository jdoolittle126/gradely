import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Documentation = () => (
    <div>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Questions? Suggestions? Let us know!</h2>
            <Button className="font-weight-bold">Contact Us!</Button>
        </div>
    </div>
);

export default connect()(Documentation);
