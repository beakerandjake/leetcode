import { groupAnagrams } from '../../src/leetcode/49.js';
import { arrToStr } from '../util.js';

describe('49. Group Anagrams', () => {
  [
    [
      ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
    ],
    [[''], [['']]],
    [['a'], [['a']]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = groupAnagrams(input);
      expect(result).toEqual(expected);
    });
  });
});
