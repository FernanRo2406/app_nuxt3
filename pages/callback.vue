<script>
export default {
  layout: false,
}
</script>
<script setup>
// import { getToken } from '~~/composables/auth'

// const route = useRoute()
// const codeAuth0 = route.query.code
// const router = useRouter()
// const auth0_token = useCookie('auth0_token', { path: '/' })

// if (!codeAuth0) {
//   router.push('/')
// }
// const token = await getToken(codeAuth0)
// if (!token) {
//   router.push('/')
// }
// auth0_token.value = token.access_token
// router.push('/')
</script>
<template>
  <h1>LOGUEANDO</h1>
  <NuxtLink to="/"> a home </NuxtLink>
</template>
