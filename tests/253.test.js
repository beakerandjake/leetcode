import { minMeetingRooms } from '../src/253.js';
import { arrToStr } from './util.js';

describe('253. Meeting Rooms II', () => {
  [
    [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      2,
    ],
    [
      [
        [7, 10],
        [2, 4],
      ],
      1,
    ],
    [
      [
        [2, 15],
        [36, 45],
        [9, 29],
        [16, 23],
        [4, 9],
      ],
      2,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = minMeetingRooms(input);
      expect(result).toBe(expected);
    });
  });
});
