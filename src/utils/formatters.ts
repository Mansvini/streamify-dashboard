/**
 * Formats a number into a human-readable string with K (thousands) or M (millions) suffix
 * Numbers are rounded to one decimal place
 * 
 * @param num - The number to format
 * @returns Formatted string (e.g., "1.2M" or "980.0K")
 * 
 * @example
 * formatStreams(1500000) // returns "1.5M"
 * formatStreams(980000)  // returns "980.0K"
 * formatStreams(500)     // returns "500"
 */
export const formatStreams = (num: number): string => {
  // Handle millions
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  // Handle thousands
  else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  // Return as is for small numbers
  return num.toString();
};