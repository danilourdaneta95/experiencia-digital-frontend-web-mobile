import type { NextPage } from 'next'
// import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CONSTANTS } from 'settings/constants'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push(CONSTANTS.ROUTES.LOGIN)
  }, [])

  return <></>
}

export default Home
