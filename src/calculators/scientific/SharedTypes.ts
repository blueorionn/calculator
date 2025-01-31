export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
  memory: string;
  angle: "deg" | "rad";
  isError: boolean;
}

export type CalculatorActionType =
  | { type: "ADD_DIGIT"; payload: number }
  | { type: "ADD_PERIOD" }
  | { type: "CHOOSE_OPERATION"; payload: "+" | "-" | "*" | "/" }
  | { type: "ADD_CONSTANT"; payload: "e" | "pi" }
  | { type: "MODULO" }
  | { type: "CLEAR_ALL" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
