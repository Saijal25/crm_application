export async function fetchOrders() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
    const data = await response.json();
    return data;
  }