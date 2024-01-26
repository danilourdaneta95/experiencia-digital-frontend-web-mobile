import Card from 'components/core/card'
import ProfileContext from 'context/profiles/profileContext'
// import { useSession, signOut } from 'next-auth/react'
import { useContext, useEffect, useRef } from 'react'

export default function QAController() {
  // const { data: session } = useSession()

  const { profiles, getProfiles, userProfile, getUserProfile, setUserProfile } = useContext(ProfileContext)

  useEffect(() => {
    getProfiles()
    getUserProfile()
  }, [])

  const optionRef = useRef()

  const optionSelect = (
    <>
      {profiles.map((data) => (
        <option key={data.id} value={`${data.id}`} ref={optionRef}>{`${data.profiles}`}</option>
      ))}
    </>
  )

  const handleChange = (event) => {
    event.preventDefault()
    setUserProfile(event.target.value)
  }
  return (
    <>
      <Card cardMargin="0rem 0rem 1rem" boxShadow={true} padding="1rem" cardHeight="min-content">
        <div className="container" style={{}}>
          {/* 
          <img src={`${session.user?.image}`} alt="" width={60} height={60} style={{ borderRadius: '50%', order: 4 }} />
          <button
            style={{
              margin: '0rem 1rem',
              borderRadius: '1rem',
              height: 'min-content',
              padding: '0.5rem 1rem',
              backgroundColor: 'thistle',
              fontWeight: '600',
              order: 3,
            }}
            onClick={() => signOut()}
          >
            Log-Out
          </button>
          */}
          <div style={{ textAlign: 'center', order: 2 }}>
            <div>
              <p>
                <b>QA - Tester</b>
              </p>
            </div>
            <div>{/* <p>{session.user?.email}</p> */}</div>
          </div>
          <div className="changePerfil">
            <label>Cambio de Perfil:</label>
            <select name="perfil" id="SelectPerfil" form="perfilForm" value={`${userProfile}`} onChange={handleChange}>
              {optionSelect}
            </select>
          </div>
        </div>
      </Card>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-direction: column-reverse;
          gap: 0.5rem;
          height: fit-content;
        }
        .changePerfil {
          display: grid;
          order: 2;
          text-align: center;
        }

        select {
          padding: 0.25rem;
          border-radius: 4rem;
          min-width: 12.5rem;
        }
        select[slot='button'] {
          display: flex;
          align-content: center;
        }

        select:focus-visible {
          outline: var(--focus) auto 1px;
        }

        label {
          font-size: 1.25rem;
          font-weight: 600;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            flex-direction: row !important;
          }
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            flex-direction: row !important;
            justify-content: space-between;
          }
          .changePerfil {
            display: grid;
            gap: 0.25rem;
            order: 1;
            text-align: left;
          }
        }
      `}</style>
    </>
  )
}
