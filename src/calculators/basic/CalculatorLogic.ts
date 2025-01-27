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

    case "ADD_PERIOD":
      if (state.currentOperand === ".") return state;
      if (state.currentOperand.includes(".")) return state;
      return { ...state, currentOperand: `${state.currentOperand}.` };

    case "CHOOSE_OPERATION":
      if (state.currentOperand === "0" && state.previousOperand === "0")
        return state;

      if (state.previousOperand === "0") {
        return {
          ...state,
          operation: `${action.payload}`,
          previousOperand: state.currentOperand,
          currentOperand: "0",
        };
      }

      if (state.currentOperand === "0") {
        return { ...state, operation: `${action.payload}` };
      }

      return {
        ...state,
        previousOperand: eval(
          `${state.previousOperand}${state.operation}${state.currentOperand}`
        ),
        currentOperand: "0",
        operation: action.payload,
      };

    case "DELETE":
      if (state.currentOperand === "0") return state;
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: "0" };
      return {
        ...state,
        currentOperand: `${state.currentOperand.slice(0, -1)}`,
      };

    case "CLEAR":
      if (state.currentOperand === "0") return state;
      return { ...state, currentOperand: "0" };

    default:
      return state;
  }
}
