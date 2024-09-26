import { MyCalendar } from '../src/729.js';
import { generateTestName } from './util.js';

describe('729. My Calendar I', () => {
  [
    // [
    //   [
    //     [10, 20],
    //     [15, 25],
    //     [20, 30],
    //   ],
    //   [true, false, true],
    // ],
    [
      [
        [47, 50],
        [33, 41],
        [39, 45],
        [33, 42],
        [25, 32],
        [26, 35],
        [19, 25],
        [3, 8],
        [8, 13],
        [18, 27],
      ],
      [true, true, false, false, true, false, true, true, true, false],
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
