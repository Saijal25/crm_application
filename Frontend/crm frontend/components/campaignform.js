// components/CampaignForm.js
import { useState } from 'react';
import axios from 'axios';

const CampaignForm = () => {
  const [rules, setRules] = useState([]);
  const [message, setMessage] = useState('');

  const handleAddRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const handleRuleChange = (index, e) => {
    const { name, value } = e.target;
    const newRules = [...rules];
    newRules[index][name] = value;
    setRules(newRules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const audience = await axios.post('/api/customers/audience', { rules });
    await axios.post('/api/communications', { audience: audience.data, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Campaign</h2>
      {rules.map((rule, index) => (
        <div key={index}>
          <select name="field" onChange={(e) => handleRuleChange(index, e)}>
            <option value="totalSpends">Total Spends</option>
            <option value="numberOfVisits">Number of Visits</option>
            <option value="lastVisit">Last Visit</option>
          </select>
          <select name="operator" onChange={(e) => handleRuleChange(index, e)}>
            <option value=">"></option>
            <option value="<"></option>
            <option value="=">=</option>
          </select>
          <input name="value" type="text" onChange={(e) => handleRuleChange(index, e)} />
        </div>
      ))}
      <button type="button" onClick={handleAddRule}>Add Rule</button>
      <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send Campaign</button>
    </form>
  );
};

export default CampaignForm;

