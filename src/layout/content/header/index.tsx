import ButtonIcon from 'components/core/buttonIcon'
import Greetings from 'components/core/greetings'
import USSFullLogo from 'components/core/logo'
import { GetUserData } from 'context/user'
import useDrawer from 'hooks/useDrawer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import { User } from 'types/user'
import Drawer from '../drawer'
import { CONSTANTS } from 'settings/constants'

interface HeaderProps {
  title?: string
  hideGreeting?: any
  backgroundColor?: string
  backgroundColorXL?: string
  children?: React.ReactNode
}

export default function Header(props: HeaderProps) {
  const [isOpenDrawer, toggleDrawer] = useDrawer(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(GetUserData())
  }, [])
  return (
    <>
      <header id="Header">
        <div className="container">
          <USSFullLogo />
          {props.hideGreeting ? props.children : <Greetings name={user?.firstname} hideXl={true} />}
          <div className="buttonGroup">
            <Link href={CONSTANTS.ROUTES.CLASSIC_PORTAL}>
              <a className="miPortal" target="_blank">
                <ButtonIcon
                  variant="label"
                  ariaLabel="Ir a Mi Portal Clásico"
                  iconName="ri-arrow-right-circle-line"
                  labelContent={'Ir a Mi Portal Clásico'}
                  buttonHideSm={true}
                  buttonHideMd={true}
                  buttonBorderRadius={'3rem'}
                  buttonBackground={'#C5CDF9'}
                  labelColor={'#0024DB'}
                  alignButtonContent="MiddleCenter"
                  positionLabel="Left"
                  iconColor={'#0024DB'}
                  iconSize={'1.25rem'}
                />
              </a>
            </Link>
            <Link href={CONSTANTS.ROUTES.OUTLOOK_MAIL}>
              <a target="_blank">
                <ButtonIcon
                  variant="badge"
                  iconName="ri-mail-line"
                  ariaLabel="Botón de Notificaciones"
                  badgeActive={false}
                  badgeContents=""
                  buttonSizeWidth="56px"
                  buttonHideSm={true}
                  buttonHideMd={true}
                />
              </a>
            </Link>
            <ButtonIcon
              variant="basic"
              ariaLabel="Abrir Sidebar Menu"
              iconName="icon ri-menu-3-line"
              iconSize={'24px'}
              buttonHideXl={true}
              handleClick={toggleDrawer}
            />
          </div>
        </div>
      </header>
      <Drawer position="Right" isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />

      <style jsx>{`
        #Header {
          display: grid;
          grid-area: header;
          height: var(--height-header);
          vertical-align: top;
          position: fixed;
          top: 0;
          width: 100%;
          margin: var(--margin-header);
          z-index: 10;
        }
        .container {
          display: grid;
          align-items: center;
          background: ${props.backgroundColor || `var(--background)`};
          padding: var(--paddingMd);
          border-bottom: 1px solid var(--header-border-color);
          grid-template-columns: auto auto;
        }
        .hide-xl {
          display: inline-flex !important;
        }

        @media screen and (orientation: landscape) and (max-width: 1279px) {
          .miPortal {
            display: none;
          }
        }

        /* A media query that is changing the padding-left of the container when the screen is bigger
        than 1280px. */
        @media (min-width: 1280px) {
          #Header {
            position: sticky;
          }
          .container {
            padding: var(--paddingXl);
            background: ${props.backgroundColorXL || `var(--background)`};
          }
          .hide-xl {
            display: none !important;
          }
        }
      `}</style>
      <style global jsx>{`
        .buttonGroup {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: end;
          gap: 0px;
        }
        @media (min-width: 1280px) {
          .buttonGroup {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: end;
            gap: 0px 22px;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}
