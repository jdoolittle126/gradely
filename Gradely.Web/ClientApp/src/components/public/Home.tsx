import * as React from 'react';
import { connect } from 'react-redux';
import CallToAction from '../generic/CallToAction';
import FeatureDisplay from '../generic/FeatureDisplay';
import CrudDisplay, { CrudAction, CrudActions } from "../crud-display/CrudDisplay"; 





const callToActionSection = () => (
    <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
        <div className="flex-column pb-2 px-4">
            <CallToAction />
        </div>
        <div className="flex-column pb-2">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
        </div>
    </div>
);

const featuresSection = () => (
    <div className="py-2 my-3 bg-light">
        <h1 className="font-weight-bold text-center  pb-2">Features</h1>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-items-center pb-2">
            <div className="flex-column1 font-weight-bold">
                <FeatureDisplay name="Template Creation" image="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80">
                    <p className="">Gradley has report card templates that are clear, professional-looking, and easy to customize.That allows teachers to select and edit from a range of report card templates to create for their specific class.</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column1 font-weight-bold">
                <FeatureDisplay name="PDF Export" image="https://images.unsplash.com/photo-1586694681327-cc2144178860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80">
                    <p className="">Access the data you care about most, when you need it. Export your PDFs. Gradely makes it more accesible for teachers to take grading to another level, being able to select templates, create classes and export as PDF </p>
                </FeatureDisplay>
            </div>
            <div className="flex-column1 font-weight-bold">
                
                <FeatureDisplay name="Roster and Grade Entry" image="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80" >
                    <p className="">With our Roster and Grade entry, Gradely give teachers the ability to enter classes and students grade with ease. Once a template is select we give teaches the accesibility to e </p>
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
                <FeatureDisplay  name="Jonathan Doolittle" image="">
                    <h6> Software Engineer</h6>
                    <p className="">My name is Jonathan Doolittle. I am a software engineering student at New England Institute of Technology, currently perusing my Batchelor degree. My interests in software engineering include web-based applications, Front-End Devolpment, Software Design and particularly in the field of educational technology. In my free time, I enjoy hiking, swimming, working on side projects and spending time with friends.Feel free to connect with me on linked-in to share ideas and more</p>
                </FeatureDisplay>
            </div>
            <div className="flex-column pb-2">
                <FeatureDisplay name="Russel Souffrant" image="data:image/jpeg;base64,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">
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
