interface HistoricalTitleProps {
  anio: number
  periodo: string
}

const HistoricalTitle = (props: HistoricalTitleProps) => {
  return (
    <>
      <div className="container">
        <div className="anio">{props.anio.toString()}</div>
        <div className="divbar"></div>
        <div>{props.periodo}</div>
      </div>
      <style jsx>{`
        .container {
          display: inline-flex;
          gap: 12px;
        }
        .anio {
          width: 42px;
        }
        .divbar {
          border-right: 1px solid #d0d5dd;
        }
      `}</style>
    </>
  )
}

export default HistoricalTitle
