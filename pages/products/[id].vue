<template>
  <div class="container">
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const API_URL = "https://fakestoreapi.com/products/";
const { data: product } = await useFetch(API_URL + id, { key: id });
</script>

<style scoped></style>
