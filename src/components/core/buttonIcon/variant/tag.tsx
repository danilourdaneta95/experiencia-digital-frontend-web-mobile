import { ButtonsIconProps, ButtonIconTagProps } from 'types/buttons/buttonsIcon'

/**
 * Button type label
 * @param props
 * @returns
 */
export default function ButtonTag(props: ButtonsIconProps & ButtonIconTagProps) {
  /* This is a conditional that will hide the button in the breakpoint that you want. */
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

  /** This is a conditional that will change the pass props.alignIconAndLabel to boolean and set Style*/
  let alignTopLeft: any = undefined
  let alignTopCenter: any = undefined
  let alignTopRight: any = undefined
  let alignMiddleLeft: any = undefined
  let alignMiddleCenter: any = undefined
  let alignMiddleRight: any = undefined
  let alignBottomLeft: any = undefined
  let alignBottomCenter: any = undefined
  let alignBottomRight: any = undefined
  let alignMiddleSpaceBetween: any = undefined

  if (props.alignButtonContent === 'TopLeft') {
    alignTopLeft = true
  }
  if (props.alignButtonContent === 'TopCenter') {
    alignTopCenter = true
  }
  if (props.alignButtonContent === 'TopRight') {
    alignTopRight = true
  }
  if (props.alignButtonContent === 'MiddleLeft') {
    alignMiddleLeft = true
  }
  if (props.alignButtonContent === 'MiddleCenter') {
    alignMiddleCenter = true
  }
  if (props.alignButtonContent === 'MiddleRight') {
    alignMiddleRight = true
  }
  if (props.alignButtonContent === 'BottomLeft') {
    alignBottomLeft = true
  }
  if (props.alignButtonContent === 'BottomCenter') {
    alignBottomCenter = true
  }
  if (props.alignButtonContent === 'BottomRight') {
    alignBottomRight = true
  }
  if (props.alignButtonContent === 'MiddleSpaceBetween') {
    alignMiddleSpaceBetween = true
  }

  let stylePositionLabelLeft = undefined
  let stylePositionLabelRight = undefined
  let stylePositionLabelTop = undefined
  let stylePositionLabelBottom = undefined
  if (props.positionLabel === 'Left') {
    stylePositionLabelLeft = true
  }
  if (props.positionLabel === 'Right' || props.positionLabel === null || props.positionLabel === undefined) {
    stylePositionLabelRight = true
  }
  if (props.positionLabel === 'Top') {
    stylePositionLabelTop = true
  }
  if (props.positionLabel === 'Bottom') {
    stylePositionLabelBottom = true
  }

  let hideLabel: boolean = props.hideLabel
  if (props.hideLabel === undefined) {
    hideLabel = false
  }
  if (props.hideLabel === null) {
    hideLabel = false
  }

  return (
    <>
      <button
        aria-label={`${props.ariaLabel}`}
        className={`buttonTag container
          ${props.backgroundImage ? 'backgroundImage' : 'background'}
          ${alignTopLeft ? 'alignContents-TopLeft' : ''}
          ${alignTopCenter ? 'alignContents-TopCenter' : ''}
          ${alignTopRight ? 'alignContents-TopRight' : ''}
          ${alignMiddleLeft ? 'alignContents-MiddleLeft' : ''}
          ${alignMiddleCenter ? 'alignContents-MiddleCenter' : ''}
          ${alignMiddleRight ? 'alignContents-MiddleRight' : ''}
          ${alignBottomLeft ? 'alignContents-BottomLeft' : ''}
          ${alignBottomCenter ? 'alignContents-BottomCenter' : ''}
          ${alignBottomRight ? 'alignContents-BottomRight' : ''}
          ${alignMiddleSpaceBetween ? 'alignContents-MiddleSpaceBetween' : ''}
          ${props.hideLabel ? 'hideLabel' : ''}
          `}
        onClick={props.handleClick}
      >
        <div
          className={`${stylePositionLabelRight ? 'gridIconLabel-inline' : ''}
          ${stylePositionLabelLeft ? 'gridIconLabel-inline' : ''}
          ${stylePositionLabelTop ? 'gridIconLabel-row' : ''}
          ${stylePositionLabelBottom ? 'gridIconLabel-row' : ''}
          `}
        >
          <i
            className={`icon ${props.iconName}${stylePositionLabelRight ? 'orderIcon-Left' : ''}
            ${stylePositionLabelLeft ? 'orderIcon-Right' : ''}
            ${stylePositionLabelTop ? 'orderIcon-Bottom' : ''}
            ${stylePositionLabelBottom ? 'orderIcon-Top' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}`}
          ></i>
          {hideLabel === false && (
            <p
              className={`label font-karla normal ${stylePositionLabelRight ? 'orderLabel-Right' : ''}
            ${stylePositionLabelLeft ? 'orderLabel-Left' : ''}
            ${stylePositionLabelTop ? 'orderLabel-Top' : ''}
            ${stylePositionLabelBottom ? 'orderLabel-Bottom' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}
            ${props.supportingText ? 'colorSupportingText' : ''}
            ${props.labelColor ? 'var(--buttonIcon-label-labelColor-default)' : ''}
              `}
            >
              {props.labelContent}
            </p>
          )}
          {hideLabel === true && <></>}
        </div>
      </button>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: ${hide || hideSm || `grid`};
          grid-template-columns: 1fr;
          padding: 0;
          margin-bottom: 0.125rem;
          align-content: center;
          width: ${props.buttonSizeWidth || `100%`};
          height: ${props.buttonSizeHeight || `max-content`};
          border-radius: ${props.buttonBorderRadius || `0rem`};
          box-shadow: 0.188rem 0.188rem ${`var(--box-shadow-color)`};
        }

        .gridIconLabel-inline {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          grid-template-areas: 'label icon';
        }
        .gridIconLabel-row {
          display: grid;
          grid-template-columns: max-content;
          align-items: center;
        }

        .alignContents-default {
          align-items: center;
          justify-content: start;
        }
        .alignContents-TopLeft {
          align-items: start;
          justify-content: start;
        }
        .alignContents-TopCenter {
          align-items: start;
          justify-content: center;
        }
        .alignContents-TopRight {
          align-items: start;
          justify-content: end;
        }
        .alignContents-MiddleLeft {
          align-items: center;
          justify-content: start;
        }
        .alignContents-MiddleCenter {
          align-items: center;
          justify-content: center;
        }
        .alignContents-MiddleRight {
          align-items: center;
          justify-content: end;
        }
        .alignContents-MiddleSpaceBetween {
          justify-content: space-between;
        }
        .alignContents-MiddleSpaceBetween .orderIcon-Right {
          justify-self: end;
        }

        .label {
          grid-area: label;
        }

        .supportingText {
          grid-area: supportingText;
          order: 3;
        }
        .orderIcon-Left {
          order: 1;
        }
        .orderIcon-Right {
          order: 2;
        }
        .orderIcon-Top {
          order: 1;
        }
        .orderIcon-Bottom {
          order: 2;
        }
        .orderLabel-Right {
          order: 2;
          margin: 0rem 0rem 0rem var(--buttonIcon-label-marginLeftLabel-default);
        }
        .orderLabel-Left {
          order: 1;
          margin: 0rem var(--buttonIcon-label-marginLeftLabel-default) 0rem 0rem;
        }
        .orderLabel-Top {
          order: 1;
          margin: 0rem 0rem var(--buttonIcon-label-marginLabelTop-default) 0rem;
        }
        .orderLabel-Bottom {
          order: 2;
          margin: var(--buttonIcon-label-marginLabelBottom-default) 0rem 0rem 0rem;
        }
        .orderLabel {
          display: grid;
          font-weight: 600;
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
        }
        button.background {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          props.backgroundColorMd ||
          `var(--buttonIcon-label-buttonBackground-default)` ||
          `var(--buttonIcon-links-buttonBackground-default)`};
          width: ${props.buttonSizeWidth || `100%`};
          border-radius: 0.75rem;
        }
        button.backgroundImage {
          background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
          background-size: cover;
        }

        button:hover.background {
          background: var(--buttonIcon-label-buttonBackground-hover-default);
        }
        button:hover p.background,
        button:hover p.backgroundImage {
          color: none;
        }
        button:hover .icon {
          color: none;
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
          font-size: ${props.iconSize || `var(--buttonIcon-label-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-label-iconColor-default)`};
          grid-area: icon;
          padding-right: 1.125rem;
        }

         {
          /* .marginLabel-Left {
          margin: 0rem 0rem 0rem var(--buttonIcon-label-marginLeftLabel-default);
        } */
        }

        p {
          display: grid;
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          margin-block-start: 0em;
          margin-block-end: 0em;
          align-items: center;
          justify-content: start;
          padding: 1.37rem 1.56rem 1.37rem 1.5rem;
        }
        .supportingText {
          display: grid;
          color: var(--gray-500);
          margin-top: 0.25rem;
        }
        button.background {
          background: ${props.backgroundColor ||
          props.backgroundColorSm ||
          `var(--buttonIcon-label-buttonBackground-default)` ||
          `var(--buttonIcon-links-buttonBackground-default)`};
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `grid`};
          }
          button.background {
            background: ${props.backgroundColor ||
            props.backgroundColorMd ||
            `var(--buttonIcon-label-buttonBackground-default)` ||
            `var(--buttonIcon-links-buttonBackground-default)`};
          }
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            display: ${hide || hideXl || `grid`};
          }
          button.background {
            background: ${props.backgroundColor ||
            props.backgroundColorXl ||
            `var(--buttonIcon-label-buttonBackground-default)` ||
            `var(--buttonIcon-links-buttonBackground-default)`};
          }
        }
      `}</style>
    </>
  )
}
