import { canCompleteCircuit } from '../src/134.js';
import { arrToStr } from './util.js';

describe('134. Gas Station', () => {
  [
    [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2], 3],
    [[2, 3, 4], [3, 4, 3], -1],
    [[3, 3, 4], [3, 4, 4], -1],
    [[2, 0, 1, 2, 3, 4, 0], [0, 1, 0, 0, 0, 0, 11], 0],
    [[5, 1, 2, 3, 4], [4, 4, 1, 5, 1], 4],
  ].forEach(([gas, cost, expected]) => {
    test(`gas:${arrToStr(gas)}, cost:${arrToStr(cost)} = ${expected}`, () => {
      const result = canCompleteCircuit(gas, cost);
      expect(result).toBe(expected);
    });
  });
});
