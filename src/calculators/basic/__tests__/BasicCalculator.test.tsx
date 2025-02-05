import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicCalculator from "../BasicCalculator";

describe("Test for component visibility in document", () => {
  it("Test for digit buttons visibility", () => {
    render(<BasicCalculator />);
  });
});

describe("Test Operations", () => {
  it("Test addition operation", () => {
    render(<BasicCalculator />);

    expect(screen.getByLabelText("1")).toBeInTheDocument();
  });
});
