<script setup lang="ts">
const cart = useCart();
const router = useRouter(); // Import the router for navigation

const handleAddToCart = () => {
  cart.increaseQuantity();
  router.push("/cart"); // Navigate to the cart page
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
        Welcome to the Store
      </h1>
      <p class="text-lg text-gray-500">
        Discover our amazing products crafted just for you.
      </p>
    </div>

    <!-- Product Card Container -->
    <div
      class="max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <!-- Optional: Image Placeholder (You can replace this with an actual <img> tag) -->
      <div class="h-48 bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400 font-medium">Image Placeholder</span>
      </div>

      <!-- Card Content -->
      <div class="p-6 flex flex-col gap-4">
        <!-- Title and Price Row -->
        <div class="flex justify-between items-start gap-4">
          <h2 class="text-xl font-bold text-gray-900 leading-tight">
            {{ PRODUCT.NAME }}
          </h2>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700"
          >
            ${{ PRODUCT.PRICE }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed mb-2">
          {{ PRODUCT.DESCRIPTION }}
        </p>

        <!-- Action Button -->
        <button
          @click="handleAddToCart"
          class="mt-auto w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 flex justify-center items-center gap-2"
        >
          <!-- Cart Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
