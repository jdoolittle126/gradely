import * as React from 'react'
import { IValues, IFormContext, FormContext, IErrors } from './Form'

type Editor = "textbox" | "multilinetextbox" | "dropdown"

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string
  args?: any
}

export interface IFieldProps {
  id: string
  label?: string
  editor?: Editor
  options?: string[]
  value?: any
  validation?: IValidation
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  const getError = (errors: IErrors): string => (errors ? errors[id] : "")
  const getEditorStyle = (errors: IErrors): any => {
    return getError(errors) ? { borderColor: "red" } : {}
  }
