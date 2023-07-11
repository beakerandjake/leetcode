import { stringCompression } from '../../../src/interview/ch01/stringCompression.js';

describe('oneAway()', () => {
  test.each([
    [null, null],
    ['a', 'a'],
    ['aa', 'aa'],
    ['aaa', 'a3'],
    ['aaaaa', 'a5'],
    ['aaabb', 'a3b2'],
    ['aabb', 'aabb'],
    ['aabcccccaaa', 'a2b1c5a3'],
  ])('stringCompression(%s) = %s', (str, expected) => {
    const result = stringCompression(str);
    expect(result).toBe(expected);
  });
});
