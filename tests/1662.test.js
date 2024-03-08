import { arrayStringsAreEqual } from '../src/1662.js';
import { arrToStr } from './util.js';

describe('1662. Check If Two String Arrays are Equivalent', () => {
  [
    [['ab', 'c'], ['a', 'bc'], true],
    [['a', 'cb'], ['ab', 'c'], false],
    [['abc', 'd', 'defg'], ['abcddefg'], true],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = arrayStringsAreEqual(a, b);
      expect(result).toBe(expected);
    });
  });
});
