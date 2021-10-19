import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("test", () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});

test("snapshot test", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log(tree.children);
});
