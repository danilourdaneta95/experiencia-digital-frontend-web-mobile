export interface Root {
  EstudiantesMain: EstudiantesMain[]
  EgresadosMain: EgresadosMain[]
  EstudiantesFooter: EstudiantesFooter[]
  DefaultFooter: DefaultFooter[]
}

export interface EstudiantesMain {
  id: number
  variant: string
  iconLabel: string
  iconName: string
}

export interface EgresadosMain {
  id: number
  variant: string
  iconLabel: string
  iconName: string
}

export interface EstudiantesFooter {
  id: number
  variant: string
  iconLabel: string
  iconName: string
}

export interface DefaultFooter {
  id: number
  variant: string
  iconLabel: string
  iconName: string
}