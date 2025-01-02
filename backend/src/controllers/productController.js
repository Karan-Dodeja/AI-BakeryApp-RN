import Product from "../models/Product.js";

// Get all products with search and filter
export const getProducts = async (req, res) => {
  const { search, category, glutenFree, vegan, seasonal } = req.query;

  try {
    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (category) query.category = category;
    if (glutenFree) query.glutenFree = glutenFree === "true";
    if (vegan) query.vegan = vegan === "true";
    if (seasonal) query.seasonal = seasonal === "true";

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new product
export const addProduct = async (req, res) => {
  const { name, description, price, category, glutenFree, vegan, seasonal } =
    req.body;
  const images = Array.isArray(req.files)
    ? req.files.map((file) => file.path)
    : [];

  try {
    const product = await Product.create({
      name,
      description,
      price,
      images,
      category,
      glutenFree,
      vegan,
      seasonal,
    });
    if (product) {
      console.log("Added in DB");
    }
    res.status(201).json(product);
    console.log(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Personalized recommendations
export const getRecommendations = async (req, res) => {
  const { preferences } = req.user;

  try {
    const query = {};

    if (preferences) {
      if (preferences.glutenFree) query.glutenFree = true;
      if (preferences.vegan) query.vegan = true;
    }

    const recommendations = await Product.find(query).limit(5);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
