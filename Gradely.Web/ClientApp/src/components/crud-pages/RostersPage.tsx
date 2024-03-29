import React, {useState} from "react"
import {CrudPage} from "../crud-display/CrudPage";
import {UserForm} from "../forms/UserForm";
import {useNavigate} from "react-router-dom";
import {RosterForm} from "../forms/RosterForm";

export const RostersPage = () => {
    const navigate = useNavigate();
    const [getObjectById, setGetObjectById] = useState<{callback: (id: number) => any}>();

    const idBinder = (callback: (id: number) => any) => {
        setGetObjectById({callback: callback});
    }

    return (
        <CrudPage
            scopes={{viewScope: '', deleteScope: ''}}
            objectName={'Roster'}
            resource={'Rosters'}
            form={RosterForm}
            tabs={['Roster']}
            additionalActions={[{action: (id) => {
                if (getObjectById) {
                    navigate('/pick', { state: getObjectById.callback(id) })
                }
                }, name: 'Enter Grades', color: 'secondary'}]}
            identityBinder={idBinder}
            dataMapper={(item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    students: item.students.map((s: any) => `${s.lastName}, ${s.firstName}`).join('; '),
                    termSchedule: item.termSchedule.name
                }
            }}
            columns={['Identifier', 'Class Name', 'Students', 'Term Schedule']}
        />
    )
}
