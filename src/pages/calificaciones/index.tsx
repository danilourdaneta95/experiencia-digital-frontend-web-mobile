import Breadcrumb from 'components/breadcrumb'
import TitleNavigation from 'components/core/titleNavigation'
import Layout from 'layout'
import Footerbar from 'layout/content/footerBar'
import Header from 'layout/content/header'
import QualificationContent from 'layout/content/qualifications'
import QualificacionsCard from 'layout/content/qualifications/sections/mainCard'
import SidebarRender from 'layout/content/sidebar'
import type { NextPage } from 'next'
import { CONSTANTS } from 'settings/constants'

const Qualifications: NextPage = () => {
  return (
    <>
      <Layout title={CONSTANTS.TitlePage.QUALIFICATIONS}>
        <SidebarRender />
        <Header hideGreeting={true}>
          <TitleNavigation title={'Calificaciones'} marginProps={'0'} hideXl={true} hideSm={false} />
        </Header>
        <Breadcrumb />
        <QualificationContent>
          <TitleNavigation title="Calificaciones" hideSm={true} />
          <QualificacionsCard />
        </QualificationContent>
        <Footerbar />
      </Layout>
    </>
  )
}

export default Qualifications
