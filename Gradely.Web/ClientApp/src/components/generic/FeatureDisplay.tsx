import * as React from 'react';
import { connect } from 'react-redux';

const FeatureDisplay = () => (

    <div className="container text-center my-1">
        <div>
            <img className="rounded-circle" src="https://picsum.photos/200"/>
        </div>

        <div className="pt-2">
            <h4>Sample Feature</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
);

export default connect()(FeatureDisplay);