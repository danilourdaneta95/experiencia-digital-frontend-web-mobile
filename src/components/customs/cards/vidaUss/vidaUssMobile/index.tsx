import ButtonIcon from 'components/core/buttonIcon'
import Card from 'components/core/card'
import LineSeparator from 'components/core/lineSeparator'
import ProfileContext from 'context/profiles/profileContext'
import data from 'data/buttonsLifeSelfmanagement.json'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { CONSTANTS } from 'settings/constants'

export function ButtonVidaUssMobile() {
  const { userProfile, getUserProfile } = useContext(ProfileContext)
  const contents = data.find((p) => p.profileId == userProfile).VidaUSS
  useEffect(() => {
    getUserProfile()
  }, [])

  if (userProfile == CONSTANTS.ProfileEnum.ESTUDIANTES) {
    return (
      <>
        <div className="margin-top"></div>
        {contents.map((data) => (
          <>
            <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
              <a target={data.disabled ? '' : data.target}>
                <ButtonIcon
                  key={data.id}
                  variant="link"
                  disabled={data.disabled}
                  buttonHideMd={false}
                  buttonHideXl={true}
                  buttonHideSm={false}
                  labelContent={data.iconLabel}
                  positionLabel="Left"
                  labelColor="#001894"
                  buttonBackground="#f5f7f9"
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
                  supportingTextColor={'#667085'}
                  backgroundImage={false}
                  borderBottom={data.borderBottom}
                />
              </a>
            </Link>
            <LineSeparator colorLineSm="#EAECF0" />
          </>
        ))}
        <style jsx>{`
          /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
          .margin-top {
            margin-top: 98px;
          }
        `}</style>
      </>
    )
  }

  if (userProfile == CONSTANTS.ProfileEnum.EGRESADOS) {
    return (
      <>
        <div className="margin-top"></div>
        {contents.map((data) => (
          <>
            <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
              <a target={data.disabled ? '' : data.target}>
                <ButtonIcon
                  key={data.id}
                  variant="link"
                  disabled={data.disabled}
                  buttonHideMd={false}
                  buttonHideXl={true}
                  buttonHideSm={false}
                  labelContent={data.iconLabel}
                  positionLabel="Left"
                  labelColor="#001894"
                  buttonBackground="#f5f7f9"
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
                  supportingTextColor={'#667085'}
                  backgroundImage={false}
                  borderBottom={data.borderBottom}
                />
              </a>
            </Link>
            <LineSeparator colorLineSm="#EAECF0" />
          </>
        ))}
        <style jsx>{`
          /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
          .margin-top {
            margin-top: 98px;
          }
        `}</style>
      </>
    )
  } else return <></>
}

export function VidaUssMobile() {
  return (
    <>
      <Card
        id="cardVidaUSSMobile"
        paddingMd="0"
        paddingSm="0"
        backgroundColor="#f5f7f9"
        hideMd={false}
        hideSm={false}
        hideXl={true}
      >
        <ButtonVidaUssMobile />
      </Card>
    </>
  )
}
