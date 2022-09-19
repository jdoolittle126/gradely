import React from "react"
import {CrudPage} from "../crud-display/CrudPage";
import {TermForm} from "../forms/TermForm";

export const TermSchedulePage = () => {

    return (
        <CrudPage
            scopes={{viewScope: '', deleteScope: ''}}
            objectName={'Term'}
            resource={'Terms'}
            form={TermForm}
            tabs={[]}
            dataMapper={(item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    terms: item.terms.map((t: any) => t.name).join('; ')
                }
            }}
            columns={['Identifier', 'Schedule Name', 'Terms']}
            noActions
        />
    )
}
