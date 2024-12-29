import { createTodo } from "../api/todoApi";

describe("createTodo", () => {
  const mockTodoTitle = "New Task";
  const mockHeaders = { Authorization: "Bearer mock-token" };
  const mockResponse = {
    _id: "12345",
    title: mockTodoTitle,
    status: false,
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    } as unknown as Response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new task and return the expected response", async () => {
    const result = await createTodo(mockTodoTitle, mockHeaders);

    expect(fetch).toHaveBeenCalledWith("http://localhost:5001/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...mockHeaders },
      body: JSON.stringify({ title: mockTodoTitle }),
    });

    expect(result).toEqual(mockResponse);
  });
});
