<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div class="" v-for="prod in products" :key="prod.id">
        <ProductCard :product="prod" />
      </div>
    </div>
  </div>
</template>

<script setup>
const API_URL = "https://fakestoreapi.com/products";

const { data: products } = await useFetch(API_URL);
useHead({
  title: 'Next Dojo | Mech',
  meta: [
    {name:'description', content: 'Nuxt 3 Mech for the products'}
  ]
})
</script>

<style scoped></style>
