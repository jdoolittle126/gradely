import * as React from 'react';
import { connect } from 'react-redux';

const EnteringGrades = () => (

    <div className="container1 text-center border-0">
        <div>
            <h1 className=" mt-2 d-flex border-bottom justify-content-center mb-4">Grading</h1>

        </div>

        <p className="text-justify px-1 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
);


export default connect()(EnteringGrades);