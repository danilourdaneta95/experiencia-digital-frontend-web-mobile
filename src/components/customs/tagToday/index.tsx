import Tag from 'components/core/tag'
import ProfileContext from 'context/profiles/profileContext'
import { useContext, useEffect } from 'react'

export interface TagTodayProps {
  background: string
  color?: string
  hide?: boolean
  hideSm?: boolean
  hideXl?: boolean
  hideMd?: boolean
}

export default function TagToday(props: TagTodayProps) {
  const { getUserDateToDay, today } = useContext(ProfileContext)

  useEffect(() => {
    // Método realizar Query que Trae toda la consulta (dia, Clases)
    getUserDateToDay()
  }, [])
  return (
    <>
      <Tag
        hide={props.hide}
        hideSm={props.hideSm}
        hideMd={props.hideMd}
        hideXl={props.hideXl}
        background={props.background}
        color={props.color}
      >
        <p className="semi-bold">{`${today}`}</p>
      </Tag>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: grid;
        }

        p {
          font-size: var(--paragraph-small);
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
          }
        }
      `}</style>
    </>
  )
}
