export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
}

export type CalculatorActionType =
  | { type: "ADD_DIGIT"; payload: number }
  | { type: "ADD_PERIOD" }
  | { type: "CHOOSE_OPERATION"; payload: string }
  | { type: "PLUS_MINUS" }
  | { type: "CLEAR" }
  | { type: "CLEAR_ALL" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
