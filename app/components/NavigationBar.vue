<template>
  <nav
    class="py-3 px-16 flex items-center justify-between border-b border-b-orange-10-16 bg-orange-88-80 backdrop-blur-sm w-full"
  >
    <!-- Brand Logo -->
    <div class="flex items-baseline">
      <svg
        width="118"
        height="35"
        viewBox="0 0 118 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0 0H118V35H0V0Z" fill="url(#pattern0_6_284)" />
        <defs>
          <pattern
            id="pattern0_6_284"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_6_284"
              transform="matrix(0.00125786 0 0 0.00421941 -0.137107 -1.65823)"
            />
          </pattern>
          <image
            id="image0_6_284"
            width="1024"
            height="1024"
            preserveAspectRatio="none"
            xlink:href="..."
          />
        </defs>
      </svg>
    </div>

    <!-- Primary -->
    <div class="flex items-start gap-1.5">
      <div class="flex px-4 py-2 items-start self-stretch">
        <p
          class="text-orange-10-65 font-family-font-1 text-11 font-400 leading-17-6 tracking-[2.2px] uppercase"
        >
          SPEED
        </p>
      </div>
      <div class="flex px-4 py-2 items-start self-stretch">
        <p
          class="text-orange-10-65 font-family-font-1 text-11 font-400 leading-17-6 tracking-[2.2px] uppercase"
        >
          Specs
        </p>
      </div>
      <div class="flex px-4 py-2 items-start self-stretch">
        <p
          class="text-orange-10-65 font-family-font-1 text-11 font-400 leading-17-6 tracking-[2.2px] uppercase"
        >
          Configure
        </p>
      </div>
      <div class="flex px-4 py-2 items-start self-stretch">
        <p
          class="text-orange-10-65 font-family-font-1 text-11 font-400 leading-17-6 tracking-[2.2px] uppercase"
        >
          Reviews
        </p>
      </div>
      <div class="flex px-4 py-2 items-start self-stretch">
        <p
          class="text-orange-10-65 font-family-font-1 text-11 font-400 leading-17-6 tracking-[2.2px] uppercase"
        >
          FAQ
        </p>
      </div>
    </div>

    <!-- CTA -->
    <div class="flex items-center gap-10">
      <!-- Secondary Link: Only renders if secondaryLinkText is not empty -->
      <div
        v-if="secondaryLinkText"
        class="text-orange-10-65 font-family-font-3 text-11 font-400 leading-17-6 tracking-[1.98px] uppercase group transition-all cursor-pointer"
      >
        <p
          class="group-hover:tracking-2-16 group-hover:underline transition-all"
          @click="handleSecondaryButton"
        >
          {{ secondaryLinkText }}
        </p>
      </div>

      <!-- Main Action Button -->
      <div
        class="flex px-5.5 py-3 gap-10 items-center justify-center rounded-full border border-orange-10 bg-orange-10 hover:bg-orange-18 hover:border-orange-18 group transition-all cursor-pointer"
        @click="handleButton"
      >
        <p
          class="text-orange-88 font-font-1 text-12 font-400 leading-19-2 tracking-2-16 uppercase group-hover:scale-105"
        >
          <!-- Text is now cleanly injected from the script -->
          {{ buttonText }}
        </p>
        <div
          class="flex flex-col justify-center items-center transition-all group-hover:pl-0.5"
        >
          <p
            class="text-orange-88 font-family-font-3 text-12 font-400 uppercase"
          >
            →
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const cart = useCart();
const transaction = useTransaction();

const secondaryLinkText = computed(() => {
  if (route.path === "/") return "Transaction"; // Changed from History
  if (route.path === "/cart") return "Go Home";
  if (route.path === "/payment") return "Cart"; // Changed from /transaction
  return "";
});

const buttonText = computed(() => {
  if (route.path === "/") return "CART";
  if (route.path === "/cart") return "PAYMENT";
  if (route.path === "/payment") return "CHECKOUT"; // Changed from /transaction
  return "GO HOME";
});

function handleSecondaryButton() {
  if (route.path === "/")
    router.push("/transaction"); // Changed from /history
  else if (route.path === "/cart") router.push("/");
  else if (route.path === "/payment")
    router.push("/cart"); // Changed from /transaction
  else router.push("/");
}

function handleButton() {
  if (route.path === "/") {
    if (cart.cart.value.length === 0) {
      cart.addItemToCart();
    }
    router.push("/cart");
  } else if (route.path === "/cart") {
    router.push("/payment"); // Changed from /transaction
  } else if (route.path === "/payment") {
    // Changed from /transaction
    if (cart.cart.value.length >= 1) {
      transaction.checkOut();
      router.push("/transaction"); // Changed from /history
    }
  } else {
    router.push("/");
  }
}
</script>
