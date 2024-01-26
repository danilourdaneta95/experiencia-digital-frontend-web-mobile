import { CONSTANTS } from 'settings/constants'
import { User } from 'types/user'
import jwt from 'jwt-decode'

export const GetUserData = (): User => {
  const accessToken: string = localStorage.getItem(CONSTANTS.STORAGE.AUTH_TOKEN)
  return jwt<User>(accessToken)
}
