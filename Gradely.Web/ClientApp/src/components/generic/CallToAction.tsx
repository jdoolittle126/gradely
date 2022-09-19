import * as React from 'react';
import { connect } from 'react-redux';

const CallToAction = () => (
    <div className="container text-center">
        <div className="text-center  border-bottom pb-2 mb-2 mx-1">
            <h1 className='fs-1'>Report Cards,</h1>
            <h2 className='fs-2'>Made Easy</h2>
        </div>

        <p className="text-justify px-1">Gradely, where reports cards are made easy. With gradey our mission is to assist teachers in making grading 10x easier.Gradley allows teachers to create, upload, and export report cards. With gradleys template creator teachers are able to select and edit any template based off their class and school.With our easy accesible template creator teachers be able to create a class, edit and enter grades for all students with in that class. Upon creating a report card template Teach have the access to export each report as a pdf where they will e able to print and use report car.  </p>

        <button className="btn btn-primary1">
            Register your school today  !<i className="fa fa-arrow-right pl-2"></i>
        </button>




    </div>

);


export default connect()(CallToAction);
