export interface HorarioDiaType {
    horarioDia?: HorarioDia
}

export interface HorarioDia {
    dia?: dia
    clases?: Clase[]
}

export interface Clase {
    horario_inicio?: string
    horario_fin?: string
    materia_nombre?: string
    materia_codigo?: string
    modalidad?: string
    sala?: string
    profesor?: string
}
  