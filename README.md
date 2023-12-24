### REST API Documentation

#### Running the Server Locally

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Start the Server:**

   ```bash
   npm start
   ```

   The server will run at `http://localhost:3000` by default.

#### Endpoints

- **GET /api/products**

  - **Description:** Retrieve a list of all products.
  - **Request:**
    ```bash
    curl http://localhost:3000/api/products
    ```
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "Product 1",
        "category": "Electronics",
        "price": 49.99,
        "description": "Description 1",
        "expiryDate": "2023-12-31T23:59:59.999Z",
        "generatedDate": "2023-01-01T00:00:00.000Z"
      }
      // ... other products
    ]
    ```

- **GET /api/products/:id**

  - **Description:** Retrieve information about a specific product.
  - **Request:**
    ```bash
    curl http://localhost:3000/api/products/1
    ```
  - **Response (Success):**
    ```json
    {
      "id": 1,
      "name": "Product 1",
      "category": "Electronics",
      "price": 49.99,
      "description": "Description 1",
      "expiryDate": "2023-12-31T23:59:59.999Z",
      "generatedDate": "2023-01-01T00:00:00.000Z"
    }
    ```
  - **Response (Error 404 - Product Not Found):**
    ```json
    {
      "error": "Product not found"
    }
    ```

- **POST /api/products**

  - **Description:** Create a new product.
  - **Request:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
      "name": "New Product",
      "category": "Clothing",
      "price": 29.99,
      "description": "A new clothing item",
      "expiryDate": "2024-12-31T23:59:59.999Z",
      "generatedDate": "2024-01-01T00:00:00.000Z"
    }' http://localhost:3000/api/products
    ```
  - **Response (Success):**
    ```json
    {
      "id": 4,
      "name": "New Product",
      "category": "Clothing",
      "price": 29.99,
      "description": "A new clothing item",
      "expiryDate": "2024-12-31T23:59:59.999Z",
      "generatedDate": "2024-01-01T00:00:00.000Z"
    }
    ```
  - **Response (Error 400 - Bad Request):**
    ```json
    {
      "error": "Invalid request. Please check your input."
    }
    ```

- **PUT /api/products/:id**

  - **Description:** Update information about a specific product.
  - **Request:**
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{
      "price": 39.99
    }' http://localhost:3000/api/products/4
    ```
  - **Response (Success):**
    ```json
    {
      "id": 4,
      "name": "New Product",
      "category": "Clothing",
      "price": 39.99,
      "description": "A new clothing item",
      "expiryDate": "2024-12-31T23:59:59.999Z",
      "generatedDate": "2024-01-01T00:00:00.000Z"
    }
    ```
  - **Response (Error 404 - Product Not Found):**
    ```json
    {
      "error": "Product not found"
    }
    ```

- **DELETE /api/products/:id**
  - **Description:** Delete a specific product.
  - **Request:**
    ```bash
    curl -X DELETE http://localhost:3000/api/products/4
    ```
  - **Response (Success):**
    ```json
    {
      "id": 4,
      "name": "New Product",
      "category": "Clothing",
      "price": 39.99,
      "description": "A new clothing item",
      "expiryDate": "2024-12-31T23:59:59.999Z",
      "generatedDate": "2024-01-01T00:00:00.000Z"
    }
    ```
  - **Response (Error 404 - Product Not Found):**
    ```json
    {
      "error": "Product not found"
    }
    ```

#### Running Unit Tests

To run unit tests, use the following command:

```bash
npx jest
```
