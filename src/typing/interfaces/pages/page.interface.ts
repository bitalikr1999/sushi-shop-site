import { Lang } from '@/typing/enums'

export interface IPage {
  id: number

  template: string
  key: string

  authorId?: number

  metadata?: any

  createdAt: string
  updatedAt: string

  translations?: IPageTransation[]
}

export interface IPageTransation {
  id?: number
  title: string
  description?: string
  pageId?: number
  lang: Lang
}
