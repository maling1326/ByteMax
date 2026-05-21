<script setup lang="ts">
const { transactions } = useTransaction();
</script>

<template>
  <div>
    <h1>Transaction Page</h1>
    <p v-if="transactions.length <= 0">Your transaction is empty</p>
    <div v-else>
      <ul>
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          class="pt-4"
        >
          <p>Date: {{ transaction.date }}</p>
          <p>Total Amount: ${{ transaction.totalAmount.toFixed(2) }}</p>
          <ul>
            <li v-for="item in transaction.items" :key="item.id">
              {{ item.details.name }} - ${{ item.totalPrice.toFixed(2) }} x
              {{ item.quantity }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
