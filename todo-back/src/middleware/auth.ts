import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Implement authentication logic here
  next();
};

export default authMiddleware;
