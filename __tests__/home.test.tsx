import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Home from "../app/page";

test("renders homepage title", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Welcome"
  );
});
