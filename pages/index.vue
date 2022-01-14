<script setup>
const user = await useAuth0User()
const login = auth0Login
const logout = auth0Logout
const products = [{ name: 'sape' }, { name: 'xd' }]
</script>
<template>
  <div>
    <button @click="login">Log IN</button>
    <pre>{{ user }}</pre>
    <br />
    <button @click="logout">Log OUT</button>
  </div>
  <div class="min-h-screen">
    <div class="bg-white">
      <div
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 class="sr-only">Products</h2>

        <div
          class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            v-for="product in products"
            :key="product.id"
            :href="product.href"
            class="group"
          >
            <!-- v-for="(product, index) in products"
            :key="index" -->
            <ProductCard :product="product" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
