import request from "supertest";
import app from "../src/app";

describe("GET /api/products", () => {
  it("responds with JSON containing a list of products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe("GET /api/products/:id", () => {
  it("responds with JSON containing a specific product", async () => {
    const response = await request(app).get("/api/products/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      name: "Product 1",
      description: "Description 1",
    });
  });

  it("responds with 404 if product not found", async () => {
    const response = await request(app).get("/api/products/999");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Product not found" });
  });
});

describe("POST /api/products", () => {
  it("creates a new product and responds with the created product", async () => {
    const newProductData = {
      name: "New Product",
      category: "Electronics",
      price: 49.99,
      description: "A description for the new product.",
      expiryDate: "2023-12-31T23:59:59.999Z",
      generatedDate: "2023-01-01T00:00:00.000Z",
    };

    const response = await request(app)
      .post("/api/products")
      .send(newProductData);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newProductData);
  });
});

describe("PUT /api/products/:id", () => {
  it("updates an existing product and responds with the updated product", async () => {
    const updatedProductData = {
      name: "Updated Product",
      description: "Updated Description",
    };

    const response = await request(app)
      .put("/api/products/1")
      .send(updatedProductData);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ id: 1, ...updatedProductData });
  });

  it("responds with 404 if product to update is not found", async () => {
    const response = await request(app)
      .put("/api/products/999")
      .send({ name: "Updated Product" });
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Product not found" });
  });
});
