import { CalculatorState, CalculatorActionType } from "./SharedTypes";
import {
  evaluateOperationOutput,
  isCurrentOperandValidNumber,
  factOperation,
  evaluateTrigOperation,
} from "./lib/CalculatorFunction";

export const INITIAL_STATE: CalculatorState = {
  currentOperand: "0",
  previousOperand: "0",
  operation: null,
  memory: "0",
  angle: "deg",
  isTrigInverse: false,
  isError: false,
};

export function reducer(
  state: CalculatorState,
  action: CalculatorActionType
): CalculatorState {
  switch (action.type) {
    case "ADD_DIGIT":
      // If currentOperand is 0 replace it with payload
      if (state.currentOperand === "0")
        return { ...state, currentOperand: `${action.payload}` };

      // If currentOperand isn't 0 append it with payload
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload}`,
      };

    case "ADD_PERIOD":
      // If currentOperand has period don't include another.
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

      return evaluateOperationOutput(state, action.payload);

    case "INSTANT_OPERATION":
      if (state.currentOperand === "0") return state;
      if (!isCurrentOperandValidNumber(state))
        return { ...state, isError: true };

      if (action.operation === "square") {
        return {
          ...state,
          currentOperand: `${eval(`(${state.currentOperand})**2`)}`,
        };
      }
      if (action.operation === "cube") {
        return {
          ...state,
          currentOperand: `${eval(`(${state.currentOperand})**3`)}`,
        };
      }
      if (action.operation === "root") {
        return {
          ...state,
          currentOperand: `${eval(`(${state.currentOperand})**(1/2)`)}`,
        };
      }
      if (action.operation === "factorial") {
        // factorial output
        const factOutput = factOperation(state);

        // if null
        if (factOutput === null) return { ...state, isError: true };
        if (typeof factOutput === "number")
          return { ...state, currentOperand: `${factOutput}` };
      }
      if (action.operation === "inverse") {
        // converting to number
        const currentOperandNumber = parseFloat(state.currentOperand);
        if (currentOperandNumber === 0) return state;
        if (currentOperandNumber < 0) return { ...state, isError: true };

        // inverse operation
        return {
          ...state,
          currentOperand: `${eval(`1/(${currentOperandNumber})`)}`,
        };
      }
      if (action.operation === "ln") {
        // converting to number
        const currentOperandNumber = parseFloat(state.currentOperand);
        if (currentOperandNumber === 0) return state;
        if (currentOperandNumber < 0) return { ...state, isError: true };

        return {
          ...state,
          currentOperand: `${eval(`${Math.log(currentOperandNumber)}`)}`,
        };
      }
      if (action.operation === "log") {
        // converting to number
        const currentOperandNumber = parseFloat(state.currentOperand);
        if (currentOperandNumber === 0) return state;
        if (currentOperandNumber < 0) return { ...state, isError: true };

        return {
          ...state,
          currentOperand: `${eval(`${Math.log10(currentOperandNumber)}`)}`,
        };
      }

      return state;

    case "ADD_CONSTANT":
      if (action.payload === "e" && state.currentOperand === "0") {
        return { ...state, currentOperand: `${Math.E}` };
      }
      if (action.payload === "pi" && state.currentOperand === "0") {
        return { ...state, currentOperand: `${Math.PI}` };
      }

      return state;

    case "SET_ANGLE":
      return { ...state, angle: action.payload };

    case "SET_TRIG_INVERSE":
      return { ...state, isTrigInverse: action.payload };

    case "TRIG_OPERATION":
      if (state.currentOperand === "0") return state;
      if (!isCurrentOperandValidNumber(state))
        return { ...state, isError: true };

      return evaluateTrigOperation(state, action.operation);

    case "DELETE":
      // If currentOperand is already 0 return state
      if (state.currentOperand === "0") return state;

      // If currentOperand has only last digit left make it 0.
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: "0" };
      return {
        ...state,
        currentOperand: `${state.currentOperand.slice(0, -1)}`,
      };

    case "CLEAR":
      return { ...state, currentOperand: "0" };

    case "CLEAR_ALL":
      return INITIAL_STATE;

    default:
      return state;
  }
}
