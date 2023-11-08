import { ContentFieldType } from './content-field-type.enum'

export interface ITemplateFieldBase {
  type: ContentFieldType
  label: string
  key: string
  value: any
  style?: any
  disabledTranslates?: boolean
}

export interface ITemplateText extends ITemplateFieldBase {
  type: ContentFieldType.Text
  value: string
  disabledTranslates?: boolean
}

export interface ITemplateNumber extends ITemplateFieldBase {
  type: ContentFieldType.Number
  value: string
}

export interface ITemplateTextarea extends ITemplateFieldBase {
  type: ContentFieldType.Textarea
  value: string
}
export interface ITemplateRepeater extends ITemplateFieldBase {
  type: ContentFieldType.Reapeter
  reapeterTemplate: ITemplate
  value: ITemplate[]
}

export interface ITemplateImage extends ITemplateFieldBase {
  type: ContentFieldType.Image
}

export interface ITemplateProductCategory extends ITemplateFieldBase {
  type: ContentFieldType.ProductCategory
  value: string
}

export type ITemplateField =
  | ITemplateTextarea
  | ITemplateText
  | ITemplateRepeater
  | ITemplateImage
  | ITemplateNumber
  | ITemplateProductCategory

export type ITemplate = Array<ITemplateField>
