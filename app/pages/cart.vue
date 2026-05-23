<script setup lang="ts">
const cart = useCart();
const transaction = useTransaction();
</script>

<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cart.quantity.value > 0">
      <button @click="cart.clearCart()" class="mb-4">Remove Cart</button>

      <h2>Name Items: {{ PRODUCT.NAME }}</h2>
      <p>Items in cart: {{ cart.quantity.value }}</p>
      <p>Total Price: ${{ cart.formattedTotalPrice }}</p>
      <br />

      <button @click="cart.increaseQuantity()" class="btn btn-secondary">
        Add one item
      </button>
      <br />

      <button @click="cart.decreaseQuantity()" class="btn btn-secondary">
        Remove one item
      </button>
      <br />

      <button @click="transaction.checkOut()" class="btn btn-primary">
        Checkout
      </button>
      <br />
    </div>
    <div v-else>
      <h2>Your cart is empty.</h2>
      <NuxtLink to="/" class="text-blue-500 hover:underline">
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
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
</template> -->
