"use client";
import { useReducer } from "react";
import { Space_Grotesk } from "next/font/google";
import { INITIAL_STATE, reducer } from "./CalculatorLogic";
import {
  DigitButton,
  PeriodButton,
} from "@/calculators/basic/components/DigitButton";
import {
  AdditionButton,
  SubtractionButton,
  MultiplicationButton,
  DivisionButton,
  PlusMinusButton,
} from "@/calculators/basic/components/OperatorButtons";
import {
  ClearAllButton,
  ClearButton,
  EvaluateButton,
  DeleteButton,
} from "@/calculators/basic/components/FunctionButton";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function BasicCalculator() {
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
                  id="calculator-historyOperation"
                  data-testid="calculator-historyOperation"
                >
                  {state.previousOperand} {state.operation}
                </span>
              </div>
              <div className="w-full p-4">
                <span
                  className={`${spaceGrotesk.className} inline-block w-full text-right cursor-default text-lg font-bold overflow-auto`}
                  style={{ scrollbarWidth: "none" }}
                  id="calculator-currentOperand"
                  data-testid="calculator-currentOperand"
                >
                  {state.currentOperand}
                </span>
              </div>
            </div>
            <div
              className={`${spaceGrotesk.className} grid grid-rows-5 gap-2.5 mt-4`}
            >
              <div aria-label="row_five" className="grid grid-cols-4 gap-2.5">
                <ClearAllButton dispatch={dispatch} />
                <ClearButton dispatch={dispatch} />
                <DeleteButton dispatch={dispatch} />
                <DivisionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_four" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={7} dispatch={dispatch} />
                <DigitButton digit={8} dispatch={dispatch} />
                <DigitButton digit={9} dispatch={dispatch} />
                <MultiplicationButton dispatch={dispatch} />
              </div>
              <div aria-label="row_three" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={4} dispatch={dispatch} />
                <DigitButton digit={5} dispatch={dispatch} />
                <DigitButton digit={6} dispatch={dispatch} />
                <SubtractionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_two" className="grid grid-cols-4 gap-2.5">
                <DigitButton digit={1} dispatch={dispatch} />
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} />
                <AdditionButton dispatch={dispatch} />
              </div>
              <div aria-label="row_one" className="grid grid-cols-4 gap-2.5">
                <PlusMinusButton dispatch={dispatch} />
                <DigitButton digit={0} dispatch={dispatch} />
                <PeriodButton dispatch={dispatch} />
                <EvaluateButton dispatch={dispatch} />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
