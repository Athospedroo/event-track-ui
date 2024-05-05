import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { SignInRequest, recoverUserInformation } from "@/services/auth"

type SignInData = {
  email: string
  password: string
}

type User = {
  name: string
  email: string
  imageUrl: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
}



export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { token } = parseCookies()
    const tokenOBJ = token ? JSON.parse(token) : null

    if (token) {
      recoverUserInformation(tokenOBJ?.email).then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await SignInRequest({ email, password })

    const tokenInfo = {
      token,
      email
    }

    setCookie(undefined, 'token', JSON.stringify(tokenInfo), {
      maxAge: 60 * 60 * 8 // 8hour
    }) // ctx req,

    setUser(user)

    Router.push('/Analytics')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}