import React, { useEffect, useState } from 'react';
import axios from '../../api/api';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const { data } = await axios.get('/users/wishlist');
      setWishlist(data);
    };
    fetchWishlist();
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((product) => (
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

export default Wishlist;
