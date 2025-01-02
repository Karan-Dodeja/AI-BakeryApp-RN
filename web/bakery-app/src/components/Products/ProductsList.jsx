import React, { useState, useEffect } from "react";
import axios from "../../api/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    glutenFree: false,
    vegan: false,
    seasonal: false,
  });

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products", { params: filters });
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({ ...filters, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div>
      <h2>Bakery Products</h2>
      <input
        name="search"
        placeholder="Search"
        value={filters.search}
        onChange={handleFilterChange}
      />
      <label>
        Gluten-Free
        <input
          type="checkbox"
          name="glutenFree"
          checked={filters.glutenFree}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Vegan
        <input
          type="checkbox"
          name="vegan"
          checked={filters.vegan}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Seasonal
        <input
          type="checkbox"
          name="seasonal"
          checked={filters.seasonal}
          onChange={handleFilterChange}
        />
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
      />
      <select
        multiple
        value={filters.categories}
        onChange={(e) =>
          setFilters({
            ...filters,
            categories: Array.from(e.target.selectedOptions, (o) => o.value),
          })
        }
      >
        <option value="cakes">Cakes</option>
        <option value="bread">Bread</option>
        <option value="pastries">Pastries</option>
      </select>
      <button onClick={fetchProducts}>Apply Filters</button>
      <button onClick={() => setMode("edit")}>Edit Product</button>
      <button onClick={() => deleteProduct(product._id)}>Delete</button>
      <input type="number" placeholder="Inventory Count" />
      <ul>
        {products.map((product) => (
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

export default ProductList;
