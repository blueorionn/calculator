"use client";
import { useReducer } from "react";
import { Space_Grotesk } from "next/font/google";
import { reducer, INITIAL_STATE } from "./CalculatorLogic";
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
import {
  EvaluateButton,
  ClearAllButton,
  DeleteButton,
} from "./components/FunctionButton";
import {
  PiButton,
  EulerButton,
  ParenthesisLeft,
  ParenthesisRight,
} from "./components/ConstantButtons";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ScientificCalculator() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <main className="min-h-[80vh] w-full py-8 lg:py-12 xl:py-16 px-4">
        <section className="max-w-screen-sm w-full mx-auto">
          <section className="h-full w-full rounded-sm">
            <div className="bg-gray-900">
              <div className="w-full p-2.5">
                <span
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-base font-semibold mx-auto`}
                >
                  {state.previousOperand} {state.operation}
                </span>
              </div>
              <div className="w-full p-4">
                <span
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-lg font-bold overflow-auto`}
                  style={{ scrollbarWidth: "none" }}
                >
                  {state.currentOperand}
                </span>
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
                <PiButton dispatch={dispatch} />
                <EulerButton dispatch={dispatch} />
                <SquareRootButton />
                <SquareButton />
                <CubeButton />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ParenthesisLeft />
                <ParenthesisRight />
                <ClearAllButton dispatch={dispatch} />
                <DeleteButton dispatch={dispatch} />
                <DivisionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ReciprocalButton />
                <DigitButton digit={7} dispatch={dispatch} />
                <DigitButton digit={8} dispatch={dispatch} />
                <DigitButton digit={9} dispatch={dispatch} />
                <MultiplicationButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <FactorialButton />
                <DigitButton digit={4} dispatch={dispatch} />
                <DigitButton digit={5} dispatch={dispatch} />
                <DigitButton digit={6} dispatch={dispatch} />
                <SubtractionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <NaturalLogButton />
                <DigitButton digit={1} dispatch={dispatch} />
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} />
                <AdditionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <LogButton />
                <ModuloButton />
                <DigitButton digit={0} dispatch={dispatch} />
                <PeriodButton dispatch={dispatch} />
                <EvaluateButton />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
