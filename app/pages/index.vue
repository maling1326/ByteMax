<script setup lang="ts">
const cart = useCart();
</script>

<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple home page for the Vue.js application.</p>

    <div>
      <div class="product-card gap-4">
        <h2 class="pt-4">{{ PRODUCT.NAME }}</h2>
        <p>{{ PRODUCT.DESCRIPTION }}</p>
        <p>Price: ${{ PRODUCT.PRICE }}</p>
        <button @click="cart.increaseQuantity">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
