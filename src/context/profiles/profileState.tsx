import { useReducer } from 'react'
import ProfileContext from './profileContext'
import ProfileReducer from './profileReducer'
import dataProfiles from 'data/profiles.json'
import { gqlHorarioDia } from 'gql'
import apolloClient from 'settings/apollo'
import { HorarioDiaType } from 'types/horario-dia'
import { GetUserData } from 'context/user'

const ProfileState = (props) => {
  const initialState = {
    profiles: [],
    userProfile: '',
    today: '',
    classesToday: [],
  }

  const [state, dispatch] = useReducer(ProfileReducer, initialState)

  /**
   * Get Data User and set data y Context
   */

  const getUserDateToDay = async () => {
    const response = await apolloClient.query<HorarioDiaType>({
      query: gqlHorarioDia.queries.GET_HORARIO_DIA,
      variables: {
        getHorarioDiaInput: {},
      },
    })
    dispatch({
      type: 'GET_USER_DATE_TODAY',
      payload: response.data.horarioDia.dia,
    })
    dispatch({
      type: 'GET_USER_CLASSES_TODAY',
      payload: response.data.horarioDia.clases,
    })
  }

  /**
   * Get Profiles and set data y Context
   */
  const getProfiles = async () => {
    const response = dataProfiles.profiles
    dispatch({
      type: 'GET_PROFILES',
      payload: response,
    })
  }

  /**
   * Set Initial user profile and set data y Context
   */
  const getUserProfile = async () => {
    const data = GetUserData()
    const response = data.perfilId
    dispatch({
      type: 'GET_USER_PROFILES',
      payload: response,
    })
  }

  /**
   * Sets the user profile on Conetext when Select.
   */
  const setUserProfile = async (optionRef) => {
    const response = optionRef

    dispatch({
      type: 'SET_USER_PROFILES',
      payload: response,
    })
  }

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        userProfile: state.userProfile,
        today: state.today,
        classesToday: state.classesToday,
        // getUsers,
        getProfiles,
        getUserProfile,
        setUserProfile,
        getUserDateToDay,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState
