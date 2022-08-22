import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import CrudDisplay, {CrudAction, CrudActions} from "../crud-display/CrudDisplay";

const getMockData = () => {
    let data = [];

    let firstNames = ['Jonathan', 'Jason', 'Russ'];
    let lastNames = ['Doolittle', 'Mandras', 'Souffrant'];

    for (let i =0; i < 50; i++) {

        let firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        data.push(
            {
                firstName: firstName,
                lastName: lastName,
                email: firstName + '.' + lastName + '@gmail.com',
                description: 'Item number ' + i
            });
    }

    return data;
}

let sampleData = getMockData();


const sampleEditAction = (id: number, onComplete: () => void) => {
    sampleData[id].email = "Edit action was called!";
    onComplete();
}

const sampleDeleteAction = (id: number, onComplete: () => void) => {
    sampleData[id].email = "Delete action was called!";
    onComplete();
}

const getActions = () => {
    let edit: CrudAction = {
        action: sampleEditAction,
        name: 'Edit',
        color: 'primary'
    }

    let del: CrudAction = {
        action: sampleDeleteAction,
        name: 'Delete',
        color: 'danger'
    }

    let actions: CrudActions = {
        actions: [edit, del]
    };

    return actions;
}

const Demo = () => (
    <div className="py-3">
        <CrudDisplay actions={getActions()} name="Users" columns={['First Name', 'Last Name', 'Email', 'Description']} data={sampleData} />
    </div>
);

export default connect()(Demo);
