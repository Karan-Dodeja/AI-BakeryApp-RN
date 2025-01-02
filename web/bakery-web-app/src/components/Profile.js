import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [preferences, setPreferences] = useState({ glutenFree: false, vegan: false, allergens: [] });

  const handlePreferenceChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const updatePreferences = async () => {
    await axios.put('/api/users/preferences', { userId: user._id, preferences });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Gluten-Free</label>
        <input type="checkbox" name="glutenFree" checked={preferences.glutenFree} onChange={handlePreferenceChange} />
        <label>Vegan</label>
        <input type="checkbox" name="vegan" checked={preferences.vegan} onChange={handlePreferenceChange} />
        <label>Allergens</label>
        <input type="text" name="allergens" value={preferences.allergens} onChange={handlePreferenceChange} />
      </div>
      <button onClick={updatePreferences}>Save Preferences</button>
    </div>
  );
};

export default Profile;
