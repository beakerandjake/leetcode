import { numberToWords } from '../src/273.js';
import { generateTestName } from './util.js';

describe('273. Integer to English Words', () => {
  [
    [123, 'One Hundred Twenty Three'],
    [12345, 'Twelve Thousand Three Hundred Forty Five'],
    [1234567, 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'],
    [0, 'Zero'],
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five'],
    [6, 'Six'],
    [7, 'Seven'],
    [8, 'Eight'],
    [9, 'Nine'],
    [10, 'Ten'],
    [11, 'Eleven'],
    [12, 'Twelve'],
    [13, 'Thirteen'],
    [14, 'Fourteen'],
    [15, 'Fifteen'],
    [16, 'Sixteen'],
    [17, 'Seventeen'],
    [18, 'Eighteen'],
    [19, 'Nineteen'],
    [20, 'Twenty'],
    [30, 'Thirty'],
    [40, 'Forty'],
    [50, 'Fifty'],
    [60, 'Sixty'],
    [70, 'Seventy'],
    [80, 'Eighty'],
    [90, 'Ninety'],
    [100, 'One Hundred'],
    [500, 'Five Hundred'],
    [123, 'One Hundred Twenty Three'],
    [119, 'One Hundred Nineteen'],
    [577, 'Five Hundred Seventy Seven'],
    [1234, 'One Thousand Two Hundred Thirty Four'],
    [1000, 'One Thousand'],
  ].forEach((args) => {
    const [num, expected] = args;
    test(generateTestName(numberToWords, ...args), () => {
      const result = numberToWords(num);
      expect(result).toBe(expected);
    });
  });
});
