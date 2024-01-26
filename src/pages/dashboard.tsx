import Layout from 'layout'
import Header from 'layout/content/header'
import SidebarRender from 'layout/content/sidebar'
import DashboardContent from 'layout/content/dashboard'
import GreetingsRender from 'layout/content/dashboard/sections/greetings'
import MyClasses from 'layout/content/dashboard/sections/myClasses'
import QualificationActivities from 'layout/content/dashboard/sections/qualificationAndActivities'
import LifeUssAndSelfmanagement from 'layout/content/dashboard/sections/lifeUssAndSelfmanagement'
import MyAccesses from 'layout/content/dashboard/sections/myAccesses'
import JobsUss from 'layout/content/dashboard/sections/jobsUss'
import Footerbar from 'layout/content/footerBar'
import DashboardAdvanceOnline from 'components/customs/dasboardAdvanceOnline'
import { ModalPopUp } from 'components/customs/modalPopUp'

export default function Dashboard() {
  return (
    <>
      <ModalPopUp variant={'WelcomePopUp'} initialStateModal={true} initialStateWelcomePopUp={true} />
      <Layout title="Dashboard">
        <SidebarRender />
        <Header />
        <DashboardContent labelSection={'Dashboard'}>
          <GreetingsRender />
          <DashboardAdvanceOnline />
          <MyClasses />
          <JobsUss />
          <QualificationActivities />
          <MyAccesses />
          <LifeUssAndSelfmanagement />
          {/*
          <Skeleton />
          */}
        </DashboardContent>
        <Footerbar />
      </Layout>
    </>
  )
}
