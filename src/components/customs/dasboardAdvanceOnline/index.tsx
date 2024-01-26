import ProfileContext from 'context/profiles/profileContext'
import React, { useContext } from 'react'
import { CONSTANTS } from 'settings/constants'
import CardAdvanceOnline from '../cards/cardAdvanceOnline'

export default function DashboardAdvanceOnline() {
  const { userProfile } = useContext(ProfileContext)

  if (userProfile == CONSTANTS.ProfileEnum.ADVANCE_ONLINE) {
    return (
      <>
        <CardAdvanceOnline></CardAdvanceOnline>
      </>
    )
  } else return null
}
