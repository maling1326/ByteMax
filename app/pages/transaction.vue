<script setup lang="ts">
const { transactions, clearTransactions } = useTransaction();
</script>

<template>
  <div>
    <h1>Transaction Page</h1>
    <button @click="clearTransactions()" class="btn btn-secondary">
      Clear Transactions
    </button>
    <br />
    <div v-if="transactions.length > 0">
      <ul>
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          class="pt-4"
        >
          <p>Date: {{ transaction.date }}</p>
          <p>Product: {{ PRODUCT.NAME }}</p>
          <p>Quantity: {{ transaction.quantity }}</p>
          <p>Total Amount: ${{ transaction.totalPrice.toFixed(2) }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your transaction is empty</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline">
        Go to Home
      </NuxtLink>
    </div>
  </div>
</template>
