import React from 'react'

import Layout from 'layout'
import SidebarRender from 'layout/content/sidebar'
import DashboardContent from 'layout/content/dashboard'
import Footerbar from 'layout/content/footerBar'
import { MyTariff } from 'layout/content/tariff'
import TitleNavigation from 'components/core/titleNavigation'
import Header from 'layout/content/header'
import Breadcrumb from 'components/breadcrumb'

export default function MiSemana() {
  return (
    <>
      <Layout title="Mis Aranceles">
        <SidebarRender />
        <Header hideGreeting={true} backgroundColor="#f5f7f9">
          <TitleNavigation title={'Mis Aranceles'} marginProps={'0'} hideXl={true} hideSm={false} />
        </Header>
        <Breadcrumb />
        <DashboardContent marginTop="0px" labelSection="Mis Aranceles">
          <MyTariff />
        </DashboardContent>
        <Footerbar />
      </Layout>
    </>
  )
}
