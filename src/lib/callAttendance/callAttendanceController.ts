import { eventTrackApiGraphQLRequest } from "@/graphql/eventTrackService";
import { GetUserResponseType, RegistePresenceResponseType, listUserCallAttendanceRequestType, listUserCallAttendanceResponseType, registerUserCallAttendanceRequestType, removerUserCallAttendaceRequestType } from "./callAttendanceType";
import { UserType } from "@/lib/users/userType";

class CallAttendanceController {
  async registerUserCallAttendance(req: registerUserCallAttendanceRequestType): Promise<RegistePresenceResponseType> {
    const props = {
      query: `
      mutation ($userID: String, $userAdmID: String, $eventID: Int, $presence: Int, $badgeChecked: Int) {
        registerUserCallAttendance(userID: $userID, userAdmID: $userAdmID, eventID: $eventID, presence: $presence, badgeChecked: $badgeChecked) {
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

  async removeUserCallAttendaceController(req: removerUserCallAttendaceRequestType): Promise<any> {
    const props = {
      query: `
      mutation ($userID: String, $userAdmID: String, $updatedAt: String) {
        removerUserCallAttendace(userID: $userID, userAdmID: $userAdmID, updatedAt: $updatedAt) {
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

  async listUserCallAttendanceController(req: listUserCallAttendanceRequestType): Promise<listUserCallAttendanceResponseType> {
    const props = {
      query: `
      query ($voiceType: Int, $eventID: Int) {
        usersCallAttendance(voiceType: $voiceType, eventID: $eventID) {
          usersCallAttendance {
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
            presence
            badgeChecked
            phone
            shirtSize
            userType
            userDateBirth
          }
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
    const payload = response?.getPayload()
    const errors = response?.getErrors()

    return {
      usersCallAttendance: payload?.usersCallAttendance?.usersCallAttendance,
      errors
    }
  }

  async getUser(ID: string): Promise<GetUserResponseType> {
    const props = {
      query: `
      query Query($ID: String) {
        user(ID: $ID) {
          user {
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
          error {
            code
            message
          }
        }
      }
      `,
      variables: { ID }
    }
    const response = await eventTrackApiGraphQLRequest.request(props, null)

    const payload = response.getPayload()
    const errors = response.getErrors()

    return {
      user: payload?.user?.user,
      errors
    }
  }

}

const callAttendanceController = new CallAttendanceController()

export {
  callAttendanceController
}