// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CONSTANTS {
  export enum ROUTES {
    LOGIN = '/auth/signin',
    DASHBOARD = '/dashboard',
    MISEMANA = '/misemana',
    MISARANCELES = '/misaranceles',
    VIDAUSS = '/vidauss',
    AUTOGESTION = '/autogestion',
    QUALIFICATIONS = '/calificaciones',
    ACTIVIDADES = 'https://www.uss.cl/actualidad-uss/agenda/',
    BLACKBOARD = 'https://uss.blackboard.com/',
    SUPPORT_PHONE = 'tel:+566007713000',
    CLASSIC_PORTAL = 'https://estudiante.uss.cl/login/',
    EMPLOYMENT_PORTAL = 'https://portalempleo.uss.cl/',
    OUTLOOK_MAIL = 'https://outlook.office365.com/mail/',
    CHANGE_PASSWORD = 'https://claveunica.uss.cl/',
    FACEBOOK = 'https://www.facebook.com/ComunidadUSS/',
    TWITTER = 'https://twitter.com/USanSebastian',
    YOUTUBE = 'https://www.youtube.com/channel/UC22O4-WupSB0XfaiQnMzK3g',
    INSTAGRAM = 'https://www.instagram.com/usansebastian/?hl=es/',
    CLASSROOM = 'https://srv01.uss.cl/login/login_uss.php',
    PAYMENT = 'https://pagos.uss.cl/',
  }

  export enum TitlePage {
    QUALIFICATIONS = 'Calificaciones',
    LIBRARY = 'Biblioteca',
  }

  export enum STORAGE {
    AUTH_TOKEN = 'AUTH_TOKEN',
  }

  export enum GraphQLErrors {
    UNAUTHENTICATED = 'UNAUTHENTICATED',
    BAD_USER_INPUT = 'BAD_USER_INPUT',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    GRAPHQL_VALIDATION_FAILED = 'GRAPHQL_VALIDATION_FAILED',
    GRAPHQL_PARSE_FAILED = 'GRAPHQL_PARSE_FAILED',
    FORBIDDEN = 'FORBIDDEN',
  }

  export enum ProfileEnum {
    ADVANCE_ONLINE = 0,
    ESTUDIANTES = 1,
    ADVANCE_PRESENCIAL = 2,
    POSTGRADO = 3,
    EGRESADOS = 4,
    COLABORADOR = 5,
  }

  export enum SERVICES {
    GOOGLE_TAG_MANAGER = 'GTM-PG9QK5K',
  }

  export enum CALENDAR {
    HOURS_CLASSES_CALENDER_START = 8,
    HOURS_CLASSES_CALENDER_END = 22,
    RELATION_HEIGHT_CLASSES_MIN_PER_PX = 1.2,
    PADDING_TOP_FIRST_COLUMN_CELLS = 4,
    PADDING_HORIZONTAL_ALL_CLASSES = 8,
    MINUTES_IN_AN_HOUR = 60,
  }

  export enum QUALIFICATIONS {
    MinimumApproved = 4.0,
  }
}
