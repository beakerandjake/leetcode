import { minGroupsForValidAssignment } from '../src/2910.js';
import { arrToStr } from './util.js';

describe('2910. Minimum Number of Groups to Create a Valid Assignment', () => {
  [
    [[3, 2, 3, 2, 3], 2],
    [[10, 10, 10, 3, 1, 1], 4],
    [[3, 3, 3, 3, 3, 1, 1], 3],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = minGroupsForValidAssignment(input);
      expect(result).toBe(expected);
    });
  });
});
