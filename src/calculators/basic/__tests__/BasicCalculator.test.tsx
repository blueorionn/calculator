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

describe("Test Period and Zero Button", () => {
  it("Test for period button when CurrentOperand is Zero", () => {
    render(<BasicCalculator />);

    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("0"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0.0"
    );
  });

  it("Test for period button when period is present in currentOperand", () => {
    render(<BasicCalculator />);
    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("0"));
    // Clicking period button after it has already been clicked previously
    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("period"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0.0"
    );
  });

  it("Test for repeating zero button firing when no other number is present", () => {
    render(<BasicCalculator />);
    fireEvent.click(screen.getByTestId("0"));
    fireEvent.click(screen.getByTestId("0"));
    fireEvent.click(screen.getByTestId("0"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0"
    );
  });
});

describe("Test special buttons function", () => {
  it("Test Delete button", () => {
    render(<BasicCalculator />);

    // 12
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("2"));

    fireEvent.click(screen.getByTestId("delete"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "1"
    );

    fireEvent.click(screen.getByTestId("delete"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0"
    );
  });

  it("Test clear button", () => {
    render(<BasicCalculator />);

    // 10
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));

    fireEvent.click(screen.getByTestId("clear"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0"
    );

    // 10
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));
    // add
    fireEvent.click(screen.getByTestId("add"));
    // 5
    fireEvent.click(screen.getByTestId("5"));
    fireEvent.click(screen.getByTestId("clear"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0"
    );
    expect(screen.getByTestId("calculator-historyOperation").textContent).toBe(
      "10 +"
    );
  });

  it("Test clear all button", () => {
    render(<BasicCalculator />);

    // 10
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));
    // add
    fireEvent.click(screen.getByTestId("add"));
    // 5
    fireEvent.click(screen.getByTestId("5"));
    fireEvent.click(screen.getByTestId("clear-all"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "0"
    );
    expect(screen.getByTestId("calculator-historyOperation").textContent).toBe(
      "0 "
    );
  });

  it("Test Evaluate button", () => {
    render(<BasicCalculator />);

    // 10
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));
    // add
    fireEvent.click(screen.getByTestId("add"));
    // 5
    fireEvent.click(screen.getByTestId("5"));
    fireEvent.click(screen.getByTestId("eval"));

    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "15"
    );
    expect(screen.getByTestId("calculator-historyOperation").textContent).toBe(
      "0 "
    );
  });
});

describe("Test for multiple combined operation", () => {
  it("Test for all 4 arithmetic operation", () => {
    render(<BasicCalculator />);

    // 10
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));

    // *2
    fireEvent.click(screen.getByTestId("mul"));
    fireEvent.click(screen.getByTestId("2"));

    // -10.5
    fireEvent.click(screen.getByTestId("sub"));
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("0"));
    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("5"));

    // +35.7
    fireEvent.click(screen.getByTestId("add"));
    fireEvent.click(screen.getByTestId("3"));
    fireEvent.click(screen.getByTestId("5"));
    fireEvent.click(screen.getByTestId("period"));
    fireEvent.click(screen.getByTestId("7"));

    // ÷2
    fireEvent.click(screen.getByTestId("div"));
    fireEvent.click(screen.getByTestId("2"));

    // eval
    fireEvent.click(screen.getByTestId("eval"));
    expect(screen.getByTestId("calculator-currentOperand").textContent).toBe(
      "22.6"
    );
    expect(screen.getByTestId("calculator-historyOperation").textContent).toBe(
      "0 "
    );
  });
});
