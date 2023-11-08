import { ITemplateField } from './template.interface'

export interface IContentField {
  id: number
  label: string
  content: ITemplateField
  key: string
}
