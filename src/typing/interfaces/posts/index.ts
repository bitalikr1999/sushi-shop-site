import { Lang } from '@/typing/enums'

export interface IPostType {
  id: number

  authorId?: number
  key: string

  translations: {
    id: number

    lang: Lang
    name: string
    typeId: number
    description: string
  }[]

  createdAt?: string
  updatedAt?: string
}
