import { urlify } from '../../../src/interview/ch01/urlify.js';

const arr = (str) => [...str];

describe('urlify()', () => {
  [
    // [arr('   '), 1, arr('%20')],
    ['Mr John Smith    ', 13, 'Mr%20John%20Smith'],
    // [arr('Cool John Smith    '), 15, arr('Cool%20John%20Smith')],
    // [arr('CoolJohnSmith'), 15, arr('CoolJohnSmith')],
  ].forEach(([str, length, expected]) => {
    test(`urlify('${str}', ${length}) = '${expected}'`, () => {
      const result = urlify(arr(str), length);
      expect(result).toEqual(arr(expected));
    });
  });
});
