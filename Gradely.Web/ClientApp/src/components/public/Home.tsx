import * as React from 'react';
import { connect } from 'react-redux';
import CallToAction from '../generic/CallToAction';
import FeatureDisplay from '../generic/FeatureDisplay';
import Jasonimg from '../generic/Jasonimg';
import Russelimg from '../generic/Russelimg';
import Jonathanimg from '../generic/Jonathanimg';
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
                    <p className="">With our Roster and Grade entry, Gradely give teachers the ability to enter classes and students grade with ease.Upon Seling a Template teaches will have the accesibility to add their class, upload a roster and enter student information </p>
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
                <Jonathanimg  name="Jonathan Doolittle" image="">
                    <h6> Software Engineer</h6>
                    <p className="">My name is Jonathan Doolittle. I am a software engineering student at New England Institute of Technology, currently perusing my Batchelor degree. My interests in software engineering include web-based applications, Front-End Devolpment, Software Design and particularly in the field of educational technology. In my free time, I enjoy hiking, swimming, working on side projects and spending time with friends.Feel free to connect with me on linked-in to share ideas and more</p>
                </Jonathanimg>
            </div>
            <div className="flex-column pb-2">
                <Russelimg name="Russel Souffrant" image="">
                    <h6> Software Developer </h6>
                    <p className="flex-column pb-2">My name is Russel Souffrant, A Software Engineer From Worcester Ma, with a passion for web development, Data Architecture, UI UX design, and  app development. A newly graduate with a  Bachelor degree in Software Engineering and an associate degree in Information Technology From New England Institute Of Technology. Hobbies consist of watching sports,and spending time with family and friends. Feel free to connect with me on linked-in to share ideas and more</p>
                </Russelimg>
            </div>
            <div className="flex-column pb-2">
                <Jasonimg name="Jason Mandras" image="">
                    <h6> Software Engineer</h6>
                    <p className="flex-column pb-2">My name is Jason Mandras.  I'm a Software Engineer From Norwalk, CT with a passion for web development, UI UX design, and app development. A newly graduate with a  Bachelor degree in Software Engineering and an Associate degree in Information Technology From New England Institute Of Technology. Hobbies consist of playing games (board, video, etc.), spending time with family and friends and listening to music. Feel free to connect with me on linked-in to share ideas and more. </p>
                </Jasonimg>
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
