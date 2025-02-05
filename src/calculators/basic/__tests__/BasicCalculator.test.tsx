import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicCalculator from "../BasicCalculator";

it("CheckboxWithLabel changes the text after click", () => {
  render(<BasicCalculator />);

  expect(screen.getByText("=")).toBeInTheDocument();
});
