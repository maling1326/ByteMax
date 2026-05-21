<script setup lang="ts">
const { cart, addToCart, removeFromCart, clearCart } = useCart();
const { checkout } = useTransaction();

const totalAmount = ref(0);

onMounted(() => {
  if (cart.value.length > 0) {
    // sum total amount
    totalAmount.value = cart.value
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.totalPrice, 0);
  }
});

watch(
  () => cart.value,
  (newCart) => {
    totalAmount.value = newCart
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.totalPrice, 0);
  },
  { deep: true },
);
</script>

<template>
  <div>
    <h1>Your Cart</h1>
    <button @click="clearCart">Remove Cart</button>
    <p v-if="cart.length === 0">Your cart is empty.</p>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item gap-4">
        <h2 class="pt-4">#{{ item.id }} - {{ item.details.name }}</h2>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Total Price: ${{ item.totalPrice.toFixed(2) }}</p>
        <button @click="item.selected = !item.selected">
          Toggle Select<span v-if="item.selected">
            - <span class="font-bold">SELECTED</span></span
          >
        </button>
        <br />
        <button @click="addToCart(item.details)">Add one item</button>
        <br />
        <button @click="removeFromCart(item.id)">Remove one item</button>
        <br />
        <button @click="removeFromCart(item.id, true)">Remove all items</button>
      </div>
      <br />
      <br />
      <br />
      <button @click="checkout()">Checkout {{ totalAmount }}</button>
    </div>
  </div>
</template>
