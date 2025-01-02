import React, { useEffect, useState } from 'react';
import axios from '../../../api/api';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get('/products/recommendations');
      setRecommendations(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
