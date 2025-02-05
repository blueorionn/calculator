import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicCalculator from "../BasicCalculator";

describe("Test Operations", () => {
  it("Test addition operation", () => {
    render(<BasicCalculator />);

    expect(screen.getByText("=")).toBeInTheDocument();
  });
});
