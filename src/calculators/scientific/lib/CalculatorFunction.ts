import { CalculatorState } from "../SharedTypes";

export function evaluateOutput(state: CalculatorState) {
  try {
    return eval(
      `${state.previousOperand}${state.operation}${state.currentOperand}`
    );
  } catch (error) {
    throw error;
  }
}

export function evaluateOperationOutput(
  state: CalculatorState,
  actionPayload: string
): CalculatorState {
  const evaluatedOutput = evaluateOutput(state);

  if (typeof evaluatedOutput === "number") {
    return {
      ...state,
      previousOperand: evaluateOutput(state),
      currentOperand: "0",
      operation: `${actionPayload}`,
      isError: false,
    };
  } else {
    return { ...state, isError: true };
  }
}

export function isCurrentOperandValidNumber(state: CalculatorState) {
  try {
    const converted = parseFloat(state.currentOperand);

    if (isNaN(converted)) return false;
    if (typeof converted === "number") return true;
  } catch (error) {
    if (error) return false;
  }

  // return false by default
  return false;
}

export function factOperation(state: CalculatorState) {
  if (!isCurrentOperandValidNumber(state)) return null;

  const currentOperand = parseFloat(state.currentOperand);

  // number shouldn't be 0
  if (currentOperand === 0) return null;

  // factorial of negative number is not possible
  if (currentOperand < 0) return null;

  function fact(num: number): number {
    // output variable
    let output = 1;

    // calculate factorial
    while (num > 1) {
      output *= num;
      num--;
    }

    return output;
  }

  return fact(currentOperand);
}

export function evaluateTrigOperation(
  state: CalculatorState,
  operation: "sin" | "cos" | "tan" | "cosec" | "sec" | "cot"
): CalculatorState {
  if (!isCurrentOperandValidNumber(state)) return { ...state, isError: true };

  /**
   * Convert Degree to Radian
   * @param degree
   * @returns {number}
   */
  function convertDegreeToRadian(degree: number) {
    return degree * (Math.PI / 180);
  }

  /**
   * Convert Radian to Degree
   * @param radian
   * @returns {number}
   */
  function convertRadianToDegree(radian: number) {
    return (radian * 180) / Math.PI;
  }

  let angle: number = 0;

  if (state.angle === "deg") {
    angle = convertDegreeToRadian(parseFloat(state.currentOperand));
  } else if (state.angle === "rad") {
    angle = parseFloat(state.currentOperand);
  }

  // Doing trig operation
  if (operation === "sin") {
    return { ...state, currentOperand: `${Math.sin(angle)}` };
  } else if (operation === "cos") {
    return { ...state, currentOperand: `${Math.cos(angle)}` };
  } else if (operation === "tan") {
    return { ...state, currentOperand: `${Math.tan(angle)}` };
  }

  // Doing inverse trig operation
  if (operation === "cosec") {
    if (state.angle === "deg") {
      return {
        ...state,
        currentOperand: `${convertRadianToDegree(Math.asin(angle)) || ""}`,
      };
    }
  }

  return state;
}
