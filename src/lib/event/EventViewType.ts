import { Error } from "../../components/errorType"

type EventType = {
  ID: number
  name: string
  description: string
  voiceType: number
  concluded: number
  date: Date | null 
}

type ListEventResponseType = {
  events: EventType[] | null
  errors: Error[] | null
}

type InitEventResponseType = {
  errors: Error[] | null
}

type concludedEventResponseType = {
  errors: Error[] | null
}

export type {
  EventType,
  ListEventResponseType,
  InitEventResponseType,
  concludedEventResponseType
}