import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string
  password: string
}

const atos =  {
  userID: "0fb2a877-1503-4547-8428-76c1350c113c",
  name: "Atos Pedro",
  email: "athos.pedro17@gmail.com",
  imageUrl: ''
}

const ester = {
    userID: "964f68c9-fc74-4ac5-8e13-12e878a35965",
    name: "Ester Victória",
    email: "ester.vict@gmail.com",
    imageUrl: 'https://media.licdn.com/dms/image/C4E03AQFnpfGPA3K_AA/profile-displayphoto-shrink_200_200/0/1609196647017?e=1717632000&v=beta&t=OOg0rtE1F9lF0UxjuzHCwhB6_g2rc64Xh0L1A6HTp4c'  
}

export function SignInRequest(data: SignInRequestData) {
  
  return {
    token: uuid(),
    user: data.email === "ester.vict@gmail.com" ? ester : atos
  }
}

export async function recoverUserInformation(email: string) {
  return {
    user: email === "ester.vict@gmail.com" ? ester : atos
  }
}