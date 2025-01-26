import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function DigitButton({
  digit,
}: {
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}) {
  return (
    <>
      <button
        type="button"
        aria-label={`${digit}`}
        className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
      >
        <span className={`${spaceGrotesk.className}`}>{digit}</span>
      </button>
    </>
  );
}
