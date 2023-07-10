import { checkPermutation } from '../../../src/interview/ch01/checkPermutation.js';

describe('checkPermutation()', () => {
  test.each([
    ['a', 'a', false],
    ['ab', 'ba', true],
    ['dog', 'god', true],
    ['Wjk0eLRs8R', 'eRLWjks08R', true],
    ['2AwflJjazxf', 'Axa2Jzffwlj', true],
    ['5bBYStnnGRJ', 'GnbR5tBnJYS', true],
    ['1Loi1K8GH19B', 'ioB1KG1981HL', true],
    ['5ENpp5BXNT', 'TpNBp5EX5N', true],
    ['MHGbdSCszV', 'GHbzSCsMVd', true],
    ['7JkqV3V7NW', 'kW7J7VqNV3', true],
    ['7JkqV3V7NW', 'kW7J7VqNV6', false],
  ])('isPermutation(%s, %s) return %s', (lhs, rhs, expected) => {
    const result = checkPermutation(lhs, rhs);
    expect(result).toBe(expected);
  });
});
