import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
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

    expect(screen.getByTestId("period")).toBeInTheDocument();
  });

  it("Test for operator buttons visibility", () => {
    render(<BasicCalculator />);

    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("sub")).toBeInTheDocument();
    expect(screen.getByTestId("mul")).toBeInTheDocument();
    expect(screen.getByTestId("div")).toBeInTheDocument();
    expect(screen.getByTestId("plus-minus")).toBeInTheDocument();
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
  it("Test basic addition operation", () => {
    render(<BasicCalculator />);

    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("2"));
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "3"
    );
  });
});
