import { CalculatorState, CalculatorActionType } from "./SharedTypes";

export const INITIAL_STATE: CalculatorState = {
  currentOperand: "0",
  previousOperand: "0",
  operation: null,
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

    default:
      return state;
  }
}
