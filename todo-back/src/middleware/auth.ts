import { Request, Response, NextFunction } from "express";

const authMiddleware = (_: Request, __: Response, next: NextFunction) => {
  next();
};

export default authMiddleware;
