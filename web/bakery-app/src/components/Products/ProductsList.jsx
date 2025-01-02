import React, { useState, useEffect } from "react";
import axios from "../../../api/api";
import "./ProductList.css"; // Assuming you have a CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    glutenFree: false,
    vegan: false,
    seasonal: false,
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    images: [],
    category: "",
    glutenFree: false,
    inventory: 0,
    vegan: false,
    seasonal: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const applyFilters = (products) => {
    return products.filter(product => {
      return (
        (filters.search === "" || product.name.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.category === "" || product.category === filters.category) &&
        (!filters.glutenFree || product.glutenFree) &&
        (!filters.vegan || product.vegan) &&
        (!filters.seasonal || product.seasonal)
      );
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const handleNewProductChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/products", newProduct);
      setProducts([...products, data]);
      setNewProduct({
        name: "",
        description: "",
        price: 0,
        images: [],
        category: "",
        glutenFree: false,
        inventory: 0,
        vegan: false,
        seasonal: false,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const filteredProducts = applyFilters(products);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search products"
        value={filters.search}
        onChange={handleSearchChange}
      />
      <select value={filters.category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="bread">Bread</option>
        <option value="cake">Cake</option>
        <option value="pastry">Pastry</option>
        {/* Add more categories as needed */}
      </select>
      <label>
        <input
          type="checkbox"
          name="glutenFree"
          checked={filters.glutenFree}
          onChange={handleCheckboxChange}
        />
        Gluten Free
      </label>
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={filters.vegan}
          onChange={handleCheckboxChange}
        />
        Vegan
      </label>
      <label>
        <input
          type="checkbox"
          name="seasonal"
          checked={filters.seasonal}
          onChange={handleCheckboxChange}
        />
        Seasonal
      </label>
      <button onClick={() => setIsModalOpen(true)}>Add New Product</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleNewProductChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Product Description"
                value={newProduct.description}
                onChange={handleNewProductChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={newProduct.price}
                onChange={handleNewProductChange}
                required
              />
              <input
                type="text"
                name="images"
                placeholder="Product Images (comma separated URLs)"
                value={newProduct.images.join(", ")}
                onChange={(e) => setNewProduct({ ...newProduct, images: e.target.value.split(", ") })}
              />
              <select name="category" value={newProduct.category} onChange={handleNewProductChange} required>
                <option value="">Select Category</option>
                <option value="bread">Bread</option>
                <option value="cake">Cake</option>
                <option value="pastry">Pastry</option>
                {/* Add more categories as needed */}
              </select>
              <label>
                <input
                  type="checkbox"
                  name="glutenFree"
                  checked={newProduct.glutenFree}
                  onChange={handleNewProductChange}
                />
                Gluten Free
              </label>
              <input
                type="number"
                name="inventory"
                placeholder="Inventory"
                value={newProduct.inventory}
                onChange={handleNewProductChange}
              />
              <label>
                <input
                  type="checkbox"
                  name="vegan"
                  checked={newProduct.vegan}
                  onChange={handleNewProductChange}
                />
                Vegan
              </label>
              <label>
                <input
                  type="checkbox"
                  name="seasonal"
                  checked={newProduct.seasonal}
                  onChange={handleNewProductChange}
                />
                Seasonal
              </label>
              <button type="submit">Add Product</button>
            </form>
          </div>
        </div>
      )}
      {/* Render filtered products here */}
      {filteredProducts.map(product => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Gluten Free: {product.glutenFree ? "Yes" : "No"}</p>
          <p>Vegan: {product.vegan ? "Yes" : "No"}</p>
          <p>Seasonal: {product.seasonal ? "Yes" : "No"}</p>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.name} width="100" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;