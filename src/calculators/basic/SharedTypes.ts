export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
}

export type CalculatorAction =
  | { type: "ADD_DIGIT"; payload: string }
  | { type: "CHOOSE_OPERATION"; payload: string }
  | { type: "CLEAR" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
