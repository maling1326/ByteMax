interface Transaction {
  id: number;
  date: string;
  time: string;
  quantity: number;
  totalPrice: number;
}

export function useTransaction() {
  const transactions = useState<Transaction[]>("transactions", () => []);
  const cart = useCart();

  onMounted(() => {
    const storedtransactions = localStorage.getItem("transactions");
    if (storedtransactions) transactions.value = JSON.parse(storedtransactions);
  });

  function checkOut() {
    if (cart.quantity.value <= 0) {
      console.error("No items to checkout.");
      return;
    }

    transactions.value.push({
      id: Date.now(),
      date: new Date().toISOString(),
      time: new Date().toLocaleTimeString(),
      quantity: cart.quantity.value,
      totalPrice: cart.totalPrice.value,
    });
    cart.clearCart();
  }

  function clearTransactions() {
    transactions.value = [];
  }

  watch(
    transactions,
    (newTransactions) => {
      if (newTransactions.length === 0) localStorage.removeItem("transactions");
      else
        localStorage.setItem("transactions", JSON.stringify(newTransactions));
    },
    { deep: true },
  );

  return {
    // Variables
    transactions,

    // Functions
    checkOut,
    clearTransactions,
  };
}
