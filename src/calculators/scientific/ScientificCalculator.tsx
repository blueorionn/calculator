import { Space_Grotesk, Roboto } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const lato = Roboto({ subsets: ["latin"], weight: "400" });

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
                <button type="button" className={`${lato.className}`}>
                  &pi;
                </button>
                <button type="button" className={`${lato.className}`}>
                  e
                </button>
                <button type="button">&radic;x</button>
                <button type="button">
                  x<sup>2</sup>
                </button>
                <button type="button">
                  x<sup>3</sup>
                </button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button" className={`${lato.className}`}>
                  {"("}
                </button>
                <button type="button" className={`${lato.className}`}>
                  {")"}
                </button>
                <button type="button">AC</button>
                <button type="button">B</button>
                <button type="button">&divide;</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">1/x</button>
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">&times;</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">n!</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">-</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">ln</button>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">+</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <button type="button">lg</button>
                <button type="button">%</button>
                <button type="button">0</button>
                <button type="button">.</button>
                <button type="button">=</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
