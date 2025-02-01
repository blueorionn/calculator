import { ActionDispatch } from "react";
import { Space_Grotesk } from "next/font/google";
import { CalculatorActionType, CalculatorState } from "../SharedTypes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function AngleButton({
  state,
  dispatch,
}: {
  state: CalculatorState;
  dispatch: ActionDispatch<[action: CalculatorActionType]>;
}) {
  return (
    <>
      <div className="relative col-span-2 grid grid-cols-2 rounded-sm py-4 bg-gray-900">
        <span className="sr-only">Toogle Radian and Degree</span>
        <span
          className={`${state.angle === "deg" ? "translate-x-[100%]" : ""} absolute inset-0 block w-[50%] h-full rounded-sm border border-blue-500 transition-all duration-150`}
        ></span>
        <button
          type="button"
          onClick={() => dispatch({ type: "SET_ANGLE", payload: "rad" })}
        >
          <span className={`${spaceGrotesk.className}`}>RAD</span>
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "SET_ANGLE", payload: "deg" })}
        >
          <span className={`${spaceGrotesk.className}`}>DEG</span>
        </button>
      </div>
    </>
  );
}
