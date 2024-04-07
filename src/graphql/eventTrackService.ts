import axios from "axios"
import { HTTPS_AGENT, REQUEST_TIMEOUT } from "./config/config"
import { Error } from "./entity/error"
import { ResponseGraphQL } from "./entity/response"
import { BFFRequestPropsType, RequestOptionsType } from "./RequestServiceType"
import { treatResponse } from "./transformer/treat_response"

class EventTrackApiGraphQLRequest {
  async request(props: BFFRequestPropsType, options: RequestOptionsType | null): Promise<ResponseGraphQL> {
    try {
      const response = await axios({
        method: 'POST',
        url: `http://localhost:8079/graphql`,
        timeout: options?.timeout || REQUEST_TIMEOUT,
        httpsAgent: options?.httpsAgent || HTTPS_AGENT,
        data: {
          query: props.query,
          variables: props.variables
        }
      })

      let errors = new Array<Error>()
      const body = treatResponse(response)

      if (body.errors) {
        errors = errors.concat(body.errors.map((e: any) => new Error(Error.INTERNAL_SERVER_ERROR, e.message)))
      } else {
        for (let obj in body.data) {
          if (body.data[obj]["error"]) {
            const error = body.data[obj]["error"]
            errors.push(new Error(error.code, error.message))
          }
        }
      }

      return new ResponseGraphQL(body.data, errors)
    } catch (error: any) {
      return new ResponseGraphQL(null, [new Error(Error.INTERNAL_SERVER_ERROR, error.message)])
    }
  }
}

const eventTrackApiGraphQLRequest = new EventTrackApiGraphQLRequest()

export {
  eventTrackApiGraphQLRequest
}