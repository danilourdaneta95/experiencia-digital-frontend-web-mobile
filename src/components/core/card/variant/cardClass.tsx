import Tag from 'components/core/tag'
import 'remixicon/fonts/remixicon.css'
import Card from 'components/core/card'

interface CardClass {
  classTimeStart: string
  classTimeEnd: string
  classTitle: string
  classCode: string
  classMode: 'Sala' | 'Online' | any
  classroomCode: string
  teacherName: string
  tabIndex?: any
}

export default function CardClass(props: CardClass) {
  return (
    <>
      <Card
        boxShadow={true}
        cardWidth="17.875rem"
        padding="1rem"
        focus={true}
        tabIndex={props.tabIndex}
        paddingSm="0rem 0rem 0rem 0rem"
        cardHeight="100%"
        cardMargin="0rem 0rem 1rem 0rem"
      >
        <header className="timeGrid">
          <i className={`icon ri-time-line`}></i>
          <h6>{`${props.classTimeStart || `10:00 AM`} - ${props.classTimeEnd || `12:00 PM`}`}</h6>
        </header>
        <main className="classGrid">
          <h5>{`${props.classTitle || `Primeros Auxilios - Teo`}`}</h5>
          <p className="small">{`Materia ${props.classCode || `ENFEB001`}`}</p>
        </main>
        <footer>
          <Tag background="#E1EEF8" padding="0.25rem 0.5rem">
            <div className="tagGrid">
              <i className={`icon ri-map-pin-line`}></i>
              <h6>{`${props.classMode || `Sala`}`}:</h6>
              <p>{`${props.classroomCode || `CVAE-E409`}`}</p>
            </div>
          </Tag>
          <Tag background="#E1EEF8" padding="0.25rem 0.5rem">
            <div className="tagGrid">
              <i className={`icon ri-user-line`}></i>
              <h6>Profesor:</h6>
              <p>{`${props.teacherName || `Martin Soto`}`}</p>
            </div>
          </Tag>
        </footer>
      </Card>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .timeGrid {
          display: flex;
          align-items: center;
          margin: 0rem 0rem 1rem 0rem;
          user-select: none;
          -webkit-user-select: none;
        }
        .timeGrid .icon {
          font-size: 1.25rem;
          color: var(--gray-500);
        }

        .timeGrid h6 {
          margin: 0rem 0rem 0rem 0.5rem;
          color: var(--gray-500);
          user-select: none;
          -webkit-user-select: none;
        }

        /**  
        ** classGrid
        */

        .classGrid {
          display: grid;
          justify-items: start;
          width: 100%;
          align-content: space-between;
          /* min-height: 108px; */
        }

        .classGrid > h5 {
          margin: 0rem 0rem 0.5rem 0rem;
          text-align: initial;
        }

        .classGrid > p {
          display: grid;
          justify-items: start;
          color: var(--gray-600);
          padding: 0rem 0rem 1rem 0rem;
          border-bottom: 1px solid var(--gray-200);
          margin: 0rem 0rem 1rem 0rem;
          width: 100%;
        }

        /**
        ** Icon Tag
        */

        .tagGrid {
          display: flex;
        }
        .tagGrid h6 {
          color: var(--font-color-card-class);
          margin: 0rem 0.25rem 0rem 0rem;
        }

        .tagGrid p {
          color: var(--font-color-card-class);
        }

        .tagGrid > .icon {
          color: var(--font-color-card-class);
          font-size: 1.125rem;
          margin: 0rem 0.25rem 0rem 0rem;
        }

        footer {
          display: grid;
          gap: 0.5rem;
        }
        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        /*
          @media (min-width: 744px) and (max-width: 1279px) {
          .icon {
          }
        }
        */

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
