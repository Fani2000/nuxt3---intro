<template>
    <div class="card text-center flex flex-col">
        <img :src="product.image" class="thumb flex-1" :alt="product.title">
        <p class="text-gray-500 m-4 font-bold truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" >
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps({ product: Object });
</script>

