import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
  it("renders correctly and contains required fields", () => {
    render(<TodoForm />);

    const input = screen.getByPlaceholderText("New task...");
    const button = screen.getByText("Add");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("handles form submission when title is provided", async () => {
    render(<TodoForm />);

    const input = screen.getByPlaceholderText("New task...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Task" } });

    fireEvent.click(button);

    expect((input as HTMLInputElement).value).toBe("");
  });

  it("does not submit when the title is empty", async () => {
    render(<TodoForm />);

    const input = screen.getByPlaceholderText("New task...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    expect((input as HTMLInputElement).value).toBe("");
  });
});
