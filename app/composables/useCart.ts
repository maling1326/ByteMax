import { PRODUCT } from "~/utils/product";

interface Cart {
  name: string;
  size: string;
  price: number;
  color: string;
  quantity: number;
}

export function useCart() {
  const cart = useState<Cart[]>("cart", () => []);
  const totalPrice = computed(() => {
    return cart.value.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  });

  onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) cart.value = JSON.parse(storedCart);
  });

  function addItemToCart(
    name: string,
    size: string,
    price: number,
    color: string,
  ) {
    const existingItem = cart.value.find(
      (item) =>
        item.name === name && item.size === size && item.color === color,
    );
    if (existingItem) existingItem.quantity += 1;
    else
      cart.value.push({
        name,
        size,
        price,
        color,
        quantity: 1,
      });
  }

  function removeItemFromCart(item: Cart, all: boolean = false) {
    const existingItem = cart.value.find(
      (it) =>
        it.name === item.name &&
        it.size === item.size &&
        it.color === item.color,
    );
    if (!existingItem) return;

    if (!all && existingItem.quantity > 1) existingItem.quantity -= 1;
    else
      cart.value = cart.value.filter(
        (it) =>
          !(
            it.name === item.name &&
            it.size === item.size &&
            it.color === item.color
          ),
      );
  }

  function editItemFromCart(
    item: Cart,
    toSize?: string,
    toPrice?: number,
    toColor?: string,
  ) {
    const itemIndex = cart.value.findIndex(
      (it) =>
        it.name === item.name &&
        it.size === item.size &&
        it.color === item.color,
    );
    if (itemIndex === -1) return;

    const existingItem = cart.value[itemIndex];
    if (!existingItem) return;

    const newSize = toSize ?? existingItem.size;
    const newPrice = toPrice ?? existingItem.price;
    const newColor = toColor ?? existingItem.color;

    const duplicateItem = cart.value.find(
      (it, index) =>
        itemIndex !== index &&
        it.name === existingItem.name &&
        it.size === newSize &&
        it.color === newColor,
    );
    if (duplicateItem) {
      duplicateItem.quantity += existingItem.quantity;
      cart.value.splice(itemIndex, 1);
    } else {
      existingItem.size = newSize;
      existingItem.price = newPrice;
      existingItem.color = newColor;
    }
  }

  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true },
  );

  return {
    // Variables
    cart,
    totalPrice,

    // Functions
    addItemToCart,
    removeItemFromCart,
    editItemFromCart,
  };
}
