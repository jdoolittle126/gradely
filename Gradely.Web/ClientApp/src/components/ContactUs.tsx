import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const ContactUs = () => (
    <div>
        <h2 className="mt-2 d-flex justify-content-center mb-4">Questions? Suggestions? Let us know!</h2>
        <br></br>
        <div className='d-flex flex-row flex-wrap justify-content-around'>

            <div className="d-flex flex-column position-relative w-50">
                <div className='flex-column'>
                    <img src="https://cdn.discordapp.com/attachments/958887259078262804/1021291077212328007/Teaching-bro.png" alt="" title="" className="w-50 mb-4" />
                    <h1 className="mb-4"></h1>
                    <img src="https://cdn.discordapp.com/attachments/958887259078262804/1021292058381668402/Teaching-pana.png" alt="" title="" className="w-50 mb-4" />
                </div>

            </div>
            <div className="d-flex flex-column justify-content-endalign-items-center mt-3 h-50 w-50 ">

                <h1>Contact Form</h1>
                <br></br>
                { /* contact us form */}
                <form method="post" className="w-75 h-50">

                    <input type='text' placeholder=' First Name' className="w-75 mb-4" />
                    <input type='text' placeholder=' Last Name' className="w-75 mb-4" />
                    <input type='text' placeholder=' Email' className="w-75 mb-4" />
                    <input type='text' placeholder=' Your Subject' className="w-75 mb-4" />

                    <textarea rows={5} placeholder=' Your Message...' className="w-75 mb-4"></textarea>
                    <Button className="m-1 font-weight-bold w-75 mb-4">Send Message</Button>

                    <p className="w-75 text-center font-weight-bold">Please check your spelling and write a detailed description of your message. Thank you!</p>
                </form>


            </div>
        </div>
    </div>
);

export default connect()(ContactUs);
