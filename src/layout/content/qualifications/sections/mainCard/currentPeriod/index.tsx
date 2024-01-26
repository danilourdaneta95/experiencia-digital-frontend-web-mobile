import Accordion from 'components/customs/accordion'
import AccordionGroup from 'components/customs/accordion/group'
import { gqlQualifications } from 'gql'
import { useEffect, useState } from 'react'
import apolloClient from 'settings/apollo'
import { Asignatura, CalificacionesData } from 'types/calificaciones'
import AsignaturaTable from './asignaturaTable'
import RequisitosTable from './requisitosTable'

const CurrentPeriod = () => {
  const [data, setData] = useState<CalificacionesData>()

  useEffect(() => {
    apolloClient
      .query<CalificacionesData>({
        query: gqlQualifications.queries.GET_QUALIFICATIONS,
      })
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <>
      {data != null ? (
        <AccordionGroup closeOthersOnExpand={true}>
          {data.calificaciones.asignaturas.map((data: Asignatura, index: number) => (
            <Accordion key={index} title={data.nombre}>
              <AsignaturaTable data={data.evaluaciones} />
              <RequisitosTable data={data.requisitos} />
            </Accordion>
          ))}
        </AccordionGroup>
      ) : (
        <></>
      )}
    </>
  )
}

export default CurrentPeriod
