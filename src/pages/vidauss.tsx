import Layout from 'layout'
import DashboardContent from 'layout/content/dashboard'
import Footerbar from 'layout/content/footerBar'
import TitleNavigation from 'components/core/titleNavigation'
import Header from 'layout/content/header'
import { VidaUssMobile } from 'components/customs/cards/vidaUss/vidaUssMobile'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function VidaUSS() {
  const [isHideOnBreakPoint, setIsHideOnBreakPoint] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth })

  const hideOnSm = false
  const hideOnMd = false
  const hideOnXl = true

  const router = useRouter()

  useEffect(() => {
    if (hideOnSm && windowSize.width < 744) {
      setIsHideOnBreakPoint(true)
    } else if (hideOnMd && windowSize.width >= 744 && windowSize.width < 1280) {
      setIsHideOnBreakPoint(true)
    } else if (hideOnXl && windowSize.width >= 1280) {
      setIsHideOnBreakPoint(true)
    } else setIsHideOnBreakPoint(false)

    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth })
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize.width])

  if (isHideOnBreakPoint == true) {
    router.push('/dashboard')
    return <></>
  } else {
    return (
      <>
        <Layout title="Vida USS">
          <Header hideGreeting={true} backgroundColor="#f5f7f9">
            <TitleNavigation title={'Vida USS'} marginProps={'0'} hideXl={true} hideSm={false} />
          </Header>
          <DashboardContent marginTop="0px" labelSection="Vida USS">
            <VidaUssMobile />
          </DashboardContent>
          <Footerbar />
        </Layout>
      </>
    )
  }
}
