import { compress } from '../../src/leetcode/stringCompression_443.js';
import { arrToStr } from '../util.js';

describe('443. String Compression', () => {
  [
    [
      ['a', 'a', 'b', 'b', 'c', 'c', 'c'],
      ['a', '2', 'b', '2', 'c', '3'],
    ],
    [['a'], ['a']],
    [
      ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      ['a', 'b', '1', '2'],
    ],
    [
      ['a', 'b'],
      ['a', 'b'],
    ],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${arrToStr(expected)}`, () => {
      const result = compress(array);
      // expect(result).toEqual(expected.length);
      expect(array.slice(0, expected.length)).toEqual(expected);
    });
  });
});
