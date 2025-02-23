import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

describe('useDebounce Hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('debounces value updates', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    // Update the value
    rerender({ value: 'updated', delay: 500 });
    
    // Value should not change immediately
    expect(result.current).toBe('initial');
    
    // Fast forward time
    act(() => {
      jest.advanceTimersByTime(500);
    });
    
    // Now the value should be updated
    expect(result.current).toBe('updated');
  });

  it('cancels previous timer on new updates', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    // First update
    rerender({ value: 'updated1', delay: 500 });
    
    // Second update before delay
    act(() => {
      jest.advanceTimersByTime(200);
    });
    rerender({ value: 'updated2', delay: 500 });
    
    // Check after first delay
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(result.current).toBe('initial');
    
    // Check after second delay
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current).toBe('updated2');
  });
});