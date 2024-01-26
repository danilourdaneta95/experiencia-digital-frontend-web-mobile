import ButtonFullWidth from 'components/customs/buttons/buttonFullWidth'
import ProfileContext from 'context/profiles/profileContext'
import renderComponents from 'data/renderComponents.json'
import { useContext, useState } from 'react'
import { CONSTANTS } from 'settings/constants'

export default function QualificationActivities() {
  const { userProfile } = useContext(ProfileContext)
  const [renderCard] = useState(renderComponents.QualificationActivities)
  const renderListProfiles = renderCard.map((data) => data.id)
  const renderListProfilesRender = renderCard.map((data) => data.render)
  const {} = useContext(ProfileContext)
  //Estudiantes

  if (userProfile == renderListProfiles[userProfile] && renderListProfilesRender[userProfile]) {
    return null
  } else {
    return (
      <>
        <section id="QualificationSection" className="container">
          <ButtonFullWidth
            labelContent={'Calificaciones'}
            iconName={'ri-star-smile-line'}
            labelColor={'#001894'}
            disabled={false}
            redirectTo={CONSTANTS.ROUTES.QUALIFICATIONS}
          />
          <ButtonFullWidth
            labelContent={'Actividades USS'}
            iconName={'ri-calendar-2-line'}
            labelColor={'#001894'}
            disabled={false}
            redirectTo={CONSTANTS.ROUTES.ACTIVIDADES}
          />
        </section>
        <style jsx>
          {`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 24px;
              align-items: center;
              justify-content: space-between;
              padding: var(--margin-section);
            }
          `}
        </style>
      </>
    )
  }
}
