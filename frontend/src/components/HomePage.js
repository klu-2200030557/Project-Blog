import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const username = location.state?.username || 'Guest';

  return (
    <div>
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default HomePage;
