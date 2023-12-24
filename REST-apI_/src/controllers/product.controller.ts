import { Request, Response } from "express";
import { Product } from "../models/product.model";

const products: Product[] = [];

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct: Product = req.body;

  const validKeys = [
    "name",
    "category",
    "price",
    "description",
    "expiryDate",
    "generatedDate",
  ];
  const isValid = Object.keys(newProduct).every((key) =>
    validKeys.includes(key)
  );

  if (!isValid) {
    return res.status(400).json({ error: "Invalid keys in request body" });
  }

  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const filterValidKeys = (obj: any, validKeys: string[]): any => {
  const result: any = {};
  Object.keys(obj).forEach((key) => {
    if (validKeys.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
};

export const updateProduct = (req: Request, res: Response) => {
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

    const updatedProduct: Product = {
      ...products[productIndex],
      ...updatedProductData,
    };

    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    const deletedProduct = products.splice(productIndex, 1)[0];
    res.json({
      message: `Product with id ${productId} deleted successfully.`,
      deletedProduct,
    });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};
