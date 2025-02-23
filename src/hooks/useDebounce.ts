import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value by delaying its update
 * Useful for search inputs or other rapidly changing values
 * 
 * @param value The value to debounce
 * @param delay The delay in milliseconds
 * @returns The debounced value
 * 
 */
export function useDebounce<T>(value: T, delay: number): T {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timer to update the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    // This ensures we don't have multiple timers running
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
}