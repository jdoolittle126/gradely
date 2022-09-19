import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";
import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export const EntryProperties = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [objectData, setObjectData] = useState<any[]>([]);
    let rawData: any[] = [];

    const fetchData = async () => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${window.location.origin}/api/Terms`, {
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
                'Authorization': `Bearer ${accessToken}`
            },
            cache: "force-cache",
            method: "GET"
        });

        const data = await response.json();
        let tableData = [];
        for(const item of data) {
            tableData.push(item);
        }
        console.log(tableData)
        rawData = tableData;
        setObjectData(tableData);
    }

    useEffect(() => {
        fetchData();
        }, []);

    return (
        <>
            <PropertySection title="Term">
                {objectData.map(value => (
                    <PropertyItem propKey="termIds" type="many" label={value.name}>
                        {value.terms.map(term => (
                            <option value={term.id}>{term.name}</option>
                        ))}
                    </PropertyItem>
                ))}
            </PropertySection>
        </>
    );



}
