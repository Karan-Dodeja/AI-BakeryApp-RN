import React, { useState, useEffect } from 'react';
import { updatePreferences } from '../../../api/api';

const Preferences = () => {
  const [preferences, setPreferences] = useState({ glutenFree: false, vegan: false, allergens: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({ ...preferences, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePreferences(preferences);
      alert('Preferences updated successfully');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Preferences</h2>
      <label>
        Gluten-Free:
        <input
          type="checkbox"
          name="glutenFree"
          checked={preferences.glutenFree}
          onChange={handleChange}
        />
      </label>
      <label>
        Vegan:
        <input type="checkbox" name="vegan" checked={preferences.vegan} onChange={handleChange} />
      </label>
      <label>
        Allergens:
        <input name="allergens" value={preferences.allergens} onChange={handleChange} />
      </label>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default Preferences;
