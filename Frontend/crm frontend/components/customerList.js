// components/CustomerList.js
export default function CustomerList({ customers }) {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer._id}>{customer.name} - {customer.email}</li>
      ))}
    </ul>
  );
}

