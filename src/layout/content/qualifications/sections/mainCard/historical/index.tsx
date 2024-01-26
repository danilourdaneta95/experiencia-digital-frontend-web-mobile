import Accordion from 'components/customs/accordion'
import AccordionGroup from 'components/customs/accordion/group'
import { gqlQualifications } from 'gql'
import { useEffect, useState } from 'react'
import apolloClient from 'settings/apollo'
import { HistoricasData, Periodo } from 'types/historicas'
import PeriodoTable from './periodoTable'
import HistoricalTitle from './title'

const Historical = () => {
  const [data, setData] = useState<HistoricasData>()

  useEffect(() => {
    apolloClient
      .query<HistoricasData>({
        query: gqlQualifications.queries.GET_HISTORICAL,
      })
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <>
      {data != null ? (
        <AccordionGroup closeOthersOnExpand={true}>
          {data.historicas.periodos.map((data: Periodo, index: number) => (
            <Accordion key={index} title={<HistoricalTitle anio={data.anyo} periodo={data.periodo} />}>
              <PeriodoTable data={data.cursos} />
            </Accordion>
          ))}
        </AccordionGroup>
      ) : (
        <></>
      )}
    </>
  )
}

export default Historical
