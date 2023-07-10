import { isUnique } from '../../../src/interview/ch01/isUnique.js';

describe('isUnique()', () => {
  test.each([
    ['a', true],
    ['aa', false],
    ['ab', true],
    ['abc', true],
    ['abb', false],
    ['Wjk0eLRs8R', false],
    ['2AwlJjazxf', true],
    ['5bBYStnGRJ', true],
    ['1LoiK8GH9B', true],
    ['5ENpp5BXNT', false],
    ['MHGbdSCszV', true],
    ['7JkqV3V7NW', false],
  ])('%s isUnique return %s', (str, expected) => {
    const result = isUnique(str);
    expect(result).toBe(expected);
  });
});
