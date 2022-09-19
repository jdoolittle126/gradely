import * as React from 'react';
import { connect } from 'react-redux';

const UploadingRoster = () => (

    <div className="container1 text-center">
        <div className="text-center pb-2 mb-2 mx-1">
            
            <h2>Uploading A Roster</h2>
        </div>

        <p className="text-justify px-1 text-break">You can add students to a class roster by uploading a roster file containing information for each student.With Gradleys Upload a roster feature we give teachers the ability to be able o upload a roster with ease. Uploading a roster you must ensure you have active student attending the school to ensure no mistakes. Upon uploading a roster You must make sure your spelling is correct and student information is accurate</p>

        
    </div>


);


export default connect()(UploadingRoster);