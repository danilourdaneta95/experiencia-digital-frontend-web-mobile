import Calendar from 'components/core/calendar'
import PaginationCalendar from 'components/core/calendar/paginationCalendar'
import Card from 'components/core/card'
import TitleNavigation from 'components/core/titleNavigation'

export interface MyWeek {
  handleClick: any
  gqlData: any[]
  setmodalData: any
}

export default function MyWeek(props: MyWeek) {
  return (
    <>
      <TitleNavigation title="Mi Semana" hideSm={true} />
      <PaginationCalendar hideOnSm={false} hideOnMd={false} hideOnXl={true} gqlData={props.gqlData} />
      <Card
        cardHeightXl="calc(100vh - 256px)"
        cardHeightSm="calc(100vh - 208px)"
        cardHeightXlIos="72vh"
        paddingSm="0px"
        paddingMd="0px"
        boxShadowSm={true}
      >
        <Calendar handleClick={props.handleClick} gqlData={props.gqlData} setmodalData={props.setmodalData} />
      </Card>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
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
        }
      `}</style>
    </>
  )
}
