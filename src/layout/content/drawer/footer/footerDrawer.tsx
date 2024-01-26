/* eslint-disable @typescript-eslint/no-unused-vars */
import ButtonIcon from 'components/core/buttonIcon'
import ProfileContext from 'context/profiles/profileContext'
import { useContext } from 'react'
import dataButtonSidebar from 'data/buttonsSidebar.json'
import ButtonHelpFooter from 'components/customs/buttons/buttonHelpFooter'
import router from 'next/router'
import { CONSTANTS } from 'settings/constants'
import { signOut } from 'context/auth'
import ButtonsFooterSidebar from 'components/customs/sidebar/footerSidebar/buttonsFooterSidebar'

interface Footer {
  children?: any
  isCompressedSidebar: any
}

export default function FooterDrawer(props: Footer) {
  return (
    <>
      <ButtonsFooterSidebar
        isCompressedSidebar={false}
        isOpenAccordion={false}
        toggleAccordion={false}
        openSidebarAndAccordion={false}
      />
    </>
  )
}
