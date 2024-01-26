import React from 'react'

export function DaysCalendar() {
  const classes = [
    { id: 0, class: 'soy una clase', materia: 'soy una materia' },
    { id: 1, class: 'también soy una clase' },
  ]
  const week = [
    { id: 0, day: '' },
    { id: 1, day: 'Lunes', time: '8:00', class: 'soy una clase' },
    { id: 2, day: 'Martes' },
    { id: 3, day: 'Miércoles' },
    { id: 4, day: 'Jueves' },
    { id: 5, day: 'Viernes' },
    { id: 6, day: 'Sábado' },
  ]

  const hours = [
    { id: 1, time: '8:00', class: 'soy una clase' },
    { id: 2, time: '9:00' },
    { id: 3, time: '10:00' },
    { id: 4, time: '11:00' },
    { id: 5, time: '12:00' },
    { id: 6, time: '13:00' },
    { id: 7, time: '14:00' },
  ]
  return (
    <>
      <table className="container">
        <thead>
          <tr>
            {week.map((week) => (
              <>
                <th className="days" key={week.id}>
                  {week.day}
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="containerHour">
            {hours.map((hours) => (
              <>
                <td key={hours.id}>{hours.time}</td>
              </>
            ))}
          </tr>
          <tr>
            <>
              {classes.map((classes) => (
                <>
                  <td key={classes.id}>{classes.class}</td>
                  <td>{classes.materia}</td>
                </>
              ))}
            </>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .container {
          align-items: center;
          width: 100%;
          height: 44px;
          border-radius: 12px 12px 0 0;
        }
        th {
          background: #eaecf0;
        }
        .container th,
        .container td {
          padding: 13px 49px;
        }
        table,
        th,
        td {
          border: 1px solid #f23;
        }
        .days {
          text-align: center;
          color: #283341;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
        }
        .containerHour {
          display: grid;
          align-items: center;
        }
      `}</style>
    </>
  )
}
//color border #f2f4f7
