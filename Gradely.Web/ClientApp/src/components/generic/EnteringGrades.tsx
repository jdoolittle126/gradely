import * as React from 'react';
import { connect } from 'react-redux';

const EnteringGrades = () => (

    <div className="container1 text-center">
        <div className="text-center  pb-2 mb-2 mx-1">
            
            <h2>Entering Grades</h2>
        </div>

        <p className="text-justify px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
);


export default connect()(EnteringGrades);