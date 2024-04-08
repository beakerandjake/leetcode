import { calculate } from '../src/227.js';
import { arrToStr } from './util.js';

describe('227. Basic Calculator II', () => {
  [
    ['3+2*2', 7],
    [' 3/2 ', 1],
    [' 3+5 / 2 ', 5],
    ['1-1+1', 1],
    ['0-2147483647', -2147483647],
    ['1-1-1', -1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = calculate(input);
      expect(result).toBe(expected);
    });
  });
});
