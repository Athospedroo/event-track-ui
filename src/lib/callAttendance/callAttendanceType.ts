import { Error } from "@/components/errorType"
import { UserType } from "@/lib/users/userType"

type registerUserCallAttendanceRequestType = {
  userID: string
  userAdmID: string
  eventID: number | undefined
  presence: number
  badgeChecked: number
}

type removerUserCallAttendaceRequestType = {
  userID: string,
  userAdmID: string
  updatedAt: string
}

type callAttendanceType = {
  ID: number,
  userAdmID: string,
  userID: string,
  presence: number,
  badgeChecked: number
}

type UserCallAttendancetype = {
  ID: string,
  name: string,
  email: string | null,
  voiceType: number,
  memberCard: string | null,
  badgeNumber: number,
  churchName: string | null,
  areaNumber: string | null,
  isActive: number,
  isDeleted: number,
  presence: boolean,
  badgeChecked: number | null
  userType: number | null
}

type listUserCallAttendanceRequestType = {
  voiceType: number
  eventID: number | undefined
}

type listUserCallAttendanceResponseType = {
  usersCallAttendance: UserCallAttendancetype[] | null
  errors: Error[] | null
}

type GetUserResponseType = {
  user: UserType | null
  errors: Error[] | null
}

type RegistePresenceResponseType = {
  errors: any | null
} 

export type {
  registerUserCallAttendanceRequestType,
  removerUserCallAttendaceRequestType,
  callAttendanceType,
  listUserCallAttendanceResponseType,
  listUserCallAttendanceRequestType,
  UserCallAttendancetype,
  GetUserResponseType,
  RegistePresenceResponseType
}