import ProfileContext from 'context/profiles/profileContext'
import Head from 'next/head'
import React from 'react'
import { useContext, useEffect } from 'react'

export default function Layout({ children, title }) {
  const { getProfiles, getUserProfile } = useContext(ProfileContext)
  useEffect(() => {
    /* Obtener Perfil de Usuario. */
    getProfiles()
    getUserProfile()
  }, [])
  return (
    <>
      <Head>
        <title>Mi USS | {title}</title>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-16x16.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/apple-touch-icon.png`}
        />
        <link rel="mask-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/safari-pinned-tab.svg color="#102b41"`} />
        <meta name="msapplication-TileColor" content="#cfb47c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="Mi USS Portal"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Montserrat:ital,wght@0,400;0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="main-grid">
        <React.StrictMode>{children}</React.StrictMode>
      </main>

      <style global jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .main-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            'header'
            'dashboard'
            'footerBar';
          grid-auto-rows: auto;
        }

        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */
        /*
        @media (min-width: 744px) and (max-width: 1279px) {
        }
        */

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .main-grid {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-areas:
              'sidebar header'
              'sidebar breadcrumb'
              'sidebar dashboard';
            grid-auto-rows: auto;
          }
        }
      `}</style>
    </>
  )
}
