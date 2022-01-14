import { sendRedirect, setCookie } from 'h3'

export default async (req, res) => {
  // const { code } = useQuery(req)
  const codeAuth0 = req.url.substring(6)

  // console.log(req.query.code)
  if (!codeAuth0) {
    setCookie(res, 'failCode', 'no hay code', { path: '/' })
    setCookie(res, 'url', req.url, { path: '/' })
    // setCookie(res, 'burl', req.url, { path: '/' })
    return sendRedirect(res, '/')
  }
  const response: any = await $fetch(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: codeAuth0,
        grant_type: 'authorization_code',
        redirect_uri: process.env.APP_BASE_URL,
      },
    }
  )
  if (response.error) {
    setCookie(res, 'failToken', 'fallo el token', { path: '/' })
    return sendRedirect(res, '/')
  }

  setCookie(res, 'auth0_token', response.access_token, { path: '/' })

  return sendRedirect(res, '/')
}
