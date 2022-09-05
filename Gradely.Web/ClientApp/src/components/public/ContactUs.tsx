import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Documentation = () => (
    <div>
        <h2 className="mt-2 d-flex justify-content-center">Questions? Suggestions? Let us know!</h2>
        <div className='d-flex flex-row flex-wrap justify-content-around'>
            <div className="d-flex flex-column justify-content-start align-items-center mt-3 border border-danger w-50">
                <img src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810" alt="" title="" className="w-75" />
                <img src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810" alt="" title="" className="w-75"/>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-center mt-3 w-50 border border-secondary rounded">
                { /* contact us form */}
                <form method="post" className="w-50">
                    <input type='text' placeholder=' First Name' className="w-100 mb-4" />
                    <input type='text' placeholder=' Last Name' className="w-100 mb-4" />
                    <input type='text' placeholder=' Email' className="w-100 mb-4" />
                    <input type='text' placeholder=' Your Subject' className="w-100 mb-4" />
                    <textarea rows={5} placeholder=' Your Message' className="w-100 mb-4"></textarea>
                    <Button className="font-weight-bold w-100 mb-4">Send Message</Button>
                </form>
                <p className="w-75 text-center mb-3">Please check your spelling and write a detailed description of your message.  Thank you!</p>
            </div>
        </div>
    </div>
);

export default connect()(Documentation);