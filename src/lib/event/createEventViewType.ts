// type voiceTypeSelected = {
//   ID: number
//   name: string
// }

import { Error } from "@/components/errorType"

type createEventRequestType = {
  name: string
  description: string | null
  voiceType: number
}

type createEventResponseType ={
  errors: Error[] | null
}

export type {
  createEventRequestType,
  createEventResponseType
}