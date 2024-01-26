import ButtonIcon from 'components/core/buttonIcon'
import ProfileContext from 'context/profiles/profileContext'
import { useContext } from 'react'
import dataButtonSidebar from 'data/buttonsSidebar.json'
import Link from 'next/link'
import { CONSTANTS } from 'settings/constants'
import ButtonAccordion from 'components/core/buttonIcon/variant/accordion'

interface ButtonHandle {
  /**
   * A prop that is being passed function down from the parent component.
   *
   */
  handleClick?: any
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useSidebar isCompressedSidebar.
   * @example
   * ~~~
   * isCompressedSidebar={isCompressedSidebar}
   * ~~~
   *
   */
  isCompressedSidebar: any
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useAccordion isOpenAccordion.
   * Props of State Custom Hook useAccordion isOpenAccordion
   * @example
   * ~~~
   * isOpenAccordion={props.isOpenAccordion}
   * ~~~
   */
  isOpenAccordion: any
  /**
   * It's a prop that is being passed a function of a Custom Hook useAccordion for setIsOpenAccordion to previous state
   * @example
   * ~~~
   * toggleAccordion={toggleAccordion}
   * ~~~
   */
  toggleAccordion: any
  /**
   * It's a prop that is being passed a function of a Customs Hooks [useSidebar & useAccordion] openSidebarAndAccordion()
   * @example
   * ~~~
   *  openSidebarAndAccordion={props.openSidebarAndAccordion}
   * ~~~
   */
  openSidebarAndAccordion: any
}

export interface Root {
  EstudiantesMain: EstudiantesMain[]
  EgresadosMain: EgresadosMain[]
}

export interface EstudiantesMain {
  id: number
  variant: string
  iconLabel: string
  iconName: string
  target: '_blank' | '_self' | '_parent' | '_top'
  linkTo: string
}

export interface EgresadosMain {
  id: number
  variant: string
  iconLabel: string
  iconName: string
  target: '_blank' | '_self' | '_parent' | '_top'
  linkTo: string
}

export default function ButtonsMainSidebar(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar

  const { userProfile } = useContext(ProfileContext)

  if (userProfile == CONSTANTS.ProfileEnum.ESTUDIANTES) {
    return (
      <>
        {dataButtonSidebar.EstudiantesMain.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a
              target={data.disabled ? undefined : data.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${isCompressedSidebar ? 'linkCompresed' : 'link'}`}
            >
              <ButtonIcon
                variant={data.variant}
                tabIndex={data.tabIndex}
                ariaLabel={data.labelContent}
                iconName={data.iconName}
                labelContent={data.labelContent}
                buttonBackground={'transparent'}
                hideLabel={isCompressedSidebar}
                isOpenAccordion={props.isOpenAccordion}
                toggleAccordion={props.toggleAccordion}
                openSidebarAndAccordion={props.openSidebarAndAccordion}
                disabled={data.disabled}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .linkCompresed {
            width: min-content;
            margin-left: 4px;
          }
          .disabled-link {
            pointer-events: none;
            user-select: none;
          }
          .link {
          }
        `}</style>
      </>
    )
  }

  if (userProfile == CONSTANTS.ProfileEnum.EGRESADOS) {
    return (
      <>
        <ButtonAccordion
          variant={'accordion'}
          ariaLabel={'Autogestión'}
          iconName={'ri-apps-line'}
          buttonBackground={'transparent'}
          disabled={false}
          filter={false}
          hideLabel={isCompressedSidebar}
          positionLabel={''}
          labelContent={'Autogestión'}
          alignButtonContent={'TopLeft'}
          backgroundImage={false}
          isOpenAccordion={props.isOpenAccordion}
          openSidebarAndAccordion={props.openSidebarAndAccordion}
          isCompressedSidebar={isCompressedSidebar}
          toggleAccordion={props.toggleAccordion}
          labelContentAccordion={undefined}
          tabIndex={0}
        />
        {dataButtonSidebar.EgresadosMain.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a
              target={data.disabled ? undefined : data.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${isCompressedSidebar ? 'linkCompresed' : ''}`}
            >
              <ButtonIcon
                variant={data.variant}
                ariaLabel={data.labelContent}
                iconName={data.iconName}
                labelContent={data.labelContent}
                buttonBackground={'transparent'}
                hideLabel={isCompressedSidebar}
                isOpenAccordion={props.isOpenAccordion}
                toggleAccordion={props.toggleAccordion}
                openSidebarAndAccordion={props.openSidebarAndAccordion}
                disabled={data.disabled}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .linkCompresed {
            width: min-content;
            margin-left: 4px;
          }
          .disabled-link {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
      </>
    )
  }

  if (userProfile == CONSTANTS.ProfileEnum.ADVANCE_PRESENCIAL) {
    return (
      <>
        {dataButtonSidebar.AdvancePresencialMain.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a
              target={data.disabled ? undefined : data.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${isCompressedSidebar ? 'linkCompresed' : ''}`}
            >
              <ButtonIcon
                variant={data.variant}
                ariaLabel={data.labelContent}
                iconName={data.iconName}
                labelContent={data.labelContent}
                buttonBackground={'transparent'}
                hideLabel={isCompressedSidebar}
                isOpenAccordion={props.isOpenAccordion}
                toggleAccordion={props.toggleAccordion}
                openSidebarAndAccordion={props.openSidebarAndAccordion}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .linkCompresed {
            width: min-content;
            margin-left: 4px;
          }
          .disabled-link {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
      </>
    )
  }

  if (userProfile == CONSTANTS.ProfileEnum.ADVANCE_ONLINE) {
    return (
      <>
        {dataButtonSidebar.AdvanceOnlineMain.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a
              target={data.disabled ? undefined : data.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${isCompressedSidebar ? 'linkCompresed' : ''}`}
            >
              <ButtonIcon
                variant={data.variant}
                ariaLabel={data.labelContent}
                iconName={data.iconName}
                labelContent={data.labelContent}
                buttonBackground={'transparent'}
                hideLabel={isCompressedSidebar}
                isOpenAccordion={props.isOpenAccordion}
                toggleAccordion={props.toggleAccordion}
                openSidebarAndAccordion={props.openSidebarAndAccordion}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .linkCompresed {
            width: min-content;
            margin-left: 4px;
          }
          .disabled-link {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
      </>
    )
  }

  if (userProfile == CONSTANTS.ProfileEnum.POSTGRADO) {
    return (
      <>
        {dataButtonSidebar.PostgradoMain.map((data) => (
          <Link href={data.disabled ? '' : data.linkTo} passHref={true} key={data.id}>
            <a
              target={data.disabled ? undefined : data.target}
              className={`${data.disabled ? 'disabled-link' : ''} ${isCompressedSidebar ? 'linkCompresed' : ''}`}
            >
              <ButtonIcon
                variant={data.variant}
                ariaLabel={data.labelContent}
                iconName={data.iconName}
                labelContent={data.labelContent}
                buttonBackground={'transparent'}
                hideLabel={isCompressedSidebar}
                isOpenAccordion={props.isOpenAccordion}
                toggleAccordion={props.toggleAccordion}
                openSidebarAndAccordion={props.openSidebarAndAccordion}
              />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .linkCompresed {
            width: min-content;
            margin-left: 4px;
          }
          .disabled-link {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
      </>
    )
  } else return <></>
}
