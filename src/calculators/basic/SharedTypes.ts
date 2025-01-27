export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
}

export type CalculatorAction =
  | { type: "ADD_DIGIT"; payload: string }
  | { type: "ADD_PERIOD" }
  | { type: "CHOOSE_OPERATION"; payload: string }
  | { type: "CLEAR" }
  | { type: "CLEAR_ALL" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
