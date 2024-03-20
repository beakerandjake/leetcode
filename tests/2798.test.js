import { numberOfEmployeesWhoMetTarget } from '../src/2798.js';
import { arrToStr } from './util.js';

describe('2798. Number of Employees Who Met the Target', () => {
  [
    [[0, 1, 2, 3, 4], 2, 3],
    [[5, 1, 4, 2, 2], 6, 0],
  ].forEach(([hours, target, expected]) => {
    test(`${arrToStr(hours)},${target} -> ${expected}`, () => {
      const result = numberOfEmployeesWhoMetTarget(hours, target);
      expect(result).toBe(expected);
    });
  });
});
