import { MyCalendar } from '../src/729.js';
import { generateTestName } from './util.js';

describe('729. My Calendar I', () => {
  [
    [
      [
        [10, 20],
        [15, 25],
        [20, 30],
      ],
      [true, false, true],
    ],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(MyCalendar, ...args), () => {
      const calendar = new MyCalendar();
      input.forEach(([from, to], i) => {
        const result = calendar.book(from, to);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
