import { PRODUCT } from "~/utils/product";

export function useCart() {
  const quantity = useState<number>("quantity", () => 0);
  const totalPrice = computed(() => quantity.value * PRODUCT.PRICE);
  const formattedTotalPrice = computed(() => totalPrice.value.toFixed(2));

  onMounted(() => {
    const storedQuantity = localStorage.getItem("quantity");
    if (storedQuantity) quantity.value = parseInt(storedQuantity);
  });

  function increaseQuantity() {
    quantity.value += 1;
  }

  function decreaseQuantity() {
    if (quantity.value > 0) quantity.value -= 1;
  }

  function clearCart() {
    quantity.value = 0;
  }

  watch(quantity, (newQuantity) => {
    if (newQuantity <= 0) localStorage.removeItem("quantity");
    else localStorage.setItem("quantity", newQuantity.toString());
  });

  return {
    // Variables
    quantity,
    totalPrice,
    formattedTotalPrice,

    // Functions
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
}
