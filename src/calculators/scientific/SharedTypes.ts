export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
  memory: string;
  angle: "deg" | "rad";
  isTrigInverse: boolean;
  isError: boolean;
}

export type CalculatorActionType =
  | { type: "ADD_DIGIT"; payload: number }
  | { type: "ADD_PERIOD" }
  | { type: "CHOOSE_OPERATION"; payload: "+" | "-" | "*" | "/" | "%" }
  | {
      type: "INSTANT_OPERATION";
      operation:
        | "square"
        | "cube"
        | "root"
        | "inverse"
        | "factorial"
        | "ln"
        | "log";
    }
  | { type: "ADD_CONSTANT"; payload: "e" | "pi" }
  | { type: "SET_ANGLE"; payload: "rad" | "deg" }
  | { type: "SET_TRIG_INVERSE"; payload: boolean }
  | {
      type: "TRIG_OPERATION";
      operation: "sin" | "cos" | "tan" | "cosec" | "sec" | "cot";
    }
  | { type: "CLEAR" }
  | { type: "CLEAR_ALL" }
  | { type: "DELETE" }
  | { type: "EVALUATE" };
