<template>
  <div
    class="flex flex-col w-330 max-w-330 min-h-screen pb-10 items-center bg-orange-88 gap-[48px]"
  >
    <div
      class="flex flex-wrap justify-between items-end content-end pb-12 pt-6 self-stretch border-b border-b-orange-10-16"
    >
      <div class="flex flex-start flex-col gap-[0.81px]">
        <p
          class="text-orange-10 font-family-font-2 text-96 italic font-400 leading-[91.2px] -tracking-1-92"
        >
          Checkout
        </p>
        <p
          class="text-orange-10-65 font-family-font-2 text-96 italic font-400 leading-[91.2px] -tracking-1-92"
        >
          nearly there.
        </p>
      </div>
      <div class="flex max-w-90 pl-5.25 content-end items-center">
        <p
          class="text-orange-10-65 text-right font-family-font-2 text-18 italic font-400 spacing-[25.2px]"
        >
          Your item will be shipped in 1 to 30 bussiness day. Free shippping.
          2-month returns.
        </p>
      </div>
    </div>
    <div class="flex flex-end justify-end items-center self-stretch">
      <div
        class="w-105 max-w-105 h-fit rounded-lg border border-orange-10-16 bg-grey-92 p-8.25"
      >
        <h2
          class="flex items-start text-orange-10 font-family-font-4 text-32 font-400 spacing-[32px] -tracking-0-3"
        >
          Order
        </h2>
        <p
          class="flex items-start pb-6 pt-1 text-orange-10-40 font-family-font-3 text-10 font-400 spacing-[16px] tracking-2-2 uppercase"
        >
          Final · {{ cart.totalQuantity }} Item(s)
        </p>
        <div
          class="grid w-full h-23.75 grid-rows-[70px] grid-cols-[100px_minmax(0,1fr)] pb-30 border-b border-b-orange-10-16"
          v-for="item in cart.cart.value"
        >
          <!-- image -->
          <div
            class="flex w-[80px] h-[80px] max-w-[80px] max-h-[80px] justify-center items-center self-stretch bg-grey-92 border border-orange-10-8 rounded-md aspect-square"
          >
            <!-- 1. Changed to w-full and max-w-[663px], removed shrink-0, rely on aspect ratio for height -->
            <div
              class="w-full max-w-[60px] aspect-[95/24] rotate-[-15deg] flex"
            >
              <div
                class="w-full h-full rounded-[4px] shadow-panel-gloss relative flex items-center"
                :class="getColorClass(item.color)"
              >
                <p
                  class="text-orange-88-42 font-family-font-4 text-[3.5px] font-400 mb-1.75 ml-1.25 tracking-tight text-shadow-embossed"
                >
                  bytemax
                </p>

                <!-- 3. Replaced ml-[597px] -mt-[15px] with absolute positioning so it doesn't break when shrinking -->
                <div
                  class="absolute right-[6px] top-[6px] w-[1.5px] h-[1.5px] rounded-full bg-yellow-200 shadow-sphere-glow"
                />
              </div>

              <!-- 4. The side tab remains mostly the same, but you may need to adjust its margins depending on how it aligns in your real UI -->
              <div
                class="mt-[2.5px] w-1 h-[9.5px] rounded-r-xs shadow-inner-bevel bg-[linear-gradient(180deg,var(--color-white-22,rgba(255,255,255,0.22))0%,var(--color-white-0,rgba(255,255,255,0.00))12%,var(--color-white-0,rgba(255,255,255,0.00))88%,var(--color-black-40,rgba(0,0,0,0.40))100%),linear-gradient(90deg,var(--color-orange-18,#3A2E23)0%,var(--color-orange-8,#1A1410)60%,var(--color-orange-80,rgba(26,20,16,0.00))100%)]"
              >
                <div
                  class="w-[1.5px] h-2 rounded-r-full shadow-inset-top bg-[linear-gradient(90deg,var(--color-orange-8,#1A1410)0%,var(--color-orange-80,rgba(26,20,16,0.00))100%)]"
                ></div>
              </div>
            </div>
          </div>

          <!-- Detail -->
          <div class="flex flex-col items-start gap-5 justify-stretch">
            <div class="flex flex-col items-start self-stretch">
              <p
                class="self-stretch text-orange-10 font-family-font-4 text-24 font-400 spacing-[24px] -tracking-0-48 -mb-2"
              >
                {{ item.name }}
              </p>
            </div>
            <div class="flex pb-[2px] items-start self-stretch">
              <p
                class="self-stretch text-orange-10-65 font-family-font-2 text-14 italic font-400 spacing-[18.9px]"
              >
                {{ item.color }} · {{ item.variant }}
              </p>
            </div>
            <div class="flex flex-col pb-[0.6px] items-start self-stretch">
              <p
                class="self-stretch font-family-font-3 text-11 font-400 spacing-[17.6px] tracking-1-98"
              >
                QTY {{ item.quantity }} · ${{ item.price * item.quantity }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between items-center w-full h-19.75 border-t border-t-orange-10-8"
        >
          <div class="flex flex-col gap-[1.39px]">
            <p
              class="text-orange-10-65 font-family-font-1 text-14 font-400 spacing-[22.4px]"
            >
              Subtotal
            </p>
            <p
              class="text-orange-10-65 font-family-font-2 text-11 italic font-400 spacing-[17.6px]"
            >
              {{ cart.totalQuantity }} item(s)
            </p>
          </div>
          <p
            class="text-orange-10 font-family-font-4 text-22 font-400 spacing-[35.2px] tracking-[-0.22px]"
          >
            ${{ cart.totalPrice.value.toFixed(2) }}
          </p>
        </div>

        <div
          class="flex justify-between items-center w-full h-18.75 border-t border-t-orange-10-8"
        >
          <div class="flex flex-col gap-[1.39px]">
            <p
              class="text-orange-10-65 font-family-font-1 text-14 font-400 spacing-[22.4px]"
            >
              Shipping
            </p>
            <p
              class="text-orange-10-65 font-family-font-2 text-11 italic font-400 spacing-[17.6px]"
            >
              Standard · 1-30 days
            </p>
          </div>
          <p
            class="text-[#B07D4F] font-family-font-2 text-18 italic font-400 spacing-[28.6px] tracking-[-0.18px]"
          >
            Free
          </p>
        </div>

        <div
          class="flex justify-between items-center w-full h-19.75 border-t border-t-orange-10-8"
        >
          <div class="flex flex-col gap-[1.39px]">
            <p
              class="text-orange-10-65 font-family-font-1 text-14 font-400 spacing-[22.4px]"
            >
              Tax
            </p>
            <p
              class="text-orange-10-65 font-family-font-2 text-11 italic font-400 spacing-[17.6px]"
            >
              Calculated at {{ (taxRate * 100).toFixed(0) }}% of all item(s)
            </p>
          </div>
          <p
            class="text-orange-10 font-family-font-4 text-22 font-400 spacing-[35.2px] tracking-[-0.22px]"
          >
            ${{ cart.taxAmount.value.toFixed(2) }}
          </p>
        </div>
        <div
          class="border-t border-t-orange-10 pt-8.25 pb-2.75 flex justify-between items-end self-end"
        >
          <p
            class="text-orange-10 font-family-font-4 text-28 font-400 spacing-[44.8px] tracking-[-0.28px]"
          >
            Total
          </p>
          <p
            class="text-orange-10 font-family-font-4 text-[48px] font-400 spacing-[64px] tracking-[-1.28px]"
          >
            ${{ cart.grandTotal.value.toFixed(2) }}
          </p>
        </div>

        <div
          class="flex px-5.5 py-4.5 flex-col items-center justify-center rounded-full border cursor-pointer bg-[#ebaf7b] border-[#fcb170] hover:bg-[#fba050] hover:border-[#fba050] transition-all group"
          @click="handlePayment"
        >
          <p
            class="text-orange-8 text-center font-family-font-1 text-13 font-400 spacing-[20.8px] tracking-[2.34px] uppercase group-hover:scale-110 transition-all"
          >
            Checkout →
          </p>
        </div>
        <div
          class="flex px-5.5 py-5 flex-col items-center justify-center rounded-full border border-orange-10 mt-2 cursor-pointer hover:bg-[#ebaf7b]/15 transition-all group"
          @click="router.push('/')"
        >
          <p
            class="text-orange-8 text-center font-family-font-1 text-13 font-400 spacing-[20.8px] tracking-[2.34px] uppercase group-hover:scale-110 transition-all"
          >
            Back To Cart
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const cart = useCart();
const transaction = useTransaction();

function getColorClass(color) {
  switch (color?.toLowerCase()) {
    case "obsidian":
      return "bg-black";
    case "cream":
      return "bg-[#FFFDD0]";
    case "brass":
      return "bg-[#b5a642]";
  }
}

function handlePayment() {
  console.log("Helo");
  if (cart.cart.value.length >= 1) {
    transaction.checkOut();
    router.push("/purchaseHistory");
  }
}
</script>
