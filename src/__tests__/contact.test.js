import { render, screen } from "@testing-library/react";
import About from "../components/About";
import "@testing-library/jest-dom";

test("check if about is renderer or not", () => {
  render(<About />);

  const heading = screen.getByRole("heading");

  //assertion
  //import "@testing-library/jest-dom"; to know the type of assertions
  expect(heading).toBeInTheDocument();
});
