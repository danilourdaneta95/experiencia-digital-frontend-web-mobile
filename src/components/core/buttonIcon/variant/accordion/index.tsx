import { ButtonsIconProps, ButtonAccordionProps } from 'types/buttons/buttonsIcon'
import ListButtonAccordion from './listButtonAccordion'

/**
 * It's a function that returns a React component that renders a button with an icon and tag html is a div
 * @returns A component that is a button with an icon and tag html is a div.
 */
export default function ButtonAccordion(props: ButtonsIconProps & ButtonAccordionProps) {
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
  if (
    props.positionLabel === 'Right' ||
    props.positionLabel === '' ||
    props.positionLabel === null ||
    props.positionLabel === undefined
  ) {
    stylePositionLabelRight = true
  }
  if (props.positionLabel === 'Top') {
    stylePositionLabelTop = true
  }
  if (props.positionLabel === 'Bottom') {
    stylePositionLabelBottom = true
  }

  if (props.hideLabel === true) {
    // Is Compressed Sidebar?
    return (
      <>
        <button
          disabled={props.disabled}
          aria-label={`${props.ariaLabel || `Acceso a ${props.labelContent}`}`}
          tabIndex={props.tabIndex}
          className={`buttonLabel containerCompresed
          ${props.backgroundImage ? 'backgroundImage' : 'background'}
          ${props.buttonBackgroundImgHover ? 'buttonBackgroundImgHover' : 'background'}
          `}
          onMouseOver={props.onMouseOver}
          onClick={props.openSidebarAndAccordion}
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
            <div className="tooltip active">
              <span>{props.labelContent}</span>
              <span className="arrowTooltip"></span>
            </div>
          </div>
        </button>
        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .containerCompresed {
            display: ${hide || hideSm || `grid`};
            width: ${props.buttonSizeWidth || `44px`};
            height: ${props.buttonSizeHeight || `44px`};
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
            max-width: ${props.buttonMaxSizeWidth || `100%`};
            justify-content: center;
            align-content: center;
            /*padding: var(--buttonIcon-accordion-padding-default);*/
          }

          .containerCompresed:hover {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
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
            grid-template-columns: max-content min-content 1fr;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: ${props.gapContentInline || props.gapContentInlineSm || `0.75rem`};
          }
          .gridIconLabel-inline.hideLabel {
            grid-template-columns: max-content;
            width: min-content;
            align-content: center;
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
            margin-right: 0.25rem;
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
            color: var(--buttonIcon-accordion-iconColor-default);
            font-weight: normal;
          }

          button {
            padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
            box-shadow: ${props.buttonShadow || 'none'};
          }
          button.background {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            `var(--buttonIcon-accordion-buttonBackground-default)`};
          }
          button.backgroundImage {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
            background-size: cover;
          }

          button:hover.background,
          button:hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonBackground-hover-default)` ||
            'none'};
          }
          button:hover p.background,
          button:hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-labelColor-hover-default)`};
          }
          button:hover .icon,
          button:hover .iconArrow {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-iconColor-hover-default)`};
          }

          button:not([disabled]):hover.background,
          button:not([disabled]):hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonBackground-hover-default)` ||
            'none'};
          }
          button:not([disabled]):hover p.background,
          button:not([disabled]):hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-labelColor-hover-default)`};
          }
          button:not([disabled]):hover .icon,
          button:not([disabled]):hover .iconArrow {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-iconColor-hover-default)`};
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
            display: grid;
            font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
            height: 100%;
          }

          .icon.ri-mental-health-line {
            margin-top: -1px;
          }

          .orderLabel {
            display: grid;
            font-weight: 600;
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
          }

          /** Tooltip */

          .tooltip {
            display: none;
            position: absolute;
            transform: translate(-0.688rem, -2.75rem);
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

          button .arrowTooltip {
            display: block;
            position: absolute;
            transform: translate(0.125rem, 0.188rem);
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-top: 0.5rem solid ${props.tooltipBgColor || `var(--buttonIcon-accordion-tooltipBgColor-default)`};
          }
          button .tooltip.active {
            background: ${props.tooltipBgColor || `var(--buttonIcon-accordion-tooltipBgColor-default)`};
            color: ${props.tooltipFontColor || `white`};
            inline-size: max-content;
          }

          button:hover .tooltip {
            display: block !important;
            position: fixed;
            z-index: 2;
          }

          /** Accordion Arrow */
          .open-accordion {
            transform: rotate(180deg);
          }
          .close-accordion {
            transform: rotate(0deg);
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
          .listButton {
            display: grid;
            gap: ${props.gapButtomsList || `0.25rem`};
            margin: ${props.gapButtomsList || `0rem`} 0rem ${props.gapButtomsList || `0rem`} 0rem;
          }

          .icon-list {
            display: grid;
            width: 44px;
            height: 44px;
            align-content: center;
            margin-left: 0.875rem;
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

          @media (min-width: 744px) and (max-width: 1279px) {
            .container {
              display: ${hide || hideMd || `grid`};
            }

            button {
              background: ${props.buttonBackground ||
              props.buttonBackgroundMd ||
              `var(--buttonIcon-accordion-buttonBackground-default)`};
              padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
              color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
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
              `var(--buttonIcon-accordion-buttonBackground-default)`};
              padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
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
          onClick={props.toggleAccordion}
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
            {props.hideLabel === false && (
              <>
                <p
                  className={`labelContent ${stylePositionLabelRight ? 'orderLabel Right' : ''}
            ${stylePositionLabelLeft ? 'orderLabel Left' : ''}
            ${stylePositionLabelTop ? 'orderLabel Top' : ''}
            ${stylePositionLabelBottom ? 'orderLabel Bottom' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}
            ${props.labelColor ? 'var(--buttonIcon-accordion-labelColor-default)' : ''}
              `}
                >
                  {props.labelContent}
                </p>
                <i
                  className={`iconArrow ri-arrow-down-s-line ${
                    props.isOpenAccordion ? `open-accordion` : `close-accordion`
                  } ${stylePositionLabelRight ? 'orderLabel Right' : ''}
            ${stylePositionLabelLeft ? 'orderLabel Left' : ''}
            ${stylePositionLabelTop ? 'orderLabel Top' : ''}
            ${stylePositionLabelBottom ? 'orderLabel Bottom' : ''}
            ${props.backgroundImage ? 'backgroundImage' : 'background'}
            ${props.labelColor ? 'var(--buttonIcon-accordion-labelColor-default)' : ''}`}
                ></i>
              </>
            )}
          </div>
        </button>
        {props.isOpenAccordion ? (
          <ListButtonAccordion
            labelContentAccordion={props.labelContentAccordion}
            isCompressedSidebar={props.isCompressedSidebar}
          />
        ) : (
          <div></div>
        )}

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: ${hide || hideSm || `grid`};
            width: ${props.buttonSizeWidth || `100%`};
            height: ${props.buttonSizeHeight || `44px`};
            border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-accordion-borderRadius-default)`};
            max-width: ${props.buttonMaxSizeWidth || `100%`};
            margin: 0 auto;
            justify-items: start;
            align-content: center;
            padding: var(--buttonIcon-accordion-padding-default);
          }

          .container:hover {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.buttonBackgroundImgHover});
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
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
            grid-template-columns: max-content min-content 1fr;
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
            margin-right: 0.25rem;
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
            color: var(--buttonIcon-accordion-iconColor-default);
            font-weight: normal;
          }

          button {
            padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
            box-shadow: ${props.buttonShadow || 'none'};
          }
          button.background {
            background: ${props.buttonBackground ||
            props.buttonBackgroundSm ||
            `var(--buttonIcon-accordion-buttonBackground-default)`};
          }
          button.backgroundImage {
            background-image: url(${process.env.NEXT_PUBLIC_BASE_PATH}${props.backgroundUrlImage});
            background-size: cover;
          }

          button:not([disabled]):hover.background,
          button:not([disabled]):hover.container-list {
            background: ${props.buttonColorHover ||
            `var(--buttonIcon-accordion-buttonBackground-hover-default)` ||
            'none'};
          }
          button:not([disabled]):hover p.background,
          button:not([disabled]):hover p.backgroundImage {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-labelColor-hover-default)`};
          }
          button:not([disabled]):hover .icon,
          button:not([disabled]):hover .iconArrow {
            color: ${props.labelColorHover || `var(--buttonIcon-accordion-iconColor-hover-default)`};
          }

          button:disabled,
          button[disabled] {
            background-color: ${`var(--background-color-disabled)`}!important;
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
            display: grid;
            font-size: ${props.iconSize || `var(--buttonIcon-accordion-iconSize-default)`};
            color: ${props.iconColor || `var(--buttonIcon-accordion-iconColor-default)`};
            height: 100%;
            align-content: center;
          }

          .icon.ri-mental-health-line {
            margin-top: -1px;
          }

          .orderLabel {
            display: grid;
            font-weight: 600;
            color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
            align-items: center;
            height: 100%;
          }

          /** Tooltip */

          .tooltip {
            display: none;
            position: absolute;
            transform: translate(-0.688rem, -2.75rem);
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

          button .arrowTooltip {
            display: block;
            position: absolute;
            transform: translate(0.125rem, 0.188rem);
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-top: 0.5rem solid ${props.tooltipBgColor || `var(--tooltip-color)`};
          }
          button .tooltip.active {
            background: ${props.tooltipBgColor || `var(--tooltip-color)`};
            color: ${props.tooltipFontColor || `white`};
            inline-size: max-content;
          }
          button .tooltip.active {
            background: ${props.tooltipBgColor || `var(--tooltip-color)`};
            color: ${props.tooltipFontColor || `white`};
            inline-size: max-content;
          }
          button:hover .tooltip {
            display: block !important;
            position: fixed;
            z-index: 2;
          }

          /** Accordion Arrow */
          .open-accordion {
            transform: rotate(180deg);
          }
          .close-accordion {
            transform: rotate(0deg);
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
          .listButton {
            display: grid;
            gap: ${props.gapButtomsList || `0.25rem`};
            margin: ${props.gapButtomsList || `0rem`} 0rem ${props.gapButtomsList || `0rem`} 0rem;
          }

          .icon-list {
            display: grid;
            width: 44px;
            height: 44px;
            align-content: center;
            margin-left: 0.875rem;
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

          @media (min-width: 744px) and (max-width: 1279px) {
            .container {
              display: ${hide || hideMd || `grid`};
            }

            button {
              background: ${props.buttonBackground ||
              props.buttonBackgroundMd ||
              `var(--buttonIcon-accordion-buttonBackground-default)`};
              padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
              color: ${props.labelColor || `var(--buttonIcon-accordion-labelColor-default)`};
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
              `var(--buttonIcon-accordion-buttonBackground-default)`};
              padding: ${props.buttonIconPadding || `var(--buttonIcon-accordion-padding-default)` || '0rem'};
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
}
