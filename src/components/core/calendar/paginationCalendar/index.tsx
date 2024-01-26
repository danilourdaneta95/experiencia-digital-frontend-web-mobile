import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/es' // import locale
import localizedFormat from 'dayjs/plugin/localizedFormat'
interface PaginationCalendarProps {
  hideOnSm?: boolean
  hideOnMd?: boolean
  hideOnXl?: boolean
  gqlData: any[]
}

export default function PaginationCalendar(props: PaginationCalendarProps) {
  const [isHideOnBreakPoint, setIsHideOnBreakPoint] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth })

  const data = props.gqlData[0].data

  useEffect(() => {
    if (props.hideOnSm == true && windowSize.width < 744) {
      setIsHideOnBreakPoint(true)
    } else if (props.hideOnMd == true && windowSize.width >= 744 && windowSize.width < 1280) {
      setIsHideOnBreakPoint(true)
    } else if (props.hideOnXl == true && windowSize.width >= 1280) {
      setIsHideOnBreakPoint(true)
    } else setIsHideOnBreakPoint(false)

    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth })
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [window.innerWidth])

  dayjs.extend(customParseFormat)
  dayjs.locale('es')
  dayjs.extend(localizedFormat)

  // const now = dayjs('21-02-2023', 'DD-MM-YYYY')
  // const today = dayjs().format('DD-MM-YYYY') // Return now DD-MM-YY @example 21-02-2023

  if (isHideOnBreakPoint != true) {
    return (
      <>
        <div className="container" id="PaginationWeek">
          <button>
            <i className="icon ri-arrow-left-s-line"></i>
          </button>
          <h6>{data?.horarioSemana.semana_descripcion}</h6>
          <button>
            <i className="icon ri-arrow-right-s-line"></i>
          </button>
        </div>
        {/* <div>{now}</div> */}

        <style jsx>{`
          /**
        ** This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: inline-grid;
            justify-content: end;
            align-items: center;
            grid-template-columns: auto auto auto;
            margin-bottom: 20px;
            gap: 8px;
          }

          button {
            display: none;
            align-content: center;
            justify-content: center;
            height: 33px;
            width: 33px;
            padding: 0.5rem;
            border-radius: 50%;
            background: transparent;
          }

          .icon {
            font-size: 25px;
            color: var(--gray-500);
          }

          /**
        ** A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
          @media (min-width: 744px) and (max-width: 1279px) {
          }

          /**
        ** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
          }
        `}</style>
      </>
    )
  } else return null
}
