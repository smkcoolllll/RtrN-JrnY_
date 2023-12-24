"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMiddleware = void 0;
const productMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
exports.productMiddleware = productMiddleware;
