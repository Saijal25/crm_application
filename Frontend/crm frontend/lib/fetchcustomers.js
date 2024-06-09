// lib/fetchCustomers.js
export async function fetchCustomers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers`);
    const data = await response.json();
    return data;
  }
