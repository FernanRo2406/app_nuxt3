export const useAuth0Cookie = () => useCookie('auth0_token')

export const auth0Fetch = (url: string, fetchOptions: any = {}) => {
  const config = useRuntimeConfig()
  return $fetch(url, {
    baseURL: `https://${config.AUTH0_DOMAIN}`,
    ...fetchOptions,
    headers: {
      Authorization: `Bearer ${useAuth0Cookie().value}`,
      ...fetchOptions.headers,
    },
  })
}

export const useAuth0User = async () => {
  const cookie = useAuth0Cookie()
  const user = useState('auth0_user')
  if (cookie.value && !user.value) {
    user.value = await auth0Fetch('/userinfo')
  }
  return user
}

export const auth0Login = () => {
  const config = useRuntimeConfig()
  if (process.client) {
    window.location.replace(
      `https://${config.AUTH0_DOMAIN}/authorize?audience=https://${config.AUTH0_DOMAIN}/api/v2/&response_type=code&client_id=${config.AUTH0_CLIENT_ID}&redirect_uri=${config.AUTH0_CALLBACK_URL}&scope=${config.AUTH0_SCOPE}`
    )
  }
}

export const auth0Logout = async () => {
  const config = useRuntimeConfig()
  useAuth0Cookie().value = null
  useState('auth0_user').value = null
  window.location.replace(
    `https://${config.AUTH0_DOMAIN}/v2/logout?client_id=${config.AUTH0_CLIENT_ID}&returnTo=${config.APP_BASE_URL}`
  )
}
