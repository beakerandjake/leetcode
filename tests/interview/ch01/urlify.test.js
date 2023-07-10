import { urlify } from '../../../src/interview/ch01/urlify.js';

const arr = (str) => [...str];

describe('urlify()', () => {
  [
    ['   ', 1, '%20'],
    ['Mr John Smith    ', 13, 'Mr%20John%20Smith'],
    ['Cool John Smith    ', 15, 'Cool%20John%20Smith'],
    ['CoolJohnSmith', 13, 'CoolJohnSmith'],
  ].forEach(([str, length, expected]) => {
    test(`urlify('${str}', ${length}) = '${expected}'`, () => {
      const result = urlify(arr(str), length);
      expect(result).toEqual(arr(expected));
    });
  });
});
