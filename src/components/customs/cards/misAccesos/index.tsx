import ButtonIcon from 'components/core/buttonIcon'
import Card from 'components/core/card'
import TitleIcon from 'components/core/titleIcon'
import ProfileContext from 'context/profiles/profileContext'
import data from 'data/buttonsMyAccesses.json'
import Link from 'next/link'
import { useContext } from 'react'
import { CONSTANTS } from 'settings/constants'

// interface ButtonWithTagProps {
//   /**
//    * * Setting the backgroundUrlImage property string value.
//    *
//    * * The image if is local content, need to put on folder ~./public
//    *
//    * @example
//    * ~~~
//    * buttonBackground="#fff"
//    * ~~~
//    */
//   buttonBackground?: string
//   /**
//    ** Label Content admit value=string or number
//    *
//    * @example
//    * ~~~
//    * labelContent={`Botón de ${props.labelContent}`}
//    * ~~~
//    */
//   labelContent?: string
//   /**
//    ** Set Icon Name remix value=String
//    * @see name of icons {@link https://remixicon.com/ REMIX ICON}
//    *
//    * @example
//    * ~~~
//    * iconName={props.iconName}
//    * ~~~
//    */
//   iconName?: string
//   /**
//    * * Setting the backgroundImage property to a boolean value.
//    * * Default value={false}
//    * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
//    * @example
//    * ~~~
//    * backgroundImage={true}
//    * ~~~
//    */
//   backgroundUrlImage?: string
//   /**
//    * * Setting the backgroundUrlImage property string value.
//    *
//    * * The image if is local content, need to put on folder ~./public
//    *
//    * @example
//    * ~~~
//    * buttonBackgroundImgHover="/assets/svg/button/backgroundButton.svg"
//    * ~~~
//    */
//   buttonBackgroundImgHover?: string
//   /**
//    ** Label Content admit value=string or number
//    *
//    * @example
//    * ~~~
//    * labelColor=${props.labelColor}
//    * ~~~
//    */
//   labelColor?: string

//   buttonSizeWidth?: string

//   buttonSizeHeight?: string

//   iconSize?: string

//   backgroundColorSm?: string
//   backgroundColorMd?: string
// }

export function ButtonsMyAccesses() {
  const { userProfile } = useContext(ProfileContext)

  if (userProfile == CONSTANTS.ProfileEnum.EGRESADOS) {
    return (
      <>
        {data.EgresadosMisAccesos.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a target={data.disabled ? '' : data.target}>
              <ButtonIcon
                variant="label"
                labelContent={data.labelContent}
                positionLabel="Left"
                labelColor="#344054"
                alignButtonContent="MiddleSpaceBetween"
                ariaLabel={`Botón de ${data.labelContent}`}
                iconName="ri-arrow-right-s-line"
                iconColor="#667085"
                buttonSizeWidth="100%"
                buttonSizeHeight="80px"
                colorBorderFocus="#0024DB"
                buttonBorderRadius="0.75rem"
                buttonShadow="0.188rem 0.188rem #e9e9e9"
                labelColorHover="#344054"
                buttonBackgroundSm="#ffffff"
                buttonBackgroundXl="#F5F7F9"
                buttonIconPadding="0rem 1.5rem"
                disabled={data.disabled}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          a {
            width: 100%;
          }
        `}</style>
      </>
    )
  } else return null
}

export function CardMyAccesses() {
  const { userProfile } = useContext(ProfileContext)

  if (userProfile == CONSTANTS.ProfileEnum.EGRESADOS) {
    return (
      <>
        <Card
          id={'MisAccesos'}
          paddingSm="0rem 0rem 0rem 0rem"
          backgroundColorSm="#f5f7f9"
          backgroundColorMd="#F5F7F9"
          cardMargin={`var(--margin-section)`}
        >
          <TitleIcon title="Mis Accesos" iconName="ri-global-line" marginContainer="0px 0px 22px 0px" />
          <div className="buttonContainer">
            <ButtonsMyAccesses />
          </div>
        </Card>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .buttonContainer {
            display: flex;
            gap: 0.625rem;
            flex-direction: column;
            margin-bottom: 1rem;
          }
          /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

          @media (min-width: 350px) and (max-width: 1279px) {
            .buttonContainer {
              display: flex;
              gap: 0.625rem;
            }
          }

          /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
            .buttonContainer {
              flex-direction: row;
            }
          }
        `}</style>
      </>
    )
  } else return null
}
