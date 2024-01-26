import { ButtonsIconProps, ButtonIconBadgeProps } from 'types/buttons/buttonsIcon'

export default function ButtonBadge(props: ButtonsIconProps & ButtonIconBadgeProps) {
  let hide: string
  let hideSm: string
  let hideMd: string
  let hideXl: string

  if (props.buttonHide === true) {
    hide = 'none'
  }
  if (props.buttonHideSm === true) {
    hideSm = 'none'
  }
  if (props.buttonHideMd === true) {
    hideMd = 'none'
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
        id="ButtonBadge"
        aria-label={`${props.ariaLabel}`}
        className="container"
        onMouseOver={props.onMouseOver}
        onClick={props.handleClick}
      >
        <i className={`icon ${iconName}`}></i>
        {/* A badge that will show info. */}
        <div className={`badge ${props.badgeActive ? `active` : ``}`}>
          <span className={`${props.badgeActive ? '' : `hideContents`}`}>{props.badgeContents}</span>
        </div>
      </button>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: ${hide || hideSm || `flex`};
          align-items: center;
          justify-items: center;
          width: ${props.buttonSizeWidth || `max-content`};
          height: ${props.buttonSizeHeight || `max-content`};
          padding: ${props.buttonIconPadding || `var(--buttonIcon-badge-padding-default)`};
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-badge-borderRadius-default)`};
        }

        button {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-badge-buttonBackground-default)`};
          padding: 0rem;
          justify-content: center;
        }
        button:hover {
          background: var(--buttonIcon-badge-hover-default);
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
          font-size: ${props.iconSize || `var(--buttonIcon-badge-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-badge-iconColor-default)`};
        }

        .badge {
          display: grid;
          position: absolute;
          transform: translate(0.75rem, -0.125rem);
          width: ${props.badgeSizeWidth || `.75rem`};
          height: ${props.badgeSizeHeight || `.75rem`};
          border-radius: 50%;
          font-size: 0.5rem;
          padding: 0.125rem;
        }

        .badge.active {
          background: ${props.badgeColor || `var(--buttonIcon-badge-backgroundBadge-default)`};
          color: ${props.badgeFontColor || `var(--buttonIcon-badge-fontColorBadge-default)`};
        }

        .badge.active > span {
          margin-left: -0.031rem;
        }

        .hideContents {
          display: none;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `flex`};
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
            display: ${hide || hideXl || `flex !important`};
            background: ${props.buttonBackground ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-badge-buttonBackground-default)`};
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
