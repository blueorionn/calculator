import { CalculatorState } from "@/calculators/basic/SharedTypes";

export function evaluateOutput(state: CalculatorState) {
  try {
    return eval(
      `${state.previousOperand}${state.operation}${state.currentOperand}`
    );
  } catch (error) {
    throw error;
  }
}
