import HomeIcon from 'components/breadcrumb/homeIcon/index'

import DataRouter from './breadcrumbRoutes'

export default function Breadcrumb() {
  // TODO: refactor de enums para separar links internos y externos para realizar maps de enums router

  return (
    <>
      <nav id="Breadcrumb">
        <HomeIcon />
        <DataRouter />
      </nav>
      <style jsx>{`
        #Breadcrumb {
          grid-area: breadcrumb;
          height: var(--height-breadcrumb);
          display: none;
        }
        nav {
          display: inline-flex;
          margin: var(--margin-section);
          align-items: center;
        }

        /**this media query display breadcrumb componente in desktop resolution only */
        @media (min-width: 1280px) {
          #Breadcrumb {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}
