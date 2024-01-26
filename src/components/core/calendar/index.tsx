import DayWeek from './dayWeek'
// import PaginationCalendar from './paginationCalendar'
import TimeColumn from './timeColumn'
import { useEffect, useState } from 'react'
import PaginationCalendar from './paginationCalendar'
import { CONSTANTS } from 'settings/constants'

export interface CalendarProps {
  handleClick: any
  gqlData: any[]
  setmodalData: any
}

export default function Calendar(props: CalendarProps) {
  /* Creating a state variable called numberRows and setting it to undefined. */
  const [numberRows, setNumberRows] = useState(undefined)

  const HoursStart = CONSTANTS.CALENDAR.HOURS_CLASSES_CALENDER_START
  const HoursEnd = CONSTANTS.CALENDAR.HOURS_CLASSES_CALENDER_END

  /**
   * It takes a start and end number and returns an array of numbers between the start and end number
   * @param {number} start - number - The starting hour of the day.
   * @param {number} end - number - The last hour of the day you want to display.
   * @returns An array of numbers from start to end.
   */
  function HoursToArray(start: number, end: number) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx)
  }
  /* Creating an array of numbers from the start hour to the end hour. */
  const arrayHours = HoursToArray(HoursStart, HoursEnd)

  /* Getting the length of the arrayHours array. */
  const calcNumberRows = arrayHours.length

  /* Filtering the arrayHours array and returning a new array with the values that are less than 10 and
  greater than 10. */
  const valuesMinorTen = arrayHours.filter((value) => value < 10).map(String)
  const valuesMayorTen = arrayHours.filter((value) => value >= 10).map(String)

  /* Adding a 0 to the values that are less than 10 and adding a :00 to the values that are greater
  than 10. */
  const appendMinorTen = valuesMinorTen.map((i) => '0' + i + ':00')
  const appendMayorTen = valuesMayorTen.map((i) => i + ':00')

  /* Creating an array of strings with the hours of the day. */
  const dataHours = appendMinorTen.concat(appendMayorTen)

  const saveRowsState = () => {
    setNumberRows(calcNumberRows)
  }

  useEffect(() => {
    saveRowsState()
  }, [])

  return (
    <>
      <PaginationCalendar hideOnSm={true} hideOnMd={true} gqlData={props.gqlData} />
      <div role="table" className="table">
        <TimeColumn dataHours={dataHours} />
        <DayWeek
          rows={numberRows}
          handleClick={props.handleClick}
          gqlData={props.gqlData}
          setmodalData={props.setmodalData}
        />
      </div>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */

        .table {
          display: grid;
          grid-template-columns: var(--widthHoursColumnsSm) 1fr;
          overflow-x: scroll;
          overflow-y: scroll;
          height: 100%;
          width: 100%;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .table {
            grid-template-columns: var(--widthHoursColumnsMd) 1fr;
          }
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            overflow-x: hidden;
            overflow-y: scroll;
            max-height: calc(100% - 62px); /* 62px is required for scroll area*/
          }

          .table {
            grid-template-columns: var(--widthHoursColumnsXl) 1fr;
            overflow-x: hidden;
            overflow-y: scroll;
          }
          ::-webkit-scrollbar {
            width: 0px;
          }
        }
      `}</style>
    </>
  )
}
