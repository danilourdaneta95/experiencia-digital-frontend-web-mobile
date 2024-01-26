/*eslint-disable */
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { signOut } from 'context/auth'
import { gqlUser } from 'gql'
import { ILoginAzure, ILoginWithAzure } from 'gql/User/mutations'
import { useRouter } from 'next/router'
import { CONSTANTS } from './constants'

let apolloClient: ApolloClient<NormalizedCacheObject>
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
})

let splitLink: ApolloLink | RetryLink

const authLink = setContext((_, params) => {
  const { headers } = params
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem(CONSTANTS.STORAGE.AUTH_TOKEN)}`,
    },
  }
})

export const getNewToken = (accessToken: String, refreshToken: String) => {
  return new Promise<ILoginWithAzure>(async (resolve, reject) => {
    try {
      const response = await apolloClient.mutate<ILoginAzure>({
        mutation: gqlUser.mutations.AZURE_LOGIN,
        variables: {
          azureLogInInput: {
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
        },
      })
      const { loginWithAzure } = response.data
      if (loginWithAzure) {
        resolve(loginWithAzure)
      } else {
        reject()
      }
    } catch (error) {
      reject(error)
    }
  })
}

const onErrorLink = onError(({ graphQLErrors, operation, forward, networkError }) => {
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions?.code) {
        case CONSTANTS.GraphQLErrors.UNAUTHENTICATED:
          Logout()
          break
        case CONSTANTS.GraphQLErrors.INTERNAL_SERVER_ERROR:
          console.error(err)
          break
        case CONSTANTS.GraphQLErrors.GRAPHQL_VALIDATION_FAILED:
          break
        case CONSTANTS.GraphQLErrors.GRAPHQL_PARSE_FAILED:
          console.error(err.message)
          break
        case CONSTANTS.GraphQLErrors.BAD_USER_INPUT:
        // * this is controlled by the component itself
        case CONSTANTS.GraphQLErrors.FORBIDDEN:
          console.error(err.message)
          break
        default:
          // * forbidden, will be handled here
          Logout
          break
      }
    }
  }
})

const cache = new InMemoryCache({
  addTypename: false,
})

const retryLink: RetryLink = new RetryLink({
  delay: {
    initial: 1000,
  },
  attempts: {
    max: 1000,
    retryIf: (error, _operation) => {
      if (error?.message === 'Failed to fetch') {
        if (_operation?.operationName === 'CreateRole') {
          return false
        }
      }
      return false
    },
  },
})

const authFlowLink = authLink.concat(onErrorLink)
const link = authFlowLink.concat(splitLink || httpLink)

apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([retryLink, link]),
})

export default apolloClient

function Logout() {
  signOut()
  const router = useRouter()
  router.push(CONSTANTS.ROUTES.LOGIN)
}
