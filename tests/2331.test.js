import { evaluateTree } from '../src/2331.js';
import { arrToBst, arrToStr } from './util.js';

describe('2331. Evaluate Boolean Binary Tree', () => {
  [
    [[2, 1, 3, null, null, 0, 1], true],
    [[0], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = evaluateTree(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
