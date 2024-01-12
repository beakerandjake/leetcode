import { canAttendMeetings } from '../src/leetcode/252.js';
import { arrToStr } from './util.js';

describe('252. Meeting Rooms', () => {
  [
    [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      false,
    ],
    [
      [
        [7, 10],
        [2, 4],
      ],
      true,
    ],
    [
      [
        [5, 8],
        [6, 8],
      ],
      false,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = canAttendMeetings(input);
      expect(result).toBe(expected);
    });
  });
});
