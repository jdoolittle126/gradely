import * as React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import CallToAction from '../generic/CallToAction';
import UploadingRoster from '../generic/CreatingaClass';
import EnteringGrades from '../generic/CreatingaClass';
import CrudDisplay, { CrudAction, CrudActions } from "../crud-display/CrudDisplay";





const DocPage = () => (

    <div>




        <div className="d-flex align-items-start">
            <nav className="navbar justify-content-start d-flex flex-row flex-wrap row ">

                <h4>Grading</h4>
                <ul className="nav flex-column ">

                    <li className="nav-item">
                        <a className="nav-link" href="#">Creating a class</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Uploading your Roster</a>
                    </li>
                    <li className="nav-item border-bottom">
                        <a className="nav-link" href="#">Entering Grades</a>
                    </li>
                </ul>
            </nav>


            <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
                <div className="flex-column pb-2 px-4">
                    <CallToAction />
                </div>
                <div className="flex-column pb-2">
                    <img className="img-fluid" src="https://picsum.photos/1280/720" />
                </div>
                
            </div>




        </div>


                
          

    </div>

)


export default connect()(DocPage);