import { reverseString } from '../src/344.js';
import { arrToStr } from './util.js';

describe('344. Reverse String', () => {
  [
    [
      ['h', 'e', 'l', 'l', 'o'],
      ['o', 'l', 'l', 'e', 'h'],
    ],
    [
      ['H', 'a', 'n', 'n', 'a', 'h'],
      ['h', 'a', 'n', 'n', 'a', 'H'],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      reverseString(input);
      expect(input).toEqual(expected);
    });
  });
});
