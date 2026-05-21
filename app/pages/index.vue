<script setup lang="ts">
const { addToCart } = useCart();
</script>

<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple home page for the Vue.js application.</p>

    <div>
      <div v-for="item in products" :key="item.id" class="product-card gap-4">
        <h2 class="pt-4">#{{ item.id }} - {{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p>Price: ${{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
