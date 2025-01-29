import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function AdditionButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className} text-xl`}>+</span>
      </button>
    </>
  );
}

export function SubtractionButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className} text-xl`}>-</span>
      </button>
    </>
  );
}

export function MultiplicationButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className} text-xl`}>&times;</span>
      </button>
    </>
  );
}

export function DivisionButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
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
        <span className={`${spaceGrotesk.className}`}>
          <sup>1</sup>&frasl;<sub>x</sub>
        </span>
      </button>
    </>
  );
}

export function ModuloButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className}`}>%</span>
      </button>
    </>
  );
}

export function SquareButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className}`}>
          x<sup>2</sup>
        </span>
      </button>
    </>
  );
}

export function CubeButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
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
        <span className={`${spaceGrotesk.className}`}>&radic;x</span>
      </button>
    </>
  );
}
