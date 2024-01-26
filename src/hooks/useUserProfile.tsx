import { useState } from 'react'

const useUserProfile = (initialState = 'Estudiantes') => {
  const [userProfile, setUserProfile] = useState(initialState)

  const setCustomUserProfile = (value: any) => setUserProfile(String(value))

  return [userProfile, setCustomUserProfile]
}

export default useUserProfile
