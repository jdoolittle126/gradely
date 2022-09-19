import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Documentation = () => (
    <div>
        <h2 className="mt-2 d-flex justify-content-center mb-4">Questions? Suggestions? Let us know!</h2>

        <div className='d-flex flex-row flex-wrap justify-content-around'>

            <div className="d-flex flex-column justify-content-start align-items-center mt-3  w-50">
                <div className= 'flex-column'>
                    <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" title="" className="w-75 mb-4" />
                    <img src="https://images.unsplash.com/photo-1577563820627-bc12aa2139de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" title="" className="w-75 mb-4" />
                    <h1 className="mb-4"></h1>
                </div>
            </div>


            <div className="d-flex flex-column justify-content-end border rounded-sm align-items-center mt-3 w-50 ">
                { /* contact us form */}
                <form method="post" className="w-50 ">

                    {/* Contact info for the contact page */}
                    <h1>Contact Form</h1>
                    <h1> </h1>
                    <input type='text' placeholder=' First Name' className="w-100 mb-4" />
                    <input type='text' placeholder=' Last Name' className="w-100 mb-4" />
                    <input type='text' placeholder=' Email' className="w-100 mb-4" />
                    <input type='text' placeholder=' Your Subject' className="w-100 mb-4" />

                    <textarea rows={5} placeholder=' Your Message...' className="w-100 mb-4"></textarea>
                    <Button className="m-1 font-weight-bold w-100 mb-4">Send Message</Button>
                </form>

                <p className="w-75 text-center font-weight-bold">Please check your spelling and write a detailed description of your message. Thank you!</p>
            </div>
        </div>
    </div>
);

export default connect()(Documentation);