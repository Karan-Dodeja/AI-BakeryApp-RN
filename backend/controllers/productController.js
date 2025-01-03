import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, category, dietaryNeeds } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    dietaryNeeds,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

export const updateProduct = async (req, res) => {
  const { name, description, price, category, dietaryNeeds } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.dietaryNeeds = dietaryNeeds;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const searchProducts = async (req, res) => {
  const { name, category, glutenFree, vegan, seasonal } = req.query;
  let query = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (category) query.category = category;
  if (glutenFree) query.glutenFree = glutenFree === 'true';
  if (vegan) query.vegan = vegan === 'true';
  if (seasonal) query.seasonal = seasonal === 'true';

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};