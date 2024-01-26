interface Card {
  [x: string]: any
  children?: any
  /**
   ** Card id
   * @example
   * ~~~
   * id={'MisClases'}
   * ~~~
   */
  id?: string
  /**
   ** Card background-color on all Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundColor={'white'}
   * ~~~
   */
  backgroundColor?: string
  /**
   ** Card background-color on all Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundColor={'white'}
   * ~~~
   */
  backgroundColorLogin?: string
  /**
   ** Card background-color on Mobile Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundColorSm={'slateblue'}
   * ~~~
   */
  backgroundColorSm?: string
  /**
  /**
   ** Card background-color on Tablet Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundColorMd={'slateblue'}
   * ~~~
   */
  backgroundColorMd?: string
  /**
   ** Card background-color on Desktop Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundColorXl={'lime'}
   * ~~~
   */
  backgroundColorXl?: string
  /**
   ** Card border-radius on all Resolution "default value" border-radius: 0.75rem;
   */
  borderRadius?: string
  /**
   ** Card border-radius on Mobile Resolution "default value" border-radius: 0.75rem;
   */
  borderRadiusSm?: string
  /**
   ** Card border-radius on Tablet Resolution "default value" border-radius: 0.75rem;
   */
  borderRadiusMd?: string
  /**
   ** Card border-radius on Desktop Resolution "default value" border-radius: 0.75rem;
   */
  borderRadiusXl?: string
  /**
   ** Card padding on all Resolution "default value" padding: 2.25rem 1.5rem 1.5rem 1.5rem;
   */
  padding?: string
  /**
   ** Card padding on Mobile Resolution "default value" padding: 2.25rem 1.5rem 1.5rem 1.5rem;
   */
  paddingSm?: string
  /**
   ** Card padding on Desktop Resolution "default value" padding: 2.25rem 1.5rem 1.5rem 1.5rem;
   */
  paddingMd?: string
  /**
   ** Card padding on Desktop Resolution "default value" padding: 2.25rem 1.5rem 1.5rem 1.5rem;
   */
  paddingXl?: string
  /**
   ** Card box Shadown "value on true" `box-shadow: var(--card-boxShadow-default)`;
   */
  boxShadow?: boolean
  /**
   ** Card box Shadown minor to 744px "value on true" `box-shadow: var(--card-boxShadow-default)`;
   */
  boxShadowSm?: boolean
  /**
   ** Card hide on Mandatory all breakpoint. value=Boolean.
   *
   * @example
   * ~~~
   * hide={false}
   * ~~~
   */
  hide?: boolean | null
  /**
   ** Card hide on Sm size minor that 744px. value=Boolean.
   *
   * @example
   * ~~~
   * hideSm={false}
   * ~~~
   */
  hideSm?: boolean | null
  /**
   ** Card hide on Md size 744px and max 1279px value=Boolean.
   *
   * @example
   * ~~~
   * hideMd={false}
   * ~~~
   */
  hideMd?: boolean | null
  /**
   ** Card hide on Xl size 1280px value=Boolean.
   *
   * @example
   * ~~~
   * hideXl={false}
   * ~~~
   */
  hideXl?: boolean | null
  /**
   ** Card Width size mandatory default value=100%.
   *
   * @example
   * ~~~
   * cardWidth="12.5rem"
   * ~~~
   */
  cardWidth?: string
  cardMaxWidth?: string
  cardMaxWidthSm?: string
  cardMinHeight?: string
  cardMaxHeight?: string
  cardMargin?: string

  focus?: boolean
  tabIndex?: any
  buttonWidth?: string
  buttonWidthSm?: string
  justifyContent?: 'center' | 'end'
  blur?: string
  blurSm?: string
  cardHeight?: string
  cardHeightSm?: string
  cardHeightMd?: string
  cardHeightXl?: string
  cardHeightXlIos?: string
  cardHeightSmIos1?: string
  borderCardColor?: string
  overflow?: string
  overflowSm?: string
  overflowXl?: string
  boxShadowStyle?: string
  boxShadowStyleSm?: string
  boxShadowStyleMd?: string
  boxShadowStyleXl?: string
  borderFocus?: string
  borderCardColorHover?: string
}

/**
 * A React component that renders a card.
 * @param {Card} props - Card
 * @returns A component with a className of container.
 */
export default function Card(props: Card) {
  if (props.boxShadow == true) {
  }

  let hide: string
  let hideSm: string
  let hideMd: string
  let hideXl: string
  if (props.hide === true) {
    hide = 'none'
  }
  if (props.hideSm === true) {
    hideSm = 'none'
  }
  if (props.hideMd === true) {
    hideMd = 'none'
  }
  if (props.hideXl === true) {
    hideXl = 'none !important'
  }

  if (props.focus === true) {
    return (
      <>
        <button className={`buttonClass ${props.boxShadow ? 'boxShadow' : null}`}>
          <section id={`${props.id}Card`} className={`container `} role="tabList" tabIndex={props.tabIndex}>
            {props.children}
          </section>
        </button>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: ${hide || hideSm || `grid`};
            background: ${props.backgroundColor || props.backgroundColorSm || `var( --background)`};
            border-radius: ${props.borderRadius || props.borderRadiusSm || `var(--borderRadius-card-default)`};
            padding: ${props.padding || props.paddingSm || `var(--padding-card-default)`};
            width: ${props.cardWidth || `100%`};
            justify-items: ${props.justifyContent || `normal`};
            overflow: ${props.overflow || props.overflowSm || `hidden`};
            max-width: ${props.cardMaxWidth || `100%`};
            max-height: ${props.cardMaxHeight || `100%`};
            backdrop-filter: blur(${props.blur});
            height: ${props.cardHeight || props.cardHeightSm || `auto`};
            align-content: baseline;
          }

          .boxShadow {
            -webkit-appearance: none;
            -webkit-box-shadow: var(--card-boxShadow-default);
            -moz-box-shadow: var(--card-boxShadow-default);
            box-shadow: var(--card-boxShadow-default);
            /*
            filter: drop-shadow(var(--card-boxShadow-default)); // se agrega propiedad fillter para safari
            */
          }

          button:focus-visible {
            outline: var(--focus) auto 1px;
          }

          button:-webkit-any-link {
            cursor: grab;
          }

          .buttonClass {
            padding: 0rem 0rem !important;
            border-radius: ${props.borderRadius || props.borderRadiusSm || `var(--borderRadius-card-default)`};
            cursor: grab;
            width: ${props.buttonWidth || props.buttonWidthSm || `max-content`};
            height: auto;
            margin: ${props.cardMargin || ``};
          }
          /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

          @media (min-width: 744px) and (max-width: 1279px) {
            .container {
              display: ${hide || hideMd || `grid`};
              background: ${props.backgroundColor ||
              props.backgroundColorMd ||
              props.backgroundColorLogin ||
              `var( --background)`};
              border-radius: ${props.borderRadius || props.borderRadiusMd || `var(--borderRadius-card-default)`};
              padding: ${props.padding || props.paddingMd || `var(--padding-card-default)`};
              width: ${props.cardWidth || `100%`};
              max-width: ${props.cardMaxWidth || `100%`};
              max-height: ${props.cardMaxHeight || `100%`};
            }
            .boxShadow {
              -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleMd || `var(--card-boxShadow-default)`};
              box-shadow: ${props.boxShadowStyle || props.boxShadowStyleMd || `var(--card-boxShadow-default)`};
            }
          }

          /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
            .container {
              display: ${hide || hideXl || `grid`};
              background: ${props.backgroundColor ||
              props.backgroundColorXl ||
              props.backgroundColorLogin ||
              `var( --background)`};
              border-radius: ${props.borderRadius || props.borderRadiusXl || `var(--borderRadius-card-default)`};
              padding: ${props.padding || props.paddingXl || `var(--padding-card-default)`};
              width: ${props.cardWidth || `100%`};
              max-width: ${props.cardMaxWidth || `100%`};
              min-height: ${props.cardMinHeight || `auto`};
              overflow: ${props.overflow || props.overflowXl || `hidden`};
            }

            .boxShadow {
              -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleXl || `var(--card-boxShadow-default)`};
              box-shadow: ${props.boxShadowStyle || props.boxShadowStyleXl || `var(--card-boxShadow-default)`};
            }
          }
        `}</style>
      </>
    )
  } else {
    return (
      <>
        <section
          id={props.id}
          className={`container style ${props.boxShadow ? 'boxShadow' : null}} ${
            props.boxShadowSm ? 'boxShadow' : null
          } ${props.boxShadowMd ? 'boxShadow' : null} ${props.boxShadowXl ? 'boxShadow' : null}`}
          tabIndex={props.tabIndex}
        >
          {props.children}
        </section>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: ${hide || hideSm || `grid`};
            background: ${props.backgroundColor || props.backgroundColorSm || `#ffffff`};
            border-radius: ${props.borderRadius || props.borderRadiusSm || `var(--borderRadius-card-default)`};
            padding: ${props.padding || props.paddingSm || `var(--padding-card-default)`};
            width: ${props.cardWidth || `100%`};
            justify-items: ${props.justifyContent || `normal`};
            overflow: ${props.overflow || props.overflowSm || `hidden`};
            max-width: ${props.cardMaxWidth || `100%`};
            max-height: ${props.cardMaxHeight || `100%`};
            backdrop-filter: blur(${props.blur});
            margin: ${props.cardMargin || `0px`};
            height: ${props.cardHeight || props.cardHeightSm || `auto`};
            border: ${props.borderCardColor || `none`};
            align-content: baseline;
          }
          .boxShadow {
            -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleSm || `var(--card-boxShadow-default)`};
            box-shadow: ${props.boxShadowStyle || props.boxShadowStyleSm || `var(--card-boxShadow-default)`};
          }
          .container:hover {
            border: ${props.borderCardColorHover || `none`};
            box-shadow: ${props.boxShadowXl || `none`};
          }
          div:focus-visible {
            outline: ${props.borderFocus || `var(--focus) auto 1px`};
          }
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          @media (max-width: 744px) {
            .container {
              background: ${props.backgroundColor ||
              props.backgroundColorSm ||
              props.backgroundColorLogin ||
              `var( --background)`};
              max-width: ${props.cardMaxWidthSm || `100%`};
              backdrop-filter: blur(${props.blurSm});
              padding: ${props.paddingSm || `var(--padding-card-default)`};
            }
            .boxShadow {
              -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleSm || `var(--card-boxShadow-default)`};
              box-shadow: ${props.boxShadowStyle || props.boxShadowStyleSm || `var(--card-boxShadow-default)`};
            }
          }

          /** A media query that will change the style of the component when the screen is ** greater that 744px and max 1279px. ** Md- Tablet - Version */
          @media (min-width: 745px) and (max-width: 1279px) {
            .container {
              display: ${hide || hideMd || `grid`};
              background: ${props.backgroundColor ||
              props.backgroundColorMd ||
              props.backgroundColorLogin ||
              `var( --background)`};
              border-radius: ${props.borderRadius || props.borderRadiusMd || `var(--borderRadius-card-default)`};
              padding: ${props.paddingMd || `var(--padding-card-default)`};
              width: ${props.cardWidth || `100%`};
              max-width: ${props.cardMaxWidth || `100%`};
              height: ${props.cardHeight || props.cardHeightMd || `auto`};
            }
            .boxShadow {
              -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleMd || `var(--card-boxShadow-default)`};
              box-shadow: ${props.boxShadowStyle || props.boxShadowStyleMd || `var(--card-boxShadow-default)`};
            }
          }

          /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
            .container {
              display: ${hide || hideXl || `grid`};
              background-color: ${props.backgroundColor ||
              props.backgroundColorXl ||
              props.backgroundColorLogin ||
              `var( --background)`};
              border-radius: ${props.borderRadius || props.borderRadiusXl || `var(--borderRadius-card-default)`};
              padding: ${props.padding || props.paddingXl || `var(--padding-card-default)`};
              width: ${props.cardWidth || `100%`};
              max-width: ${props.cardMaxWidth || `100%`};
              height: ${props.cardHeight || props.cardHeightXl || `auto`};
              max-height: ${props.cardMaxHeight || `100%`};
              overflow: ${props.overflow || props.overflowXl || `hidden`};
            }

            .boxShadow {
              -webkit-box-shadow: ${props.boxShadowStyle || props.boxShadowStyleXl || `var(--card-boxShadow-default)`};
              box-shadow: ${props.boxShadowStyle || props.boxShadowStyleXl || `var(--card-boxShadow-default)`};
            }
          }

          /**
        ** A media query that will change the style of the component when the screen is
        ** iPhone AspectRatio.
        ** (iPhone XR - iPhone XS Max - iPhone XS - iPhone 11 'Pro-ProMax' - iPhone 12 'mini-Pro-Max'
        **  iPhone 13 'mini-Pro-Max' )
        ** Xl- Desktop - Version
        */
          /*
          @media and (-webkit-min-device-pixel-ratio: 2) and (max-height: 926px) and (orientation: portrait) {
            .container {
              height: ${props.cardHeight || props.cardHeightSmIos1 || `auto`};
            }
          }
*/
          /**
        ** A media query that will change the style of the component when the screen is
        ** Mac AspectRatio.
        ** Xl- Desktop - Version
        */
          @media and (min-width: 1280px) and (device-aspect-ratio: 16/10) {
            .container {
              height: ${props.cardHeight || props.cardHeightXlIos || `auto`};
            }
          }
        `}</style>
      </>
    )
  }
}
