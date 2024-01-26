export interface ButtonHelpFooterProps {
  hideLabelFooter?: any
  supportingTextColor?: string
  supportingText?: string
  ariaLabel?: string
  buttonBackgroundImgHover?: any
  gapContentRowSm?: any
  buttonShadow?: string
  buttonBackgroundSm?: any
  backgroundUrlImage?: any
  buttonColorHover?: string
  labelColorHover?: string
  sizeBorderFocus?: string
  typeBorderFocus?: string
  colorBorderFocus?: string
  iconSize?: string
  iconColor?: string
  tooltipColor?: string
  tooltipFontColor?: string
  buttonBackgroundMd?: any
  gapContentRowMd?: any
  gapContentInlineMd?: any
  buttonBackground?: string
  buttonBackgroundXl?: any
  buttonIconPadding?: string
  gapContentRow?: any
  gapContentRowXl?: any
  gapContentInlineXl?: any
  gapContentInline?: any
  gapContentInlineSm?: any
  buttonSizeWidth?: string
  buttonSizeHeight?: string
  buttonBorderRadius?: string
  buttonMaxSizeWidth?: string
  labelContent?: string
  labelColor?: any
  handleClick?: any
  buttonHide?: boolean
  buttonHideSm?: boolean
  buttonHideMd?: boolean
  buttonHideXl?: boolean
  alignButtonContent?: string
  positionLabel?: string
  borderBottom?: boolean
  backgroundImage?: any
  iconName?: string
  isCompressedSidebar?: any
  gridTemplateAreas?: boolean
  onHover?: boolean
}
export default function ButtonHelpFooter(props: ButtonHelpFooterProps) {
  /* This is a conditional that will hide the button in the breakpoint that you want. */
  const isCompressedSidebar = props.isCompressedSidebar

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
  let alignMiddleSpaceBetween: any

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

  let hideLabelFooter: boolean = props.hideLabelFooter
  if (props.hideLabelFooter === undefined) {
    hideLabelFooter = false
  }
  if (props.hideLabelFooter === null) {
    hideLabelFooter = false
  }

  /*let gridTemplateAreas = undefined
  if (props.gridTemplateAreas === 'gridTemplateAreas') {
    gridTemplateAreas = true
  }*/

  return (
    <>
      <button
        id="ButtonHelper"
        aria-label={`${props.labelColor}`}
        className={`${isCompressedSidebar ? 'container compressed' : 'container'}
          ${props.backgroundImage ? 'backgroundImage' : 'background'}
          ${props.onHover ? 'onHover' : ''}
         `}
        onClick={props.handleClick}
      >
        <div
          className={`${stylePositionLabelRight ? 'gridIconLabel-inline compressed' : ''}
          ${stylePositionLabelLeft ? 'gridIconLabel-inline' : ''}
          ${stylePositionLabelTop ? 'gridIconLabel-row' : ''}
          ${stylePositionLabelBottom ? 'gridIconLabel-row' : ''}
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
          ${props.hideLabelFooter ? 'hideLabelFooter' : ''}
          `}
        >
          <i
            className={`icon ${props.iconName} ${stylePositionLabelRight ? 'orderIcon-Left' : ''}
            ${stylePositionLabelLeft ? 'orderIcon-Right' : ''}
            ${stylePositionLabelTop ? 'orderIcon-Bottom' : ''}
            ${stylePositionLabelBottom ? 'orderIcon-Top' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}`}
          ></i>
          {hideLabelFooter ? (
            <div className="tooltip active">
              <span>{props.labelContent}</span>
              <span className="arrowTooltip"></span>
            </div>
          ) : (
            <>
              <p
                className={`labelContent label ${stylePositionLabelRight ? 'orderLabel Right' : ''}
                ${stylePositionLabelLeft ? 'orderLabel Left' : ''}
                ${stylePositionLabelTop ? 'orderLabel Top' : ''}
                ${stylePositionLabelBottom ? 'orderLabel Bottom' : ''}
                ${props.backgroundImage ? 'backgroundImage' : 'background'}
                ${props.labelColor ? 'var(--buttonIcon-label-labelColor-default)' : ''}
                `}
              >
                {props.labelContent}
              </p>
              <div className={`supportingText`}>
                <p>{props.supportingText}</p>
              </div>
            </>
          )}
        </div>
      </button>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
        .container {
          display: ${hide || hideSm || `grid`};
          justify-items: start;
          margin: 0 auto;
          width: ${props.buttonSizeWidth || `100%`};
          border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-label-borderRadius-default)`};
          max-width: ${props.buttonMaxSizeWidth || `100%`};
          min-height: ${props.buttonSizeHeight || `var(--buttonIcon-label-minHeight-default)` || `40px`};
          margin-bottom: 2px;
        }
        .container.compressed {
          min-height: min-content;
        }

        .container:hover {
          background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
        }

        .gridIconLabel-inline {
          display: grid;
          grid-template-columns: max-content 1fr;
          justify-items: start;
          grid-template-areas: 'icon label' 'icon supportingText';
          gap: ${props.gapContentInline || props.gapContentInlineSm || `12px`};
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .gridIconLabel-inline-Left {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          width: 100%;
          height: 100%;
          gap: ${props.gapContentInline || props.gapContentInlineSm || `12px`};
        }
        .gridIconLabel-inline.hideLabelFooter {
          display: flex;
          grid-template-columns: max-content;
          width: min-content;
        }
        .gridIconLabel-inline.alignContents-MiddleSpaceBetween {
          grid-template-columns: max-content 1fr;
        }

        .gridIconLabel-row {
          display: grid;
          grid-template-columns: max-content 1fr;
          gap: ${props.gapContentRow || props.gapContentRowSm || `12px`};
          width: 100%;
        }
        .gridIconLabel-row.alignContents-MiddleCenter {
          align-self: center;
          justify-self: center;
          grid-template-columns: min-content;
        }
        .gridIconLabel-row.alignContents-MiddleTop {
          align-self: base;
          justify-self: base;
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
          grid-template-columns: max-content auto;
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
          order: 3;
        }
        .orderLabel.Left {
          order: 1;
        }
        .orderLabel.Top {
          display: grid;
          align-items: center;
          order: 1;
        }
        .gridIconLabel-row .orderIcon-Bottom {
          order: 3;
        }

        .orderLabel.Bottom {
          order: 3;
        }

        .iconArrow.orderLabel.Top {
          display: grid;
          align-items: center;
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
          order: 2;
          justify-self: end;
        }

        .iconArrow.orderLabel.Right {
          order: 3;
          justify-self: end;
          margin-right: 4px;
        }
        .iconArrow.orderLabel.Left {
          order: 3;
          justify-self: end;
        }

        .iconArrow.orderLabel.Bottom {
          display: grid;
          align-items: center;
          grid-column-start: 2;
          grid-row-start: 1;
          grid-row-end: 3;
          justify-self: end;
        }

        i.iconArrow {
          font-size: 24px;
          color: var(--buttonIcon-label-iconColor-default);
          font-weight: normal;
        }

        #ButtonHelper {
          padding: ${props.buttonIconPadding || `var(--buttonIcon-label-padding-default)` || '0px'} !important;
          box-shadow: ${props.buttonShadow || 'none'};
        }
        #ButtonHelper.background {
          background: ${props.buttonBackground ||
          props.buttonBackgroundSm ||
          `var(--buttonIcon-label-buttonBackground-default)`};
        }
        #ButtonHelper.backgroundImage {
          background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
          background-size: cover;
        }

        #ButtonHelper:hover.background,
        #ButtonHelper:hover.container-list {
          background: ${props.buttonColorHover || `var(--buttonIcon-label-buttonBackground-hover-default)` || 'none'};
        }
        #ButtonHelper:hover p.background,
        #ButtonHelper:hover p.backgroundImage,
        #ButtonHelper:hover .supportingText {
          color: ${props.labelColorHover || `var(--buttonIcon-label-labelColor-hover-default)`};
        }
        #ButtonHelper:hover .icon,
        #ButtonHelper:hover .iconArrow {
          color: ${props.labelColorHover || `var(--buttonIcon-label-iconColor-hover-default)`};
        }

        /* On Hover true */

        .container.onHover {
          background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
        }
        #ButtonHelper.background.onHover,
        #ButtonHelper.container-list {
          background: ${props.buttonColorHover || `var(--buttonIcon-label-buttonBackground-hover-default)` || 'none'};
        }
        #ButtonHelper.onHover p.background,
        #ButtonHelper.onHover p.backgroundImage,
        #ButtonHelper.onHover .supportingText {
          color: ${props.labelColorHover || `var(--buttonIcon-label-labelColor-hover-default)`};
        }
        #ButtonHelper.onHover .icon,
        #ButtonHelper.onHover .iconArrow {
          color: ${props.labelColorHover || `var(--buttonIcon-label-iconColor-hover-default)`};
        }

        /* Adding a border to the button when it is focused. */
        #ButtonHelper:focus {
          outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
        }
        /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
        #ButtonHelper:focus-visible {
          outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
            ${props.colorBorderFocus || `var(--focus)`};
        }

        .icon {
          font-size: ${props.iconSize || `var(--buttonIcon-label-iconSize-default)`};
          color: ${props.iconColor || `var(--buttonIcon-label-iconColor-default)`};
          grid-area: icon;
        }
        .label {
          grid-area: label;
        }

        .orderLabel {
          display: grid;
          font-weight: 600;
          color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          align-items: center;
          text-align: center;
        }

        /** Tooltip */

        .tooltip {
          display: none;
          position: absolute;
          transform: translate(-11px, -44px);
          width: auto;
          height: auto;
          border-radius: 4px;
          color: transparent;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          padding: 4px 12px;
        }

        #ButtonHelper .arrowTooltip {
          display: block;
          position: absolute;
          transform: translate(2px, 3px);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid ${props.tooltipColor || `var(--tooltip-color)`};
        }
        #ButtonHelper .tooltip.active {
          background: ${props.tooltipColor || `var(--tooltip-color)`};
          color: ${props.tooltipFontColor || `white`};
          inline-size: max-content;
        }
        #ButtonHelper .tooltip.active {
          background: ${props.tooltipColor || `var(--tooltip-color)`};
          color: ${props.tooltipFontColor || `white`};
          inline-size: max-content;
        }
        #ButtonHelper:hover .tooltip {
          display: block !important;
          position: fixed;
          z-index: 2;
        }

        /** Accordion Arrow */
        .open-label {
          transform: rotate(180deg);
        }
        .close-label {
          transform: rotate(0deg);
        }

        a {
          font-family: 'Karla';
          font-style: normal;
          color: ${props.supportingTextColor || `var(--gray-500)`};
          font-weight: 400;
          font-size: 16px;
          grid-area: a;
        }
        /**  A media query that will change the style of the component when the screen is
                ** greater that 744px and max 1279px.
                ** Md- Tablet - Version
                */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: ${hide || hideMd || `grid`};
          }

          #ButtonHelper {
            background: ${props.buttonBackground ||
            props.buttonBackgroundMd ||
            `var(--buttonIcon-label-buttonBackground-default)`};
            padding: ${props.buttonIconPadding || `var(--buttonIcon-label-padding-default)` || '0px'};
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }
          .gridIconLabel-row {
            gap: ${props.gapContentRow || props.gapContentRowMd || `12px`};
          }
          .gridIconLabel-inline {
            gap: ${props.gapContentInline || props.gapContentInlineMd || `12px`};
          }
          .gridIconLabel-inline-Left {
            gap: ${props.gapContentInline || props.gapContentInlineMd || `12px`};
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
          #ButtonHelper {
            background: ${props.buttonBackground ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-label-buttonBackground-default)`};
            padding: ${props.buttonIconPadding || `var(--buttonIcon-label-padding-default)` || '0px'};
          }
          .gridIconLabel-row {
            gap: ${props.gapContentRow || props.gapContentRowXl || `12px`};
          }

          .gridIconLabel-row.alignContents-MiddleCenter {
            align-self: center;
            justify-self: center;
            grid-template-columns: max-content;
          }
          .gridIconLabel-inline {
            gap: ${props.gapContentInline || props.gapContentInlineXl || `12px`};
          }
          .gridIconLabel-inline-Left {
            gap: ${props.gapContentInline || props.gapContentInlineXl || `12px`};
          }
        }
      `}</style>
    </>
  )
}
