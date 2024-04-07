import { eventTrackApiGraphQLRequest } from "@/graphql/eventTrackService";
import { InitEventResponseType, ListEventResponseType, concludedEventResponseType } from "./EventViewType";

class EventViewController {
  async listEvents(): Promise<ListEventResponseType> {
    const props = {
      query: `
      query {
        eventType {
          events {
            ID
            name
            description
            voiceType
            concluded
            date
            createdAt
            updatedAt
          }
          error {
            code
            message
          }
        }
      }
      `
    }

    const response = await eventTrackApiGraphQLRequest.request(props, null)
    const payload = response.getPayload()
    const errors = response.getErrors()

    return {
      events: payload?.eventType?.events,
      errors
    }
  }

  async initEvent(eventID: number): Promise<InitEventResponseType> {
    const props = {
      query: `
      mutation ($eventID: Int) {
        initEvent(eventID: $eventID) {
          error {
            code
            message
          }
        }
      }
      `,
      variables: { eventID }
    }
    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const errors = response.getErrors()

    return {
      errors
    }
  }

  async concludeEventController(eventID: number): Promise<concludedEventResponseType> {
    const props = {
      query: `
      mutation ($eventID: Int) {
        concludeEvent(eventID: $eventID) {
          error {
            code
            message
          }
        }
      }
      `,
      variables: { eventID }
    }

    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const errors = response.getErrors()

    return {
      errors
    }
  }
}

const eventViewController = new EventViewController()

export {
  eventViewController
}