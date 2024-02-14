import { firstPalindrome } from '../src/2108.js';
import { arrToStr } from './util.js';

describe('2108. Find First Palindromic String in the Array', () => {
  [
    [['abc', 'car', 'ada', 'racecar', 'cool'], 'ada'],
    [['notapalindrome', 'racecar'], 'racecar'],
    [['def', 'ghi'], ''],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = firstPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
