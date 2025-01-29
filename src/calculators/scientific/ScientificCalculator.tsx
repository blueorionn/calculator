import { Space_Grotesk, Roboto } from "next/font/google";
import { DigitButton, PeriodButton } from "./components/DigitButton";
import {
  AdditionButton,
  SubtractionButton,
  MultiplicationButton,
  DivisionButton,
  FactorialButton,
  LogButton,
  NaturalLogButton,
  ReciprocalButton,
  ModuloButton,
  SquareButton,
  CubeButton,
  SquareRootButton,
} from "./components/OperatorButtons";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function ScientificCalculator() {
  return (
    <>
      <main className="min-h-[80vh] w-full py-8 lg:py-12 xl:py-16 px-4">
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
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-lg font-bold overflow-auto`}
                  style={{ scrollbarWidth: "none" }}
                ></span>
              </div>
            </div>
            <div
              className={`${spaceGrotesk.className} grid grid-rows-5 gap-2.5 mt-4`}
            >
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">RAD</button>
                <button type="button">DEG</button>
                <button type="button">M+</button>
                <button type="button">M-</button>
                <button type="button">MC</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">2nd</button>
                <button type="button">SIN</button>
                <button type="button">COS</button>
                <button type="button">TAN</button>
                <button type="button">MOD</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button" className={`${roboto.className}`}>
                  &pi;
                </button>
                <button type="button" className={`${roboto.className}`}>
                  e
                </button>
                <SquareRootButton />
                <SquareButton />
                <CubeButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button" className={`${roboto.className}`}>
                  {"("}
                </button>
                <button type="button" className={`${roboto.className}`}>
                  {")"}
                </button>
                <button type="button">AC</button>
                <button type="button">B</button>
                <DivisionButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ReciprocalButton />
                <DigitButton digit={7} />
                <DigitButton digit={8} />
                <DigitButton digit={9} />
                <MultiplicationButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <FactorialButton />
                <DigitButton digit={4} />
                <DigitButton digit={5} />
                <DigitButton digit={6} />
                <SubtractionButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <NaturalLogButton />
                <DigitButton digit={1} />
                <DigitButton digit={2} />
                <DigitButton digit={3} />
                <AdditionButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <LogButton />
                <ModuloButton />
                <DigitButton digit={0} />
                <PeriodButton />
                <button type="button">=</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
