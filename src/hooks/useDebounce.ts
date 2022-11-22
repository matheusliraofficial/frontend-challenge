import { useState, useEffect } from 'react';

type debounceValue = string | number;

export const useDebounce = (value: debounceValue, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<debounceValue>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};
