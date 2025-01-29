import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function EvaluateButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-800 flex justify-center items-center rounded-sm py-4 hover:bg-gray-900 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className} text-2xl text-gray-100`}>
          =
        </span>
      </button>
    </>
  );
}

export function ClearAllButton() {
  return (
    <>
      <button
        type="button"
        className="bg-sky-700 flex justify-center items-center rounded-sm py-4 hover:bg-sky-800 transition-all duration-100"
      >
        <span className="sr-only">clear all</span>
        <span className={`${spaceGrotesk.className}`}>AC</span>
      </button>
    </>
  );
}

export function DeleteButton() {
  return (
    <>
      <button
        type="button"
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className="sr-only">Delete button</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="h-4 w-4 aspect-auto fill-gray-200"
        >
          <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
        </svg>
      </button>
    </>
  );
}
