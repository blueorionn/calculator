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
  ClearButton,
} from "./components/FunctionButton";
import {
  PiButton,
  EulerButton,
  ParenthesisLeft,
  ParenthesisRight,
} from "./components/ConstantButtons";
import {
  AngleButton,
  CosButton,
  ReverseTrigButton,
  SinButton,
  TanButton,
} from "./components/TrigButtons";

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
                <AngleButton state={state} dispatch={dispatch} />
                <button type="button">M+</button>
                <button type="button">M-</button>
                <button type="button">MC</button>
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ReverseTrigButton state={state} dispatch={dispatch} />
                <SinButton state={state} dispatch={dispatch} />
                <CosButton state={state} />
                <TanButton state={state} />
                <ClearAllButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <PiButton dispatch={dispatch} />
                <EulerButton dispatch={dispatch} />
                <SquareRootButton dispatch={dispatch} />
                <SquareButton dispatch={dispatch} />
                <CubeButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ParenthesisLeft />
                <ParenthesisRight />
                <ClearButton dispatch={dispatch} />
                <DeleteButton dispatch={dispatch} />
                <DivisionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <ReciprocalButton dispatch={dispatch} />
                <DigitButton digit={7} dispatch={dispatch} />
                <DigitButton digit={8} dispatch={dispatch} />
                <DigitButton digit={9} dispatch={dispatch} />
                <MultiplicationButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <FactorialButton dispatch={dispatch} />
                <DigitButton digit={4} dispatch={dispatch} />
                <DigitButton digit={5} dispatch={dispatch} />
                <DigitButton digit={6} dispatch={dispatch} />
                <SubtractionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <NaturalLogButton dispatch={dispatch} />
                <DigitButton digit={1} dispatch={dispatch} />
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} />
                <AdditionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-5 gap-2.5">
                <LogButton dispatch={dispatch} />
                <ModuloButton dispatch={dispatch} />
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
