import Image from 'next/future/image'
import logo from 'assets/logo/Universidad_San_Sebastian_Logo.svg'
import Link from 'next/link'
import { CONSTANTS } from 'settings/constants'

export default function USSFullLogo() {
  const css = { width: 'auto', height: '3.75rem', padding: '0.25rem 0rem' }
  return (
    <>
      <Link href={CONSTANTS.ROUTES.DASHBOARD}>
        <a aria-label="Logo Universidad San Sebastian" className="container">
          <picture>
            <Image src={logo} style={css} alt="Universidad San Sebastian Logo" priority={true} />
          </picture>
        </a>
      </Link>
      <style jsx>{`
        .container {
          display: none;
        }
        @media (min-width: 1280px) {
          .container {
            display: grid;
            width: min-content;
          }
          /* A CSS selector that is used to style the outline of an element when it is focused  and the user has navigated to
        it using the keyboard.*/
          a:focus-visible {
            outline: var(--focus) auto 1px;
          }
        }
      `}</style>
    </>
  )
}
