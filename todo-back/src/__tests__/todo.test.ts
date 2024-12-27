import request from "supertest";
import { app } from "../index";

describe("POST /api/todos", () => {
  it("should create a new todo with valid data", async () => {
    const response = await request(app).post("/api/todos").send({
      title: "New Task",
      status: false,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("title", "New Task");
    expect(response.body).toHaveProperty("status", false);
    expect(response.body).toHaveProperty("_id");
  });

  it("should return validation error for invalid data", async () => {
    const response = await request(app).post("/api/todos").send({
      title: "A",
    });

    expect(response.status).toBe(400);
    expect(response.body.errors[0].message).toBe("Title is too short");
  });
});
