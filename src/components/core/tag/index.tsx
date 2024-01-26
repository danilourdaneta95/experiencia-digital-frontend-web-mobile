interface Tag {
  children?: any
  borderRadius?: string
  margin?: string
  background?: string
  padding?: string
  backgroundSm?: string
  backgroundXl?: string
  hide?: boolean
  hideSm?: boolean
  hideMd?: boolean
  hideXl?: boolean
  color?: string
  height?: string
}

export default function Tag(props: Tag) {
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
    hideXl = 'none'
  }

  const children = props.children
  return (
    <>
      <div className="container style">{children}</div>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 768px.
        ** Sm- Mobile Version
        */
        .container {
          display: ${hide || hideSm || `grid`};
          width: max-content;
        }

        .style {
          background: ${props.background || props.backgroundSm || `var(--bg-tag)`};
          padding: ${props.padding || `0.25rem 0.75rem`};
          border-radius: ${props.borderRadius || `var(--tag-borderRadius-default)`};
          margin: ${props.margin || `var(--tag-margin-default)`};
          color: ${props.color || `var(--indigo-700)`};
          height: ${props.height || `auto`};
          min-height: fit-content;
          max-height: 100%;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 1280px.
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
          .style {
            background: ${props.background || props.backgroundXl || `var(--bg-tag)`};
          }
        }
      `}</style>
    </>
  )
}
