<template>
  <div class="container">
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const API_URL = "https://fakestoreapi.com/products/";
const { data: product } = await useFetch(API_URL + id, { key: id });

useHead({
  title: "Next Dojo | " + product.value.title,
  meta: [{ name: "description", content: "Nuxt 3 Mech for the products" }],
});

const { data: product_details } = await useFetch("/api/products/" + id);
console.log(product_details.value);
</script>

<style scoped></style>
