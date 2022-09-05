import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Users = () => (
    <div>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Users Page</h2>
        </div>
        <br></br>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            <h1 id="tabelLabel">Users</h1>
            <div className='d-flex flex-row flex-wrap align-items-center'>
                <Button /*onClick={ route to add student modal }*/ className="mx-2">Import from CSV</Button>
                <Button /*onClick={ route to add student modal }*/ >Add User</Button>
            </div>
        </div>
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { /* data from db =>
                    <tr key={user.id}>
                        <td>{user.last}</td>
                        <td>{user.first}</td>
                        <td>{user.email}</td>
                        <td>{user.description}</td>
                        <td>{enter grades/edit/delete buttons}</td>
                    </tr>
                ) */ }
                <tr>
                    <td>{"Mandras"}</td>
                    <td>{"Jason"}</td>
                    <td>{"jmandras@email.com"}</td>
                    <td>{"Awesome teacher + best students = success for all"}</td>
                    <td>
                        {
                            <div>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2 bg-primary'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/ className='bg-danger'>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
                <tr>
                    <td>{"Doolittle"}</td>
                    <td>{"Jon"}</td>
                    <td>{"jdoolittle@email.com"}</td>
                    <td>{"yes"}</td>
                    <td>
                        {
                            <div>
                                <Button /*onClick={ route to student edit modal }*/ className='mx-2 bg-primary'>Edit</Button>
                                <Button /*onClick={ route to student delete modal }*/ className='bg-danger'>Delete</Button>
                            </div>
                        }
                    </td>
                </tr>
                <tr>
                    <td>{"Souffrant"}</td>
                    <td>{"Russel"}</td>
                    <td>{"rsouffrant@email.com"}</td>
                    <td>{"yo"}</td>
                    <td>
                        {
                            <div>
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

export default connect()(Users);
