import { Children } from 'react'
import RowTable from './row'

interface TableProps {
  headers?: string[]
  children: any
}

const Table = (props: TableProps) => {
  const rows: any[] = []

  Children.forEach(props.children, (child, index) => {
    if (child.type === RowTable) {
      rows.push(<RowTable key={index} {...child.props} />)
    }
  })
  return (
    <>
      <table className="table">
        {props.headers && (
          <thead>
            <tr>
              {props.headers.map((header, index) => (
                <th style={{ width: `${100 / props.headers.length}%` }} key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{rows}</tbody>
      </table>
      <style global jsx>{`
        .table {
          width: 100%;
          max-width: 100%;
          background-color: transparent;
          border-collapse: collapse;
        }
        .table th {
          padding: 0.75rem;
          vertical-align: top;
          text-align: center;
          text-align: -webkit-center;
          width: 25%;
        }
        .table th:first-child {
          text-align: start;
          text-align: -webkit-left;
        }
        .table th:last-child {
          text-align: end;
          text-align: -webkit-right;
        }
        tr:last-child td {
          border-bottom: 1px solid #dee2e6;
        }
        td {
          border-bottom: 1px solid #dee2e6;
          text-align: -webkit-center;
          font-weight: 500;
        }
        td:first-child {
          text-align: -webkit-left;
        }
        td:last-child {
          text-align: -webkit-right;
        }
        .td_center {
          text-align: -webkit-center !important;
        }
        .td_right {
          text-align: -webkit-right !important;
        }
        .td_left {
          text-align: -webkit-left !important;
        }
        tr:last-child td {
          border-bottom: 0px;
        }
      `}</style>
    </>
  )
}

export default Table
