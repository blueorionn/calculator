import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function ClearButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">clear</span>
        <span className={`${spaceGrotesk.className}`}>C</span>
      </button>
    </>
  );
}

export function ClearAllButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">clear all</span>
        <span className={`${spaceGrotesk.className}`}>AC</span>
      </button>
    </>
  );
}

export function BackSpaceButton() {}

export function EvaluateButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className} text-xl`}>=</span>
      </button>
    </>
  );
}
