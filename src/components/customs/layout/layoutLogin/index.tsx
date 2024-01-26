import Card from 'components/core/card'
import Head from 'next/head'

interface LayoutLogInProps {
  children?: any
  title?: string
}

export default function LayoutLogIn(props: LayoutLogInProps) {
  return (
    <>
      <Head>
        <title>Mi USS | {props.title}</title>
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
      <section id="LayoutLogIn" className="container">
        <Card
          id={'LogIn'}
          cardMaxWidth="35.938rem"
          cardMaxWidthSm="100%"
          cardHeight="95%"
          cardMaxHeight="750px"
          paddingSm={'0rem'}
          backgroundColor="rgba(255, 255, 255, 0.3)"
          blur="0.313rem"
          blurSm="0rem"
          boxShadow={false}
          boxShadowXl={true}
          backgroundColorSm="transparent"
        >
          {props.children}
        </Card>
      </section>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: grid;
          width: 100%;
          min-height: 100vh;
          background-image: url(${
            process.env.NEXT_PUBLIC_BASE_PATH
          }${`/assets/backgroundLogin/USS_background_9_16.svg`});
          background-repeat: no-repeat;
          background-size: cover;
          justify-items: center;
          align-items: center;
          padding: 1rem;
        }
        /**  A media query that will change the style of the component when the screen is
        ** greater that 744px and max 1279px.
        ** Md- Tablet - Version
        */

        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
          }
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            background-image: url(url(${
              process.env.NEXT_PUBLIC_BASE_PATH
            }${`/assets/backgroundLogin/USS_background_16_9.svg`});
          }
        }
      `}</style>
    </>
  )
}
