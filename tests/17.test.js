import { letterCombinations } from '../src/17.js';
import { arrToStr } from './util.js';

describe('17. Letter Combinations of a Phone Number', () => {
  [
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
    ['', []],
    ['2', ['a', 'b', 'c']],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = letterCombinations(input);
      expect(result).toEqual(expected);
    });
  });
});
