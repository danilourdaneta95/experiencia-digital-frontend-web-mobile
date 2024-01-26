import Card from 'components/core/card'
import TitleIcon from 'components/core/titleIcon'
import ButtonIcon from 'components/core/buttonIcon'
import CardClass from 'components/core/card/variant/cardClass'
import { useContext, useRef, useState } from 'react'
import useDraggableScroll from 'components/drag'
import ProfileContext from 'context/profiles/profileContext'
import WithOutClasses from './withoutClasses'
import renderComponents from 'data/renderComponents.json'
import TagToday from 'components/customs/tagToday'
import { CONSTANTS } from 'settings/constants'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { gqlClassWeekCalendar } from 'gql'

export default function MyClasses() {
  const ref = useRef(null)
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' })
  const { userProfile, classesToday } = useContext(ProfileContext)

  const router = useRouter()

  /* Counting the number of elements in the array. */
  // const countClasses = data?.horarioDia?.clases == null ? 0 : Object.keys(data.horarioDia.clases).length
  const countClasses = Object.keys(classesToday).length
  /* A ternary operator for set Message of Count Class */
  let messageCountClasses: string
  if (countClasses == 1) {
    messageCountClasses = `Hoy tienes solo ${countClasses} clase`
  }
  if (countClasses > 1) {
    messageCountClasses = `Hoy tienes ${countClasses} clases`
  }

  /* A function that returns a list of Cards of Classes. */
  const ListCardsClass = () => {
    if (countClasses < 1) {
      return (
        <>
          <WithOutClasses></WithOutClasses>
        </>
      )
    } else
      return (
        <>
          {classesToday.map((data, index) => (
            <CardClass
              key={index}
              classTimeStart={data.horario_inicio}
              classTimeEnd={data.horario_fin}
              classTitle={data.materia_nombre}
              classCode={data.materia_codigo}
              classMode={data.modalidad}
              classroomCode={data.sala}
              teacherName={data.profesor}
            />
          ))}
        </>
      )
  }

  const [renderCard] = useState(renderComponents.MyClasses)
  const renderListProfiles = renderCard.map((data) => data.id)
  const renderListProfilesRender = renderCard.map((data) => data.render)

  /* when there´s not classes don´t show gridMessage container  */
  let showGridMessage
  if (countClasses < 1) {
    showGridMessage = false
  }
  if (countClasses > 1) {
    showGridMessage = true
  }
  const { client } = useQuery(gqlClassWeekCalendar.queries.GET_CLASS_WEEK_CALENDAR, {
    fetchPolicy: 'cache-first', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
    variables: { fechaInput: '' },
  })

  if (userProfile == renderListProfiles[userProfile] && renderListProfilesRender[userProfile]) {
    return (
      <>
        <Card id="MisClases" paddingSm="0px 0px 0px 0px" backgroundColorSm="#F9FAFB" cardMargin="0px 0px 24px 0px">
          <div className="gridMyClassesArea">
            <span className="titleArea">
              <TitleIcon title="Mis clases" iconName="ri-book-2-line" marginContainer="0px 0px 0px 0px" />
            </span>
            <span className="tagTodayArea">
              <TagToday hideXl={true} background={'#F8F9FC'} color="#363F72" />
            </span>
            <span className="classDayArea">
              <ButtonIcon
                variant="label"
                ariaLabel="Botón Calendario ver por Semana"
                buttonSizeWidth="173px"
                buttonSizeHeight="56px"
                buttonBorderRadius="32px"
                iconName="ri-calendar-event-line"
                iconColor="#001894"
                alignButtonContent="MiddleCenter"
                labelContent={'Mi semana'}
                labelColor="#001894"
                positionLabel="Left"
                buttonBackground="#E4E8FC"
                onMouseOver={() =>
                  client.query({
                    query: gqlClassWeekCalendar.queries.GET_CLASS_WEEK_CALENDAR,
                    variables: { fechaInput: '' },
                  })
                }
                handleClick={() => router.push(CONSTANTS.ROUTES.MISEMANA)}
                disabled={false}
              />
            </span>
          </div>
          <div id="CardListClass" ref={ref} onMouseDown={onMouseDown}>
            <ListCardsClass />
          </div>
          {showGridMessage && (
            <div className={`gridMessage`}>
              <p dangerouslySetInnerHTML={{ __html: messageCountClasses }} />
            </div>
          )}
        </Card>

        <style jsx>{`
          /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
          .container {
            display: grid;
            margin: var(--margin-section);
          }

          .titleArea {
            grid-area: title;
          }

          .tagTodayArea {
            grid-area: tagToday;
          }

          .gridMyClassesArea {
            display: grid;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            grid-template-areas:
              'title title'
              'tagToday week';
          }

          .classDayArea {
            display: grid;
            grid-area: week;
            justify-content: end;
          }
          #CardListClass {
            display: flex;
            overflow-x: scroll;
            margin-top: 1.5rem;
            width: 100%;
            gap: 0.5rem;
            justify-content: start;
            scrolling: touch;
            -webkit-overflow-scrolling: touch;
          }
          .gridMessage {
            display: grid;
            justify-items: center;
            padding: 0rem 0rem 1rem 0rem;
            align-items: center;
          }

          /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

          @media (min-width: 744px) and (max-width: 1279px) {
          }

          /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
          @media (min-width: 1280px) {
            .gridMyClassesArea {
              grid-template-areas: 'title week';
            }
            #CardListClass {
              cursor: grab;
              overflow: auto;
            }
            ::-webkit-scrollbar {
              height: 0.5rem;
            }
            /* Track */
            ::-webkit-scrollbar-track {
              box-shadow: inset 0 0 0.25rem var(--webkit-scrollbar-track);
              border-radius: 10px;
              background: var(--webkit-scrollbar-track);
            }
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: var(--light-grayish);
              border-radius: 16px;
            }
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: var(--light-grayish);
            }
            .gridMessage {
              padding: 1rem 0rem 0rem 0rem;
              align-items: center;
            }

            .tagTodayArea {
              display: none;
            }
          }
        `}</style>
      </>
    )
  } else return null
}
