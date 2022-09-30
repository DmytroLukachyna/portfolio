import { useEffect, useRef } from 'react';

type Handler<T> = (event: T) => void;

export default function useEventListener<TypeEvent extends Event>(
  eventName: string,
  handler: Handler<TypeEvent>,
  element = window,
) {
  const savedHandler = useRef<Handler<TypeEvent>>(() => {});
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const eventListener = (event: Event) => savedHandler.current(event as TypeEvent);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
