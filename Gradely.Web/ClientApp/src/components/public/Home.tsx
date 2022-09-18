import * as React from 'react';
import { connect } from 'react-redux';
import CallToAction from '../generic/CallToAction';
import FeatureDisplay from '../generic/FeatureDisplay';
import CrudDisplay, { CrudAction, CrudActions } from "../crud-display/CrudDisplay"; 
import logo from './homeImg.png'




const callToActionSection = () => (
    <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
        <div className="flex-column pb-2 px-4">
            <CallToAction />
        </div>
        <div className="flex-column pb-2">
            <img className="img-fluid" src="https://picsum.photos/1200/900" />
        </div>
    </div>
);

const featuresSection = () => (
    <div className="py-2 my-3 bg-light">
        <h1 className="font-weight-bold text-center  pb-2">Features</h1>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-items-center pb-2">
            <div className="flex-column1 font-weight-bold">
                <FeatureDisplay name="Template Creator" image="">
                    <p className="">Gradley has report card templates that are clear, professional-looking, and easy to customize.That allows teachers to select and edit from a range of report card templates to create for their specific class.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column1 font-weight-bold">
                <FeatureDisplay name="PDF Export" image="">
                    <p className="">Access the data you care about most, when you need it. Export your PDFs. Gradely makes it more accesible for teachers to take grading to another level, being able to select templates, create classes and export as PDF </p>
                </FeatureDisplay>
            </div>
            <div className="flex-column1 font-weight-bold">
                <FeatureDisplay name="Feature 3" image="">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </FeatureDisplay>
            </div>
        </div>

        <div className="text-center flex-column1">
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
                <FeatureDisplay name="Jonathan Doolittle" image="">
                    <h6> Software Engineer</h6>
                    <p className="">My name is Jonathan Doolittle. I am a software engineering student at New England Institute of Technology, currently perusing my Batchelor degree. My interests in software engineering include web-based applications, Front-End Devolpment, Software Design and particularly in the field of educational technology. In my free time, I enjoy hiking, swimming, working on side projects and spending time with friends.Feel free to connect with me on linked-in to share ideas and more</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Russel Souffrant" image="">
                    <h6> Software Developer </h6>
                    <p className="flex-column pb-2">My name is Russel Souffrant, A Software Engineer From Worcester Ma, with a passion for web development, Data Architecture, UI UX design, and  app development. A newly graduate with a  Bachelor degree in Software Engineering and an associate degree in Information Technology From New England Institute Of Technology. Hobbies consist of watching sports,and spending time with family and friends. Feel free to connect with me on linked-in to share ideas and more</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Jason Mandras" image="">
                    <h6> Software Engineer</h6>
                    <p className="flex-column pb-2">My name is Jason Mandras.  I'm a Software Engineer From Norwalk, CT with a passion for web development, UI UX design, and app development. A newly graduate with a  Bachelor degree in Software Engineering and an Associate degree in Information Technology From New England Institute Of Technology. Hobbies consist of playing games (board, video, etc.), spending time with family and friends and listening to music. Feel free to connect with me on linked-in to share ideas and more. </p>
                </FeatureDisplay>
            </div>
        </div>
    </div>
);

const Home = () => (
    <div className="container mt-5 w-75">

        {callToActionSection()}
        {featuresSection()}
        {teamSection()}

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light ">
            <h2 className="text-wrap">Questions? Suggestions? </h2>
            <button className="btn btn-lg btn-primary font-weight-bold">Contact Us!</button>
        </div>

    </div>
);

export default connect()(Home);
