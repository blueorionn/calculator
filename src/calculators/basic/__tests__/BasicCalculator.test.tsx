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
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("2"));
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "13"
    );
  });

  it("Test basic subtraction opreation", () => {
    render(<BasicCalculator />);

    // 123
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("2"));
    fireEvent.click(screen.getByTestId("3"));
    // subtraction
    fireEvent.click(screen.getByTestId("sub"));
    // 23
    fireEvent.click(screen.getByTestId("2"));
    fireEvent.click(screen.getByTestId("3"));
    // eval
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "100"
    );
  });

  it("Test basic multiplication operation", () => {
    render(<BasicCalculator />);

    // 12
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("2"));
    // multiplication
    fireEvent.click(screen.getByTestId("mul"));
    // 2
    fireEvent.click(screen.getByTestId("2"));
    // eval
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "24"
    );
  });

  it("Test basic division operation", () => {
    render(<BasicCalculator />);

    // 15
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("5"));
    // division
    fireEvent.click(screen.getByTestId("div"));
    // 2
    fireEvent.click(screen.getByTestId("2"));
    // eval
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "7.5"
    );
  });

  it("Test plus minus operation", () => {
    render(<BasicCalculator />);

    // 1.5
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("5"));

    fireEvent.click(screen.getByTestId("plus-minus"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "-1.5"
    );

    fireEvent.click(screen.getByTestId("plus-minus"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "1.5"
    );
  });
});
