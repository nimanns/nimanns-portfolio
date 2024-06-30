import { useCallback, useRef, useState } from "react";
export function useThrottle(callback: (...args: any) => any, limit: number) {
  const waiting = useRef(false);

  return useCallback(
    (...args: any) => {
      if (!waiting.current) {
        callback(...args);
        waiting.current = true;
        setTimeout(() => {
          waiting.current = false;
        }, limit);
      }
    },
    [callback, limit]
  );
}
