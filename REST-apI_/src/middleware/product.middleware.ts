import { Request, Response, NextFunction } from "express";

export const productMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
