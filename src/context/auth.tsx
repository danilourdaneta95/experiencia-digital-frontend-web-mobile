import { CONSTANTS } from 'settings/constants'

import jwt from 'jwt-decode'
import { User } from 'types/user'

export const signOut = () => {
  localStorage.clear()
}

export const signIn = async (accessToken) => {
  localStorage.setItem(CONSTANTS.STORAGE.AUTH_TOKEN, accessToken)
}

export const getRefreshToken = (): string => {
  for (const key in localStorage) {
    if (key.includes('refreshtoken')) {
      const refreshtokenJson = JSON.parse(localStorage.getItem(key))
      return refreshtokenJson.secret
    }
  }
}

export const isLogged = (): boolean => {
  if (typeof window === 'undefined') return null
  try {
    const token: string = localStorage.getItem(CONSTANTS.STORAGE.AUTH_TOKEN)
    if (token != null && token != undefined) {
      const user: User = jwt<User>(token)
      const expirationDate: Date = new Date(user.exp * 1000)
      const response = expirationDate > new Date()
      return response
    }
    return false
  } catch {
    return false
  }
}
