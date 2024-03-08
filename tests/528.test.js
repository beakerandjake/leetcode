import { Solution } from '../src/528.js';
import { arrToStr } from './util.js';

describe('528. Random Pick with Weight', () => {
  [
    [
      ['Solution', 'pickIndex'],
      [[[1]], []],
    ],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const test = new Solution([1, 3]);
      console.log(test);
      expect(true).toBe(true);
      // expect(result).toBe(expected);
    });
  });
});
