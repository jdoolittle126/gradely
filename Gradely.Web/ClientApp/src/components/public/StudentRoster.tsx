import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const StudentRoster = () => (
    <div>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Roster Page</h2>
        </div>
        <br></br>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
                <h1 id="tabelLabel">Roster</h1>
                <Button /*onClick={ route to add student modal }*/ className='d-flex align-self-center'>Add Student</Button>
        </div>
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
                                <Button /*onClick={ route to grades page }*/ className='bg-success'>Enter Grades</Button>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2 bg-primary'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/ className='bg-danger'>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
                <tr>
                    <td>{"Doolittle"}</td>
                    <td>{"Jon"}</td>
                    <td>
                        {
                            <div>
                                <Button /*onClick={ route to grades page }*/ className='bg-success'>Enter Grades</Button>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2 bg-primary'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/ className='bg-danger'>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
                <tr>
                    <td>{"Souffrant"}</td>
                    <td>{"Russel"}</td>
                    <td>
                        {
                            <div>
                                <Button /*onClick={ route to grades page }*/ className='bg-success'>Enter Grades</Button>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2 bg-primary'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/ className='bg-danger'>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default connect()(StudentRoster);