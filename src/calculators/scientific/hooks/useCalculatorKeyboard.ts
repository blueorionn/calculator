import { useEventListener } from "@/hooks/useEventListener";
import { CalculatorActionType } from "../SharedTypes";

export function useCalculatorKeyboard(
  key: string,
  dispatch: (action: CalculatorActionType) => void,
  action: CalculatorActionType
) {
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === `${key}`) {
      dispatch(action);
    }
  });
}
