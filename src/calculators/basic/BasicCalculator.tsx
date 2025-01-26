import { Space_Grotesk } from "next/font/google";
import { DigitButton } from "@/components/buttons/DigitButton";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function BasicCalculator() {
  return (
    <>
      <main className="min-h-[100vh] w-full py-8 lg:py-12 xl:py-16 px-4">
        <section className="max-w-screen-sm w-full mx-auto">
          <section className="h-full w-full rounded-sm">
            <div className="bg-gray-900">
              <div className="w-full p-2.5">
                <span
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-base font-semibold mx-auto`}
                ></span>
              </div>
              <div className="w-full p-4">
                <span
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-lg font-bold`}
                >
                  0
                </span>
              </div>
            </div>
            <div
              className={`${spaceGrotesk.className} grid grid-rows-5 gap-2.5 mt-4`}
            >
              <div aria-label="row_five" className="grid grid-cols-4 gap-2.5">
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>AC</span>
                </button>
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>C</span>
                </button>
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>B</span>
                </button>
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>D</span>
                </button>
              </div>
              <div aria-label="row_four" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={7} />
                <DigitButton digit={8} />
                <DigitButton digit={9} />
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>x</span>
                </button>
              </div>
              <div aria-label="row_three" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={4} />
                <DigitButton digit={5} />
                <DigitButton digit={6} />
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>-</span>
                </button>
              </div>
              <div aria-label="row_two" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={1} />
                <DigitButton digit={2} />
                <DigitButton digit={3} />
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>+</span>
                </button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-4 gap-2.5">
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>+-</span>
                </button>
                <DigitButton digit={0} />
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>.</span>
                </button>
                <button
                  type="button"
                  className="bg-gray-800 flex justify-center items-center rounded-sm py-2.5"
                >
                  <span>=</span>
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
