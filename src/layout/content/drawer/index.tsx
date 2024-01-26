import FooterDrawer from '../drawer/footer/footerDrawer'
import HeaderDrawer from './header/headerDrawer'
import useAccordion from 'hooks/useAccordion'
import MainDrawer from './main/mainDrawer'

interface DrawerProps {
  /**
   * Position of Drawer default value="Right"
   *
   * @example
   *~~~
   * <Drawer position="Left" />
   *~~~
   *
   */
  position?: 'Left' | 'Right'
  /**
   * A prop that is being passed function down from the parent component.
   *
   */
  handleClick?: any
  /* It's a prop that is being passed Boolean for State Open or Close Sidebar.
   *
   */
  isCompressedSidebar?: any

  isOpenDrawer: any

  toggleDrawer: any

  toggleAccordion?: any
}

/**
 * It's a function that returns a JSX element Drawer component.
 * @param props - position?: 'Left' | 'Right'
 * @example
 *~~~
 * <Drawer position="Left" />
 *~~~
 * @returns A Drawer component.
 */
export default function Drawer(props: DrawerProps) {
  const [isOpenAccordion, toggleAccordion] = useAccordion(false)
  const isOpenDrawer = props.isOpenDrawer
  const toggleDrawer = props.toggleDrawer

  // const [showDrawer, setShowDrawer] = useState(true)
  // const toggleDrawer = () => setShowDrawer((prev) => !prev)

  let positionDrawer: boolean = null
  const drawerPosition = props.position
  if (drawerPosition === 'Left') {
    positionDrawer = true
  }

  if (isOpenDrawer === true) {
    return (
      <>
        <section className="container" id="Drawer">
          <aside className={`gridDrawer ${positionDrawer ? `positionLeft` : `positionRight`}`}>
            <div className={isOpenDrawer ? `open` : `close`}>
              <header id="HeaderDrawer" className="containerDrawer">
                <HeaderDrawer isCompressedSidebar={true} handleClick={toggleDrawer} />
              </header>
              <MainDrawer toggleAccordion={toggleAccordion} isOpenAccordion={isOpenAccordion} />
              <FooterDrawer isCompressedSidebar={undefined} />
            </div>
          </aside>
        </section>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: grid;
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            width: 100%;
            height: 100%;
            margin: 0px;
            padding: 0px;
            overflow: hidden;
            z-index: 10;
          }

          .gridDrawer {
            display: grid;
            background: var(--background);
            position: absolute;
            width: var(--sidebarOpen-width);
            height: 100%;
            overflow: hidden;
          }
          .positionLeft {
            top: 0px;
            bottom: 0px;
            left: 0;
          }
          .positionRight {
            top: 0px;
            bottom: 0px;
            right: 0px;
          }
          .open {
            width: var(--sidebarOpen-width);
          }
          .close {
            width: var(--sidebarOpen-width);
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
              display: none;
            }
          }
        `}</style>
      </>
    )
  } else {
    return null
  }
}
