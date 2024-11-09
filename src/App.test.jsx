import { render, screen } from "@testing-library/react";
import React from "react";
// import useRefresh from "./hooks/useRefresh";
import App from "./App";
import ChildComponent from "./components/ChildComponent";

test("First test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Information about Countries/i);
  expect(linkElement).toBeInTheDocument();
});

// Test Child Components
test("Test child components:", () => {
  render(<ChildComponent />);
  const linkElement = screen.getByText(
    /This is child components passing as props:/i
  );
  expect(linkElement).toBeInTheDocument();
});
