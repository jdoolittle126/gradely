import React from "react";
import {Template} from "./TemplateList";


type TemplatePreviewProps = {
    template: Template;
    selected?: boolean;
    onClick?: (id: number) => void;
}

export const TemplatePreview = (props: TemplatePreviewProps) => {
    return (
      <div className={'col text-center mb-2'} onClick={() => {
          if (props.onClick) {
              props.onClick(props.template.id)
          }
      }}>
          <div className={'p-0'}>
            <img src={'../template-preview.png'} className={`border rounded-4 ${(props.selected) ? 'border-2 border-primary' : 'border-1'}`}/>
          </div>
          <h3 className={(props.selected) ? 'fw-bold' : ''}>{props.template.name}</h3>
      </div>
    );
}
