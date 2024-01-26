import { Children, CSSProperties } from 'react'
import ColumnTable from '../column'

interface RowTableProps {
  children?: any
  padding?: number
  style?: CSSProperties
}

const RowTable = (props: RowTableProps) => {
  const columns: any[] = []

  Children.forEach(props.children, (child, index) => {
    if (child.type === ColumnTable) {
      columns.push(<ColumnTable key={index} {...child.props} {...props} />)
    }
  })

  return (
    <>
      <tr>{columns}</tr>
    </>
  )
}

export default RowTable
