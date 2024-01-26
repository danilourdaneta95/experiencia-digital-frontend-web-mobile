import ButtonIcon from 'components/core/buttonIcon'
import Image from 'next/future/image'
import logo from 'assets/logo/logoUSSWithLabel.svg'
import Link from 'next/link'
import LayoutLogIn from 'components/customs/layout/layoutLogin'
import { useEffect, useState } from 'react'
import { useMsal } from '@azure/msal-react'
import { CONSTANTS } from 'settings/constants'
import { useRouter } from 'next/router'
import { getRefreshToken, signIn } from 'context/auth'
import { AuthenticationResult } from '@azure/msal-common'
import { getNewToken } from 'settings/apollo'

export default function Signin() {
  const css = { margin: '-20px auto' }
  const router = useRouter()
  const { instance } = useMsal()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    instance.handleRedirectPromise().then((tokenResponse: AuthenticationResult) => {
      setLoading(tokenResponse != null)
      if (tokenResponse) {
        apiLogin(tokenResponse.accessToken)
      }
    })
  }, [])

  const apiLogin = (accessToken: string) => {
    try {
      const refreshToken: string = getRefreshToken()
      getNewToken(accessToken, refreshToken).then((res) => {
        signIn(res.accessToken)
        router.push(CONSTANTS.ROUTES.DASHBOARD)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleMicrosoftLogin = async () => {
    instance.loginRedirect({
      prompt: 'select_account',
      scopes: ['User.Read'],
    })
  }

  const providersServices = (
    <>
      <div>
        <ButtonIcon
          variant={'label'}
          positionLabel={'Left'}
          labelContent={'Ingresar'}
          labelColor={'#e4e8fc'}
          alignButtonContent={'MiddleSpaceBetween'}
          ariaLabel={'Ingresar'}
          iconName={'ri-windows-line'}
          handleClick={() => handleMicrosoftLogin()}
          iconSize={'20px'}
          iconColor={'#e4e8fc'}
          buttonSizeWidth={'100%'}
          buttonSizeHeight={'3.5rem'}
          buttonBorderRadius={'2rem'}
          colorBorderFocus={''}
          buttonIconPadding={'0.875rem 2rem'}
          buttonBackground={'#001894'}
          buttonBackgroundSm={'#001894'}
          buttonBackgroundMd={'#001894'}
          buttonBackgroundXl={'#001894'}
          buttonColorHover={'#001894'}
          buttonHide={false}
          buttonHideSm={false}
          buttonHideMd={false}
          buttonHideXl={false}
          buttonMaxSizeWidth="344px"
          labelColorHover={'#e4e8fc'}
        ></ButtonIcon>
      </div>

      <Link href={CONSTANTS.ROUTES.CHANGE_PASSWORD} passHref={true}>
        <a target="_blank">
          <ButtonIcon
            variant={'label'}
            positionLabel={'Left'}
            labelContent={'Cambiar clave'}
            labelColor={'#001894'}
            alignButtonContent={'MiddleSpaceBetween'}
            ariaLabel={'Cambiar clave'}
            iconName={'ri-key-2-line'}
            iconSize={'20px'}
            iconColor={'#001894'}
            buttonSizeWidth={'100%'}
            buttonSizeHeight={'56px'}
            buttonBorderRadius={'2rem'}
            colorBorderFocus={'#0024db'}
            buttonIconPadding={'14px 32px'}
            buttonBackground={'#E4E8FC'}
            buttonBackgroundSm={'#e4e8fc'}
            buttonBackgroundMd={'##e4e8fc'}
            buttonBackgroundXl={'##e4e8fc'}
            buttonHide={false}
            buttonHideSm={false}
            buttonHideMd={false}
            buttonHideXl={false}
            buttonMaxSizeWidth="344px"
            buttonShadow={'0px 0px 80px 0.1px #00000026'}
          ></ButtonIcon>
        </a>
      </Link>
    </>
  )

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <LayoutLogIn title="SignIn">
            <div className="SignIn">
              <header className="header">
                <Image src={logo} style={css} alt="Universidad San Sebastian Logo" priority />
              </header>
              <main className="main">
                <h1 className="title">
                  Te damos la bienvenida a <br />
                  Mi USS
                </h1>
                <div className="containerButton">{providersServices}</div>
                <div className="iconContainer">
                  <i className="ri-question-line icon"></i>
                  <h2 className="bottomText">¿Necesitas soporte?</h2>
                </div>
              </main>
              <footer className="socialMediaContainer">
                <div>
                  <h3 className="socialMediaText">Siguenos en nuestras redes sociales</h3>
                  <div className="iconContainer icon">
                    <Link href={CONSTANTS.ROUTES.FACEBOOK}>
                      <a target="_blank">
                        <i className="ri-facebook-circle-fill"></i>
                      </a>
                    </Link>
                    <Link href={CONSTANTS.ROUTES.TWITTER}>
                      <a target="_blank">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </Link>
                    <Link href={CONSTANTS.ROUTES.YOUTUBE}>
                      <a target="_blank">
                        <i className="ri-youtube-fill"></i>
                      </a>
                    </Link>
                    <Link href={CONSTANTS.ROUTES.INSTAGRAM}>
                      <a target="_blank">
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </LayoutLogIn>

          <style jsx>{`
            .container {
              padding: 5px;
              align-items: center;
              text-align: center;
              height: 95%;
              min-height: 550px;
              align-items: start;
            }
            .SignIn {
              display: grid;
              grid-template-rows: min-content min-content auto;
            }
            .header {
              display: grid;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 0;
              height: min-content;
            }

            .main {
              height: min-content;
              display: grid;
            }
            .containerButton {
              display: grid;
              gap: 16px;
            }
            .iconContainer {
              display: flex;
              gap: 11px;
              text-align: center;
              margin-top: 16px;
              justify-content: center;
              align-items: center;
            }
            .icon {
              font-size: 16px;
              color: #475467;
              cursor: pointer;
            }
            .title {
              text-align: center;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 600;
              font-size: 25px;
              color: #283341;
              align-self: stretch;
              margin-bottom: 32px;
            }
            .bottomText {
              font-family: 'Montserrat';
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
              color: #475467;
            }
            .socialMediaText {
              font-family: 'Karla';
              font-size: 14px;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: 0em;
              text-align: center;
              margin-bottom: 25px;
              height: fit-content;
            }
            .socialMediaContainer {
              display: grid;
              align-items: end;
            }

            @media (max-width: 744px) {
              .title {
                display: inline;
              }
            }
          `}</style>
        </>
      )}
    </>
  )
}
