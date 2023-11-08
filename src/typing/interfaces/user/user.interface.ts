import { UserRole } from '@/typing/enums'

export interface IUser {
  id: number
  firstName: string
  lastName: string

  email: string
  role: UserRole

  bonus: number
  createdAt: string

  bonusesHistory?: {
    bonuses: number
    title: string
    createdAt: string
  }[]
}
