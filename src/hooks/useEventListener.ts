import { useEffect, useRef } from "react";

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends EventTarget,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
  ) => void,
  target?: T,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = target ?? window;

    if (!(element && element.addEventListener)) {
      return;
    }

    const listener: typeof handler = (event) => savedHandler.current(event);

    element.addEventListener(eventName, listener, options);

    return () => {
      element.removeEventListener(eventName, listener, options);
    };
  }, [eventName, target, options]);
}
