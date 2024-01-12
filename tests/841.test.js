import { canVisitAllRooms } from '../src/841.js';
import { arrToStr } from './util.js';

describe('841. Keys and Rooms', () => {
  [
    // replace with real test data
    [[[1], [2], [3], []], true],
    [[[1, 3], [3, 0, 1], [2], [0]], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = canVisitAllRooms(input);
      expect(result).toBe(expected);
    });
  });
});
