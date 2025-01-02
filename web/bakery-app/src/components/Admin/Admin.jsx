import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Admin = () => {
  const { currentUser } = useAuth();
  const [showAdminFeatures, setShowAdminFeatures] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.email === 'admin@admin.com') {
      setShowAdminFeatures(true);
    }
  }, [currentUser]);

  return (
    <div>
      {showAdminFeatures && (
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Add and customize show pages:
            <ul>
              <li>Add new show page</li>
              <li>Customize show page</li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default Admin;
