import * as React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import CallToAction from '../generic/CallToAction';
import UploadingRoster from '../generic/UploadingRoster';
import EnteringGrades from '../generic/EnteringGrades';
import CrudDisplay, { CrudAction, CrudActions } from "../crud-display/CrudDisplay";
import CreatingaClass from '../generic/CreatingaClass';





const DocPage = () => (
    
    <div className="container mt-5 w-75">
        
        
        <div className="row ">

            <div className="col-sm-4 border-end ">
                <div className="container-fluid mx-auto ">

                    <ul className="nav nav-pills flex-column  ">

                            <h6>Grading</h6>
            
                        <li className="nav-item list-style-type circle ">
                                <a className="nav-link" href="#">Creating a Class</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Uploading your Roster</a>
                            </li>

                            <li className="nav-item border-bottom">
                                    <a className="nav-link" href="#">Entering Grades</a>
                            </li>
                        
                    </ul>
                    
                </div>
            </div>
            


            <div className="col-sm-8 text-center text-wrap justify-content-between ">

                <div className="mb-4">
                    <div className="mb-4 text-start">
                            <h1 className="mt-2 border-bottom justify-content-center mb-2">Grading</h1>
                
                    </div>
                </div>

                    <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
                            <div className="flex-column pb-2 px-4">
                                <CreatingaClass />
                            </div>
                            <div className="flex-column pb-2">
                        <img className="rounded" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" />
                            </div>
                    </div>

                    <div className="d-flex flex-row flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center py-2 my-3">
                            <div className="flex-column pb-2 px-4">
                                <UploadingRoster />
                            </div>
                            <div className="flex-column pb-2">
                        <img className="rounded" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=100" />
                            </div>

                    </div>
                        
                        
             </div>

                
                
        </div>
   </div>

   
)


export default connect()(DocPage);