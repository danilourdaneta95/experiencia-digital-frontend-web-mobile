import { ButtonsIconProps, ButtonIconAvatarProps } from 'types/buttons/buttonsIcon'

/**
 * It's a function that returns a React component that renders a button with an icon and tag html is a div
 * @returns A component that is a button with an icon and tag html is a div.
 */
export default function ButtonAvatar(props: ButtonsIconProps & ButtonIconAvatarProps) {
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
    hideMd = 'none'
  }
  if (props.buttonHideXl === true) {
    hideXl = 'none !important'
  }

  // Set Default Icon
  let iconName: string = props.iconName

  if (props.iconName === undefined) {
    iconName = 'ri-account-circle-line'
  }
  if (props.iconName === '') {
    iconName = 'ri-account-circle-line'
  }

  return (
    <>
      <div
        aria-label={`${props.ariaLabel}`}
        className="buttonAvatar container"
        onMouseOver={props.onMouseOver}
        onClick={props.handleClick}
      >
        <i className={`icon ${iconName}`}></i>
      </div>

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
          padding: ${props.buttonIconPadding || `var(--buttonIcon-avatar-padding-default)`};
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-avatar-borderRadius-default)`};
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-avatar-buttonBackground-default)`};
        }
        .icon {
          font-size: ${props.iconSize || `var(--buttonIcon-avatar-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-avatar-iconColor-default)`};
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `grid`};
            background: ${props.buttonBackground ||
            props.buttonBackgroundMd ||
            `var(--buttonIcon-avatar-buttonBackground-default)`};
          }
        }
        */

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          container {
            display: ${hide || hideXl || `grid`};
            background: ${props.buttonBackground ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-avatar-buttonBackground-default)`};
          }
        }
      `}</style>
    </>
  )
}
