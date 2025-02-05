import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicCalculator from "../BasicCalculator";

describe("Test for component visibility in document", () => {
  it("Test for digit buttons visibility", () => {
    render(<BasicCalculator />);

    expect(screen.getByTestId("0")).toBeInTheDocument();
    expect(screen.getByTestId("1")).toBeInTheDocument();
    expect(screen.getByTestId("2")).toBeInTheDocument();
    expect(screen.getByTestId("3")).toBeInTheDocument();
    expect(screen.getByTestId("4")).toBeInTheDocument();
    expect(screen.getByTestId("5")).toBeInTheDocument();
    expect(screen.getByTestId("6")).toBeInTheDocument();
    expect(screen.getByTestId("7")).toBeInTheDocument();
    expect(screen.getByTestId("8")).toBeInTheDocument();
    expect(screen.getByTestId("9")).toBeInTheDocument();
  });

  it("Test for special buttons visibility", () => {
    render(<BasicCalculator />);

    expect(screen.getByTestId("clear")).toBeInTheDocument();
    expect(screen.getByTestId("clear-all")).toBeInTheDocument();
    expect(screen.getByTestId("delete")).toBeInTheDocument();
    expect(screen.getByTestId("eval")).toBeInTheDocument();
  });
});

describe("Test Operations", () => {
  it("Test addition operation", () => {
    render(<BasicCalculator />);
  });
});
