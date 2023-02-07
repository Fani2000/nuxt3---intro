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
</script>

<style scoped></style>
