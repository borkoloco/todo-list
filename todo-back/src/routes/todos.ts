import { Router } from "express";
import { Todo } from "../models/todo";
import { z } from "zod";

const router = Router();

const todoSchema = z.object({
  title: z.string(),
  status: z.boolean().optional(),
});

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post("/", async (req, res) => {
  try {
    const validatedData = todoSchema.parse(req.body);
    const newTodo = new Todo(validatedData);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  try {
    const validatedData = todoSchema.partial().parse(req.body);
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      validatedData,
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
