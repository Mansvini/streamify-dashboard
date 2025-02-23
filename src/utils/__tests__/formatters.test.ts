import { formatStreams } from '../formatters';

describe('Formatter Utils', () => {
  describe('formatStreams', () => {
    it('formats millions correctly', () => {
      expect(formatStreams(1500000)).toBe('1.5M');
      expect(formatStreams(2000000)).toBe('2.0M');
    });

    it('formats thousands correctly', () => {
      expect(formatStreams(1500)).toBe('1.5K');
      expect(formatStreams(2000)).toBe('2.0K');
    });

    it('handles numbers less than 1000', () => {
      expect(formatStreams(500)).toBe('500');
      expect(formatStreams(0)).toBe('0');
    });

    it('handles decimal places correctly', () => {
      expect(formatStreams(1234567)).toBe('1.2M');
      expect(formatStreams(1234)).toBe('1.2K');
    });
  });
});