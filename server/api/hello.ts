// export default (req, res) => 'Hello World'
import { useCookie, setCookie, useQuery } from 'h3'

export default (req, res) => {
  const { algo } = useQuery(req)
  setCookie(res, 'lol', algo.toString(), { path: '/' })
  // Read counter cookie
  let counter: any = useCookie(req, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(res, 'counter', (++counter).toString(), { path: '/' })

  // Send JSON response
  return { counter }
}
