import { urlify } from '../../../src/interview/ch01/urlify.js';

describe('urlify()', () => {
  test.each([
    ['Mr John Smith    ', 13, 'Mr%20John%20Smith'],
    ['Cool John Smith    ', 15, 'Cool%20John%20Smith'],
  ])('urlify(%s, %s) return %s', (str, length, expected) => {
    const result = urlify(str, length);
    expect(result).toBe(expected);
  });
});
