import Card from 'components/core/card'
import Tag from 'components/core/tag'
import Table from 'components/customs/table'
import ColumnTable from 'components/customs/table/column'
import RowTable from 'components/customs/table/row'
import { Requisito } from 'types/calificaciones'

interface AsignaturaTableProps {
  data: Requisito[]
}

const RequisitosTable = (props: AsignaturaTableProps) => {
  return (
    <>
      <Card padding="16px" borderRadius="10px">
        <Tag color="#00628D">
          <div className="info-tag">
            <i className="ri-information-line"></i>
            Requerimientos del ramo
          </div>
        </Tag>
        <Table>
          {props.data.map((data: Requisito, index: number) => (
            <RowTable key={index} padding={4}>
              <ColumnTable fontSize={14} value={data.nombre} />
              <ColumnTable
                fontSize={12}
                textAlign="right"
                value={
                  <Tag background="#EBEEF4" color="#363F72">
                    {data.detalle}
                  </Tag>
                }
              />
            </RowTable>
          ))}
        </Table>
      </Card>
      <style jsx>{`
        .info-tag {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          display: inline-flex;
          gap: 5px;
          margin-bottom: 8px;
        }
      `}</style>
    </>
  )
}

export default RequisitosTable
