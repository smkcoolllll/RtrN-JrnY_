"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const products = [];
const getProducts = (req, res) => {
    res.json(products);
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    const newProduct = req.body;
    const validKeys = [
        "name",
        "category",
        "price",
        "description",
        "expiryDate",
        "generatedDate",
    ];
    const isValid = Object.keys(newProduct).every((key) => validKeys.includes(key));
    if (!isValid) {
        return res.status(400).json({ error: "Invalid keys in request body" });
    }
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
};
exports.createProduct = createProduct;
const filterValidKeys = (obj, validKeys) => {
    const result = {};
    Object.keys(obj).forEach((key) => {
        if (validKeys.includes(key)) {
            result[key] = obj[key];
        }
    });
    return result;
};
const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
        const validKeys = [
            "name",
            "category",
            "price",
            "description",
            "expiryDate",
            "generatedDate",
        ];
        const updatedProductData = filterValidKeys(req.body, validKeys);
        const updatedProduct = Object.assign(Object.assign({}, products[productIndex]), updatedProductData);
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1)[0];
        res.json({
            message: `Product with id ${productId} deleted successfully.`,
            deletedProduct,
        });
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
};
exports.deleteProduct = deleteProduct;
