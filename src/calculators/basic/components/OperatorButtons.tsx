import { ActionDispatch } from "react";
import { Space_Grotesk } from "next/font/google";
import { useCalculatorKeyboard } from "../hooks/useCalculatorKeyboard";
import { CalculatorActionType } from "@/calculators/basic/SharedTypes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function AdditionButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard("+", dispatch, {
    type: "CHOOSE_OPERATION",
    payload: "+",
  });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "+" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Addition</span>
        <span className={`${spaceGrotesk.className} text-xl`}>+</span>
      </button>
    </>
  );
}

export function SubtractionButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard("+", dispatch, {
    type: "CHOOSE_OPERATION",
    payload: "-",
  });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "-" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Subtraction</span>
        <span className={`${spaceGrotesk.className} text-xl`}>-</span>
      </button>
    </>
  );
}

export function MultiplicationButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard("+", dispatch, {
    type: "CHOOSE_OPERATION",
    payload: "*",
  });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "*" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Multiplication</span>
        <span className={`${spaceGrotesk.className} text-xl`}>&times;</span>
      </button>
    </>
  );
}

export function DivisionButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard("+", dispatch, {
    type: "CHOOSE_OPERATION",
    payload: "/",
  });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "/" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Division</span>
        <span className={`${spaceGrotesk.className} text-xl`}>&divide;</span>
      </button>
    </>
  );
}

export function PlusMinusButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "PLUS_MINUS" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Plus Minus</span>
        <span className={`${spaceGrotesk.className} text-xl`}>&plusmn;</span>
      </button>
    </>
  );
}
