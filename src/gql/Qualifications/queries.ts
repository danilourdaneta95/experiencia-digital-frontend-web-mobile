import { gql } from "@apollo/client";

const GET_QUALIFICATIONS = gql`
    query {
        calificaciones{
            asignaturas{
                nombre
                evaluaciones{
                    nombre
                    nota
                    aprobado
                    ponderacion
                }
                requisitos{
                    nombre
                    detalle
                }
            }
        }
    }
`;
const GET_HISTORICAL = gql`
    query {
        historicas{
            periodos{
                anyo
                periodo
                cursos{
                    nombre
                    nota
                    concepto
                    aprobado
                }
            }
        }
    }
`;

export default {
  GET_QUALIFICATIONS,
  GET_HISTORICAL
};
