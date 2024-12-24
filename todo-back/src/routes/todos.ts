import { Router, Request, Response, NextFunction } from "express";
import Todo from "../models/todo";

const router = Router();

router.get(
  "/",
  async (_: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { title, status } = req.body;

    try {
      const newTodo = new Todo({
        title,
        status: status || false,
      });

      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  async (req, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!todo) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (req, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
