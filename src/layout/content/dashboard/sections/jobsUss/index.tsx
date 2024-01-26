import Card from 'components/core/card'
import TitleIcon from 'components/core/titleIcon'
import ButtonFullWidth from 'components/customs/buttons/buttonFullWidth'
import ProfileContext from 'context/profiles/profileContext'
import Link from 'next/link'
import { useContext, useState } from 'react'
import renderComponents from 'data/renderComponents.json'
import { CONSTANTS } from 'settings/constants'

export default function JobsUss() {
  const { userProfile } = useContext(ProfileContext)

  const dataJobs = [
    {
      id: '1',
      variant: 'label',
      labelContent: 'Ofertas profesionales',
    },
    {
      id: '2',
      variant: 'label',
      labelContent: 'Prácticas profesionales',
    },
    {
      id: '3',
      variant: 'label',
      labelContent: 'Trabajos part-time',
    },
    {
      id: '4',
      variant: 'label',
      labelContent: 'Asesoría laboral',
    },
  ]

  const buttonJobs = (
    <>
      {dataJobs.map((data) => (
        <Link href={CONSTANTS.ROUTES.EMPLOYMENT_PORTAL} passHref={true} key={data.id}>
          <a target="_blank">
            <ButtonFullWidth
              variant={data.variant}
              labelContent={data.labelContent}
              labelColor={'#001894'}
              buttonSizeWidth="100%"
              buttonSizeHeight="108px"
            />
          </a>
        </Link>
      ))}
    </>
  )

  const [renderCard] = useState(renderComponents.JobsUss)
  const renderListProfiles = renderCard.map((data) => data.id)
  const renderListProfilesRender = renderCard.map((data) => data.render)

  if (userProfile == renderListProfiles[userProfile] && renderListProfilesRender[userProfile]) {
    return (
      <>
        <section id="EmpleoUSS" className="container">
          <Card
            id={'CardEmpleoUSS'}
            paddingSm="0px 0px 0px 0px"
            backgroundColorSm="#F9FAFB"
            borderRadiusSm="22px 12px 12px"
          >
            <TitleIcon title="Empleo USS" iconName="ri-macbook-line" marginContainer="0px 0px 0px 0px" />
            <div className="buttonContainer">{buttonJobs}</div>
          </Card>
        </section>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
      ** minor that 744px.
      ** Sm- Mobile Version
      */
          .container {
            display: grid;
            align-items: center;
            padding: var(--margin-section);
            width: 100%;
          }
          .buttonContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-top: 22px;
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
            .container {
              display: grid;
            }
          }
        `}</style>
      </>
    )
  } else {
    return null
  }
}
