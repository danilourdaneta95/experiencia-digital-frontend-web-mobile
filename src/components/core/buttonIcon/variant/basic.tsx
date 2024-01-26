import { ButtonsIconProps, ButtonIconBasicProps } from 'types/buttons/buttonsIcon'

/**
 * Button type Basic
 * @param props
 * @returns
 */
export default function ButtonBasic(props: ButtonsIconProps & ButtonIconBasicProps) {
  let hide: string
  let hideSm: string
  let hideMd: string
  let hideXl: string

  if (props.buttonHide === true) {
    hide = 'none'
  }
  if (props.buttonHideSm === true) {
    hideMd = 'none'
  }
  if (props.buttonHideMd === true) {
    hideMd = 'none '
  }
  if (props.buttonHideXl === true) {
    hideXl = 'none !important'
  }

  // Set Default Icon
  let iconName: string = props.iconName
  if (props.iconName === undefined) {
    iconName = 'ri-questionnaire-line'
  }
  if (props.iconName === '') {
    iconName = 'ri-questionnaire-line'
  }

  return (
    <>
      <button
        aria-label={`${props.ariaLabel}`}
        className="Basic container"
        onMouseOver={props.onMouseOver}
        onClick={props.handleClick}
      >
        <i className={`icon ${iconName}`}></i>
      </button>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: ${hide || hideSm || `grid`};
          align-items: center;
          justify-items: center;
          width: ${props.buttonSizeWidth || `max-content`};
          height: ${props.buttonSizeHeight || `max-content`};
          padding: ${props.buttonIconPadding || `var(--buttonIcon-basic-padding-default)`};
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-basic-borderRadius-default)`};
          margin: 0rem;
        }

        button {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-basic-buttonBackground-default)`};
          padding: 0rem;
        }
        button:hover {
          background: var(--buttonIcon-basic-hover-default);
        }
        /* Adding a border to the button when it is focused. */
        button:focus {
          outline: ${props.sizeBorderFocus || `1px`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
        }
        /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
        button:focus-visible {
          outline: ${props.sizeBorderFocus || `1px`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
        }
        .icon {
          font-size: ${props.iconSize || `var(--buttonIcon-basic-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-basic-iconColor-default)`};
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `grid`};
          }
          button {
            background: ${props.buttonBackground ||
            props.buttonBackgroundMd ||
            `var(--buttonIcon-basic-buttonBackground-default)`};
            padding: 0rem;
          }
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          button {
            display: ${hide || hideXl || `grid !important`};
            background: ${props.buttonBackground ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-basic-buttonBackground-default)`};
          }
          button .gridIcon {
            display: grid;
          }
          button:hover {
            background: var(--buttonIcon-hover-global) !important;
          }
        }
      `}</style>
    </>
  )
}
