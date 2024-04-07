import { Error } from "@/components/errorType"

type UserType = {
  ID: string | null,
  name: string,
  email: string | null,
  voiceType: number,
  memberCard: string | null,
  userNumberVoice: number,
  churchName: string | null,
  areaNumber: string | null,
  isActive: number,
  isDeleted: number,
}

type ListUsersResponseType = {
  users: UserType[] | null
  count: number | null
  errors: Error[] | null
}

export type {
  ListUsersResponseType,
  UserType
}