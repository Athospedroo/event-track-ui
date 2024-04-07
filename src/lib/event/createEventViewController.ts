import { eventTrackApiGraphQLRequest } from "@/graphql/eventTrackService";
import { createEventRequestType, createEventResponseType } from "./createEventViewType";

class CreateEventController {
  async createEvent(req: createEventRequestType): Promise<createEventResponseType> {
    const props = {
      query: `
      mutation ($name: String, $description: String, $voiceType: Int) {
        createEvent(name: $name, description: $description, voiceType: $voiceType) {
          error {
            code
            message
          }
        }
      }
      `,
      variables: req
    }

    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const errors = response.getErrors()

    return {
      errors
    }
  }
}

const createEventController = new CreateEventController()

export {
  createEventController
}