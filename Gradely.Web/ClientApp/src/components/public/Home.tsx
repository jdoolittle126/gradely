import * as React from 'react';
import { connect } from 'react-redux';
import CallToAction from '../generic/CallToAction';
import FeatureDisplay from '../generic/FeatureDisplay';
import CrudDisplay, {CrudAction, CrudActions} from "../crud-display/CrudDisplay";


const callToActionSection = () => (
    <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
        <div className="flex-column pb-2 px-4">
            <CallToAction />
        </div>
        <div className="flex-column pb-2">
            <img className="img-fluid" src="https://picsum.photos/1280/720" />
        </div>
    </div>
);

const featuresSection = () => (
    <div className="py-2 my-3 bg-light">
        <h1 className="font-weight-bold text-center pb-2">Features</h1>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-items-center pb-2">
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 1" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 2" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 3" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
        </div>

        <div className="text-center">
            <h2>Want to learn more?</h2>
            <h3>Visit our
                <button className="btn btn-primary font-weight-bold mx-2">Docs!</button>
            </h3>
        </div>

    </div>
);

const teamSection = () => (
    <div className="py-2 my-3">
        <h1 className="font-weight-bold text-center pb-2">Our Team</h1>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-items-center pb-2">
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 1" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 2" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Feature 3" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
        </div>
    </div>
);

const Home = () => (
    <div>
        {callToActionSection()}
        {featuresSection()}
        {teamSection()}

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Questions? Suggestions? Let us know!</h2>
            <button className="btn btn-lg btn-primary  font-weight-bold">Contact Us!</button>
        </div>

    </div>
);

export default connect()(Home);
