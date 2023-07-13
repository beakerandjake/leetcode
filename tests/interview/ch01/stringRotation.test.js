import { stringRotation } from '../../../src/interview/ch01/stringRotation.js';

describe('stringRotation()', () => {
  test.each([
    [null, '', false],
    ['', '', false],
    ['waterbottle', 'waterbottle', true],
    ['waterbottle', 'ewaterbottl', true],
    ['waterbottle', 'lewaterbott', true],
    ['waterbottle', 'tlewaterbot', true],
    ['waterbottle', 'ttlewaterbo', true],
    ['waterbottle', 'ottlewaterb', true],
    ['waterbottle', 'bottlewater', true],
    ['waterbottle', 'rbottlewate', true],
    ['waterbottle', 'erbottlewat', true],
    ['waterbottle', 'terbottlewa', true],
    ['waterbottle', 'aterbottlew', true],
  ])('stringRotation(%s, %s) = %s', (s1, s2, expected) => {
    const result = stringRotation(s1, s2);
    expect(result).toBe(expected);
  });
});
