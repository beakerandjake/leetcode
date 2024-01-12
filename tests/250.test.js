import { countUnivalSubtrees } from '../src/250.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('250. Count Univalue Subtrees', () => {
  [
    [[5, 1, 5, 5, 5, null, 5], 4],
    [[], 0],
    [[5, 5, 5, 5, 5, null, 5], 6],
    [[1, 1, 1, 5, 5, null, 5], 3],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = countUnivalSubtrees(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
