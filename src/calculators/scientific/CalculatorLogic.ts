import { CalculatorState, CalculatorActionType } from "./SharedTypes";

export const INITIAL_STATE: CalculatorState = {
  currentOperand: "0",
  previousOperand: "0",
  operation: null,
  memory: "0",
  angle: "deg",
};

export function reducer(
  state: CalculatorState,
  action: CalculatorActionType
): CalculatorState {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.currentOperand === "0")
        return { ...state, currentOperand: `${action.payload}` };
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload}`,
      };

    case "ADD_PERIOD":
      if (state.currentOperand === ".") return state;
      if (state.currentOperand.includes(".")) return state;
      return { ...state, currentOperand: `${state.currentOperand}.` };

    default:
      return state;
  }
}
