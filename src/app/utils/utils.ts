import { useCallback, useRef } from 'react';

export async function fetchData() {
  const res = await fetch("https://scrapenimanns-c8544d688b32.herokuapp.com/");
  const data = await res.json();
  return data;
}

export function useThrottle(callback, limit) {
  const waiting = useRef(false);
  
  return useCallback((...args) => {
    if (!waiting.current) {
      callback(...args);
      waiting.current = true;
      setTimeout(() => {
        waiting.current = false;
      }, limit);
    }
  }, [callback, limit]);
}
