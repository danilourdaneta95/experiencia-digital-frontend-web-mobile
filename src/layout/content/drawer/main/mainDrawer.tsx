import ButtonsMainSidebar from 'components/customs/sidebar/mainSidebar/buttonsMainSidebar'

interface MainDrawerProps {
  isOpenAccordion: any
  toggleAccordion: any
}

export default function MainDrawer(props: MainDrawerProps) {
  return (
    <>
      <main>
        <ButtonsMainSidebar
          isCompressedSidebar={false}
          isOpenAccordion={props.isOpenAccordion}
          toggleAccordion={props.toggleAccordion}
          openSidebarAndAccordion={undefined}
        />
      </main>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        main {
          display: grid;
          align-items: start;
          position: absolute;
          padding: 32px 24px 32px 24px;
          background: var(--background);
          gap: 4px;
          overflow-y: scroll;
          overflow-x: hidden;
          width: var(--sidebarOpen-width);
          height: -webkit-calc(100% - (var(--sidebar-header-height) + var(--sidebar-footer-height)));
          height: -moz-calc(100% - (var(--sidebar-header-height) + var(--sidebar-footer-height)));
          height: calc(100% - (var(--sidebar-header-height) + var(--sidebar-footer-height)));
          align-content: baseline;
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
          .container {
          }
        }
      `}</style>
    </>
  )
}
