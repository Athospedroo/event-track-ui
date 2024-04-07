import { Agent } from "https"

type RequestPropsType = {
  host: string,
  query: string,
  variables: Object,
}

type RequestOptionsType = {
  timeout: number,
  httpsAgent: Agent
}

type BFFRequestPropsType = {
  query: string,
  variables?: Object
}

export {
  type RequestPropsType,
  type RequestOptionsType,
  type BFFRequestPropsType
}