import ProfileContext from 'context/profiles/profileContext'
import Link from 'next/link'
// import dataButtonSidebar from 'data/buttonsSidebar.json'
import { useContext } from 'react'
import { CONSTANTS } from 'settings/constants'

export interface ListButtonAccordionProps {
  id?: number
  ariaLabel?: string
  labelContentAccordion: any
  iconNameAccordion?: string
  buttonColorHover?: string
  labelColor?: string
  typeBorderFocus?: string
  colorBorderFocus?: string
  gapButtomsList?: string
  iconSize?: string
  iconColor?: string
  buttonBackground?: string
  buttonBackgroundSm?: string
  buttonBorderRadius?: string
  isCompressedSidebar: boolean
}

export default function ListButtonAccordion(props: ListButtonAccordionProps) {
  const { userProfile } = useContext(ProfileContext)

  const data = [
    {
      id: 1,
      variant: 'accordion',
      labelContent: 'Campo Clínico',
      iconName: 'ri-mental-health-line',
      buttomContent: [
        {
          id: 1,
          labelContent: 'Vestuarios y formalidades',
          iconName: '',
        },
        {
          id: 2,
          labelContent: 'Accidente de estudiantes',
          iconName: '',
        },
        {
          id: 3,
          labelContent: 'Procedimientos',
          iconName: '',
        },
        {
          id: 4,
          labelContent: 'Estipendio',
          iconName: '',
        },
      ],
    },
  ]

  const dataEgresados = [
    {
      buttomContent: [
        {
          id: 1,
          labelContent: 'Autoservicios',
          iconName: '',
          linkTo: 'http://autoservicio.uss.cl/PROD/twbkwbis.P_GenMenu?name=homepage',
          target: '_blank',
        },
        {
          id: 2,
          labelContent: 'Mis Aranceles',
          iconName: '',
          disabled: false,
          linkTo: '/misaranceles',
        },
        {
          id: 3,
          labelContent: 'Registro académico',
          iconName: '',
          linkTo: '/calificaciones',
          disabled: false,
        },
      ],
    },
  ]

  const buttonsAccordion = (
    <>
      {data.map((data) =>
        data.buttomContent.map((dataButtons) => (
          <Link href={dataButtons.disabled ? '' : dataButtons.linkTo} passHref={true} key={dataButtons.id}>
            <a
              target={dataButtons.disabled ? undefined : dataButtons.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${props.isCompressedSidebar ? 'linkCompresed' : ''}`}
            >
              <button
                aria-label={`${props.ariaLabel || `Acceso a ${dataButtons.labelContent}`} `}
                className="container-list "
              >
                <i className={`icon ${dataButtons.iconName} icon-list`}></i>
                <p className="list-label">{`${dataButtons.labelContent}`}</p>
              </button>
            </a>
          </Link>
        ))
      )}
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 740.25rem.
        ** Sm- Mobile Version
        */
        /** Accordion Arrow */
        .listButton {
          display: grid;
          gap: ${props.gapButtomsList || `0.25rem`};
          padding: ${props.gapButtomsList || `0.25rem`} 0rem ${props.gapButtomsList || `0.25rem`} 0rem;
          position: relative;
        }
        .open-accordion {
          transform: rotate(180deg);
        }
        .close-accordion {
          transform: rotate(0deg);
        }

        button {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-accordion-buttonBackground-default)`};
        }

        /** Buttons List */
        .container-list {
          display: grid;
          height: 44px;
          width: 100%;
          grid-template-columns: min-content auto;
          padding: 0rem;
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
        }

        .icon-list {
          display: grid;
          width: 44px;
          height: 44px;
          align-content: center;
          margin-left: 0.875rem;
        }
        .list-label {
          display: grid;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
          height: 2.875rem;
          align-items: center;
          justify-content: start;
        }
        .icon {
          font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
        }
        button:hover.container-list .icon {
          color: unset;
        }

        button:hover.container-list {
          background: ${props.buttonColorHover || `var(--buttonIcon-accordion-buttonList-background-focus)` || 'none'};
        }

        /* Adding a border to the button when it is focused. */
        button:focus.container-list {
          outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
          background: var(--buttonIcon-accordion-buttonList-background-focus);
        }
        /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
        button:focus-visible.container-list {
          outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
          background: var(--buttonIcon-accordion-buttonList-background-focus);
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
  const buttonsAccordionEgresados = (
    <>
      {dataEgresados.map((data) =>
        data.buttomContent.map((dataButtons) => (
          <Link href={dataButtons.disabled ? '' : dataButtons.linkTo} passHref={true} key={dataButtons.id}>
            <a
              target={dataButtons.disabled ? undefined : dataButtons.target}
              className={`${dataButtons.disabled ? 'disabled-link' : ''} ${
                props.isCompressedSidebar ? 'linkCompresed' : ''
              }`}
            >
              <button
                disabled={dataButtons.disabled}
                key={dataButtons.id}
                aria-label={`${props.ariaLabel || `Acceso a ${dataButtons.labelContent}`} `}
                className={`container-list`}
              >
                <i className={`icon ${dataButtons.iconName} icon-list`}></i>
                <p className="list-label">{`${dataButtons.labelContent}`}</p>
              </button>
            </a>
          </Link>
        ))
      )}
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        /** Accordion Arrow */
        .listButton {
          display: grid;
          gap: ${props.gapButtomsList || `0.25rem`};
          padding: ${props.gapButtomsList || `0.25rem`} 0rem ${props.gapButtomsList || `0.25rem`} 0rem;
          position: relative;
        }
        .open-accordion {
          transform: rotate(180deg);
        }
        .close-accordion {
          transform: rotate(0deg);
        }

        button {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-accordion-buttonBackground-default)`};
        }

        button:disabled,
        button[disabled] {
          background-color: ${`var(--background-color-disabled)`} !important;
          color: ${`var(--color-font-disabled)`} !important;
          cursor: initial;
          filter: grayscale(1);
        }

        /** Buttons List */
        .container-list {
          display: grid;
          height: 44px;
          width: 100%;
          grid-template-columns: min-content auto;
          padding: 0rem;
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
          align-items: center;
        }

        .icon-list {
          display: grid;
          width: 44px;
          height: 44px;
          align-content: center;
          margin-left: 0.875rem;
        }
        button:not([disabled]) > .list-label {
          display: grid;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
          height: 2.875rem;
          align-items: center;
          justify-content: start;
        }

        button:disabled > .list-label,
        button[disabled] > .list-label {
          display: grid;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          color: ${`var(--color-font-disabled)`} !important;
          height: 2.875rem;
          align-items: center;
          justify-content: start;
        }
        .icon {
          font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
        }
        button:hover.container-list .icon {
          color: unset;
        }

        button:hover.container-list {
          background: ${props.buttonColorHover || `var(--buttonIcon-accordion-buttonList-background-focus)` || 'none'};
        }

        /* Adding a border to the button when it is focused. */
        button:focus.container-list {
          outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
          background: var(--buttonIcon-accordion-buttonList-background-focus);
        }
        /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
        button:focus-visible.container-list {
          outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
          background: var(--buttonIcon-accordion-buttonList-background-focus);
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
  if (userProfile == CONSTANTS.ProfileEnum.ESTUDIANTES) {
    return (
      <>
        <div className="listButton">{buttonsAccordion}</div>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          /** Accordion Arrow */
          .listButton {
            display: grid;
            gap: ${props.gapButtomsList || `0.25rem`};
            padding: ${props.gapButtomsList || `0.25rem`} 0rem ${props.gapButtomsList || `0.25rem`} 0rem;
            position: relative;
          }
          .open-accordion {
            transform: rotate(180deg);
          }
          .close-accordion {
            transform: rotate(0deg);
          }

          button {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            `var(--buttonIcon-accordion-buttonBackground-default)`};
          }

          /** Buttons List */
          .container-list {
            display: grid;
            height: 44px;
            width: 100%;
            grid-template-columns: min-content auto;
            padding: 0rem;
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
          }

          .icon-list {
            display: grid;
            width: 44px;
            height: 44px;
            align-content: center;
            margin-left: 0.875rem;
          }
          .list-label {
            display: grid;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
            height: 2.875rem;
            align-items: center;
            justify-content: start;
          }
          .icon {
            font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
          }
          button:hover.container-list .icon {
            color: unset;
          }

          button:hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonList-background-focus)` ||
            'none'};
          }

          /* Adding a border to the button when it is focused. */
          button:focus.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
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

  if (userProfile == CONSTANTS.ProfileEnum.EGRESADOS) {
    return (
      <>
        <div className="listButton">{buttonsAccordionEgresados}</div>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          /** Accordion Arrow */
          .listButton {
            display: grid;
            gap: ${props.gapButtomsList || `0.25rem`};
            padding: ${props.gapButtomsList || `0.25rem`} 0rem ${props.gapButtomsList || `0.25rem`} 0rem;
            position: relative;
          }
          .open-accordion {
            transform: rotate(180deg);
          }
          .close-accordion {
            transform: rotate(0deg);
          }

          button {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            `var(--buttonIcon-accordion-buttonBackground-default)`};
          }

          /** Buttons List */
          .container-list {
            display: grid;
            height: 44px;
            width: 100%;
            grid-template-columns: min-content auto;
            padding: 0rem;
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
          }

          .icon-list {
            display: grid;
            width: 44px;
            height: 44px;
            align-content: center;
            margin-left: 0.875rem;
          }
          .list-label {
            display: grid;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
            height: 2.875rem;
            align-items: center;
            justify-content: start;
          }
          .icon {
            font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
          }
          button:hover.container-list .icon {
            color: unset;
          }

          button:hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonList-background-focus)` ||
            'none'};
          }

          /* Adding a border to the button when it is focused. */
          button:focus.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
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
  } else
    return (
      <>
        <div className="listButton">{buttonsAccordion}</div>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          /** Accordion Arrow */
          .listButton {
            display: grid;
            gap: ${props.gapButtomsList || `0.25rem`};
            padding: ${props.gapButtomsList || `0.25rem`} 0rem ${props.gapButtomsList || `0.25rem`} 0rem;
            position: relative;
          }
          .open-accordion {
            transform: rotate(180deg);
          }
          .close-accordion {
            transform: rotate(0deg);
          }

          button {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            `var(--buttonIcon-accordion-buttonBackground-default)`};
          }

          /** Buttons List */
          .container-list {
            display: grid;
            height: 44px;
            width: 100%;
            grid-template-columns: min-content auto;
            padding: 0rem;
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
          }

          .icon-list {
            display: grid;
            width: 44px;
            height: 44px;
            align-content: center;
            margin-left: 0.875rem;
          }
          .list-label {
            display: grid;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
            height: 2.875rem;
            align-items: center;
            justify-content: start;
          }
          .icon {
            font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
          }
          button:hover.container-list .icon {
            color: unset;
          }

          button:hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonList-background-focus)` ||
            'none'};
          }

          /* Adding a border to the button when it is focused. */
          button:focus.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible.container-list {
            outline: ${`var(--buttonIcon-accordion-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-accordion-buttonList-background-focus);
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
