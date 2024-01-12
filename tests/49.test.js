import { groupAnagrams } from '../src/49.js';
import { arrToStr } from './util.js';

describe('49. Group Anagrams', () => {
  [
    [
      ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
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
