import Tag from 'components/core/tag'
import Table from 'components/customs/table'
import ColumnTable from 'components/customs/table/column'
import RowTable from 'components/customs/table/row'
import { CONSTANTS } from 'settings/constants'
import { Evaluacion } from 'types/calificaciones'

interface AsignaturaTableProps {
  data: Evaluacion[]
}

const AsignaturaTable = (props: AsignaturaTableProps) => {
  return (
    <>
      <div className="container">
        <Table headers={['Evaluación', 'Nota', 'Ponderación']}>
          {props.data.map((data: Evaluacion, index: number) => (
            <RowTable key={index} padding={11}>
              <ColumnTable fontSize={16} value={data.nombre} />
              <ColumnTable
                fontSize={14}
                fontWeight={500}
                textAlign="center"
                value={
                  <Tag
                    background={data.nota < CONSTANTS.QUALIFICATIONS.MinimumApproved ? '#F1E9EA' : '#D6E4F0'}
                    color={data.nota < CONSTANTS.QUALIFICATIONS.MinimumApproved ? '#B42318' : '#00628D'}
                  >
                    {data.nota.toFixed(1)}
                  </Tag>
                }
              />
              <ColumnTable
                fontSize={14}
                fontWeight={500}
                textAlign={window.innerWidth <= 1280 ? 'center' : 'right'}
                value={
                  <Tag background="#EBEEF4" color="#363F72">
                    {data.ponderacion}%
                  </Tag>
                }
              />
            </RowTable>
          ))}
        </Table>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}

export default AsignaturaTable
