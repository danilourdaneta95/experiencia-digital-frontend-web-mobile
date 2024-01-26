import { ButtonsIconProps, ButtonIconLabelProps } from 'types/buttons/buttonsIcon'

/**
 * Buttons label
 * @param props
 * @returns
 */
export default function ButtonLabel(props: ButtonsIconProps & ButtonIconLabelProps) {
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

  let hideLabel: boolean = props.hideLabel
  if (props.hideLabel === undefined) {
    hideLabel = false
  }
  if (props.hideLabel === null) {
    hideLabel = false
  }

  const hideIcon = props.hideIcon

  if (hideLabel === true) {
    // Is Compressed Sidebar?
    return (
      <>
        <button
          disabled={props.disabled}
          aria-label={`${props.ariaLabel || `Acceso a ${props.labelContent}`}`}
          tabIndex={props.tabIndex}
          className={`buttonLabel container
          ${props.backgroundImage ? 'backgroundImage' : 'background'}
          ${props.buttonBackgroundImgHover ? 'buttonBackgroundImgHover' : 'background'}
          `}
          onMouseOver={props.onMouseOver}
          onClick={props.handleClick}
        >
          <div
            className={`${stylePositionLabelRight ? 'gridIconLabel-inline' : ''}
          ${stylePositionLabelLeft ? 'gridIconLabel-inline-Left' : ''}
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
          ${props.hideLabel ? 'hideLabel' : ''}
          `}
          >
            <i
              className={`icon ${props.iconName}
            ${stylePositionLabelRight ? 'orderIcon-Left' : ''}
            ${stylePositionLabelLeft ? 'orderIcon-Right' : ''}
            ${stylePositionLabelTop ? 'orderIcon-Bottom' : ''}
            ${stylePositionLabelBottom ? 'orderIcon-Top' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}`}
            ></i>
          </div>
          <div className="tooltip active">
            <span>{props.labelContent}</span>
            <span className="arrowTooltip"></span>
          </div>
        </button>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: ${hide || hideSm || `grid`};
            width: ${props.buttonSizeWidth || `44px`};
            height: ${props.buttonSizeHeight || `100%`};
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-label-borderRadius-default)`};
            max-width: ${props.buttonMaxSizeWidth || `100%`};
            justify-content: center;
            align-content: center;
            min-height: 44px;
          }

          .container:hover {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }

          .gridIconLabel-inline {
            display: grid;
            grid-template-columns: min-content max-content 1fr;
            align-items: center;
            width: 100%;
            height: 100%;
            justify-items: start;
            gap: ${props.gapContentInline || props.gapContentInlineSm || `0.75rem`};
          }
          .gridIconLabel-inline-Left {
            display: grid;
            grid-template-columns: max-content 1fr;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: ${props.gapContentInline || props.gapContentInlineSm || `0.75rem`};
          }
          .gridIconLabel-inline.hideLabel {
            grid-template-columns: max-content;
            width: min-content;
            align-content: center;
            min-height: 44px;
          }
          .gridIconLabel-row {
            display: grid;
            grid-template-columns: max-content 1fr;
            gap: ${props.gapContentRow || props.gapContentRowSm || `0.75rem`};
            width: 100%;
          }
          .gridIconLabel-row.alignContents-MiddleCenter {
            align-self: center;
            justify-self: center;
            grid-template-columns: max-content;
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
            align-content: center;
          }
          .alignContents-MiddleCenter {
            align-items: center;
            align-content: center;
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
          .orderLabel.Right {
            order: 2;
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

          button {
            padding: ${props.buttonIconPadding || `0px`};
            box-shadow: ${props.buttonShadow || 'none'};
          }
          button.background {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-label-buttonBackground-default)`};
          }
          button.backgroundImage {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
            background-size: cover;
          }

          button:hover.background,
          button:hover.container-list {
            background: ${props.buttonColorHover || `var(--buttonIcon-label-buttonBackground-hover-default)`};
          }
          button:hover p.background,
          button:hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-label-labelColor-hover-default)`};
          }
          button:hover .icon {
            color: ${props.labelColorHover || `var(--buttonIcon-label-iconColor-hover-default)`};
          }

          button:not([disabled]):hover.background,
          button:not([disabled]):hover.container-list {
            background: ${props.buttonColorHover || `var(--buttonIcon-label-buttonBackground-hover-default)` || 'none'};
          }
          button:not([disabled]):hover p.background,
          button:not([disabled]):hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-label-labelColor-hover-default)`};
          }
          button:not([disabled]):hover .icon {
            color: ${props.labelColorHover || `var(--buttonIcon-label-iconColor-hover-default)`};
          }

          button:disabled,
          button[disabled] {
            background-color: ${`var(--background-color-disabled)`} !important;
            color: ${`var(--color-font-disabled)`} !important;
            cursor: initial;
            filter: ${props.filter ? 'grayscale(1)' : ''};
          }

          button:disabled > div > p,
          button:disabled div > i {
            color: ${`var(--color-font-disabled)`} !important;
          }

          /* Adding a border to the button when it is focused. */
          button:focus {
            outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible {
            outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
          }

          .icon {
            font-size: ${props.iconSize || `var(--buttonIcon-label-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-label-iconColor-default)`};
            height: 100%;
          }

          .orderLabel {
            display: grid;
            font-weight: 600;
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }

          /** Tooltip */

          .tooltip {
            display: none;
            position: absolute;
            transform: translate(1px, -25px);
            width: auto;
            height: auto;
            border-radius: 0.25rem;
            color: transparent;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            padding: 0.25rem 0.75rem;
          }

          .tooltip > .arrowTooltip {
            display: block;
            position: absolute;
            transform: translate(0.125rem, 0.188rem);
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-top: 0.5rem solid ${props.tooltipBgColor || `var(--buttonIcon-label-tooltipBgColor-default)`};
          }
          .tooltip.active {
            background: ${props.tooltipBgColor || `var(--buttonIcon-label-tooltipBgColor-default)`};
            color: ${props.tooltipFontColor || `white`};
            inline-size: max-content;
          }

          button:hover .tooltip {
            display: block !important;
            position: absolute;
            z-index: 2;
          }

          /* Adding a border to the button when it is focused. */
          button:focus.container-list {
            outline: ${`var(--buttonIcon-label-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-label-buttonList-background-focus);
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible.container-list {
            outline: ${`var(--buttonIcon-label-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-label-buttonList-background-focus);
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
              `var(--buttonIcon-label-buttonBackground-default)`};
              color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
            }
            .gridIconLabel-row {
              gap: ${props.gapContentRow || props.gapContentRowMd || `0.75rem`};
            }
            .gridIconLabel-inline {
              gap: ${props.gapContentInline || props.gapContentInlineMd || `0.75rem`};
            }
            .gridIconLabel-inline-Left {
              gap: ${props.gapContentInline || props.gapContentInlineMd || `0.75rem`};
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
            button {
              background: ${props.buttonBackground ||
              props.buttonBackgroundXl ||
              `var(--buttonIcon-label-buttonBackground-default)`};
            }
            button.background {
              background: ${props.buttonBackground ||
              props.buttonBackgroundXl ||
              `var(--buttonIcon-label-buttonBackground-default)`};
            }
            .gridIconLabel-row {
              gap: ${props.gapContentRow || props.gapContentRowXl || `0.75rem`};
            }

            .gridIconLabel-row.alignContents-MiddleCenter {
              align-self: center;
              justify-self: center;
              grid-template-columns: max-content;
            }
            .gridIconLabel-inline {
              gap: ${props.gapContentInline || props.gapContentInlineXl || `0.75rem`};
            }
            .gridIconLabel-inline-Left {
              gap: ${props.gapContentInline || props.gapContentInlineXl || `0.75rem`};
            }
          }
        `}</style>
      </>
    )
  } else
    return (
      <>
        <button
          disabled={props.disabled}
          aria-label={`${props.ariaLabel || `Acceso a ${props.labelContent}`}`}
          tabIndex={props.tabIndex}
          className={`buttonLabel container
          ${props.backgroundImage ? 'backgroundImage' : 'background'}
          ${props.buttonBackgroundImgHover ? 'buttonBackgroundImgHover' : ''}
          `}
          onMouseOver={props.onMouseOver}
          onClick={props.handleClick}
        >
          <div
            className={`${stylePositionLabelRight ? 'gridIconLabel-inline' : ''}
          ${stylePositionLabelLeft ? 'gridIconLabel-inline-Left' : ''}
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
          ${props.hideLabel ? 'hideLabel' : ''}
          ${props.hideIcon ? 'hideIcon' : ''}
          `}
          >
            {hideIcon ? (
              <></>
            ) : (
              <i
                className={`icon ${props.iconName}
            ${stylePositionLabelRight ? 'orderIcon-Left' : ''}
            ${stylePositionLabelLeft ? 'orderIcon-Right' : ''}
            ${stylePositionLabelTop ? 'orderIcon-Bottom' : ''}
            ${stylePositionLabelBottom ? 'orderIcon-Top' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}`}
              ></i>
            )}

            <>
              <p
                className={`labelContent ${stylePositionLabelRight ? 'orderLabel Right' : ''}
            ${stylePositionLabelLeft ? 'orderLabel Left' : ''}
            ${stylePositionLabelTop ? 'orderLabel Top' : ''}
            ${stylePositionLabelBottom ? 'orderLabel Bottom' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}
            ${props.labelColor ? 'var(--buttonIcon-label-labelColor-default)' : ''}
              `}
              >
                {props.labelContent}
              </p>
            </>
          </div>
        </button>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: ${hide || hideSm || `grid`};
            width: ${props.buttonSizeWidth || `100%`};
            height: ${props.buttonSizeHeight || `100%`};
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-label-borderRadius-default)`};
            max-width: ${props.buttonMaxSizeWidth || `100%`};
            margin: 0 auto;
            justify-items: start;
            min-height: 44px;
            align-content: center;
          }

          .buttonLabel {
            padding: 0px 14px;
          }

          .container:hover {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }

          button[disabled].container:hover {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }

          .gridIconLabel-inline {
            display: grid;
            grid-template-columns: min-content max-content;
            align-items: center;
            width: 100%;
            height: 100%;
            justify-items: start;
            gap: ${props.gapContentInline || props.gapContentInlineSm || `0.75rem`};
            align-content: center;
            min-height: 44px;
          }
          .gridIconLabel-inline-Left {
            display: grid;
            grid-template-columns: max-content min-content;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: ${props.gapContentInline || props.gapContentInlineSm || `0.75rem`};
          }
          .gridIconLabel-inline.hideLabel {
            grid-template-columns: max-content;
            width: min-content;
          }
          .gridIconLabel-row {
            display: grid;
            grid-template-columns: max-content 1fr;
            gap: ${props.gapContentRow || props.gapContentRowSm || `0.75rem`};
            width: 100%;
          }
          .gridIconLabel-row.alignContents-MiddleCenter {
            align-self: center;
            justify-self: center;
            grid-template-columns: max-content;
          }
          .gridIconLabel-row.alignContents-MiddleTop {
            align-self: base;
            justify-self: base;
          }

          .hideIcon {
            gap: 0px;
          }

          .gridIconLabel-row.alignContents-MiddleCenter.hideIcon {
            grid-template-columns: auto;
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
            align-content: center;
          }
          .alignContents-MiddleCenter {
            align-items: center;
            align-content: center;
            justify-content: center;
            grid-template-columns: max-content auto;
          }
          .alignContents-MiddleRight {
            align-items: center;
            justify-content: end;
          }
          .alignContents-MiddleSpaceBetween {
            justify-content: space-between;
            align-content: center;
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
          .orderLabel.Right {
            order: 2;
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

          button {
            padding: ${props.buttonIconPadding || `0px`};
            box-shadow: ${props.buttonShadow || 'none'};
          }
          button.background {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            props.buttonBackgroundXl ||
            `var(--buttonIcon-label-buttonBackground-default)`};
          }
          button.backgroundImage {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
            background-size: cover;
          }

          button:not([disabled]):hover.background,
          button:not([disabled]):hover.container-list {
            background: ${props.buttonColorHover || `var(--buttonIcon-label-buttonBackground-hover-default)` || 'none'};
          }
          button:not([disabled]):hover p.background,
          button:not([disabled]):hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-label-labelColor-hover-default)`};
          }
          button:not([disabled]):hover .icon {
            color: ${props.labelColorHover || `var(--buttonIcon-label-iconColor-hover-default)`};
          }

          button:disabled,
          button[disabled] {
            background-color: ${`var(--background-color-disabled)`} !important;
            color: ${`var(--color-font-disabled)`} !important;
            cursor: initial;
            filter: grayscale(1);
          }

          button[disabled]:hover p.backgroundImage {
            color: unset;
          }

          button:disabled > div > p,
          button:disabled div > i {
            color: ${`var(--color-font-disabled)`}!important;
          }
          button p {
            text-decoration: ${props.textDecoration || `none`};
          }

          /* Adding a border to the button when it is focused. */
          button:focus {
            outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible {
            outline: ${props.sizeBorderFocus || `var(--sizeFocus)` || `1px`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
          }

          .icon {
            font-size: ${props.iconSize || `var(--buttonIcon-label-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-label-iconColor-default)`};
            height: 100%;
          }

          .orderLabel {
            display: grid;
            font-weight: 600;
            color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
          }

          /* Adding a border to the button when it is focused. */
          button:focus.container-list {
            outline: ${`var(--buttonIcon-label-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-label-buttonList-background-focus);
          }
          /* A pseudo-class that applies to an element when it is focused and the user has navigated to
        it using the keyboard. */
          button:focus-visible.container-list {
            outline: ${`var(--buttonIcon-label-buttomList-sizeFocus)`} ${props.typeBorderFocus || `solid`}
              ${props.colorBorderFocus || `var(--focus)`};
            background: var(--buttonIcon-label-buttonList-background-focus);
          }

          /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

          @media (min-width: 744px) and (max-width: 1279px) {
            .container {
              display: ${hide || hideMd || 'grid'};
            }

            button {
              background: ${props.buttonBackground ||
              props.buttonBackgroundMd ||
              `var(--buttonIcon-label-buttonBackground-default)`};
              color: ${props.labelColor || `var(--buttonIcon-label-labelColor-default)`};
            }
            .gridIconLabel-row {
              gap: ${props.gapContentRow || props.gapContentRowMd || `0.75rem`};
            }
            .gridIconLabel-inline {
              gap: ${props.gapContentInline || props.gapContentInlineMd || `0.75rem`};
            }
            .gridIconLabel-inline-Left {
              gap: ${props.gapContentInline || props.gapContentInlineMd || `0.75rem`};
            }

            .hideIcon {
              gap: 0px;
            }
          }

          /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
            .container {
              display: ${hide || hideXl || 'grid'};
            }
            button {
              background: ${props.buttonBackground ||
              props.buttonBackgroundXl ||
              `var(--buttonIcon-label-buttonBackground-default)`};
            }
            button.background {
              background: ${props.buttonBackground ||
              props.buttonBackgroundXl ||
              `var(--buttonIcon-label-buttonBackground-default)`};
            }
            .gridIconLabel-row {
              gap: ${props.gapContentRow || props.gapContentRowXl || `0.75rem`};
            }

            .gridIconLabel-row.alignContents-MiddleCenter {
              align-self: center;
              justify-self: center;
              grid-template-columns: max-content;
            }
            .gridIconLabel-inline {
              gap: ${props.gapContentInline || props.gapContentInlineXl || `0.75rem`};
            }
            .gridIconLabel-inline-Left {
              gap: ${props.gapContentInline || props.gapContentInlineXl || `0.75rem`};
            }

            .hideIcon {
              gap: 0px;
            }
          }
        `}</style>
      </>
    )
}
