import ButtonIcon from 'components/core/buttonIcon'
import UserAccount from './userAccount/userAccount'

interface ButtonHandle {
  /**
   * A prop that is being passed function down from the parent component.
   *
   */
  handleClick: any
  /* It's a prop that is being passed Boolean for State Open or Close Sidebar.
   *
   */
  isCompressedSidebar: any
}

/**
 * It's a function that returns a header with a button and a user account
 * @param {ButtonHandle} props - ButtonHandle
 * @returns A header with a button and a user account.
 */
export default function HeaderSidebar(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar
  const handleClick = props.handleClick
  let changeIconName = ''
  if (isCompressedSidebar === false) {
    changeIconName = 'ri-arrow-left-line'
  } else {
    changeIconName = 'ri-menu-3-line'
  }

  return (
    <>
      <header id="HeaderSidebar" className={isCompressedSidebar ? 'container compressed' : 'container'}>
        <div className={`buttonBack ${isCompressedSidebar ? `null` : `justifyEnd`}`}>
          <ButtonIcon
            variant={'basic'}
            ariaLabel={'Botón para Minimizar Sidebar'}
            iconName={changeIconName}
            iconColor={'#283341'}
            buttonBorderRadius={'0.375rem'}
            handleClick={handleClick}
          />
        </div>
        <UserAccount open={props.isCompressedSidebar} />
      </header>
      <style jsx>{`
        .container {
          display: grid;
          align-items: center;
          padding: var(--sidebarOpen-padding-header);
          border-bottom: 1px solid var(--sidebar-border-color);
          position: sticky;
          top: 0;
          background: var(--background);
          height: auto;
          z-index: 1;
          height: var(--sidebar-header-height);
        }

        .container.compressed {
          padding: var(--sidebarOpen-padding-header);
        }
        .buttonBack {
          display: grid;
          align-items: center;
          height: var(--height-header);
        }
        .justifyEnd {
          justify-content: end;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
        }

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
