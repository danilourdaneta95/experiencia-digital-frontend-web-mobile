import ButtonsFooterSidebar from './buttonsFooterSidebar'

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
  isOpenAccordion?: any
  /**
   * It's a prop that is being passed a function of a Custom Hook useAccordion for setIsOpenAccordion to previous state
   * @example
   * ~~~
   * toggleAccordion={toggleAccordion}
   * ~~~
   */
  toggleAccordion?: any
  /**
   * It's a prop that is being passed a function of a Customs Hooks [useSidebar & useAccordion] openSidebarAndAccordion()
   * @example
   * ~~~
   *  openSidebarAndAccordion={props.openSidebarAndAccordion}
   * ~~~
   */
  openSidebarAndAccordion?: any
}

export default function FooterSidebar(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar

  return (
    <>
      <ButtonsFooterSidebar
        isCompressedSidebar={isCompressedSidebar}
        isOpenAccordion={props.isOpenAccordion}
        toggleAccordion={props.toggleAccordion}
        openSidebarAndAccordion={props.openSidebarAndAccordion}
      />
    </>
  )
}
