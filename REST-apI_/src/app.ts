import express from "express";
import bodyParser from "body-parser";
import * as productsController from "./controllers/product.controller";
import { productMiddleware } from "./middleware/product.middleware";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(productMiddleware);

// Endpoints
app.get("/api/products", productsController.getProducts);
app.get("/api/products/:id", productsController.getProductById);
app.post("/api/products", productsController.createProduct);
app.put("/api/products/:id", productsController.updateProduct);
app.delete("/api/products/:id", productsController.deleteProduct);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
