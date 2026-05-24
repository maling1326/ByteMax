<template>
  <div class="max-w-3xl mx-auto p-6 font-sans text-gray-800">
    <div class="mb-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Products</h2>
      <div class="flex flex-wrap gap-3">
        <button
          @click="addItemToCart('ByteMax Nanoblades', '512 MB', 39, 'Obsidian')"
          class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add 512MB Obsidian ($39)
        </button>
        <button
          @click="addItemToCart('ByteMax Nanoblades', '1 TB', 69, 'Cream')"
          class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add 1TB Cream ($69)
        </button>
      </div>
    </div>

    <div class="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 class="text-2xl font-bold mb-6 text-gray-900">Your Cart</h2>

      <div
        v-if="cart.length === 0"
        class="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300"
      >
        <p class="text-gray-500">Your cart is currently empty.</p>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <div class="mb-4 sm:mb-0">
            <h3 class="font-bold text-lg text-gray-900">{{ item.name }}</h3>
            <p class="text-sm text-gray-600">
              Variant: {{ item.size }} | {{ item.color }}
            </p>
            <p class="text-sm font-medium text-gray-900 mt-1">
              Price: ${{ item.price }}
            </p>
          </div>

          <div class="flex flex-col items-end gap-3">
            <div
              class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
              <button
                @click="removeItemFromCart(item)"
                class="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
              >
                &minus;
              </button>
              <span
                class="px-4 py-1 text-sm font-semibold border-x border-gray-300"
              >
                {{ item.quantity }}
              </span>
              <button
                @click="
                  addItemToCart(item.name, item.size, item.price, item.color)
                "
                class="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
              >
                &plus;
              </button>
            </div>

            <div class="flex gap-2 text-xs">
              <button
                @click="editItemFromCart(item, '2 TB', 129, undefined)"
                class="px-2 py-1 text-blue-600 hover:text-blue-800 hover:underline"
              >
                Upgrade to 2 TB ($129)
              </button>
              <button
                @click="removeItemFromCart(item, true)"
                class="px-2 py-1 text-red-500 hover:text-red-700 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <div
          class="pt-6 mt-6 border-t border-gray-200 flex justify-between items-center"
        >
          <span class="text-gray-600 font-medium">Subtotal</span>
          <h2 class="text-2xl font-black text-gray-900">${{ totalPrice }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/useCart";

const {
  cart,
  totalPrice,
  addItemToCart,
  removeItemFromCart,
  editItemFromCart,
} = useCart();
</script>
