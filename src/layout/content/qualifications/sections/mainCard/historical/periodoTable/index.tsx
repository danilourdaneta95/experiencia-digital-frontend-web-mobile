import Tag from 'components/core/tag'
import Table from 'components/customs/table'
import ColumnTable from 'components/customs/table/column'
import RowTable from 'components/customs/table/row'
import { Curso } from 'types/historicas'

interface PeriodoTableProps {
  data: Curso[]
}

const PeriodoTable = (props: PeriodoTableProps) => {
  return (
    <>
      <Table headers={['Curso', 'Nota']}>
        {props.data.map((data: Curso, index: number) => (
          <RowTable key={index} padding={11}>
            <ColumnTable fontSize={16} value={data.nombre} />
            <ColumnTable
              fontSize={14}
              fontWeight={500}
              textAlign="right"
              value={
                <Tag background={data.aprobado ? '#D6E4F0' : '#F1E9EA'} color={data.aprobado ? '#00628D' : '#B42318'}>
                  {data.concepto == '' ? data.nota : data.concepto}
                </Tag>
              }
            />
          </RowTable>
        ))}
      </Table>
    </>
  )
}

export default PeriodoTable
