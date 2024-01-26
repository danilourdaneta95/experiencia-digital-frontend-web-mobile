import ButtonIcon from 'components/core/buttonIcon'
import Card from 'components/core/card'
import TitleIcon from 'components/core/titleIcon'
import ProfileContext from 'context/profiles/profileContext'
import { useContext, useState, useEffect } from 'react'
import data from 'data/buttonsLifeSelfmanagement.json'
import Link from 'next/link'
import renderComponents from 'data/renderComponents.json'

interface ButtonLinksProps {
  variant: string
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent={`Boton de ${props.labelContent}`}
   * ~~~
   */
  labelContent: string
  /**
   ** Set Icon Name remix value=String
   * @see name of icons {@link https://remixicon.com/ REMIX ICON}
   *
   * @example
   * ~~~
   * iconName={props.iconName}
   * ~~~
   */
  iconName: string
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundUrlImage?: string

  supportingText: string

  title: string

  iconNameTitle: string
}

export interface Root {
  EstudiantesVidaUSS: EstudiantesVidaUSS[]
}

export interface EstudiantesVidaUSS {
  id: number
  variant: string
  iconLabel: string
  iconName: string
  supportingText: string
  borderBottom: boolean
  disabled: boolean
}

export function ButtonsVidaUss() {
  /* Hooks of Context for read Profile of User  */
  const { userProfile, getUserProfile, getProfiles } = useContext(ProfileContext)

  useEffect(() => {
    getProfiles()
    getUserProfile()
  }, [])

  const contents = data.find((p) => p.profileId == userProfile).VidaUSS
  return (
    <>
      {contents.map((data) => (
        <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
          <a target={data.disabled ? '' : data.target}>
            <ButtonIcon
              key={data.id}
              variant="link"
              disabled={data.disabled}
              buttonHideMd={true}
              buttonHideXl={false}
              buttonHideSm={true}
              labelContent={data.iconLabel}
              positionLabel="Left"
              labelColor="#001894"
              buttonBackground="#fff"
              alignButtonContent="MiddleLeft"
              ariaLabel={`Botón de ${data.iconLabel}`}
              iconName={data.iconName}
              iconSize="1.875rem"
              iconColor="#667085"
              buttonSizeWidth="100%"
              buttonSizeHeight="5rem"
              buttonBorderRadius="0rem"
              colorBorderFocus="0024DB"
              supportingText={data.supportingText}
              backgroundImage={false}
              borderBottom={data.borderBottom}
            />
          </a>
        </Link>
      ))}
    </>
  )
}

export function VidaUSS(props: ButtonLinksProps) {
  const { userProfile } = useContext(ProfileContext)
  const [renderCard] = useState(renderComponents.VidaUssDesktop)
  const renderListProfiles = renderCard.map((data) => data.id)
  const renderListProfilesRender = renderCard.map((data) => data.render)

  if (userProfile == renderListProfiles[userProfile] && renderListProfilesRender[userProfile]) {
    return (
      <>
        <Card id="CardVidaUSS" hideMd={true} hideSm={true}>
          <TitleIcon iconName={props.iconNameTitle} title={props.title} />
          <ButtonsVidaUss />
        </Card>
      </>
    )
  }

  if (userProfile == renderListProfiles[userProfile] && renderListProfilesRender[userProfile]) {
    return (
      <>
        <Card id="CardVidaUSS" hideMd={true} hideSm={true}>
          <TitleIcon iconName={props.iconNameTitle} title={props.title} />
          <ButtonsVidaUss />
        </Card>
      </>
    )
  } else return null
}
