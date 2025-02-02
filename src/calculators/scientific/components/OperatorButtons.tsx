import { ActionDispatch } from "react";
import { Space_Grotesk } from "next/font/google";
import { useCalculatorKeyboard } from "../hooks/useCalculatorKeyboard";
import { CalculatorActionType } from "../SharedTypes";

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
  useCalculatorKeyboard("-", dispatch, {
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
  useCalculatorKeyboard("*", dispatch, {
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
  useCalculatorKeyboard("/", dispatch, {
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

export function FactorialButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Factorial</span>
        <span className={`${spaceGrotesk.className}`}>n!</span>
      </button>
    </>
  );
}

export function NaturalLogButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Natural Log</span>
        <span className={`${spaceGrotesk.className}`}>ln</span>
      </button>
    </>
  );
}

export function LogButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className}`}>log</span>
      </button>
    </>
  );
}

export function ReciprocalButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Reciprocal</span>
        <span className={`${spaceGrotesk.className}`}>
          <sup>1</sup>&frasl;<sub>x</sub>
        </span>
      </button>
    </>
  );
}

export function ModuloButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard("%", dispatch, {
    type: "CHOOSE_OPERATION",
    payload: "%",
  });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "%" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Modulo</span>
        <span className={`${spaceGrotesk.className}`}>%</span>
      </button>
    </>
  );
}

export function SquareButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "INSTANT_OPERATION", payload: "square" })
        }
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Square</span>
        <span className={`${spaceGrotesk.className}`}>
          x<sup>2</sup>
        </span>
      </button>
    </>
  );
}

export function CubeButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "INSTANT_OPERATION", payload: "cube" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Cube</span>
        <span className={`${spaceGrotesk.className}`}>
          x<sup>3</sup>
        </span>
      </button>
    </>
  );
}

export function SquareRootButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Square Root</span>
        <span className={`${spaceGrotesk.className}`}>&radic;x</span>
      </button>
    </>
  );
}
