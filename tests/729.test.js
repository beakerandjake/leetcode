import { MyCalendar } from '../src/729.js';
import { generateTestName } from './util.js';

describe('729. My Calendar I', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(MyCalendar, ...args), () => {
      const result = MyCalendar();
      expect(result).toBe(expected);
    });
  });
});
