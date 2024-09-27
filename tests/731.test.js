import { MyCalendarTwo } from '../src/731.js';
import { generateTestName } from './util.js';

describe('731. My Calendar II', () => {
  [
    [
      [
        [10, 20],
        [50, 60],
        [10, 40],
        [5, 15],
        [5, 10],
        [25, 55],
      ],
      [true, true, true, false, true, true],
    ],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(MyCalendarTwo, ...args), () => {
      const calendar = new MyCalendarTwo();
      input.forEach(([s, e], i) => {
        const result = calendar.book(s, e);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
