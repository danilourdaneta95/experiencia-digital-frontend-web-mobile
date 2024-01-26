interface ColumnTableProps {
  value?: React.ReactNode
  padding?: number
  fontSize?: number
  fontWeight?: number
  textAlign?: 'left' | 'right' | 'center'
}

const ColumnTable = (props: ColumnTableProps) => {
  return (
    <>
      <td
        style={{
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          padding: props.padding,
        }}
        className={`td_${props.textAlign}`}
      >
        {props.value}
      </td>
    </>
  )
}

export default ColumnTable
