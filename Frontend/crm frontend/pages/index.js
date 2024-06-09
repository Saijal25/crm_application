// pages/index.js
import { useState, useEffect } from 'react';
import CustomerForm from '../components/CustomerForm';
import CustomerList from '../components/CustomerList';
import { fetchCustomers } from '../lib/fetchCustomers';

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function loadCustomers() {
      const data = await fetchCustomers();
      setCustomers(data);
    }
    loadCustomers();
  }, []);

  return (
    <div>
      <CustomerForm onCustomerAdded={() => window.location.reload()} />
      <CustomerList />
    </div>
  );
}


