import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 3 list items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});

test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});

test("sum should be 6", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toEqual("6");
});
