import React, {useState} from 'react';
import {TemplatePreview} from "./TemplatePreview";

export type Template = {
    id: number;
    name: string;
}

type TemplateListProps = {
    templates: Template;
    selectedId: number;
}

export const TemplateList = () => {

    const mock = [{id: 1, name: "Template 1"}, {id: 2, name: "Template 2"}, {id: 3, name: "Template 3"}];

    const [selectedId, setSelectedId] = useState(0);

    return (
        <div className={'container'}>
            <div className={'row row-cols-4'}>
                {mock.map(value => (
                    <TemplatePreview
                        selected={value.id === selectedId}
                        onClick={(id) => {
                            setSelectedId(id);
                        }}
                        template={value}
                    ></TemplatePreview>
                ))}
            </div>
        </div>
    )
}
