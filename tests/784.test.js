import { letterCasePermutation } from '../src/leetcode/784.js';
import { arrToStr } from './util.js';

describe('784. Letter Case Permutation', () => {
  [['a1b2', ['a1b2', 'a1B2', 'A1b2', 'A1B2'], ['3z4', ['3z4', '3Z4']]]].forEach(
    ([input, expected]) => {
      test(`${input} -> ${arrToStr(expected)}`, () => {
        const result = letterCasePermutation(input);
        expect(result).toEqual(expected);
      });
    }
  );
});
