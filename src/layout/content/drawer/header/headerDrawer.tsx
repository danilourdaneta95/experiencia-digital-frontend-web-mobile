import ButtonIcon from 'components/core/buttonIcon'
import UserAccount from './userAccount/userAccount'

interface ButtonHandle {
  /**
   * A prop that is being passed function down from the parent component.
   *
   */
  handleClick?: any
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
export default function HeaderDrawer(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar
  const handleClick = props.handleClick

  return (
    <>
      <header id="HeaderSidebar" className="container">
        <div className={`buttonBack ${isCompressedSidebar ? `justifyStart` : `null`}`}>
          <ButtonIcon
            variant={'basic'}
            ariaLabel={'Botón para Minimizar Sidebar'}
            iconName={'ri-arrow-right-line'}
            iconSize={'20px'}
            iconColor={'#283341'}
            buttonSizeWidth={'44px'}
            buttonSizeHeight={'44px'}
            buttonBorderRadius={'6px'}
            handleClick={handleClick}
          />
        </div>
        <UserAccount open={true} />
      </header>
      <style jsx>{`
        .container {
          display: grid;
          align-items: center;
          padding: var(--padding-sidebar);
          border-bottom: 1px solid var(--sidebar-border-color);
          position: sticky;
          top: 0;
          background: var(--background);
          height: auto;
          z-index: 1;
          min-height: var(--sidebar-header-height);
          margin-right: 1rem;
          align-items: start;
        }
        .buttonBack {
          display: grid;
          align-items: center;
          height: var(--height-header);
        }
        .justifyStart {
          justify-content: start;
        }
        @media (min-width: 1280px) {
        }
        @media (min-width: 375px) (max-width: 890px) {
          #HeaderSidebar {
          }
          .buttonBack {
          }
        }
      `}</style>
    </>
  )
}
