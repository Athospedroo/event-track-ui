import { eventTrackApiGraphQLRequest } from "@/graphql/eventTrackService"

class AnalyticsController {
  async eventTrackAnalytics(voiceType: number) {
    const props = {
      query: `
      query ($voiceType: Int) {
        eventTrackAnalytics(voiceType: $voiceType) {
          usersPresent
          usersAbsent
          recentsUsers {
            ID
            name
            email
            voiceType
            memberCard
            badgeNumber
            churchName
            areaNumber
            isActive
            isDeleted
          }
          error {
            code
            message
          }
        }
      }
      `,
      variables: { voiceType }
    }

    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const payload = response.getPayload()
    const errors = response.getErrors()

    return {
      analytics: payload?.eventTrackAnalytics,
      errors: errors
    }
  }
}

const analyticsController = new AnalyticsController()

export default analyticsController