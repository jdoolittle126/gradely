import React from 'react';
import {UserForm} from "../forms/UserForm";
import {CrudPage} from "../crud-display/CrudPage";

export const UsersPage = () => {
 return (
     <CrudPage
         scopes={{viewScope: 'users:view', deleteScope: 'users:delete'}}
         objectName={'User'}
         resource={'Users'}
         form={UserForm}
         tabs={['Details', 'Permissions']}
         columns={['Identifier', 'Email', 'First Name', 'Last Name', 'Role']}
     />
 );
}

