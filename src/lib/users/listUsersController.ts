import { eventTrackApiGraphQLRequest } from "@/graphql/eventTrackService"
import { ListUsersResponseType } from "./userType"

class ListUsersController {
  async listUsers(page: number, limit: number): Promise<ListUsersResponseType> {
    const props = {
      query: `
      query ($page: Int, $limit: Int) {
        usersWithPagination(page: $page, limit: $limit) {
          users {
            ID
            name
            email
            voiceType
            memberCard
            userNumberVoice
            churchName
            areaNumber
            isActive
            isDeleted
          }
          count
          error {
            code
            message
          }
          
        }
      }
      `,
      variables: {
        page,
        limit
      }
    }
    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const payload = response.getPayload()
    const errors = response.getErrors()

    return {
      users: payload?.usersWithPagination.users,
      count: payload?.usersWithPagination.count,
      errors
    }
  }
}

export const listUsersController = new ListUsersController()