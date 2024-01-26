import ButtonsMainSidebar from './buttonsMainSidebar'

interface ButtonHandle {
  /**
   * A prop that is being passed function down from the parent component.
   *
   */
  handleClick?: any
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useSidebar isCompressedSidebar.
   * @example
   * ~~~
   * isCompressedSidebar={isCompressedSidebar}
   * ~~~
   *
   */
  isCompressedSidebar: any
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useAccordion isOpenAccordion.
   * Props of State Custom Hook useAccordion isOpenAccordion
   * @example
   * ~~~
   * isOpenAccordion={props.isOpenAccordion}
   * ~~~
   */
  isOpenAccordion: any
  /**
   * It's a prop that is being passed a function of a Custom Hook useAccordion for setIsOpenAccordion to previous state
   * @example
   * ~~~
   * toggleAccordion={toggleAccordion}
   * ~~~
   */
  toggleAccordion: any
  /**
   * It's a prop that is being passed a function of a Customs Hooks [useSidebar & useAccordion] openSidebarAndAccordion()
   * @example
   * ~~~
   *  openSidebarAndAccordion={props.openSidebarAndAccordion}
   * ~~~
   */
  openSidebarAndAccordion?: any
}

export default function MainSidebar(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar

  return (
    <>
      <nav id="MainSidebar" className={isCompressedSidebar ? 'container compressed' : 'container'}>
        <div className={`listSidebarButton ${isCompressedSidebar ? 'compressed' : ''}`}>
          <ButtonsMainSidebar
            isCompressedSidebar={isCompressedSidebar}
            isOpenAccordion={props.isOpenAccordion}
            toggleAccordion={props.toggleAccordion}
            openSidebarAndAccordion={props.openSidebarAndAccordion}
          />
        </div>
      </nav>

      <style jsx>{`
        .container {
          display: grid;
          position: fixed;
          align-items: start;
          padding: 0rem 14px;
          background: var(--background);
          gap: 0.25rem;
          overflow-y: scroll;
          overflow-x: hidden;
          width: var(--sidebarOpen-width);
          height: calc(100vh - var(--sidebar-main-height));
        }

        .container.compressed {
          background: transparent !important;
          overflow-y: scroll;
          overflow-x: hidden;
          width: min-content;
          padding: 0rem;
          margin-left: 19px;
        }

        .container.compressed:hover {
          width: var(--sidebarOpen-width);
          z-index: 7;
        }

        .container.compressed::-webkit-scrollbar {
          display: none;
        }

        .listSidebarButton {
          display: flex;
          flex-direction: column;
          justify-content: start;
          gap: 0.25rem;
          margin: 2rem 0 2rem 0.5rem;
        }

        .listSidebarButton.compressed {
          width: min-content;
        }

        .compressed .listSidebarButton {
          margin: 2rem 0rem;
        }

        /* width */
        ::-webkit-scrollbar {
          width: 0.5rem;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 0.25rem var(--background);
          border-radius: 0.625rem;
          background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--light-grayish);
          border-radius: 1rem;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--light-grayish);
        }
        @media (min-width: 375px) (max-width: 1190px) {
          .container {
            height: calc(100% - (var(--sidebar-header-height) + var(--sidebar-footer-height)));
            padding: 20px 8px 100% 24px;
          }
        }

        @media (min-width: 1920px) {
          .container.compressed {
            margin-left: 20px;
          }
        }
      `}</style>
    </>
  )
}
