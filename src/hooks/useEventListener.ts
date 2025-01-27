import { useEffect, useRef } from "react";

type EventTargetType<T> = T extends Window
  ? Window & typeof globalThis
  : T extends Document
    ? Document
    : T extends HTMLElement
      ? HTMLElement
      : T extends MediaQueryList
        ? MediaQueryList
        : EventTarget;

type EventMap<T> = T extends Window
  ? WindowEventMap
  : T extends Document
    ? DocumentEventMap
    : T extends HTMLElement
      ? HTMLElementEventMap
      : T extends MediaQueryList
        ? MediaQueryListEventMap
        : GlobalEventHandlersEventMap;

export function useEventListener<
  T extends EventTarget,
  K extends keyof EventMap<T>,
>(
  eventName: K,
  handler: (event: EventMap<T>[K]) => void,
  target?: T | null,
  options?: boolean | AddEventListenerOptions
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element: EventTargetType<T> = (target ??
      window) as EventTargetType<T>;

    if (!element?.addEventListener) return;

    const listener = (event: Event) => {
      savedHandler.current(event as EventMap<T>[K]);
    };

    element.addEventListener(eventName as string, listener, options);

    return () => {
      element.removeEventListener(eventName as string, listener, options);
    };
  }, [eventName, target, options]);
}
