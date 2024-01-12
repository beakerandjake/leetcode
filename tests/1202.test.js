import { smallestStringWithSwaps } from '../src/1202.js';
import { arrToStr } from './util.js';

describe('1202. Smallest String With Swaps', () => {
  [
    // replace with real test data
    [
      'dcab',
      [
        [0, 3],
        [1, 2],
      ],
      'bacd',
    ],
    [
      'dcab',
      [
        [0, 3],
        [1, 2],
        [0, 2],
      ],
      'abcd',
    ],
    [
      'cba',
      [
        [0, 1],
        [1, 2],
      ],
      'abc',
    ],
  ].forEach(([s, pairs, expected]) => {
    test(`${s},${arrToStr(pairs)} -> ${expected}`, () => {
      const result = smallestStringWithSwaps(s, pairs);
      expect(result).toBe(expected);
    });
  });
});
