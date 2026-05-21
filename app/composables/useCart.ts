export interface Cart {
  id: number;
  quantity: number;
  totalPrice: number;
  selected: boolean;
  details: Product;
}

export function useCart() {
  const cart = useState<Cart[]>("cart", () => []);

  onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  });

  function addToCart(product: Product) {
    const existingItem = cart.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * product.price;
    } else {
      cart.value.push({
        id: product.id,
        details: product,
        totalPrice: product.price,
        quantity: 1,
        selected: true,
      });
    }
  }

  function removeFromCart(productId: number, All: boolean = false) {
    const existingItem = cart.value.find((item) => item.id === productId);
    if (existingItem && existingItem.quantity > 1 && !All) {
      existingItem.quantity -= 1;
      existingItem.totalPrice =
        existingItem.quantity * existingItem.details.price;
    } else {
      cart.value = cart.value.filter((item) => item.id !== productId);
    }
  }

  function clearCart() {
    cart.value = [];

    localStorage.removeItem("cart");
  }

  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true },
  );

  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
  };
}
