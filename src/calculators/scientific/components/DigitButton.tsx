import { ActionDispatch } from "react";
import { Space_Grotesk } from "next/font/google";
import { useCalculatorKeyboard } from "../hooks/useCalculatorKeyboard";
import { CalculatorActionType } from "../SharedTypes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function DigitButton({
  digit,
  dispatch,
}: {
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard(`${digit}`, dispatch, {
    type: "ADD_DIGIT",
    payload: digit,
  });

  return (
    <>
      <button
        type="button"
        aria-label={`${digit}`}
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: digit })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className}`}>{digit}</span>
      </button>
    </>
  );
}

export function PeriodButton({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  useCalculatorKeyboard(".", dispatch, { type: "ADD_PERIOD" });

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "ADD_PERIOD" })}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">period</span>
        <span className={`${spaceGrotesk.className}`}>.</span>
      </button>
    </>
  );
}
