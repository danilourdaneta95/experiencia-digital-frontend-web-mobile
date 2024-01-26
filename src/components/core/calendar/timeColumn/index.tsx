import 'remixicon/fonts/remixicon.css'
import { CONSTANTS } from 'settings/constants'
interface TimeColumnProps {
  dataHours: string[]
}

export default function TimeColumn(props: TimeColumnProps) {
  const dataHours = props.dataHours
  const heightBodyCells = 60 * CONSTANTS.CALENDAR.RELATION_HEIGHT_CLASSES_MIN_PER_PX
  const paddingTopFirstCells = CONSTANTS.CALENDAR.PADDING_TOP_FIRST_COLUMN_CELLS
  const hightFirstBodyCells = heightBodyCells

  return (
    <>
      <div className="container" id="TimeColumns">
        <div className="hoursRow">
          <div className="firstRow">{/* Dia <span>Hora</span> */}</div>
          {dataHours.map((hours) => (
            <h6 key={hours}>
              <i className="iconColor ri-time-line"></i>
              {hours}
            </h6>
          ))}
          {/* <h6>08:00</h6>
           */}
        </div>
      </div>

      <style jsx>{`
        /**
        ** This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          position: sticky;
          left: 0;
          background: white;
          place-items: center;
          z-index: 6;
        }

        .hoursRow {
          display: grid;
          height: 100%;
          width: 100%;
          text-align: center;
          align-items: center;
        }

        .firstRow {
          display: grid;
          align-items: center;
          height: var(--hightHeaderClassesSm);
          width: 100%;
          border-color: var(--borderColorHeader);
          border-width: 1px;
          border-style: solid solid solid solid;
          border-radius: var(--borderRadiusHeader) 0px 0px 0px;
          background: var(--bgHeaderHoursSm);
          position: sticky;
          top: 0;
        }

        .iconColor {
          display: none;
          color: #667085;
          margin-right: 6px;
        }

        h6 {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #667085;
        }

        h6:nth-child(2) {
          margin-top: ${paddingTopFirstCells}px;
          height: ${hightFirstBodyCells}px;
        }

        h6:nth-child(n) {
          display: inline-flex;
          align-items: center;
          height: ${heightBodyCells}px;
          border-color: var(--borderColorBody);
          border-width: 1px;
          border-style: none solid solid solid;
        }
        h6:last-child {
          border-color: var(--borderColorBody);
          border-width: 1px;
          border-style: none solid solid solid;
          border-radius: 0px 0px 0px var(--borderRadiusFooter);
        }

        /**
        ** A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
        @media (min-width: 744px) and (max-width: 1279px) {
          .firstRow {
            height: var(--hightHeaderClassesMd);
            background: var(--bgHeaderHoursMd);
          }
        }

        /**
        ** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            width: 100%;
            height: 100%;
          }
          .firstRow {
            height: var(--hightHeaderClassesXl);
            background: var(--bgHeaderHoursXl);
          }

          .iconColor {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
