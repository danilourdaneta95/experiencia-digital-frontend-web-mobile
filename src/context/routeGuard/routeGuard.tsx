import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CONSTANTS } from 'settings/constants'
import { isLogged } from 'context/auth'
export { RouteGuard }

function RouteGuard({ children }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (!isLogged() && !router.pathname.includes(CONSTANTS.ROUTES.LOGIN)) {
      setAuthorized(false)
      router.push({
        pathname: CONSTANTS.ROUTES.LOGIN,
      })
    } else {
      setAuthorized(true)
    }
  }, [router])

  return authorized && children
}
