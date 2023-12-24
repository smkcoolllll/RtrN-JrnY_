"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("GET /api/products", () => {
    it("responds with JSON containing a list of products", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/api/products");
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    }));
});
describe("GET /api/products/:id", () => {
    it("responds with JSON containing a specific product", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/api/products/1");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 1,
            name: "Product 1",
            description: "Description 1",
        });
    }));
    it("responds with 404 if product not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/api/products/999");
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Product not found" });
    }));
});
describe("POST /api/products", () => {
    it("creates a new product and responds with the created product", () => __awaiter(void 0, void 0, void 0, function* () {
        const newProductData = {
            name: "New Product",
            category: "Electronics",
            price: 49.99,
            description: "A description for the new product.",
            expiryDate: "2023-12-31T23:59:59.999Z",
            generatedDate: "2023-01-01T00:00:00.000Z",
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/products")
            .send(newProductData);
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newProductData);
    }));
});
describe("PUT /api/products/:id", () => {
    it("updates an existing product and responds with the updated product", () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedProductData = {
            name: "Updated Product",
            description: "Updated Description",
        };
        const response = yield (0, supertest_1.default)(app_1.default)
            .put("/api/products/1")
            .send(updatedProductData);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(Object.assign({ id: 1 }, updatedProductData));
    }));
    it("responds with 404 if product to update is not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .put("/api/products/999")
            .send({ name: "Updated Product" });
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Product not found" });
    }));
});
