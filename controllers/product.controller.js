const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found yet!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add a product
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
};

// // Add a new product
// app.post("/api/products", async (req, res) => {
//     try {
//       const product = await Product.create(req.body);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
//   // Get all product
//   app.get("/api/products", async (req, res) => {
//     try {
//       const product = await Product.find({});
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
//   // Get a specific product based on id
//   app.get("/api/product/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = await Product.findById(id);
//       res.status(200).json({ message: "Done", product });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
//   // Update a product based on id
//   app.put("/api/product/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = await Product.findByIdAndUpdate(id, req.body);

//       if (!product) {
//         return res.status(404).json({ message: "Product not found yet" });
//       }

//       const updateProduct = await Product.findById(id);

//       res.status(200).json(updateProduct);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//   // Delete a product
//   app.delete("/api/product/:id", async (req, res) => {
//     try {
//       const { id } = req.params;

//       const product = await Product.findByIdAndDelete(id, req.body);

//       if (!product) {
//         return res.status(404).json({ message: "Product not found yet!" });
//       }
//       res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
