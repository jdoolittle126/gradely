import * as React from 'react';
import { connect } from 'react-redux';

const CreatingaClass = () => (

    <div className="container text-center">
        <div className="text-center border-bottom pb-2 mb-2 mx-1">
            <h2>Creating a Class</h2>
        </div>

        <p className="text-justify px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>



    </div>
);


export default connect()(CreatingaClass);