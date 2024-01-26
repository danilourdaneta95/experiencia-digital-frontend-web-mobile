import ProfileContext from 'context/profiles/profileContext'
import { useContext, useEffect, useRef, useState } from 'react'

export interface ProfileSelectProps {
  children: any
}

export default function ProfileSelect(props: ProfileSelectProps) {
  const { profiles, getProfiles, userProfile, getUserProfile, setUserProfile } = useContext(ProfileContext)

  const [showSelect, setShowSelect] = useState(false)

  useEffect(() => {
    getProfiles()
    getUserProfile()
  }, [])

  const optionRef = useRef()

  const optionSelect = (
    <>
      {profiles.map((data) => (
        <option key={data.id} value={`${data.id}`} ref={optionRef}>{`${data.profile}`}</option>
      ))}
    </>
  )

  const handleChange = (event) => {
    event.preventDefault()
    setUserProfile(event.target.value)
    toggleSelect()
  }

  let hideSelect = 'hide'
  if (showSelect === true) {
    hideSelect = 'showSelect'
  }
  if (showSelect === false) {
    hideSelect = 'hideSelect'
  }

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const handleSelect = () => {
    toggleSelect()
  }

  return (
    <>
      <button onClick={handleSelect}>{props.children}</button>
      <select
        className={`${hideSelect}`}
        name="perfil"
        id="SelectPerfil"
        form="perfilForm"
        value={`${userProfile}`}
        onChange={handleChange}
      >
        {optionSelect}
      </select>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        button {
          padding: 0rem;
          background: transparent;
        }

        select {
          position: absolute;
          padding: 0.5rem;
          border-radius: 4rem;
          margin-left: 0.5rem;
          margin-top: 0.5rem;
          min-width: 12.5rem;
        }

        .hideSelect {
          display: none !important;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        /*
        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
          }
        }
        */

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          select {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}
