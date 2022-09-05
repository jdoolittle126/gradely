import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const StudentRoster = () => (
    <div>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Roster Page</h2>
        </div>
        <br></br>
        <h1 id="tabelLabel">Roster</h1>
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { /* data from db =>
                    <tr key={roster.id}>
                        <td>{roster.last}</td>
                        <td>{roster.first}</td>
                        <td>{enter grades/edit/delete buttons}</td>
                    </tr>
                ) */ }
                <tr>
                    <td>{"Mandras"}</td>
                    <td>{"Jason"}</td>
                    <td>
                        {
                            <div>
                                <Button /*onClick={ route to grades page }*/>Enter Grades</Button>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default connect()(StudentRoster);
