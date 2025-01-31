import { ActionDispatch } from "react";
import { Roboto } from "next/font/google";
import { CalculatorActionType } from "../SharedTypes";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export function ParenthesisRight() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Right Parenthesis</span>
        <span className={`${roboto.className}`}>{")"}</span>
      </button>
    </>
  );
}

export function ParenthesisLeft() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Left Parenthesis</span>
        <span className={`${roboto.className}`}>{"("}</span>
      </button>
    </>
  );
}

export function PiButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "ADD_CONSTANT", payload: "pi" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Pi</span>
        <span className={`${roboto.className}`}>&pi;</span>
      </button>
    </>
  );
}

export function EulerButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "ADD_CONSTANT", payload: "e" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Euler{"'"}s number</span>
        <span className={`${roboto.className}`}>e</span>
      </button>
    </>
  );
}
