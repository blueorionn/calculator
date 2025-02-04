import { ActionDispatch } from "react";
import { Space_Grotesk, Roboto } from "next/font/google";
import { CalculatorActionType, CalculatorState } from "../SharedTypes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

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

export function ReverseTrigButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Reverse Trig Function</span>
        <span className={`${roboto.className}`}>2nd</span>
      </button>
    </>
  );
}

export function SinButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Sin and Cosecant Button</span>
        <span className={`${roboto.className}`}>Sin</span>
      </button>
    </>
  );
}

export function CosButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Cosine and Secant Button</span>
        <span className={`${roboto.className}`}>Cos</span>
      </button>
    </>
  );
}

export function TanButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Tangent and Cotangent Button</span>
        <span className={`${roboto.className}`}>Tan</span>
      </button>
    </>
  );
}
