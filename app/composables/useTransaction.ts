interface Transaction {
  id: number;
  date: string;
  totalAmount: number;
  items: Cart[];
}

export function useTransaction() {
  const { cart, removeFromCart } = useCart();

  const transactions = useState<Transaction[]>("transactions", () => []);

  onMounted(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      transactions.value = JSON.parse(storedTransactions);
    }
  });

  function checkout() {
    const items = cart.value.filter((item) => item.selected);
    if (items.length <= 0) {
      console.error("No selected items to checkout.");
      return;
    }

    transactions.value.push({
      id: Date.now(),
      date: new Date().toISOString(),
      totalAmount: items.reduce((sum, item) => sum + item.totalPrice, 0),
      items: items,
    });
    // try {
    // } catch (err: any) {
    //   console.error("Failed to process transaction:", err.message || err);
    //   return;
    // }

    // Clear the selected items from the cart
    items.forEach((item) => {
      removeFromCart(item.id, true); // Remove all quantities of the item
    });
  }

  watch(
    transactions,
    (newTransactions) => {
      localStorage.setItem("transactions", JSON.stringify(newTransactions));
    },
    { deep: true },
  );

  return {
    transactions,
    checkout,
  };
}
