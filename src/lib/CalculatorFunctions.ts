import { CalculatorState } from "@/calculators/basic/SharedTypes";

export function evaluateOutput(state: CalculatorState) {
  return eval(
    `${state.previousOperand}${state.operation}${state.currentOperand}`
  );
}

export function operatePlusMinus(state: CalculatorState) {
  return eval(`${state.currentOperand}*-1`);
}
