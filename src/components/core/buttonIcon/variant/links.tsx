import { ButtonsIconProps, ButtonLinksProps } from 'types/buttons/buttonsIcon'
import LineSeparator from 'components/core/lineSeparator'

/**
 * Button type links
 * @param props
 * @returns
 */
export default function ButtonLinks(props: ButtonsIconProps & ButtonLinksProps) {
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

  // Set borderBottom default value on true
  let borderBottom: boolean = props.borderBottom
  if (props.borderBottom === undefined) {
    borderBottom = true
  }
  if (props.borderBottom === null) {
    borderBottom = true
  }

  return (
    <>
      <button
        id="Buttonlink"
        disabled={props.disabled}
        aria-label={`${props.labelColor}`}
        className={`container
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
          `}
        onMouseOver={props.onMouseOver}
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
          <h6
            className={`label ${stylePositionLabelRight ? 'orderLabel-Right' : ''}
            ${stylePositionLabelLeft ? 'orderLabel-Left' : ''}
            ${stylePositionLabelTop ? 'orderLabel-Top' : ''}
            ${stylePositionLabelBottom ? 'orderLabel-Bottom' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}
            ${props.labelColor ? 'var(--buttonIcon-label-labelColor-default)' : ''}
              `}
          >
            {props.labelContent}
          </h6>
          <p className={`supportingText font-karla`}>{props.supportingText}</p>
        </div>
      </button>
      {borderBottom === true && <LineSeparator />}
      {borderBottom === false && <></>}

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
        }

        .gridIconLabel-inline {
          display: grid;
          gap: 4px;
          grid-template-columns: auto max-content;
          align-items: center;
          grid-template-areas:
            'label icon'
            'supportingText icon';
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
          `var(--buttonIcon-label-buttonBackground-default)` ||
          `var(--buttonIcon-links-buttonBackground-default)`};
          width: ${props.buttonSizeWidth || `100%`};
        }
        button.backgroundImage {
          background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
          background-size: cover;
        }

        button:not([disabled]):hover.background,
        button:not([disabled]):hover.container-list {
          background: var(--buttonIcon-label-buttonBackground-hover-default);
        }
        button:not([disabled]):hover h6.background,
        button:not([disabled]):hover h6.backgroundImage {
          color: none;
        }
        button:not([disabled]):hover p.background,
        button:not([disabled]):hover p.backgroundImage {
          color: none;
        }
        button:not([disabled]):hover .icon,
        button:not([disabled]):hover .iconArrow {
          color: none;
        }

        button:disabled,
        button[disabled] {
          background-color: transparent;
          color: ${`var( --color-font-disabled)`} !important;
          cursor: initial;
          filter: ${props.filter ? 'grayscale(1)' : ''};
        }

        button:disabled h6,
        button:disabled p,
        button:disabled i {
          color: ${`var( --color-font-disabled)`} !important;
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
        }

         {
          /* .marginLabel-Left {
          margin: 0rem 0rem 0rem var(--buttonIcon-label-marginLeftLabel-default);
        } */
        }

        h6 {
          display: grid;
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          align-items: center;
          justify-content: start;
        }
        .supportingText {
          display: grid;
          color: ${props.supportingTextColor || `var(--gray-500)`};
          align-items: center;
          justify-content: start;
        }
        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `grid`};
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
          .supportingText,
          h6 {
            padding: 0 0.5rem 0 0.5rem;
          }
        }
      `}</style>
    </>
  )
}
