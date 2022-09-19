import * as React from 'react';
import { connect } from 'react-redux';

const CreatingaClass = () => (

    <div className="container text-center border-0">
        <div className="text-center  pb-2 mb-2 mx-1">
            <h2>Creating a Class</h2>
        </div>

        <p className="text-justify px-1 text-break">Crating a class of students you must obtain roster and class informaton from school with student names and information for each student.With Gradleys Create roster feature we give teachers the ability to be able o create a class with ease. Creating a class you must ensure you have active student attending the school to ensure no mistakes. Upon creatinga class You must make sure your spelling is correct and student information is accurate</p>



    </div>
);


export default connect()(CreatingaClass);