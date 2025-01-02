import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
  const [preferences, setPreferences] = useState({
    glutenFree: false,
    vegan: false,
    allergens: '',
  });

  const handlePreferencesChange = (value, field) => {
    setPreferences({ ...preferences, [field]: value });
  };

  const updatePreferences = async () => {
    try {
      await axios.put('http://localhost:5000/api/users/preferences', {
        userId: user._id,
        preferences,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>

      <Text>Dietary Preferences</Text>
      <Text>Gluten-Free</Text>
      <Switch
        value={preferences.glutenFree}
        onValueChange={(value) => handlePreferencesChange(value, 'glutenFree')}
      />
      <Text>Vegan</Text>
      <Switch
        value={preferences.vegan}
        onValueChange={(value) => handlePreferencesChange(value, 'vegan')}
      />
      <Text>Allergens</Text>
      <TextInput
        value={preferences.allergens}
        onChangeText={(text) => handlePreferencesChange(text, 'allergens')}
      />
      <Button title="Save Preferences" onPress={updatePreferences} />
    </View>
  );
};

export default ProfileScreen;
