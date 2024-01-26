import type { AppProps } from 'next/app'
import 'styles/fonts.css'
import 'styles/globals.css'
import 'styles/theme.css'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import ProfileState from 'context/profiles/profileState'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomNavigationClient } from 'services/navigationClient'
import { ApolloProvider } from '@apollo/client'
import { CONSTANTS } from 'settings/constants'
import apolloClient from 'settings/apollo'
import { RouteGuard } from 'context/routeGuard/routeGuard'
import TagManager from 'react-gtm-module'
import React from 'react'
import ModalCountState from 'context/modalCount/modalCountState'

const tagManagerArgs = {
  gtmId: CONSTANTS.SERVICES.GOOGLE_TAG_MANAGER,
}

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID_USS,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID_USS}`,
    redirectUri: process.env.NEXT_PUBLIC_BASE_PATH + CONSTANTS.ROUTES.LOGIN,
    postLogoutRedirectUri: process.env.NEXT_PUBLIC_BASE_PATH + CONSTANTS.ROUTES.LOGIN,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const msalInstance = new PublicClientApplication({ ...msalConfig })

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts()

    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0])
    }

    const navigationClient = new CustomNavigationClient(router)
    msalInstance.setNavigationClient(navigationClient)
  }, [])

  useEffect(() => {
    /* Initializing Google Tag Manager. */
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <RouteGuard>
      <MsalProvider instance={msalInstance}>
        <ApolloProvider client={apolloClient}>
          <ProfileState>
            <ModalCountState>
              <React.StrictMode>
                <Component {...pageProps} />
              </React.StrictMode>
            </ModalCountState>
          </ProfileState>
        </ApolloProvider>
      </MsalProvider>
    </RouteGuard>
  )
}
export default MyApp
