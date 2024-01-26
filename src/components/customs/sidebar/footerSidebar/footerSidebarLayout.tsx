interface Footer {
  children?: any
  isCompressedSidebar: any
}

export default function FooterSidebarLayout(props: Footer) {
  const isCompressedSidebar = props.isCompressedSidebar

  let changeSizeBorder = ''
  if (isCompressedSidebar === false) {
    changeSizeBorder = '--sidebarOpen-width'
  } else {
    changeSizeBorder = '--sidebarCompressed-width'
  }

  return (
    <>
      <footer id="FooterSidebar" className={isCompressedSidebar ? 'container compressed border' : 'container border'}>
        {props.children}
      </footer>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        #FooterSidebar.container {
          display: grid;
          align-items: center;
          padding: 11px 24px;
          background: var(--background);
          position: absolute;
          bottom: 0rem;
          z-index: 7;
          height: var(--sidebar-footer-height);
        }

        .border {
          border-top: 1px solid var(--sidebar-border-color);
          width: var(${changeSizeBorder});
        }

        .compressed {
          justify-content: center;
          padding: var(--sidebar-footer-padding);
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        /*
          @media (min-width: 744px) and (max-width: 1279px) {
          .container {
          }
        }
        */

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
        }
      `}</style>
    </>
  )
}
