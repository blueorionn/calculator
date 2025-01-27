import { CalculatorState } from "@/calculators/basic/SharedTypes";

export function evaluateOutput(state: CalculatorState) {
  return eval(
    `${state.previousOperand}${state.operation}${state.currentOperand}`
  );
}
