import { gql } from '@apollo/client'

const GET_CLASS_WEEK_CALENDAR = gql`
  query GetClassWeekCalendar($fechaInput: String!) {
    horarioSemana(fecha: $fechaInput) {
      lunesDeLaSemana
      semana_descripcion
      hora_inicio_calendario
      hora_fin_calendario
      horario {
        dia
        fecha
        clases {
          fecha
          horario_inicio
          horario_fin
          materia_nombre
          materia_codigo
          posicion_inicio_min
          duracion
          sala
          profesor
          color
        }
      }
    }
  }
`

export default {
  GET_CLASS_WEEK_CALENDAR,
}
