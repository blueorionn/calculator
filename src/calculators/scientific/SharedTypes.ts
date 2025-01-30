export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
  memory: string;
  angle: "deg" | "rad";
}

export type CalculatorActionType =
  | { type: "ADD_DIGIT"; payload: number }
  | { type: "ADD_PERIOD" }
  | { type: "CHOOSE_OPERATION"; payload: "+" | "-" | "*" | "/" }
  | { type: "MODULO" }
  | { type: "CLEAR_ALL" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
