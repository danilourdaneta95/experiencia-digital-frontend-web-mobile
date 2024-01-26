import React from 'react'
import dataButtonSidebar from 'data/buttonsSidebar.json'
import FooterSidebarLayout from './footerSidebarLayout'
import ButtonHelpFooter from 'components/customs/buttons/buttonHelpFooter'
import ButtonIcon from 'components/core/buttonIcon'
import { CONSTANTS } from 'settings/constants'
import { signOut } from 'context/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
  EstudiantesFooter: EstudiantesFooter[]
  DefaultFooter: DefaultFooter[]
}

export interface EstudiantesFooter {
  id: number
  variant: string
  iconLabel: string
  iconName: string
  supportingText: string
}

export interface DefaultFooter {
  id: number
  variant: string
  iconLabel: string
  iconName: string
  supportingText: string
}

export default function ButtonsFooterSidebar(props: ButtonHandle) {
  const isCompressedSidebar = props.isCompressedSidebar
  const router = useRouter()

  const handleLogout = async () => {
    router.push(CONSTANTS.ROUTES.LOGIN).then(() => signOut())
  }

  return (
    <>
      <FooterSidebarLayout isCompressedSidebar={isCompressedSidebar}>
        {dataButtonSidebar.EstudiantesFooter.map((data) => (
          <div key={data.id} className={`${isCompressedSidebar ? 'compressedSidebar' : 'openSidebar '}`}>
            <Link href={data.href}>
              <a target={data.target ? `${data.target}` : '_self'}>
                <ButtonHelpFooter
                  ariaLabel={data.labelContent}
                  iconName={data.iconName}
                  labelContent={data.labelContent}
                  buttonBackground={'transparent'}
                  hideLabelFooter={isCompressedSidebar}
                  supportingText={data.supportingText}
                  buttonSizeHeight="74px"
                  onHover={data.onHover}
                />
              </a>
            </Link>
          </div>
        ))}
        <div className={`${isCompressedSidebar ? 'signOutCompress' : 'signOut '}`}>
          <ButtonIcon
            variant="label"
            ariaLabel={'cerrar sesión'}
            iconName={'ri-logout-box-r-line'}
            labelContent={'Cerrar sesión'}
            buttonBackground={'transparent'}
            hideLabel={isCompressedSidebar}
            handleClick={() => handleLogout()}
            alignButtonContent="MiddleLeft"
          />
        </div>
      </FooterSidebarLayout>

      <style jsx>{`
        .compressedSidebar {
          display: grid;
          height: 74px;
          align-content: center;
        }
        .signOutCompress {
        }
      `}</style>
    </>
  )
}
