import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DataRouter() {
  const router = useRouter()
  useEffect(() => {
    router.route
  }, [router])

  const NavigationLink = router.route

  let NavigationName
  if (NavigationLink === '/misaranceles') {
    NavigationName = 'Mis Aranceles'
  }
  if (NavigationLink === '/calificaciones') {
    NavigationName = 'Mis Calificaciones'
  }
  if (NavigationLink === '/misemana') {
    NavigationName = 'Mi Semana'
  }
  return (
    <>
      <i className="arrow ri-arrow-right-s-line"></i>
      <Link
        href={NavigationLink}
        passHref={true}
        className={NavigationName ? 'breadcrumb-active' : 'breadcrumb-not-active'}
      >
        <a target="_self">{NavigationName}</a>
      </Link>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        a,
        .breadcrumb-active {
          font-family: 'Inter';
          font-weight: 500;
          font-size: 14px;
          color: var(--gray-600);
          margin-left: 18px;
        }
        a,
        .breadcrumb-not-active {
          font-family: 'Inter';
          font-weight: 500;
          font-size: 14px;
          color: var(--gray-600);
          margin-left: 18px;
        }
        .arrow {
          color: var(--gray-300);
          font-size: 21px;
          padding: 0;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        /*
        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
          }
        }
        */

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
          }
        }
      `}</style>
    </>
  )
}
