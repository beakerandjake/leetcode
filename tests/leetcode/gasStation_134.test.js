import { canCompleteCircuit } from '../../src/leetcode/gasStation_134.js';
import { arrToStr } from '../util.js';

describe('134. Gas Station', () => {
  [
    [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2], 3],
    [[2, 3, 4], [3, 4, 3], -1],
  ].forEach(([gas, cost, expected]) => {
    test(`gas:${arrToStr(gas)},cost:${arrToStr(cost)}= ${expected}`, () => {
      const result = canCompleteCircuit(gas, cost);
      expect(result).toBe(expected);
    });
  });
});
