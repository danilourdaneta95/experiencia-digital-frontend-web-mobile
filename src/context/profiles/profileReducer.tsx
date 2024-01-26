import {
  GET_USERS,
  GET_PROFILES,
  GET_USER_PROFILES,
  SET_USER_PROFILES,
  GET_USER_CLASSES_TODAY,
  SET_USER_CLASSES_TODAY,
  GET_USER_DATE_TODAY,
  SET_USER_DATE_TODAY,
} from '../types'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        user: payload,
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      }
    case GET_USER_PROFILES:
      return {
        ...state,
        userProfile: payload,
      }
    case SET_USER_PROFILES:
      return {
        ...state,
        userProfile: payload,
      }
    case GET_USER_CLASSES_TODAY:
      return {
        ...state,
        classesToday: payload,
      }
    case SET_USER_CLASSES_TODAY:
      return {
        ...state,
        classesToday: payload,
      }
    case GET_USER_DATE_TODAY:
      return {
        ...state,
        today: payload,
      }
    case SET_USER_DATE_TODAY:
      return {
        ...state,
        today: payload,
      }
    default:
      return state
  }
}
