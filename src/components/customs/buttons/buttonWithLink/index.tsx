import ButtonIcon from 'components/core/buttonIcon'
import Card from 'components/core/card'
import LineSeparator from 'components/core/lineSeparator'
import TitleIcon from 'components/core/titleIcon'
interface ButtonLinksProps {
  variant: string
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent={`Boton de ${props.labelContent}`}
   * ~~~
   */
  labelContent: string
  /**
   ** Set Icon Name remix value=String
   * @see name of icons {@link https://remixicon.com/ REMIX ICON}
   *
   * @example
   * ~~~
   * iconName={props.iconName}
   * ~~~
   */
  iconName: string
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundUrlImage?: string

  supportingText: string

  title: string

  iconNameTitle: string
  linkTo?: string
}

/**
 * TODO: Only one button
 */
export function ButtonLinks(props: ButtonLinksProps) {
  const vidaUss = [
    {
      id: '1',
      variant: 'links',
      iconLabel: 'Biblioteca',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Material de Estudio',
      linkTo: '',
    },
    {
      id: '2',
      variant: 'links',
      iconLabel: 'Imprimir',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Impresiones USS',
      linkTo: 'https://miuss.uss.cl/impresiones/?token=ODc3MjE3MzQ=',
    },
    {
      id: '3',
      variant: 'links',
      iconLabel: 'Mis descuentos',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Beneficios USS',
      linkTo: '',
      borderBottom: false,
    },
  ]
  const buttonLinks = (
    <>
      {vidaUss.map((vidaUss) => (
        <ButtonIcon
          key={vidaUss.id}
          variant="link"
          buttonHideMd={true}
          buttonHideXl={false}
          buttonHideSm={true}
          labelContent={vidaUss.iconLabel}
          positionLabel="Left"
          labelColor="#001894"
          buttonBackground="#fff"
          alignButtonContent="MiddleLeft"
          ariaLabel={`Botón de ${vidaUss.iconLabel}`}
          iconName={vidaUss.iconName}
          iconSize="1.875rem"
          iconColor="#667085"
          buttonSizeWidth="100%"
          buttonSizeHeight="80px"
          buttonBorderRadius="0rem"
          colorBorderFocus="0024DB"
          supportingText={vidaUss.supportingText}
          backgroundImage={false}
          borderBottom={vidaUss.borderBottom}
          linkTo={vidaUss.linkTo}
        />
      ))}
    </>
  )
  return (
    <>
      <Card id="CardVidaEstudiantil" hideMd={true} hideSm={true}>
        <TitleIcon iconName={props.iconNameTitle} title={props.title} />
        <LineSeparator />
        {buttonLinks}
      </Card>
    </>
  )
}
export function ButtonLinks2(props: ButtonLinksProps) {
  const autogestion = [
    {
      id: '7',
      variant: 'links',
      iconLabel: 'Dafa',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Dafa',
      linkTo: '',
    },
    {
      id: '8',
      variant: 'links',
      iconLabel: 'Soluciones financieras',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Mis cuentas',
      linkTo: '',
    },
    {
      id: '9',
      variant: 'links',
      iconLabel: 'Registro académico',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Mi información',
      linkTo: '',
    },
    {
      id: '10',
      variant: 'links',
      iconLabel: 'Autoservicios',
      iconName: 'ri-arrow-right-s-line',
      supportingText: 'Material de servicio',
      linkTo: 'http://autoservicio.uss.cl/PROD/twbkwbis.P_GenMenu?name=homepage',
      borderBottom: false,
    },
  ]
  const buttonLinks2 = (
    <>
      {autogestion.map((autogestion) => (
        <ButtonIcon
          key={autogestion.id}
          variant="link"
          buttonHideMd={true}
          buttonHideXl={false}
          buttonHideSm={true}
          labelContent={autogestion.iconLabel}
          positionLabel="Left"
          labelColor="#001894"
          buttonBackground="#fff"
          alignButtonContent="MiddleLeft"
          ariaLabel={`Boton de ${autogestion.iconLabel}`}
          iconName={autogestion.iconName}
          iconSize="1.875rem"
          iconColor="#667085"
          buttonSizeWidth="100%"
          buttonSizeHeight="80px"
          buttonBorderRadius="0rem"
          colorBorderFocus="0024DB"
          supportingText={autogestion.supportingText}
          backgroundImage={false}
          borderBottom={autogestion.borderBottom}
          linkTo={autogestion.linkTo}
        />
      ))}
    </>
  )
  return (
    <>
      <Card id="CardVidaEstudiantil" hideMd={true} hideSm={true}>
        <TitleIcon iconName={props.iconNameTitle} title={props.title} />
        <LineSeparator />
        {buttonLinks2}
      </Card>
    </>
  )
}
