import HeaderSidebar from './headerSidebar'
import MainSidebar from './mainSidebar'
import FooterSidebar from './footerSidebar'
import useSidebar from 'hooks/useSidebar'
import useAccordion from 'hooks/useAccordion'

export default function Sidebar() {
  const [isCompressedSidebar, toggleSidebar, setIsCompressedSidebar] = useSidebar(false)
  const [isOpenAccordion, toggleAccordion, setIsOpenAccordion] = useAccordion(false)

  return (
    <>
      <aside id="Sidebar" className={isCompressedSidebar ? `close` : `open`}>
        <HeaderSidebar handleClick={toggleSidebar} isCompressedSidebar={isCompressedSidebar} />
        <MainSidebar
          isCompressedSidebar={isCompressedSidebar}
          isOpenAccordion={isOpenAccordion}
          toggleAccordion={toggleAccordion}
          openSidebarAndAccordion={() => (setIsCompressedSidebar(false), setIsOpenAccordion(true))}
        />
        <FooterSidebar isCompressedSidebar={isCompressedSidebar} />
      </aside>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        #Sidebar {
          display: none;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
        /*
        @media (min-width: 744px) and (max-width: 1279px) {
        }
        /* A media query that is changing the padding-left of the container when the screen is bigger
        than 1280px. */
        @media (min-width: 1280px) {
          #Sidebar {
            display: block;
            background: var(--background);
            border-right: 1px solid var(--sidebar-border-color);
            grid-area: sidebar;
            min-height: 100vh;
            height: 100%;
          }
          .open {
            width: var(--sidebarOpen-width);
          }
          .close {
            width: var(--sidebarCompressed-width);
          }
        }
      `}</style>
    </>
  )
}
