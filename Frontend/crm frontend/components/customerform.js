import { useState } from 'react';

export default function CustomerForm({ onCustomerAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      setName('');
      setEmail('');
      onCustomerAdded();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="number" name="totalSpends" placeholder="Total Spends" onChange={handleChange} />
      <input type="number" name="numberOfVisits" placeholder="Number of Visits" onChange={handleChange} />
      <input type="date" name="lastVisit" placeholder="Last Visit" onChange={handleChange} />
      <button type="submit">Add Customer</button>
    </form>
  );
};


