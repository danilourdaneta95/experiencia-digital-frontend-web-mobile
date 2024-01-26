/* eslint-disable @typescript-eslint/no-unused-vars */
import { CONSTANTS } from 'settings/constants'
import 'remixicon/fonts/remixicon.css'
// import dataJson from 'data/myWeek/myWeek.json'

export interface DayWeekProps {
  rows: number
  handleClick: any
  gqlData: any[]
  setmodalData: any
}

export default function DayWeek(props: DayWeekProps) {
  const numberRows = props.rows

  const heightBodyCells = CONSTANTS.CALENDAR.MINUTES_IN_AN_HOUR * CONSTANTS.CALENDAR.RELATION_HEIGHT_CLASSES_MIN_PER_PX

  const paddingTopFirstCells = CONSTANTS.CALENDAR.PADDING_TOP_FIRST_COLUMN_CELLS

  const paddingHorizontalClasses = CONSTANTS.CALENDAR.PADDING_HORIZONTAL_ALL_CLASSES
  const paddingHorizontalItem = CONSTANTS.CALENDAR.PADDING_HORIZONTAL_ALL_CLASSES * 2

  const data = props.gqlData[0].data
  const loading = props.gqlData[0].loading
  const error = props.gqlData[0].error

  if (loading) return <div style={{ background: 'transparent' }}></div>
  if (error) return `Error! ${error}`

  return (
    <>
      <div className="container" id="DayColumns">
        {data?.horarioSemana.horario.map((data) => (
          <div key={data.dia} className="dayGrid" id={data.dia}>
            <h6 className="titleDay">{data.dia}</h6>
            <div className="fatherDayGrid">
              <div className="fatherBorderGrid">
                {Array.from({ length: numberRows }, (_, i) => (
                  <div key={i} className="classesGrid"></div>
                ))}
              </div>
              <div className="classContainer">
                {data.clases.map((data) => {
                  // In Case if first class start posicion 0 apply margin top
                  if (data.posicion_inicio_min == 0) {
                    return (
                      <button
                        key={data.posicion_inicio_min}
                        className={`classItem ${data.color} firstClass`}
                        style={{
                          height: `calc(${data.duracion} * ${CONSTANTS.CALENDAR.RELATION_HEIGHT_CLASSES_MIN_PER_PX}px)`,
                        }}
                        onMouseOver={() =>
                          props.setmodalData([
                            data.fecha, // Pass data to component misemana.tsx for send to modal
                            data.horario_inicio, // Pass data to component misemana.tsx for send to modal
                            data.horario_fin, // Pass data to component misemana.tsx for send to modal
                            data.materia_nombre, // Pass data to component misemana.tsx for send to modal
                            data.materia_codigo, // Pass data to component misemana.tsx for send to modal
                            data.sala, // Pass data to component misemana.tsx for send to modal
                            data.profesor, // Pass data to component misemana.tsx for send to modal
                          ])
                        }
                        onClick={function (event) {
                          props.handleClick()
                        }}
                      >
                        <div className="cardClassesGrid">
                          <h6 className="classesTitle">{data.materia_nombre}</h6>
                          <div className={`buttomICon ${data.color}`}>
                            <i className={`icon ri-more-2-fill ${data.color}`}></i>
                          </div>
                        </div>
                      </button>
                    )
                  } else {
                    return (
                      <button
                        key={data.posicion_inicio_min}
                        className={`classItem ${data.color}`}
                        style={{
                          height: `calc(${data.duracion} * ${CONSTANTS.CALENDAR.RELATION_HEIGHT_CLASSES_MIN_PER_PX}px)`,
                          marginTop: `calc((${data.posicion_inicio_min} * ${CONSTANTS.CALENDAR.RELATION_HEIGHT_CLASSES_MIN_PER_PX}px) + ${paddingTopFirstCells}px )`,
                        }}
                        onMouseOver={() =>
                          props.setmodalData([
                            data.fecha, // Pass data to component misemana.tsx for send to modal
                            data.horario_inicio, // Pass data to component misemana.tsx for send to modal
                            data.horario_fin, // Pass data to component misemana.tsx for send to modal
                            data.materia_nombre, // Pass data to  component misemana.tsx for send to modal
                            data.materia_codigo, // Pass data to component misemana.tsx for send to modal
                            data.sala, // Pass data to component misemana.tsx for send to modal
                            data.profesor, // Pass data to component misemana.tsx for send to modal
                          ])
                        }
                        onClick={function (event) {
                          props.handleClick()
                        }}
                      >
                        <div className="cardClassesGrid">
                          <h6 className="classesTitle">{data.materia_nombre}</h6>
                          <div className={`buttomICon ${data.color}`}>
                            <i className={`icon ri-more-2-fill ${data.color}`}></i>
                          </div>
                        </div>
                      </button>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /**
        ** This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          place-items: center;
        }

        .dayGrid {
          display: grid;
          width: 100%;
        }

        .titleDay {
          display: grid;
          background: var(--bgHeaderDaySm);
          min-width: 158px;
          height: var(--hightHeaderClassesSm);
          border-color: var(--borderColorBody);
          border-width: 1px;
          border-style: solid solid solid none;
          position: sticky;
          z-index: 5;
          top: 0;
          align-items: center;
          text-align: center;
        }

        .fatherDayGrid {
          display: grid;
          position: relative;
        }

        .fatherBorderGrid {
          display: grid;
          z-index: 1;
          position: relative;
        }

        .classContainer {
          width: 100%;
          position: absolute;
          padding: 0px ${paddingHorizontalClasses}px;
          justify-items: center;
          z-index: 4;
        }

        .firstClass {
          margin-top: ${paddingTopFirstCells}px;
        }

        .classItem {
          position: absolute;
          width: calc(100% - ${paddingHorizontalItem}px);
          border-radius: 4px;
          height: 100%; /* how many px of duration class */
          height: auto;
          padding: 8px;
          z-index: 4;
        }

        .cardClassesGrid {
          display: grid;
          grid-template-columns: 1fr 8px;
        }
        .gridTitle {
        }
        .classesTitle {
          font-size: 12px;
        }
        button {
          display: grid;
          text-align: initial;
        }

        .buttomICon {
          display: grid;
          justify-content: center;
          align-items: start;
          max-width: 8px;
          max-height: 24px;
          width: 100%;
          height: 100%;
          background: transparent !important;
          border-radius: 50%;
          padding: 0;
        }
        .icon {
          font-size: 16px;
          margin-top: -2px;
          background: transparent !important;
        }

        .color1 {
          background: var(--backgroundClassesColorFirstClass);
          color: var(--textClassesColorFirstClass);
        }

        .color2 {
          background: var(--backgroundClassesColorSecondClass);
          color: var(--textClassesColorSecondClass);
        }

        .color3 {
          background: var(--backgroundClassesColorThirdClass);
          color: var(--textClassesColorThirdClass);
        }

        .color4 {
          background: var(--backgroundClassesColorFourthClass);
          color: var(--textClassesColorFourthClass);
        }

        .color5 {
          background: var(--backgroundClassesColorFifthClass);
          color: var(--textClassesColorFifthClass);
        }

        .color6 {
          background: var(--backgroundClassesColorSixthClass);
          color: var(--textClassesColorSixthClass);
        }

        .color7 {
          background: var(--backgroundClassesColorSeventhClass);
          color: var(--textClassesColorSeventhClass);
        }

        .color8 {
          background: var(--backgroundClassesColorEighthClass);
          color: var(--textClassesColorEighthClass);
        }

        .color9 {
          background: var(--backgroundClassesColorNinthClass);
          color: var(--textClassesColorNinthClass);
        }

        .color10 {
          background: var(--backgroundClassesColorTenthClass);
          color: var(--textClassesColorTenthClass);
        }

        #Sabado > .titleDay {
          border-style: solid solid solid solid !important;
          border-radius: 0px var(--borderRadiusHeader) 0px 0px;
        }

        #Sabado > .classesGrid:last-child {
          border-radius: 0px 0px var(--borderRadiusClasses) 0px;
        }

        .dayGrid > div:nth-child(3) {
          padding-top: ${paddingTopFirstCells}px;
        }

        .classesGrid {
          height: ${heightBodyCells}px;
          background: var(--bgBodyCell);
          border-color: var(--borderColorBody);
          border-width: 1px;
          border-style: none solid solid none;
        }

        .classesGrid:nth-child(1) {
          height: calc(${heightBodyCells}px + ${paddingTopFirstCells}px);
        }

        /**
        ** A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .titleDay {
            background: var(--bgHeaderDayMd);
            height: var(--hightHeaderClassesMd);
          }
        }

        /**
        ** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .titleDay {
            background: var(--bgHeaderDayXl);
            height: var(--hightHeaderClassesXl);
            min-width: unset;
          }
          .container {
            grid-template-columns: repeat(auto-fit, 16.66666666666667%);
          }
        }
      `}</style>
    </>
  )
}
