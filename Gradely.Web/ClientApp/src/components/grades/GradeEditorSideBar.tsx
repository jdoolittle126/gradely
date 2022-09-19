import React, {useState} from "react";
import DisplayPane from "../generic/DisplayPane";
import ToolboxPane from "../template-editor/toolbox-pane/ToolboxPane";
import {useAuth0} from "@auth0/auth0-react";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

export const GradeEditorSideBar = (props: {students}) => {

    const [currentStudent, setCurrentStudent] = useState<any>();
    const { getAccessTokenSilently } = useAuth0();

    const saveCurrentStudentGrades = () => {

        if (!currentStudent) return;

        let gradeData = [];

        document.querySelectorAll('[data-gradely-entry]')
            .forEach(e => {
                // @ts-ignore
                let value = e.value;
                let data = JSON.parse(e.getAttribute('data-gradely-entry'))
                gradeData.push( {
                    boundTo: data.guide,
                    value: value
                });
            });

        const funky = async () => {
            const accessToken = await getAccessTokenSilently();

            const response = await fetch(`${window.location.origin}/api/Rosters/${currentStudent.id}`, {
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json;charset=utf-8",
                    'Authorization': `Bearer ${accessToken}`
                },
                method: "POST",
                body: JSON.stringify(gradeData)
            });
        }

        funky();
    }

    const loadStudentGrades = (id: number) => {

        document.querySelectorAll('[data-gradely-entry]')
            .forEach(e => {
                // @ts-ignore
                e.value = "";
            });

        const funky = async () => {
            const accessToken = await getAccessTokenSilently();

            const r = await fetch(`${window.location.origin}/api/Rosters/${id}`, {
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Authorization': `Bearer ${accessToken}`
                },
                method: "GET"
            });


            return await r.json();
        }

        funky().then(r => {
             document.querySelectorAll('[data-gradely-entry]')
                .forEach(e => {

                    let data = JSON.parse(e.getAttribute('data-gradely-entry'))

                    const i = r.findIndex(e => e.boundTo == data.guide)
                    if (i > -1) {
                        // @ts-ignore
                        e.value = r[i].value;
                    }
                });
        })


    }

    return (
        <>
            <div className='text-center'>
                <h3 className='border-bottom pb-1'>Students</h3>
            </div>

            <button className={`btn btn-outline-success mb-3 w-100 ${(!currentStudent) ? 'disabled' : ''}`} onClick={() => {

                if (!currentStudent) return;

                document.querySelectorAll('[data-gradely-entry]')
                    .forEach(e => {
                        e.className = "noput";
                    });
                html2canvas(document.querySelector("#capture"), {allowTaint: false}).then(canvas => {
                    let imgData = canvas.toDataURL("image/jpeg", 1.0);
                    let pdf = new jsPDF();
                    //210 x 297 mm
                    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
                    pdf.save(`${currentStudent.lastName}_${currentStudent.firstName}.pdf`);

                    document.querySelectorAll('[data-gradely-entry]')
                        .forEach(e => {
                            e.className = "";
                        });

                });
            }}>Export PDF</button>

            <div className={'list-group'}>
                {props.students.map(s => (
                <button className={`list-group-item list-group-item-action ${(currentStudent?.id == s.id) ? 'active' : ''}`} onClick={() => {
                    saveCurrentStudentGrades()
                    setCurrentStudent(s)
                    loadStudentGrades(s.id)
                }
                }>
                    {s.lastName}, {s.firstName}
                </button>
            ))}
            </div>

        </>
    );
}
